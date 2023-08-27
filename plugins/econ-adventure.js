const cooldown = 300000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastadventure))
    if (user.health < 80) return m.reply(`
Для этого приключения требуется 80 исцлений
пожалуйста сначала купите ❤️Healths набрав*${usedPrefix}buy potion <quantity>*,
и введите *${usedPrefix}heal <quantity>* что бы использовать зелье
`.trim())
    if (new Date - user.lastadventure <= cooldown) return m.reply(`
Ты готов к преключению!!, подожди *🕐${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = 'Ты побывал в преключении и заблудился'
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\n\nНо у тебя есть'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`
    }
    m.reply(text.trim())
    user.lastadventure = new Date * 1
}
handler.help = ['adventure', 'petualang', 'berpetualang', 'mulung']
handler.tags = ['rpg']
handler.command = /^(adventure|(ber)?petualang(ang)?|mulung)$/i

handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            деньги: 201,
            exp: 301,
            мусор: 101,
            зелье: 2,
            камень: 2,
            дерево: 2,
            веревка: 2,
            общем: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
           редко: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            мифический: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            легендарный: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            железо: [0, 0, 0, 1, 0, 0],
            золото: [0, 0, 0, 0, 0, 1, 0],
            алмазы: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            жизнь: 101 - user.cat * 4
        }
    }
    return rewards
}
