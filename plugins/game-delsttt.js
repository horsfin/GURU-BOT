import MessageType from '@whiskeysockets/baileys'; 
 const handler = async (m, {conn, usedPrefix, command}) => { 
   const room = Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender)); 
   if (room == undefined) return conn.sendButton(m.chat, '*[❗] Ты итак не участвуешь чувак*', wm, null, [['𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝚂𝙰𝙻𝙰 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾', `${usedPrefix}ttt partida nueva`]], m); 
   delete conn.game[room.id]; 
   await m.reply('*[ ✔ ] Ваша игровая комната была удалена*'); 
 }; 
 handler.command = /^(закончитьхо|конец|delxo|deltictactoe)$/i; 
 handler.fail = null; 
 export default ;
