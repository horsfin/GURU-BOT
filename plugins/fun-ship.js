let toM = a => '@' + a.split('@')[0];
let blockedUserNumber = '79503383173';

function handler(m, { groupMetadata }) {
  let ps = groupMetadata.participants.map(v => v.id);
  let a = m.sender;
  let b;

  do {
    b = ps.getRandom();
  } while (b === a || b === blockedUserNumber);

  m.reply(`${toM(a)} ❤️ ${toM(b)}\n Шип💖🍻`, null, {
    mentions: [a, b]
  });
}

handler.help = ['ship'];
handler.tags = ['fun'];
handler.command = ['шип'];
handler.group = true;

export default handler;