import { canLevelUp, xpRange } from '../lib/levelling.js';

let handler = async (m, { conn }) => {
    let name = conn.getName(m.sender);
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg');
    let user = global.db.data.users[m.sender];
    let background = 'https://i.ibb.co/4YBNyvP/images-76.jpg'; // Fixed background URL

    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier);
        let txt = `
┌───⊷ *УРОВЕНЬ*
▢ Номер : *${name}*
▢ Уровень : *${user.level}*
▢ XP : *${user.exp - min}/${xp}*
▢ Роль : *${user.role}*
└──────────────

Привет, ${name}! Вы пока не готовы повышать уровень,вам нужно набрать *${max - user.exp}* опыта для повышения уровня и достижения новых высот! Опыт можно повысить использовав команды из эконом меню - работать(.работать),ходить на преключения(.приключения),добывать ресурсы(.копать),или воровать у других игроков(.своровать),а также играя в игры бота,также опыт немного повышается за любое сообщение в группе с ботом, ну или купить за реальные деньги(.донат). Продолжайте в том же духе, и скоро боты будут петь вам дифирамбы! 🚀
`.trim();

        try {
            let imgg = `https://wecomeapi.onrender.com/rankup-image?username=${encodeURIComponent(name)}&currxp=${user.exp - min}&needxp=${xp}&level=${user.level}&rank=${encodeURIComponent(pp)}&avatar=${encodeURIComponent(pp)}&background=${encodeURIComponent(background)}`;
            conn.sendFile(m.chat, imgg, 'level.jpg', txt, m);
        } catch (e) {
            m.reply(txt);
        }
    } else {
        let str = `
┌─⊷ *УРОВЕНЬ*
▢ Предыдущий уровень : *${user.level - 1}*
▢ Текущий уровень: *${user.level}*
▢ Роль : *${user.role}*
└──────────────

У-У-У, ${name}!Вы взлетели на новые высоты ${user.level}! 🎉 Время праздновать! 🎊
На самом деле нет, у вас не активирована система повышения уровня! Напишите .on autolevelup что-бы у вас мог повышаться уровень(эту команду нужно писать всего один раз, и у вас всегда будет активировано повышение уровня)! 🌟
`.trim();

        try {
            let img = `https://wecomeapi.onrender.com/levelup-image?avatar=${encodeURIComponent(pp)}`;
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m);
        } catch (e) {
            m.reply(str);
        }
    }
}

handler.help = ['levelup'];
handler.tags = ['econ'];
handler.command = ['nivel', 'лвл', 'уровень', 'левел'];

export default handler
