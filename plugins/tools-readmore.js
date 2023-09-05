let handler = async (m, { conn }) => { 
   ayg = global.db.data.users[m.sender] 
  
   if(ayg.pasangan == ""){ 
     return conn.reply(m.chat,`У тебя нет пары🍪.`,m) 
   } 
  
   beb = global.db.data.users[global.db.data.users[m.sender].pasangan] 
  
   if (typeof beb == "undefined"){ 
     conn.reply(m.chat,`Успешно разорвал(а) отношения с @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: { 
       mentionedJid: [global.db.data.users[m.sender].pasangan] 
     }}) 
     ayg.pasangan = "" 
   } 
  
   if (m.sender == beb.pasangan){ 
     conn.reply(m.chat,`Успешно разорвал(а) отношения с  @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: { 
       mentionedJid: [global.db.data.users[m.sender].pasangan] 
     }}) 
     ayg.pasangan = "" 
     beb.pasangan = "" 
   }else { 
     conn.reply(m.chat,`У тебя нет пары.`,m) 
   } 
 } 
 handler.help = ['putus'] 
 handler.tags = ['jadian'] 
 handler.command = /^(putus)$/i 
 handler.group = true 
 handler.fail = null 
 module.exports = handler
