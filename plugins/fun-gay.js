let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg')
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/gay', {
    avatar: pp, 
  }), 'gay.png', `🏳️‍🌈  *Gay :* ${name}\n\nКто хочет изнасиловать этого гея☠️? `, m)
}

handler.help = ['gay @user']
handler.tags = ['fun']
handler.command = ['гей'] 

export default handler
