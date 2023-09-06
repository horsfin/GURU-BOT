let confirm = {}

async function handler(m, { conn, args }) {
  // Check if the user is already in a gamble.
  if (m.sender in confirm) {
    throw 'Вы уже участвуете в игре.'
  }

  try {
    let user = global.db.data.users[m.sender]
    let count = (args[0] && number(parseInt(args[0])) ? Math.max(parseInt(args[0]), 1) : /all/i.test(args[0]) ? Math.floor(user.exp) : 1) * 1

    // Ограничение максимальной суммы ставки до 10000.
    if (count > 50000) {
      count = 50000
    }

    if (user.exp < count) {
      return m.reply('💹 У вас недостаточно xp.')
    }

    if (!(m.sender in confirm)) {
      confirm[m.sender] = {
        sender: m.sender,
        count,
        timeout: setTimeout(() => (m.reply('Время ожидания ставки истекло.'), delete confirm[m.sender]), 60000)
      }

      let txt = `Вы верены что хотите сделать ставку? Ответьте 'да' или 'нет'. \n\nСумма: ${count} 💹\nУ вас есть 60 секунд на ответ.`
      return conn.sendMessage(m.chat, { text: txt, quoted: m, contextInfo: { mentionedJid: [m.sender] } });
    }
  } catch (e) {
    console.error(e)
    if (m.sender in confirm) {
      let { timeout } = confirm[m.sender]
      clearTimeout(timeout)
      delete confirm[m.sender]
      m.reply('Ставка отменена из-за ошибки.')
    }
  }
}

handler.before = async m => {
  if (!(m.sender in confirm)) return
  if (m.isBaileys) return

  let { timeout, count } = confirm[m.sender]
  let user = global.db.data.users[m.sender]
  let initialMoney = user.exp * 1
  let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : '').toLowerCase()

  try {
    if (/^(✔️|д(а|a))?$/i.test(txt)) {
      let botScore = (Math.ceil(Math.random() * 51)) * 1  // Random score for the bot (1 to 51)
      let playerScore = (Math.floor(Math.random() * 101)) * 1  // Random score for the player (1 to 100)
      let status = 'проиграли'

      if (botScore < playerScore) {
        user.exp += count * 1
        status = 'выйграли'
      } else if (botScore > playerScore) {
        user.exp -= count * 1
      } else {
        status = 'draw'
        user.exp += Math.floor(count / 1.5) * 1
      }

      let result = `
      | *Игрок* | *Очки* |
      *Бот:*      ${botScore}
      *Вы:*    ${playerScore}
      Вы *${status}*. Ваш новый баланс: ${user.money} 💹
          `.trim()

      m.reply(result)
      clearTimeout(timeout)
      delete confirm[m.sender]
      return true
    } else if (/^(✖️|нет)?$/i.test(txt)) {
      clearTimeout(timeout)
      delete confirm[m.sender]
      m.reply('Ставка отменена.')
      return true
    }

  } catch (e) {
    clearTimeout(timeout)
    delete confirm[m.sender]

    // If money was lost due to an error, restore it.
    if (initialMoney > user.exp) user.exp = initialMoney

    m.reply('Ставка отменена из-за ошибка.')
    return true
  } finally {
    clearTimeout(timeout)
    delete confirm[m.sender]
    return true
  }
}

handler.help = ['bet [amount]']
handler.tags = ['rpg']
handler.command = /^(ставка)$/i

export default handler

/**
 * Detect if the input is a number
 * @param {Number} x
 * @returns Boolean
 */
function number(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
