//import db from '../lib/database.js'
const rewards = {
  exp: 20000,
  money: 4999,
  potion: 10,
  trash: 101,
  string: 25,
  rock: 30,
  iron: 25,
  diamond: 10,
  emerald: 4,
}
const cooldown = 86400000
let handler = async (m,{ conn}, usedPrefix ) => {
  let user = global.db.data.users[m.sender]
  if (user.health < 80) return m.reply(`
Требуется 80 сердец для добычи!
Пожалуйста купите сердца *.buy potion <кол-во>* ,
И напишите *.heal <quantity>* чтобы использовать зелье
`.trim())
  //if (user.pickaxe == 0) return m.reply('for mining u need a picaxe 🗿')
  if (new Date - user.lastclaim < cooldown) throw `Ты начал искать! Ждать *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${reward}\n`
  }
  //conn.sendButton(m.chat,'*––––––『 MINE 』––––––*', text.trim(), null, [['Adventure', '.adventure'], ['Weekly', '.weekly']],m)
  m.reply(`
  🎁 *Вы продолжили заниматься добычей ископаемых*
  
  ▢ *И добыли:*
   ${text}`)
  user.lastclaim = new Date * 1
}
handler.help = ['mine', 'mining']
handler.tags = ['xp']
handler.command = /^(mine|mining)$/i

handler.cooldown = cooldown

export default handler



function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : часов
  minutes = (minutes < 10) ? "0" + minutes : минут
  seconds = (seconds < 10) ? "0" + seconds : секунд

  return hours + " Horas " + minutes + " Minutos"
}
