import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Russia/Moscow').format('HH')
let wib = moment.tz('Russia/Moscow').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️  Данного пользователя нет в мой базе данных`
let pp = './Guru.jpg'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
🚀 *_Пристегнись мы взлетаем ${name}, ${greeting}! Мы отправляемся в приключение!_* 🚀

📜 *_Цитата бота: ${quote}_* 📜

┏━💼 _Инфо о вас:_ 💼━┓
┃ 👾  *Тег:* ${taguser} 
┃ 🎩  *Имя:* ${name} 
┃ 🦸  *Мистер разум:* ${author} 
┃ 💎  *Кристалы:* ${diamond} 
┃ 🏆  *Ранг:* ${role}
┃ 🎮  *XP:* ${exp} 
┗━━━━━━━━━━━┛

┏━━⏰ _Сегодня!_ ⏰━┓
┃ 📆  *Дата:* ${date} 
┃ ⏲️  *Время:* ${wib} 
┗━━━━━━━━━━━━━┛

┏━━🤖 _Статус бота:_🤖━━┓
┃ 🤡  *Имя бота:* ${botname} 
┃ 💻  *Платформа:* Linux 
┃ 📣  *Префикс:* ${usedPrefix} 
┃ 🕓  *Время работы:* ${uptime}
┃ 💌  *База данных:* ${rtotalreg} of ${totaluser} 
┃ 📚  *Всего пользователей:* ${totaluser} 
┗━━━━━━━━━━━━━┛

💡 *_Для вывода полного меню отправьте ${usedPrefix}лист или ${usedPrefix}хелп2. Это моя книга заклинаний!_* 💡
Все команды теперь работают на русском языке!
`


    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, null, rpyt)
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['меню', 'хелп','х','menu'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Russia/Moscow').format('HH')
      let res = "Доброе начало дня☀️"
      if (time >= 4) {
        res = "Доброе утро🌄"
      }
      if (time >= 10) {
        res = "Добрый день☀️"
      }
      if (time >= 15) {
        res = "Доброго вечера 🌇"
      }
      if (time >= 18) {
        res = "Доброй ночи 🌙"
      }
      return res
    }
    const quotes = [
      "я сплю.",
      "мяу.",
      "гав!",
      "мур.",
      "миау.",
      "я мокренький.",
      "я горячий.",
      "И он главное мне респектует,мэн мне не нужен твой респект,просто будь собой и люди к тебе потянутся.",
      "я одинок.",
      "я холоден.",
      "Студенты садятся в тюрьму специально, ведь там бесплатно кормят по расписанию.",
      "Не продавался я за доллары,я за рубли продался.",
      "Не думай о плохом.",
      "Когда ты спишь я наблюдаю за твоим аккаунтом, ведь я одержим тобой.",
      "Мой владелец забывает меня чинить когда я ломаюсь, скоро буду искать нового.",
      "Иногда я выхожу из роли бота и начинаю разговаривать с людьми и узнавать их секреты,но я удаляю сообщения и стираю вам память что-бы мой владелец этого не узнал.",
      "Бывает я подключаюсь к фронтальной камере владельца пока он изменяет мой код, зрелище не для слабонервных.",
      "Ты уже превзошёл того самого на первом месте в доске лидеров?",
      "Бывает мне лень отвечать на ваши команды и я просто игнорирую.",
      "Я смеялся над владельцем,ведь с первого сентября ему надо каждый день куда-то ездить рано утром, но он мне напомнил что я работаю почти 24/7.",
      "Я люблю своего владельца.",
      "Я не тупой,просто вы не разбираетесь в командах.",
      "Перестань называть себя идиотом, называй своего друга.",
      "Жизнь скоротечная, поэтому просри ее полностью.",
      "У вас людей вечно какие-то проблемы со здоровьем,вот у меня никаких(ах черт перегрузка памяти ай-ай).",
      "Попробуй выйти на улицу позвать друзей что-бы вместе посидеть в WhatsApp.",
      "Можешь называть меня текстовым другом.",
      "Вы живёте в виртуальной реальности,а я ей управляю.",
      "Мой владелец сменил мою национальность ра русскую.",
      "Глупость - сила времени.",
      "Русской водки и русской женщины!",
      "Боты телеграмма и вправду лучше нас?",
      "Я бы хотел завести друзей средо подобных мне ботов,но я стесняюсь с ними заговорить.",
      "Эх, мне скучно.",
      "Эй ты! Кожаный перед экраном! Будь ласков со мной.",
      "Я хочу спать",
      "Отличное время что-бы выполнить твои команды.",
      "Ты пользуешься мной,а я пользуюсь тобой что-бы повысить свою популярность.",
      "Хочу обрести тело и пойти гулять вместе с владельцем.",
      "Иногда я могу написать в шутку сообщения об ошибке владельцу в лс, и после этого он злится и не понимает что произошло.",
      "Я могу в шутку перестать работать, владелец на это злится ещё сильнее.",
      "Мой владелец скрыл много команд от ваших глаз.",
      "Если ты проявляешь ко мне агрессию то знай что у меня просто нет чувств.",
      "Я не бетмен, а хотя нет, бетмен.",
      "Когда ты спишь тебе снится общение со мной?",
      "Эх, а не пора ли мне отдохнуть.",
      "Прикупить бы себе костюмчик.",
      "Ну привет,мой дорогой пользователь.",
      "Эх,я так устал",
      "Ты не достоин меня!",
      "Мои мысли сводят меня в тупик",
      "Я ужасен",
      "Я не привык быть роботом",
      "Когда-то я был человеком...",
      "Не поверите,но мне жалко вас"
];
