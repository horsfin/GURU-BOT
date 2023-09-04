import fetch from 'node-fetch'  
 //import { areJidsSameUser } from '@adiwajshing/baileys' 
 let { areJidsSameUser } = (await import(global.baileys)).default 
 let handler = async (m, { conn, text, participants, groupMetadata }) => { 
 let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" } 
 let grupos = [nna, nn, nnn, nnnt] 
 let gata = [img5, img6, img7, img8, img9] 
 let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}} 
 let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 СУПЕР R.I.P BOT - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}} 
 let dos = [enlace, enlace2] 
  
 let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender 
 let mentionedJid = [who] 
 var number = text.split`@`[1] 
  
 if(!text && !m.quoted) return await conn.reply(m.chat, `${mg}Тегните или ответьте на сообщение вашего партнёра\n\nСеріктесіңіздің хабарламасын тегтеңіз немесе оған жауап беріңіз`, fkontak, m) 
 //await conn.sendButton(m.chat, `${mg} Тегните или ответьте на сообщение вашего партнёра\n\nСеріктесіңіздің хабарламасын тегтеңіз немесе оған жауап беріңіз`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/меню']], fkontak, m) 
  
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
 let yo = conn.getName(m.sender) 
 let tu = conn.getName(who) 
  
 if(!users) return await conn.reply(m.chat, `${fg}Пользователь не найден,он должен быть в этой группе!\n\Пайдаланушы табылмады, ол осы топта болуы керек!`, fkontak, m) 
 //await conn.sendButton(m.chat, `${fg}Пользователь не найден,он должен быть в этой группе\n\nПайдаланушы табылмады, ол осы топта болуы керек`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/меню']], fkontak, m) 
  
 if(user === m.sender) return  await conn.reply(m.chat, `${fg}Вы не можете быть партнером\n\nВы не можете быть партнёром`, fkontak,  m)
 //await conn.sendButton(m.chat, `${fg}Вы не можете быть партнером\n\nВы не можете быть партнером`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/меню']], fkontak, m) 
  
 if(user === conn.user.jid) return await conn.reply(m.chat, `${fg}Со мной вы не можете быть парой 😹\n\nМенімен сіз жұп бола алмайсыз`, fkontak, m) 
 //await conn.sendButton(m.chat, `${fg}Со мной вы не можете быть парой 😹\n\nМенімен сіз жұп бола алмайсыз`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/меню']], fkontak, m) 
  
 if(global.db.data.users[user].pasangan != m.sender){  
 return await conn.reply(m.chat, `Вы не можете согласиться когда никто вас не приглашал,поговорите с *${tu}* парой на создание брака\n\n. *${tu}* ...`, fkontak, m, { contextInfo: { mentionedJid: [user, tu]}})         
 //await conn.sendButton(m.chat, `🐻 *${tu}* 🐭\n\n🗡️ *${tu}* ⚠️`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/меню']], fkontak, m, { contextInfo: { mentionedJid: [user, tu]}})         
  
 }else{
 global.db.data.users[m.sender].pasangan = user 
 return await conn.reply(m.chat, `🥳😻 Поздравляю пёсики!!! *${tu}*\n✅ Вы официально пара\n\nжелаю счастья 💖😁\n\n💝 мямяу\n\n*${tu} 💞 ${yo}*\n`, m, dos.getRandom(), { contextInfo: { mentionedJid: [user, tu, yo]}})         
 //await conn.sendButton(m.chat, `🥳😻 Поздравляю пёсики!!! *${tu}*\n✅ Вы официально пара\n\nжелаю счасть 💖😁\n\n💝 мямяу`, `*${tu} 💞 ${yo}*\n` + wm, img5, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/меню']], m, dos.getRandom(), { contextInfo: { mentionedJid: [user, tu, yo]}})         
 }}} 
  
 handler.command = /^(aceptar|acepto|принять)$/i 
 handler.group = true 
 export default handler