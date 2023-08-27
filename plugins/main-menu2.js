
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Use the commands with the prefix_ \`\`\`${usedPrefix}\`\`\` 

▢ ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‎
Ⓟ = Premium
ⓓ = Diamonds
-----  -----  -----  -----  -----
  ≡ *Полный лист меню*

┌─⊷ *ABOUT*
▢ .blocklist
▢ .info (инфо)
▢ .owner (владелец)
▢ .donate (донат)
▢ .gpguru
▢ .listprem (лист премиум)
▢ .help (помощь)
▢ .audios 
▢ .ping (скорость)
▢ .runtime
└───────────

┌─⊷ *ИГРЫ*
▢ .slot <gamble>
└───────────

┌─⊷ *УРОВНИ И ЭКО*
▢ .balance (баланс)
▢ .daily
▢ .leaderboard (лидеры)
▢ .levelup (уровень)
▢ .mine
▢ .rob
▢ .buy (покупка)
▢ .buyall
▢ .transfer [tip] [amount] [@tag]
▢ .work (работать)
└───────────

┌─⊷ *РЕГИСТРАЦИИ*
▢ .reg <имя.возраст> (регистрация)
▢ .mysn
▢ .unreg <Num Serie>
└───────────

┌─⊷ *STICKER*
▢ .attp <текст> (стикер)
▢ .emojimix <эмодзи+эмодзи> (ⓓ)
▢ .sticker (сделать стик)
▢ .ttp <текст>
▢ .take <имя>|<автор>(сменить стикер)
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
▢ .mediafire <url> (ⓓ)
▢ .xvid (ⓓ) (Ⓟ)
▢ .xnxx (ⓓ) (Ⓟ)
└───────────

┌─⊷ *ГРУППА*
▢ .add (добавить)
▢ .delete (удалить)
▢ .delwarn @пользователь
▢ .demote (@тег) (понизить)
▢ .infogp (инфо)
▢ .hidetag (тег скрытый)
▢ .invite <777xxx> (приглашение,)
▢ .kick @участник (кик)
▢ .link (ссылка)
▢ .promote (повысить)
▢ .resetlink
▢ .setbye <текст>
▢ .group *open/close*
▢ .setwelcome <текст>
▢ .staff (админы)
▢ .tagall (тег всех)
▢ .warn @пользователь (варн)
▢ .warns (варны)
└───────────

┌─⊷ *РП*
▢ .kill @tag (ⓓ)
▢ .kiss @tag (ⓓ)
▢ .pat @tag (ⓓ)
▢ .slap @tag (ⓓ)
└───────────

┌─⊷ *ЗАГРУЗЧИК*
▢ .facebook <ССЫЛКА> (ⓓ)
▢ .gdrive (ⓓ) (Ⓟ)
▢ .gitclone <ССЫЛКА> (ⓓ)
▢ .igstalk
▢ .instagram <link ig> (ⓓ)
▢ .mediafire <ССЫЛКА> (ⓓ)
▢ .play
▢ .play2
▢ .tiktok (ⓓ)
▢ .tiktokstalk
▢ .twitter <ССЫЛКА> (ⓓ)
▢ .ytmp3 <ССЫЛКА> (ⓓ)
▢ .ytsearch
▢ .ytmp4 <ССЫЛКА yt> (ⓓ)
└───────────

┌─⊷ *TOOLS*
▢ .cal <equation>
▢ .google (ⓓ)
▢ .lyrics
▢ .readmore <text1>|<text2>
▢ .ssweb <url> (ⓓ)
▢ .tourl
▢ .trad <leng> <text>
▢ .tts <lang> <teXTSs>
▢ .wikipedia
└───────────

┌─⊷ *ФАН*
▢ .gay @участник
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
