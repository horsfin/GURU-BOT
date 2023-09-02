
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Отметки нет\n\n📌 Пример : ${usedPrefix + command} @пользователь`
        if (!(who in global.db.data.users)) throw `✳️ Данного пользователя нет в базе`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *ВАРН ПОЛЬЗОВАТЕЛЯ* ⚠️

▢ *Админ:* ${name}
▢ *Пользователь:* @${who.split`@`[0]}
▢ *Варн:* ${warn + 1}/${war}
▢ *Причина:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *осторожно* ⚠️
вы получили предупреждение от админа

▢ *Варн:* ${warn + 1}/${war} 
Если вы получите *${war}* варнов вы будете удалены из группы`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ Пользователь превысил *${war}*варнов, будет удален`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ Вы были удалены из группы *${groupMetadata.subject}* потому что вы были предупреждены *${war}* times`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['варн'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
