let handler = async (m, { conn }) => { 
   if (global.db.data.users[m.sender].pasangan == "") return conn.reply(m.chat, `Ты никому не предлагал!`, m) 
   if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return conn.reply(m.chat, `Ты встречаешься с @${global.db.data.users[m.sender].pasangan.split('@')[0]}`, m, {contextInfo: { 
     mentionedJid: [global.db.data.users[m.sender].pasangan] 
   }}) 
   conn.reply(m.chat, `Ты был отвержен @${global.db.data.users[m.sender].pasangan.split('@')[0]} потому что он не дал ответа, принятия или отвержения`, m, {contextInfo: { 
     mentionedJid: [global.db.data.users[m.sender].pasangan] 
   }}) 
   global.db.data.users[m.sender].pasangan = "" 
 } 
 handler.help = ['ikhlasin'] 
 handler.tags = ['jadian'] 
 handler.command = /^(ikhlasin|ikhlas)$/i 
 handler.mods = false 
 handler.premium = false 
 handler.group = true 
 handler.fail = null 
 module.exports = handler
