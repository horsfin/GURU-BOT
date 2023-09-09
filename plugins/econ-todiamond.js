const xpperdiamond = 350  
 let handler = async (m, { conn, command, args }) => { 
   let count = command.replace(/^todiamond/i, '') 
   count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1 
   count = Math.max(1, count) 
   if (global.db.data.users[m.sender].exp >= xpperdiamond * count) { 
     global.db.data.users[m.sender].exp -= xpperdiamond * count 
     global.db.data.users[m.sender].diamond += count 
     conn.reply(m.chat, ` 
 ┌─「 *Обмен* 」 
 ‣ *Покупка* : + ${count}💎  
 ‣ *Продажа* : -${xpperdiamond * count} XP 
 └──────────────`, m) 
   } else conn.reply(m.chat, `❎ У вас не достаточно хп для покупки *${count}* Кристаллов 💎\n\nХп можно поднять в командах экономики или играх*`, m) 
 } 
 handler.help = ['todiamond', 'todiamondall'] 
 handler.tags = ['econ'] 
 handler.command = ['todiamond', 'todiamndall']  
  
 handler.disabled = false 
  
 export default handler