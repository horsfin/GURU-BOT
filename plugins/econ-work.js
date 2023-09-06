// creditos a https://github.com/FG98F 
 let handler = async (m, { conn, isPrems}) => { 
 //let hasil = Math.floor(Math.random() * 5000) 
 const fkontak = { 
         "key": { 
         "participants":"0@s.whatsapp.net", 
             "remoteJid": "status@broadcast", 
             "fromMe": false, 
             "id": "Halo"     
         }, 
         "message": { 
             "contactMessage": { 
                 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
             } 
         }, 
         "participant": "0@s.whatsapp.net" 
     } 
 let pp = 'https://c4.wallpaperflare.com/wallpaper/991/456/22/sketch-artist-anime-anime-girls-arknights-swire-arknights-hd-wallpaper-preview.jpg' 
 let gata = Math.floor(Math.random() * 3000) 
 global.db.data.users[m.sender].exp += gata * 1   
 let time = global.db.data.users[m.sender].lastwork + 600000 
 if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `*Ya trabajaste, espere unos ${msToTime(time - new Date())} para volver a trabajar!!*` 
  
 await conn.reply(m.chat, `*${pickRandom(global.work)}* ${gata} XP`, fkontak, pp, m) 
 /*conn.sendHydrated(m.chat, wm, `${pickRandom(global.work)} ${hasil} XP`, pp, md, '饾檪饾櫈饾櫓饾檭饾櫔饾櫁', null, null, [ 
 ['饾棤 饾棙 饾棥 饾棬 鈽橈笍', `#menu`] 
 ], m,) */ 
 global.db.data.users[m.sender].lastwork = new Date * 1 
 } 
 handler.help = ['work'] 
 handler.tags = ['xp'] 
 handler.command = ['work', 'trabajar'] 
 handler.fail = null 
 handler.exp = 0 
 export default handler 
  
 function msToTime(duration) { 
 var milliseconds = parseInt((duration % 1000) / 100), 
 seconds = Math.floor((duration / 1000) % 60), 
 minutes = Math.floor((duration / (1000 * 60)) % 60), 
 hours = Math.floor((duration / (1000 * 60 * 60)) % 24) 
 hours = (hours < 10) ? "0" + hours : hours 
 minutes = (minutes < 10) ? "0" + minutes : minutes 
 seconds = (seconds < 10) ? "0" + seconds : seconds 
  
 return minutes + " m " + seconds + " s "  
 } 
  
  
 function pickRandom(list) { 
 return list[Math.floor(list.length * Math.random())] 
 } 
  
 global.work = ["Ты работаешь резаком для печенья и выигрываешь", "Присматривай за группой, когда администратора не было, поэтому ты выигрываешь", "Работай в частной военной компании, выигрывай", "Организуй мероприятие по дегустации вин и получай", "Ты модерировал группу, когда рипа не было,оплата была", "я шел по улице и столкнулся с кем-то", "помочь тебе с группой, пока администратора не было, оплата была", "Тебя похитили и отвезли в подземный колизей, где ты сражался с монстрами с людьми, которых ты никогда раньше не встречал. Ты выигрываешь", "Ты чистишь камин и находишь", "Ты разрабатываешь игры для жизни и зарабатываешь", "Почему эта команда называется работой? Ты даже не делаешь ничего, связанного с работой. Тем не менее, ты выигрываешь", "Ты работал в офисе сверхурочно", "Ты работаешь похитителем невест и выигрываешь", "Кто-то пришел и поставил пьесу. За просмотр тебе дали"," Ты покупал и продавал товары и зарабатывал"," Ты работаешь поваром в ресторане бабушки и зарабатываешь", " Ты работаешь 10 минут в местной пиццерии. Вы выиграли", "Вы работаете писателем печенья с предсказаниями и выигрываете", " Вы видите, как кто-то изо всех сил пытается загрузить коробку в свою машину, вы спешите помочь ему, пока он не пострадал. После того, как вы поможете им, они любезно дадут вам", "Вы разрабатываете игры для жизни и побеждаете", "Вы выигрываете конкурс по поеданию острого перца чили. Награда-это", "Ты весь день работаешь в компании за", "Ты помогаешь модерировать группу GataDios за"," Ты разработал логотип для FG за"," Ты модерировал группу, когда GataDios не было, оплата была", "Ты работал как мог в типографии, в которой заработал". он нанимал, и он заслуженно зарабатывает!", "Вы работаете секатором кустарников в FG98 и зарабатываете", " Спрос на игры для мобильных устройств вырос, поэтому вы создаете новую игру, полную микротранзакций. В своей новой игре вы зарабатываете в общей сложности", "Вы работаете актером озвучивания Губки Боба, и вам удалось победить", "Вы занимались сельским хозяйством и выиграли"," Вы работаете как слесарь и получаете","Ты работал на Рипа помогая ему с ботом,и заработал","Ты написал код для новой команды в бота и заработал","Ты доложил рипу о баге в R.I.P BOT, и заработал"
 ]