//import db from '../lib/database.js'

import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) throw `✳️ *Введи серийный номер*\nПосмотри свой серийный номер с помощью команды...\n\n*${usedPrefix}nserie*`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '⚠️ *Неправильный серийный номер*'
  user.registered = false
  m.reply(`✅ Регист закончен`)
}
handler.help = ['unreg <Num Serie>'] 
handler.tags = ['rg']

handler.command = ['unreg'] 
handler.register = true

export default handler

