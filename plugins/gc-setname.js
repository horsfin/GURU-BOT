import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*Введите имя для замены*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*Имя не может содержать больше 25 символов*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(сменитьимя)$/i
handler.group = true
handler.admin = true
export default handler
