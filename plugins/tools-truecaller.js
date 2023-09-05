
let handler = async (m, { conn, text }) => { 
         if(isNaN(text)) { 
           var number = text.split`@`[1] 
   } else if(!isNaN(text)) { 
           var number = text 
   } 
  
   if(!text && !m.quoted) return conn.reply(m.chat, `Напишите номер, пометку или ответьте на целевое сообщение.`, m) 
  
   if(isNaN(number)) return conn.reply(m.chat, `Данный номер не найден!`, m) 
   if(number.length > 15) return conn.reply(m.chat, `Формат номера неправильный!`, m) 
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
     if(user === m.sender) return conn.reply(m.chat, `Найди себе кого-то,самого себя любить будешь одновременно!`, m) 
     if(user === conn.user.jid) return conn.reply(m.chat, `Нет,так не выйдет t_t`, m) 
  
     if(global.db.data.users[user].pasangan != m.sender){ 
       conn.reply(m.chat,`Еу @${user.split('@')[0]} я не собираюсь`,m,{contextInfo: { 
         mentionedJid: [user] 
       }}) 
     }else{ 
       global.db.data.users[m.sender].pasangan = user 
       conn.reply(m.chat,`Вы помолвлены @${user.split('@')[0]}\n\nжелаю что-бы это длилось вечно @${user.split('@')[0]} 💓 @${m.sender.split('@')[0]} 🥳🥳🥳`,m,{contextInfo: { 
         mentionedJid: [m.sender,user] 
       }}) 
     } 
         }         
 } 
 handler.help = ['terima *@tag*'] 
 handler.tags = ['jadian'] 
 handler.command = /^(terima)$/i 
 handler.group = true 
 handler.limit = false 
 handler.fail = null 
 module.exports = handler
