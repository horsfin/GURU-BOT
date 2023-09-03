//import db from '../lib/database.js'

import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) throw `✳️ *Введи серийный номер*\nПосмотри свой серийный номер с помощью команды...\n\n*${usedPrefix}мойсн*`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '⚠️ *Неправильный серийный номер*'
  user.registered = false
  m.reply(`✅ Регистрация удалена`)
}
handler.help = ['unreg <Num Serie>'] 
handler.tags = ['rg']

handler.command = ['разрег'] 
handler.register = true

export default handler

