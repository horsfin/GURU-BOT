let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
    if (!text) throw "Укажите какой персонаж вы хотите проверить"
    const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
 const userChar = [
      "Сигма",
      "Генерал",
      "Гей",
      "Повелитель",
      "Нос",
      "Хороший",
      "Ужасный",
      "Король",
      "Пациент",
      "Мертвяк",
      "Крутой",
      "Вонючий",
      "Брилиантовый",
      "Секси",
      "Горячий",
      "Гордый",
      "Обычный",
    ]
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)]

    let message = `Характер @${mentionedUser.split("@")[0]}  является *${userCharacterSeletion}* 🔥⚡`
    
    conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
    
}
handler.help = ["character @tag"]
handler.tags = ['fun']
handler.command = /^(характер)/i

export default handler 
