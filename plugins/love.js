const handler = async (m, { conn, command, text }) => { 
   const lovePercentage = Math.floor(Math.random() * 100); 
   const isHighLove = lovePercentage >= 50; 
   const loveMessages = [ 
     "Это горячая и страстная любовь! Иди и скажи прямо сейчас!",
"Кажется, между вами двумя есть искра. Попробуй!",
"Здесь может быть что-то особенное. Дай ему шанс!",
" Хм, любовь витает в воздухе. Может быть, пришло время вместе выпить кофе!",
" Звезды указывают на наличие романтического потенциала. Сделай шаг!",
" Невероятная история любви, возможно, ждет вашего написания.",
" Не стоит недооценивать силу времени и терпения в любви. Могут случиться великие дела.",
" Помните, что любовь-это путешествие, и каждый шаг ценен, независимо от расстояния.",
"Крепкие связи могут перерасти в прекрасные отношения. Продолжайте исследовать!",
"Настоящая любовь часто требует времени и усилий. Не сдавайтесь!", 
   ]; 
   const notSoHighLoveMessages = [ 
     "Иногда дружба - это начало чего-то прекрасного, но она не всегда перерастает в любовь.",
"Любовь-это еще не все, дружба-это тоже здорово! Сохраняйте свою особую дружбу.",
" Помните, что лучшие отношения начинаются с хорошей дружбы. Не стоит недооценивать их связь!",
" Иногда любовь со временем может расти. Продолжайте укреплять свою связь!",
"Жизнь-это сюрприз, кто знает, что ждет в будущем! Не теряйте надежды.",
" Даже если любовь не расцветет так, как вы надеялись, ваша связь по-прежнему ценна.",
"Сердцам может потребоваться время, чтобы синхронизироваться, но это не умаляет того, насколько вы особенные вместе.",
"Несмотря на трудности, связанные с любовью, ваша дружба-это подарок, которого вы заслуживаете праздновать.",
" Время может раскрыть удивительные вещи. Давайте продолжим исследовать вместе!",
"Жизнь полна неожиданных поворотов. Оставайтесь открытыми для возможностей!", 
   ]; 
   const loveDescription = isHighLove ? "у них глубокая связь и любовь" : "у них особая связь, хотя в любви их доля составляет"; 
   const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)]; 
   const loveMessage = isHighLove ? getRandomMessage(loveMessages) : getRandomMessage(notSoHighLoveMessages); 
   const response = 
     `━━━━━━━⬣ *ЛЮБОВЬ* ⬣━━━━━━━\n` + 
     `*❥ Во вселенной любви, ${text} y @${m.sender.split('@')[0]} ${loveDescription} из ${lovePercentage}% из 100%*\n\n` + 
     `*❥ ${loveMessage}*\n` + 
     `━━━━━━━⬣ *ЛЮБОВЬ* ⬣━━━━━━━`     
  
   async function loading() { 
 var hawemod = [ 
 "《 █▒▒▒▒▒▒▒▒▒▒▒》10%", 
 "《 ████▒▒▒▒▒▒▒▒》30%", 
 "《 ███████▒▒▒▒▒》50%", 
 "《 ██████████▒▒》80%", 
 "《 ████████████》100%" 
 ] 
    let { key } = await conn.sendMessage(m.chat, {text: `*💞 Вычисление! 💞*`, mentions: conn.parseMention(response)}, {quoted: m}) 
  for (let i = 0; i < hawemod.length; i++) { 
    await new Promise(resolve => setTimeout(resolve, 1000));  
    await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m});  
   } 
   await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});          
  } 
 loading()     
 }; 
 handler.help = ['love']; 
 handler.tags = ['fun']; 
 handler.command = /^(любовь|amor)$/i; 
 export default handler
