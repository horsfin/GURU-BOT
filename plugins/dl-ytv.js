import ytdl from 'ytdl-core';
import fs from 'fs';
import os from 'os';

let limit = 500;
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `✳️ пример:\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`;
  if (!args[0].match(/youtu/gi)) throw `❎ убедитесь что это ссылка ютуб`;

  let chat = global.db.data.chats[m.chat];
  m.react(rwait);
  try {
    const info = await ytdl.getInfo(args[0]);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
    if (!format) {
      throw new Error('не найдено нужного формата');
    }

    if (format.contentLength / (1024 * 1024) >= limit) {
      return m.reply(`≡ *ЗАГРУЗЧИК*\n\n▢ *⚖️размер*: ${format.contentLength / (1024 * 1024).toFixed(2)}MB\n▢ *🎞️качество*: ${format.qualityLabel}\n\n▢ фаил превышает лимит загрузки *+${limit} MB*`);
    }

    const tmpDir = os.tmpdir();
    const fileName = `${tmpDir}/${info.videoDetails.videoId}.mp4`;

    const writableStream = fs.createWriteStream(fileName);
    ytdl(args[0], {
      quality: format.itag,
    }).pipe(writableStream);

    writableStream.on('ФИНИШ', () => {
      conn.sendFile(
        m.chat,
        fs.readFileSync(fileName),
        `${info.videoDetails.videoId}.mp4`,
        `✼ ••๑⋯❀ Y O U T U B E ❀⋯⋅๑•• ✼
	  
	  ❏ Заглавление: ${info.videoDetails.title}
	  ❐ Продолжительность: ${info.videoDetails.lengthSeconds} секунд
	  ❑ Просмотров: ${info.videoDetails.viewCount}
	  ❒ Загружено: ${info.videoDetails.publishDate}
	  ❒ Ссылка: ${args[0]}
	  
	  ⊱─━⊱༻●༺⊰━─⊰`,
        m,
        false,
        { asDocument: chat.useDocument }
      );

      fs.unlinkSync(fileName); // Delete the temporary file
      m.react(done);
    });

    writableStream.on('error', (error) => {
      console.error(error);
      m.reply('Ошибка.');
    });
  } catch (error) {
    console.error(error);
    m.reply('Ошибка.');
  }
};

handler.help = ['ytmp4 <yt-link>'];
handler.tags = ['dl'];
handler.command = ['ютв', 'видео'];
handler.diamond = false;

export default handler;

