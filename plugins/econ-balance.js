
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ Пользователь не найден`
    conn.reply(m.chat, `
┌───⊷ *Баланс* ⊶
▢ *📌номер* : _@${who.split('@')[0]}_
▢ *💎кристалы* : _${user.diamond}_
▢ *💎золото* : _${user.gold}_
▢ *💎камень* : _${user.rock}_
▢ *💎порода* : _${user.emerald}_
▢ *💎ранг* : _${user.role}_
▢ *💎здоровье* : _${user.health}_
▢ *💎дерево* : _${user.wood}_
▢ *💎зелье* : _${user.potion}_
▢ *💎железо* : _${user.iron}_
▢ *💎деньги* : _${user.money}_
▢ *⬆️XP* : _итого ${user.exp}_
└──────────────

*Записка :* 
Вы можете купить 💎 бриллианты , используя команды*
❏ *${usedPrefix}todiamond* <кол-во>
❏ *${usedPrefix}todiamondall*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['балик', 'diamantes', 'diamond', 'баланс'] 

export default handler
