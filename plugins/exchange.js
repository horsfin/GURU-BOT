const xpperexp = 1 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  amount = amount ? /all/i.test(amount) ? Math.floor(global.db.data.users[m.sender].diamond / xpperexp) : parseInt(amount) : args[0] ? parseInt(args[0]) : 1
  amount = Math.max(350, amount)
  if (global.db.data.users[m.sender].exp >= xpperexp * amount) {
    global.db.data.users[m.sender].exp -= xpperexp * amount
    global.db.data.users[m.sender].exp += count
    conn.reply(m.chat, `
┌─「 *Платежная записка* 」
‣ *Покупка* : + ${amount}💎 
‣ *Трата* : -${xpperexp * amount} XP
└──────────────`, m)
  } else conn.reply(m.chat, `❎Извини у тебя недостаточно *КРИСТАЛОВ* чтобы купить*${amount}* кристал💎\n\n Вы можече получить кристал из команд экономии и игр*`, m)
}
handler.help = ['exc', 'excall']
handler.tags = ['econ']
handler.command = ['exc', 'excall'] 

handler.disabled = false

export default handler
