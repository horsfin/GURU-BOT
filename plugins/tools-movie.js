//import { areJidsSameUser } from '@adiwajshing/baileys' 
 let { areJidsSameUser } = (await import(global.baileys)).default 
 let toM = a => '@' + a.split('@')[0] 
 let handler = async (m, { conn, usedPrefix, command, text, participants, groupMetadata}) => { 
 let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender 
 let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" } 
 let name = await conn.getName(m.sender) 
 let toUser = `${m.sender.split("@")[0]}` 
 let aa = toUser + '@s.whatsapp.net' 
 if(!text) { 
 let ps = groupMetadata.participants.map(v => v.id) 
 let a = ps.getRandom() 
 let b 
 do b = ps.getRandom() 
 while (b === a) 
 
 if (command == 'futurarelacion') {     
 let caption = `💗 БУДУЩАЯ ПАРА 💗\n${toM(a)} 💞 ${toM(b)}\n\n💌 Послание любви\n*_${await ktnmbk.getRandom()}_*` 
 await conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) }) 
 //await conn.sendButton(m.chat, caption, `*_Если вы хотите завести пару,то отправьте команду ${usedPrefix}пара в ответ на сообщение вашего партнера._*\n\n` + wm, null, [['🤭 Что-бы заявили о себе', `amor`],['🧐 Другая пара', `${usedPrefix}futurarelacion`],['😆 Это случайная пара', `😂`]], m, { mentions: conn.parseMention(caption) }) 
 }} 
 
 if(isNaN(text)) { 
 var number = text.split`@`[1] 
 } else if(!isNaN(text)) { 
 var number = text 
 } 
  
 if(!text && !m.quoted) return await conn.reply(m.chat, `${mg}Тегните или ответьте на сообщение вашего партнера\n\nСеріктесіңіздің хабарламасын тегтеңіз немесе оған жауап беріңіз`, fkontak,  m) 
 //await conn.sendButton(m.chat, `${mg}Тегните или ответьте на сообщение вашего партнера\n\nСеріктесіңіздің хабарламасын тегтеңіз немесе оған жауап беріңіз`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m) 
  
 try { 
 if(text) { 
 var user = number + '@s.whatsapp.net' 
 } else if(m.quoted.sender) { 
 var user = conn.getName(m.quoted.sender) 
 } else if(m.mentionedJid) { 
 var user = number + '@s.whatsapp.net' 
 }   
 } catch (e) { 
 } finally { 
 let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {} 
  
 if(!users) return await conn.reply(m.chat, `${fg}Данного человека нет в группе\n\nБұл адам топта жоқ`, fkontak,  m) 
 //await conn.sendButton(m.chat, `${fg}Данного человека нет в группе\n\nБұл адам топта жоқ`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m) 
  
 if(user === m.sender) return await conn.reply(m.chat, `${fg}Вы не можете быть партнёром себе\n\nВы не можете быть партнёром себе`, fkontak,  m) 
 //await conn.sendButton(m.chat, `${fg}Вы не можете быть партнёром себе\n\nВы не можете быть партнёром себе`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m) 
  
 if(user === conn.user.jid) return await conn.reply(m.chat, `${fg}Вы не можете быть со мной 😹\n\nСіз менімен бірге бола алмайсыз`, fkontak,  m) 
 //await conn.sendButton(m.chat, `${fg}Вы не можете быть со мной 😹\n\nСіз менімен бірге бола алмайсыз`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m) 
  
 if (typeof global.db.data.users[user] == "undefined") return await conn.reply(m.chat, `${fg}Данной персоны нет в моей базе\n\nБұл адам менің базамда жоқ`, fkontak,  m) 
 //await conn.sendButton(m.chat, `${fg}Данной персоны нет в моей базе\n\nБұл адам менің базамда жоқ`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m) 
  
 let pacar = global.db.data.users[user].pasangan 
 let spac = global.db.data.users[m.sender].pasangan 
 let yo = conn.getName(m.sender) 
 let tu = conn.getName(who) 
  
 if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){  
 await conn.reply(m.chat, `Ты неверен(на) 🙀😠 Ты уже в отношениях с *${await conn.getName(spac)}*\n\nМожет ты не будешь торопится с кончиной отношений?🤔\nЕсли всё-таки хотите введите *${usedPrefix}terminar @тег* таким образом вы сможете иметь отношения c *${await conn.getName(user)}*`,  m, { contextInfo: { mentionedJid: [m.sender, who, user, global.db.data.users[m.sender].pasangan]}})  
 //await conn.sendButton(m.chat, `𝙀𝙍𝙀𝙎 𝙄𝙉𝙁𝙄𝙀𝙇 🙀😠 𝙋𝙀𝙍𝙊 𝙎𝙄 𝙔𝘼 𝙀𝙎𝙏𝘼𝙎 𝙀𝙉 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉 𝘾𝙊𝙉 *${await conn.getName(spac)}*\n\n𝘼𝘾𝘼𝙎𝙊 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙍 𝙇𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉? 🤔\n𝘿𝙀 𝙎𝙀𝙍 𝘼𝙎𝙄, 𝙀𝙎𝘾𝙍𝙄𝘽𝘼 *${usedPrefix}terminar @tag* 𝙋𝘼𝙍𝘼 𝙌𝙐𝙀 𝙋𝙐𝙀𝘿𝘼 𝙏𝙀𝙉𝙀𝙍 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉 𝘾𝙊𝙉 *${await conn.getName(user)}*`, wm, null, [['❤️ ПОДДЕРЖИВАТЬ ОТНОШЕНИЯ', '.mipareja'],['💔 ЗАКОНЧИТЬ ОТНОШЕНИЯ', '/terminar']], m, { contextInfo: { mentionedJid: [m.sender, who, user, global.db.data.users[m.sender].pasangan]}})
 }else if(global.db.data.users[user].pasangan != ""){ 
  
 if (pacar){ 
 if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `ya estas saliendo ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}}) 
 conn.reply(m.chat, `Ты не можешь потому что *${await conn.getName(user)}* и ${await conn.getName(pacar)} в отношениях\nНайдите человека который хочет быть вашей половинкой`, m , { contextInfo: { mentionedJid: [m.sender, global.db.data.users[m.sender].pasangan]}}) 
 }else{ 

 global.db.data.users[m.sender].pasangan = user 
 conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\nТы только что пригласил @${user.split('@')[0]}\n\nДождись ответа!`, m , { contextInfo: { mentionedJid: [user]}}) 
 }         
  
 }else if (global.db.data.users[user].pasangan == m.sender){ 
 global.db.data.users[m.sender].pasangan = user 
 conn.reply(m.chat, `Поздравляю, вы официально пара @${user.split('@')[0]}\n\nПусть это длится вечно 🥳🥳🥳`, m , { contextInfo: { mentionedJid: [user]}}) 
 }else { 
  
 global.db.data.users[m.sender].pasangan = user 
 await conn.reply(m.chat, `*_${await ktnmbk.getRandom()}_*\n\n*@${toUser}* Заявление в брак!!! 😳\nпожалуйста *@${who.split`@`[0]}* Ответь на заявление 🙀\n\n❤️ *_Если вы хотите отношений напишите:_*\n*➠ ${usedPrefix}aceptar @${toUser}*\n\n💔 *_Если хотите расхода :_*\n*➠ ${usedPrefix}rechazar @${toUser}*\n\n${wm}`, m, { contextInfo: { mentionedJid: [ who, m.sender, user ]}}) 
 //await conn.sendButton(m.chat, `*_${await ktnmbk.getRandom()}_*\n\n*${await conn.getName(m.sender)}* 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝙉𝘿𝙊!!! 😳\n𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 *${await conn.getName(who)}* 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼 𝙇𝘼 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝘾𝙄𝙊𝙉 🙀`, `❤️ *_Si quieres una Relacion escriba:_*\n*➠ ${usedPrefix}aceptar @${conn.getName(m.sender)}*\n\n💔 *_De no querer una Relacion escriba:_*\n*➠ ${usedPrefix}rechazar @${conn.getName(m.sender)}*\n\n` + wm, null, [['🥳 ДАВАЙ ПРИМИ', `Amor`]], m, { contextInfo: { mentionedJid: [ who, m.sender, user ]}}) 
 }}} 
  
