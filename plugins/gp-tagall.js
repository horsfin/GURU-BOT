let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`▢ Группа : *${groupMetadata.subject}*\n▢ Участник : *${participants.length}*${text ? `\n▢ Сообщение : ${text}\n` : ''}\n┌───⊷ *Упоминание*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ RIP ┃ ᴮᴼᵀ ✪──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
