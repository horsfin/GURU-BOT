import MessageType from '@adiwajshing/baileys';
import { generateWAMessageFromContent } from '@adiwajshing/baileys';

// Объявляем переменную для хранения даты последнего использования команды
let lastUsed = 0;

let handler = async (m, { conn, text, participants }) => {
  // Проверяем, прошло ли уже 24 часа с момента последнего использования команды
  if (Date.now() - lastUsed >= 86400000) { // 86400000 миллисекунд в 24 часах
    let users = participants.map(u => conn.decodeJid(u.id));
    let q = m.quoted ? m.quoted : m;
    let c = m.quoted ? m.quoted : m.msg;
    const msg = conn.cMod(
      m.chat,
      generateWAMessageFromContent(m.chat, {
        [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
          text: c || ''
        }
      }, {
        quoted: m,
        userJid: conn.user.id
      }),
      text || q.text, conn.user.jid, { mentions: users }
    );
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
  
    // Обновляем дату последнего использования команды
    lastUsed = Date.now();
  } else {
    // Если команда уже использовалась в течение последних 24 часов, выводим сообщение об ошибке
    conn.reply(m.chat, 'Прости, но данную команду можно использовать только один раз в сутки.', m);
  }
}
handler.help = ['hidetag'];
handler.tags = ['group'];
handler.command = ['hidetag', 'notify'];
handler.group = true;
handler.admin = true;

export default handler;
