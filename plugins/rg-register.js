//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Вы уже зарегестрированы\n\nВы хотите перегестрироваться?\n\n 📌 Используй эту команду что-бы удалить вашу регестрацию \n*${usedPrefix}разрег* <серийный номер>`
  if (!Reg.test(text)) throw `⚠️ Формат не коректен\n\n ✳️ Используй эту команду: *${usedPrefix + command} имя.возраст*\n📌Пример : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ Имя не может быть пустым'
  if (!age) throw '✳️ Возраст не может быть пустым'
  if (name.length >= 30) throw '✳️Имя слишком длинное' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Ничего себе дед хочет поиграть с ботом'
  if (age < 5) throw '🚼 ты ещё мал что-бы со мной общаться'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *ЗАРЕГЕСТРИРОВАН* 」─
▢ *ИМЯ:* ${name}
▢ *ВОЗРАСТ* : ${age} years
▢ *СЕРИЙНЫЙ НОМЕР* :${sn}
└──────────────

 *${usedPrefix}help* для просмотра меню
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'рег', 'register', 'registrar'] 

export default handler