handler.help = handler.command = /^(futurarelacion|pareja|elegirpareja|serpareja|sersupareja|couple|elegirpareja)$/i 
 handler.group = true 
  
 export default handler 
  
 let ktnmbk = [ 
 "Бывают моменты, когда мне не нравится быть одному. Но я также не хочу, чтобы все шли со мной, я просто хочу тебя",
"Я только что понял, что ты был богат все это время! Я ем то, что искал все это время. Ты хочешь быть моей девушкой?",
"Я благодарю свои глаза, потому что эти глаза привели меня к тому, чтобы найти тебя",
"Могу я отправить тебе резюме или нет? Потому что я хочу баллотироваться в подруги",
"Я не самый лучший, но я уверен, что если я смогу сделать тебя счастливой с любовью и заботой, ты меня любишь, правда?",
"Я просто обычный человек, у которого много недостатков, и я, возможно, не заслуживаю твоей любви, но если ты готов принять меня таким, какой я есть". возлюбленный, я обещаю сделать то, что будет лучше для тебя. Примешь ли ты мою любовь?",
"Я хочу кое-что сказать. Он мне давно нравится, но я не решаюсь сказать об этом. Итак, я решил просто ВА. Я хочу, чтобы ты была моей девушкой",
"Я хочу сказать то, что больше не могу сдерживать. Я люблю тебя, ты будешь моей девушкой?",
"Я хочу быть человеком, который может заставлять тебя смеяться и улыбаться каждый день. Ты будешь моей девушкой?",
 "Я хочу серьезно поговорить с тобой. Все это время я питал к тебе чувства и всегда заботился о тебе. Если ты не возражаешь, хочешь ли ты стать моей девушкой?",
"Я смотрю на тебя и вижу перед глазами остаток своей жизни.",
"У меня не все, но, по крайней мере, у меня достаточно любви к тебе",
"Ты мне нравился с самого начала. Ты такой простой, но простота в моих глазах очень особенная. Будет идеально, если ты будешь особенным в моем сердце",
"Я действительно влюблен в тебя. Ты будешь моей?",
"Я не говорил тебе "нет", потому что у меня нет места или кредита, но я наслаждаюсь этим желанием к тебе. Возможно, вы удивитесь, услышав это. Ты всегда мне нравился",
"Я не хочу, чтобы ты был солнцем моей жизни, потому что, хотя и жарко, ты далеко. Я также не хочу, чтобы ты был воздухом, потому что, хотя ты мне нужен и ты очень близок, но каждый тоже может дышать тобой. Я просто хочу, чтобы ты был кровью, которая могла бы быть очень близка мне",
"Я не знаю, как скоро закончится мой век. Все, что я знаю, это то, что моя любовь навсегда только для тебя",
"Мне очень понравилось время, которое мы провели вместе сегодня. Мы также давно знаем друг друга. В этот солнечный день я хочу выразить тебе, что люблю тебя",
" Я всегда представлял, как было бы прекрасно, если бы однажды мы смогли построить ковчег из дома и жить вместе до конца жизни. Однако всего этого не произошло бы, если бы мы оба не были вместе до сих пор. Ты будешь моей любовницей?",
"Я мысленно готовлюсь к сегодняшнему дню. Ты должна быть моей девушкой, чтобы справиться с этой неконтролируемой любовью",
"Я знаю, что мы не одного возраста, но могу ли я прожить с тобой всю оставшуюся жизнь?",
"Я знаю, что мы были друзьями долгое время. Но разве это не плохо, если ты мне нравишься? Каким бы ни был ваш ответ, я принимаю. Самое главное-быть честным от всего сердца",
"Счастлив, что мы с тобой стали собой",
" Завтра, если это не сработает, я могу стать твоей девушкой. Позволь мне иметь работу, чтобы всегда думать о тебе",
"Позволь мне сделать тебя счастливым навсегда. Тебе нужно сделать только одно: Влюбись в меня",
" Пусть вся моя радость будет твоей, вся твоя печаль будет моей. Пусть весь мир будет твоим, только ты будешь моей!",
" Пусть прошлое будет моим прошлым, но настоящим, будешь ли ты моим будущим?",
"Можешь ли ты дать мне направление к своему сердцу? Кажется, я потерялся в твоих глазах",
"Я ищу не трон или сокровища, а возвращение моей любви, которую я ожидаю от тебя. Ответ-да",
" То, как ты можешь заставить меня смеяться даже в самые мрачные дни, заставляет меня чувствовать себя легче, чем что-либо еще. Я хочу, чтобы ты была моей",
"Моя любовь к тебе неоспорима, потому что эта любовь искренна от всего сердца",
"Моя любовь к тебе подобна числу от 5 до 10. Секунды нет. Я хочу, чтобы ты была единственной женщиной в моем сердце",
"Какой парень смеет причинить тебе боль. Здесь я буду относиться к тебе, пока ты хочешь быть моей девушкой",
" Эй, что ты делаешь? Выйди из дома и посмотри на луну сегодня вечером. Свет прекрасен и очарователен, но он был бы еще прекраснее, если бы я был рядом с тобой. Как насчет того, чтобы мы были вместе?"
 ]