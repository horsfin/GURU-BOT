let handler = async (m, { conn, usedPrefix, text }) => { 
   function no(number){ 
     return number.replace(/\s/g,'').replace(/([@+-])/g,'') 
   } 
  
         text = no(text) 
  
   if(isNaN(text)) { 
                 var number = text.split`@`[1] 
         }else if(!isNaN(text)) { 
                 var number = text 
         } 
  
   if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `Извините, вы ввели неправильный номер!`, m) 
  
   if (!text && !m.quoted){ 
     user = m.sender 
     orang = "Kamu" 
   }else if(text) { 
     var user = number + '@s.whatsapp.net' 
     orang = "Orang yang kamu tag" 
   } else if(m.quoted.sender) { 
     var user = m.quoted.sender 
     orang = "Orang yang kamu balas" 
   } else if(m.mentionedJid) { 
     var user = number + '@s.whatsapp.net' 
     orang = "Orang yang kamu tag" 
   } 
  
   if (typeof global.db.data.users[user] == "undefined"){ 
     return m.reply("Target tidak terdaftar di dalam database!") 
   } 
  
   if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){ 
     return m.reply("Target tidak terdaftar di dalam database!") 
   } 
  
   if (global.db.data.users[user].pasangan == "") { 
     conn.reply(m.chat, `${orang} у вас нет напарника, и вы не предлагали никому.n\n\n*Напишите .tembak @пользователь предложите кому-то*`, m) 
   }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){ 
     conn.reply(m.chat, `${orang} ждешь ответа от @${global.db.data.users[user].pasangan.split('@')[0]} потому что это не принято\n\nНапишите *${usedPrefix}ikhlasin* !`, m,{contextInfo: { 
       mentionedJid: [global.db.data.users[user].pasangan] 
     }}) 
   }else { 
     conn.reply(m.chat, `${orang} находится в отношениях с @${global.db.data.users[user].pasangan.split('@')[0]} 💓💓💓`, m,{contextInfo: { 
       mentionedJid: [global.db.data.users[user].pasangan] 
     }}) 
   } 
 } 
 handler.help = ['cekpacar'] 
 handler.tags = ['jadian'] 
 handler.command = /^(cekpacar)$/i 
 handler.fail = null 
 module.exports = handler
