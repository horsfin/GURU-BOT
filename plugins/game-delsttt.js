import MessageType from '@whiskeysockets/baileys'; 
 const handler = async (m, {conn, usedPrefix, command}) => { 
   const room = Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender)); 
   if (room == undefined) return conn.sendButton(m.chat, '*[❗] Вы не начинали игру*', wm, null, [['Нет игры', `${usedPrefix}ттт название комнаты`]], m); 
   delete conn.game[room.id]; 
   await m.reply('*[ ✔ ] Игра удалена*'); 
 }; 
 handler.command = /^(нетхо|deltt|delxo|deltictactoe)$/i; 
 handler.fail = null; 
 export default handler;