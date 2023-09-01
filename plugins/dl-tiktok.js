import { tiktokdl } from '@bochilteam/scraper';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) throw `✳️ Вставьте ссылку на видео\n\n📌 Пример: ${usedPrefix + command} https://vm.tiktok.com/ZMYG2bUh/`;
  if (!args[0].match(/tiktok/gi)) throw `❎ Убедиетсь что ссылка связана с тик-ток`;

  try {
    const { author: { nickname }, video, description } = await tiktokdl(args[0]);
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw;
    if (!url) throw '❎ Ошибка загрузки';

   

    conn.sendFile(m.chat, url, 'tiktok.mp4', `
┌─⊷ TIKTOK
▢ *Никнеим:* ${nickname} ${description ? `\n▢ *Описание:* ${description}` : ''}
└───────────`, m);
  } catch (error) {
    // Log the error
    console.error('Ошибка:', args[0], error);

    m.reply(`❎ Ошибка`);
  }
};

handler.help = ['tiktok'];
handler.tags = ['dl'];
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i;


export default handler;
