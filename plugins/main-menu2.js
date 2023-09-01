
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _ИСПОЛЬЗУЙ КОМАНДЫ С ПРЕФИКСОМ_ \`\`\`${usedPrefix}\`\`\` 

▢ ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‎
Ⓟ = ПРЕМИУМ
ⓓ = КРИСТАЛЫ
-----  -----  -----  -----  -----
  ≡ *Полный лист меню*

┌─⊷ *ИНФО*
▢ .blocklist
▢ .info (инфо)
▢ .owner (владелец)
▢ .listprem (лист премиум)
▢ .help (помощь)
▢ .ping (скорость)
▢ .runtime (время работы)
└───────────

┌─⊷ *ИГРЫ*
▢ .slot <ставка>
▢ .ppt (к/н/б)
▢ .ttt (кресты-ноли)
└───────────

┌─⊷ *УРОВНИ И ЭКО*
▢ .balance (баланс)
▢ .daily|weekly|monthly (ежедневыный/недельный/месячный бонус)
▢ .leaderboard (лидеры)
▢ .level (уровень)
▢ .mine (добывать)
▢ .rob (грабить)
▢ .buy (покупка)
▢ .sell (продажа предметов)
▢ .transfer [предмет] [кол-во] [тег] (перевод предметов другому участнику)
▢ .buyall
▢ .work (работать)
▢ .on autolevelup (активировать повышение уровня)
▢ .donate (покупка ресурсов)
└───────────

┌─⊷ *РЕГИСТРАЦИИ*
▢ .reg <имя.возраст> (регистрация)
▢ .mysn (мой номер)
▢ .unreg <Серийный номер>
└───────────

┌─⊷ *СТИКЕРЫ*
▢ .attp <текст> (стикер)
▢ .emojimix <эмодзи+эмодзи> (ⓓ)
▢ .sticker (сделать стик)
▢ .ttp <текст>
▢ .take <имя>|<автор>(сменить стикер)
▢ .s (сделает стикер)
└───────────

┌─⊷ *ФОТО*
▢ .girl (ⓓ) (девочка)
└───────────

┌─⊷ *МАКЕР*
▢ .logololi (ⓓ) (лоли)
▢ .neon (ⓓ) (неон)
└───────────

┌─⊷ *ПРЕМИУМ*
▢ .gdrive (ⓓ) (Ⓟ)
▢ .xvid (ⓓ) (Ⓟ)
▢ .xnxx (ⓓ) (Ⓟ)
└───────────

┌─⊷ *ГРУППА*
▢ .add (добавить)
▢ .delete (удалить)
▢ .delwarn @пользователь
▢ .demote (@тег) (понизить)
▢ .hidetag (тег скрытый)
▢ .invite <777xxx> (приглашение,)
▢ .kick @участник (кик)
▢ .link (ссылка)
▢ .promote (повысить)
▢ .setbye <текст>
▢ .group *open/close*
▢ .setwelcome <текст>
▢ .staff (админы)
▢ .tagall (тег всех)
▢ .warn @пользователь (варн)
▢ .warns (варны)
▢ .enable (настройки)
└───────────

┌─⊷ *РП*
▢ .kill @tag (ⓓ)
▢ .kiss @tag (ⓓ)
└───────────

┌─⊷ *ЗАГРУЗЧИК*
▢ .instagram <link ig> (ⓓ)
▢ .play
▢ .play2
▢ .ytmp3 <ССЫЛКА> (ⓓ)
▢ .ytsearch
▢ .ytmp4 <ССЫЛКА yt> (ⓓ)
└───────────

┌─⊷ *ИНСТРУМЕНТЫ*
▢ .calс <equation>
▢ .google (ⓓ) (запрос)
▢ .lyrics (песня)
▢ .ssweb <ссылка> (ⓓ)
▢ .tts <язык> <текст>
▢ .wikipedia (википедия)
└───────────

┌─⊷ *ФАН*
▢ .gay @участник
▢ .ship (шип)
▢ .character @тег
└───────────

┌─⊷ *DATABASE*
▢ .listcmd
▢ .setcmd <txt>
└───────────

┌─⊷ *NSFW +18*
▢ .ass (ⓓ) (жопка)
└───────────
┌─⊷ *ВЛАДЕЛЕЦ*
▢ .expired <days>
▢ .addprem <@tag>
▢ .banchat
▢ .listban
▢ .ban @user
▢ .tx
▢ .cleartmp
▢ .delexpired
▢ .delprem @user
▢ .getplugin <name file>
▢ .getfile <name file>
▢ .join <chat.whatsapp.com> <dias>
▢ .reset <54xxx>
▢ .restart
▢ .unbanchat
▢ .unban @user
▢ .update
└───────────

┌─⊷ *ADVANCED*
▢ >
▢ =>
▢ $
└───────────  
У меня имеется 300 команд ,но мне лень писать все..
`
    /*let pp = './Guru.jpg'
    conn.sendButton(m.chat, m2, '▢ ᴳᵁᴿᵁ  ┃ ᴮᴼᵀ\n▢ Follow on Instagram\nhttps://www.instagram.com/asli_guru69\n', pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Groups', `${usedPrefix}gpguru`]
    ],m, rpyt) */
    conn.sendMessage(m.chat,{text: m2}, m.sender)
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'help2', 'h2'] 

export default handler
