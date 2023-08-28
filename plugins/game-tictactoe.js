import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `✳️ Вы все еще находитесь в игре, что-бы удалить игру напишите : *${usedPrefix}delttt*`
    if (!text) throw `✳️ Поставьте номер комнаты`
    let room = Object.values(conn.game).find(room => room.state === 'ожидание' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('✅ пара найдена')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'ИГРА'
        let arr = room.game.render().map(v => {
            return {
                X: '❎',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
В ожидании @${room.game.currentTurn.split('@')[0]} в качестве первого игрока
        
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

▢ *ID Комнаты* ${room.id}

▢ *Правила*
‣ Составьте три символа по диогонали,вертикали или в ряд что-бы победить ‣ Напишите *surrender* если хотите сдаться.
`.trim()
        if (room.x !== room.o) await conn.reply(room.x, str, m, {
            mentions: conn.parseMention(str)
        })
        await conn.reply(room.o, str, m, {
            mentions: conn.parseMention(str)
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'ожидание'
        }
        if (text) room.name = text
        
     conn.reply(m.chat, `⏳ *ожидание партнера*\nВведите следующую команду что-бы вступить
▢ *${usedPrefix + command} ${text}*

🎁 Награда:  *4999 XP*`, m, {
            mentions: conn.parseMention(text)
        })
        
   conn.game[room.id] = room
    }
    
}

handler.help = ['tictactoe <tag number>']
handler.tags = ['game']
handler.command = ['tictactoe', 'ttc', 'ttt', 'xo']

export default handler
