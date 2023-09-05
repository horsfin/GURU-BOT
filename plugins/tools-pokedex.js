let handler = async (m, { conn, usedPrefix, text }) => { 
         if(isNaN(text)) { 
           var number = text.split`@`[1] 
   } else if(!isNaN(text)) { 
           var number = text 
   } 
  
   if(!text && !m.quoted) return conn.reply(m.chat, `Введите целевой номер, тег или ответ на целевое сообщение`, m) 
  
   if(isNaN(number)) return conn.reply(m.chat, `_*Номер неправильный.*_`, m) 
   if(number.length > 15) return conn.reply(m.chat, `*_Формат номера неправильный.*_`, m) 
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
     if(!users) return conn.reply(m.chat, `*_Цель или номер не найдены, возможно, вышли из этой группы или не являются ее членами.*_`, m) 
     if(user === m.sender) return conn.reply(m.chat, `_*Нельзя встречаться с самим собой.*_`, m) 
     if(user === conn.user.jid) return conn.reply(m.chat, `_*Нельзя встречаться со мной. :')*_`, m) 
  
     if (typeof global.db.data.users[user] == "undefined") return m.reply("_*Человека, которого вы отметили, нет в базе данных.*_") 
  
     if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){ 
       conn.reply(m.chat,`Вы встречаетесь @${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\nПожалуйста, сначала расстаньтесь (Пример: .расстаться, чтобы разорвать отношения), чтобы снять @${user.split('@')[0]}\n\nкстати печально!`,m,{contextInfo: { 
         mentionedJid: [user,global.db.data.users[m.sender].pasangan] 
       }}) 
     }else if(global.db.data.users[user].pasangan != ""){ 
       var pacar = global.db.data.users[user].pasangan 
       if (global.db.data.users[pacar].pasangan == user){ 
         if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat,`Ты встречаешься с @${beb.split('@')[0]}`,m,{contextInfo: { 
           mentionedJid: [beb] 
         }}) 
         conn.reply(m.chat,`Извините, @${user.split('@')[0]} уже встречается с @${pacar.split('@')[0]}\nНайдите другого партнера!`,m,{contextInfo: { 
           mentionedJid: [user,pacar] 
         }}) 
       }else{ 
         global.db.data.users[m.sender].pasangan = user 
         conn.reply(m.chat,`Вы только что кинули заявку😘 @${user.split('@')[0]} знакомства\n\nПожалуйста, дождитесь ответа!\n\nПример *${usedPrefix}terima @пользователь* согласиться\n*${usedPrefix}tolak @пользователь отказаться*`,m,{contextInfo: { 
           mentionedJid: [user] 
         }}) 
       } 
     }else if (global.db.data.users[user].pasangan == m.sender){ 
       global.db.data.users[m.sender].pasangan = user 
       conn.reply(m.chat,`Поздравляю, вы официально встречаетесь @${user.split('@')[0]}\n\nПусть жизнь будет долгой и счастливой всегда🥳🥳🥳`,m,{contextInfo: { 
         mentionedJid: [user] 
       }}) 
     }else { 
       global.db.data.users[m.sender].pasangan = user 
       conn.reply(m.chat,`Ты только что пригласил @${user.split('@')[0]} в загс\n\nПожалуйста, дождитесь ответа!\n\nПример *${usedPrefix}terima @пользователь* согласиться\n*${usedPrefix}tolak @пользователь отказаться*`,m,{contextInfo: { 
         mentionedJid: [user] 
       }}) 
     } 
         }         
 } 
 handler.help = ['tembak *@tag*'] 
 handler.tags = ['jadian'] 
 handler.command = /^(tembak)$/i 
 handler.group = true 
 handler.limit = false 
 handler.fail = null 
 module.exports = handler
