let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = m.sender
let b
do b = ps.getRandom()
while (b === a)
let compatibility = Math.floor(Math.random() * 101)
let result = ''
if (compatibility >= 0 && compatibility <= 40) {
result = 'К сожалению не суждено'
} else if (compatibility >= 41 && compatibility <= 70) {
result = 'Ну жить можно'
} else if (compatibility >= 71 && compatibility <= 100) {
result = 'Определено пара'
}
m.reply(${toM(a)} ❤️ ${toM(b)}\n 💖🍻\nСовместимость: ${compatibility}%\n${result}, null, {
mentions: [a, b]
})
}
handler.help = ['ship']
handler.tags = ['fun']
handler.command = ['ship']

handler.group = true

export default handler

