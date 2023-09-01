import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Эта команда отправляет сгенерированные изображение по вашему запросу*\n\n*Пример запроса*\n*◉ ${usedPrefix + command} Кот и пес*\n*◉ ${usedPrefix + command} робот ест траву*`;

  try {
    m.reply('*Подождите, изображение генерируется...*');

    const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(text)}&model=art`;
    const response = await fetch(endpoint);
    const data = await response.json();

    if (data.result && Array.isArray(data.result)) {
      for (let i = 0; i < Math.min(data.result.length, 2); i++) {
        const imageUrl = data.result[i];
        const imageResponse = await fetch(imageUrl);
        const imageBuffer = await imageResponse.buffer();
        await conn.sendFile(m.chat, imageBuffer, null, null, m);
      }
    } else {
      throw '*Произошла ошибка*';
    }
  } catch {
    throw '*Упс! Ошибка. Попробуйте позже.*';
  }
};

handler.command = ['ai2', 'dalle', 'gen', 'gimg', 'openai2'];
export default handler;

