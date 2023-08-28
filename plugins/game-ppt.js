//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `✳️ Выберите камень,ножницы,бумага\n\nПример : *${usedPrefix + command}* бумага\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'камень'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'ножницы'
    } else {
        astro = 'бумага'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`▢ *Ничья*\n\n‣ You : ${text}\n‣ Бот : ${astro}\n\n🎁очки (±)100 XP`)
    } else if (text == 'камень') {
        if (astro == 'ножницы') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Выйгрыш* 🎊\n\n‣ Вы : ${text}\n‣ Бот : ${astro}\n\n🎁 очки *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Проигрыш*\n\n‣ Вы : ${text}\n‣ Бот : ${astro}\n\n очки*-${poin} XP*`)
        }
    } else if (text == 'ножницы') {
        if (astro == 'бумага') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ Выйгрыш* 🎊\n\n‣ Вы : ${text}\n‣ Бот : ${astro}\n\n🎁 Очки *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Проигрыш*\n\n‣ Вы : ${text}\n‣ Бот : ${astro}\n\nОчки *-${poin} XP*`)
        }
    } else if (text == 'бумага') {
        if (astro == 'камень') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Выйгрыш* 🎊\n\n‣ Вы : ${text}\n‣ Бот : ${astro}\n\n🎁 очки *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Проигрыш*\n\n‣ Вы : ${text}\n‣ Бот : ${astro}\n\nочки *-${poin} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt <rock/paper/scissors>']
handler.tags = ['game']
handler.command = ['ppt'] 
handler.register = false

export default handler
