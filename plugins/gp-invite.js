
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Введите номер который вы хотите пригласить\n\n📌 Пример :\n*${usedPrefix + command}*77051808049`
if (text.includes('+')) throw  `Введите номер без *+*`
if (isNaN(text)) throw ' 📌 Вводите только цифры без пробелов'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *ПРИГЛАШЕН В ГРУППУ*\n\nВас пригласили в группу \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ An invite link was sent to the user`) 

}
handler.help = ['invite <917xxx>']
handler.tags = ['group']
handler.command = ['invite','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
