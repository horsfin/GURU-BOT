
let handler = async (m, { conn, args, groupMetadata}) => {
       let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
       if (!(who in global.db.data.users)) throw `✳️ Данного пользователя нет в моей базe`
       let warn = global.db.data.users[who].warn
       let name = conn.getName(who)
      m.reply(`
 *ВАРНЫ*

▢ *Имя :* ${name} 
▢ *Варны :* ${warn}`)
}

handler.help = ['warns']
handler.tags = ['group']
handler.command = ['варны'] 
handler.group = true

export default handler
