let handler = async (m, { conn, text }) => { 
         if(isNaN(text)) { 
           var number = text.split`@`[1] 
   } else if(!isNaN(text)) { 
           var number = text 
   } 
  
   if(!text && !m.quoted) return conn.reply(m.chat, `Введите номер, пометку или ответ на целевое сообщение.`, m) 
  
   if(isNaN(number)) return conn.reply(m.chat, `Вы ввели неправильный номер!`, m) 
   if(number.length > 15) return conn.reply(m.chat, `Неправильный формат!`, m) 
   try { 
                 if(text) { 
                         var user = number + '@s.whatsapp.net' 
                 } else if(m.quoted.sender) { 
                         var user = m.quoted.sender 
                 } else if(m.mentionedJid) { 
                     var user = number + '@s.whatsapp.net' 
                         }   
                 } catch (e) { 
   } finally { 
     let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {} 
     let participants = m.isGroup ? groupMetadata.participants : [] 
     let users = m.isGroup ? participants.find(u => u.id == user) : {} 
     if(!users) return conn.reply(m.chat, `Цель или номер не найдены, возможно, вышли из этой группы или не являются ее членами.`, m) 
     if(user === m.sender) return conn.reply(m.chat, `Ты не можешь встречаться сам с собой!`, m) 
     if(user === conn.user.jid) return conn.reply(m.chat, `*Ты не можешь встречаться со мной t_t`, m) 
  
     if(global.db.data.users[user].pasangan != m.sender){ 
       conn.reply(m.chat,`Извините @${user.split('@')[0]} я не могу вас взять`,m,{contextInfo: { 
         mentionedJid: [user] 
       }}) 
     }else{ 
       global.db.data.users[user].pasangan = "" 
       conn.reply(m.chat,`Ты только что отказался @${user.split('@')[0]} быть партнером!`,m,{contextInfo: { 
         mentionedJid: [user] 
       }}) 
     } 
         }         
 } 
 handler.help = ['tolak *@tag*'] 
 handler.tags = ['jadian'] 
 handler.command = /^(tolak)$/i 
 handler.mods = false 
 handler.premium = false 
 handler.group = true 
 handler.limit = false 
 handler.fail = null 
 module.exports = handler