import MessageType from '@whiskeysockets/baileys'; 
 const handler = async (m, {conn, usedPrefix, command}) => { 
   const room = Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender)); 
   if (room == undefined) return conn.sendButton(m.chat, '*[❗] Ты итак не участвуешь чувак*', wm, null, [['Введи название игровой комнаты', `${usedPrefix}ttt название комнаты`]], m); 
   delete conn.game[room.id]; 
   await m.reply('*[ ✔ ] Ваша игровая комната была удалена*'); 
 }; 
 handler.command = /^(нетхо|неткр|delxo|deltictactoe)$/i; 
 handler.fail = null; 
 export default ;
