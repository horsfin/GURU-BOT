import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')

let str = `
┌───「 *ПРОФИЛЬ* 」
▢ *🔖 ИМЯ:* 
   • ${username} ${registered ? '\n   • ' + name + ' ': ''}
   • @${who.replace(/@.+/, '')}
▢ *📱НОМЕР:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
▢ *🔗ССЫЛКА:* wa.me/${who.split`@`[0]}${registered ? '\n▢ *🎈Age*: ' + age + ' years' : ''}
▢ *⚠️ВАРН:* ${warn}/${maxwarn}
▢ *💎 КРИСТАЛЫ :* ${diamond}
▢ *🆙 УРОВЕНЬ* : ${level}
▢ *⬆️ XP* : Total ${exp} (${user.exp - min} / ${xp})\n${math <= 0 ? `ready for *${usedPrefix}levelup*` : `_*${math}xp*_ не хватает для повышения уровня`}
▢ *🏆РОЛЬ:* ${role}
▢ *📇 РЕГИСТРАЦИЯ :* ${registered ? 'Yes': 'No'}
▢ *⭐ ПРЕМИУМ* : ${prem ? 'Yes' : 'No'}
└──────────────`
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
    m.react(done)

}
handler.help = ['perfil']
handler.tags = ['group']
handler.command = ['профиль', 'perfil'] 

export default handler
