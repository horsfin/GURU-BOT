import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw '⚠️ Можно использовать только в группах'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'участники не определены :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '✳️ Я не пренадлежу данной группе :('
    if (!me.admin) throw '✳️ Я не админ'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['link']
handler.tags = ['group']
handler.command = ['link', 'linkgroup'] 

export default handler
