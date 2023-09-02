const rewards = {
 exp: 15000,
    money: 35999,
    potion: 9,
  }
  const cooldown = 604800000
  let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastweekly < cooldown) throw `Вы уже получали недельный бонус!, ждите *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) {
      if (!(reward in user)) continue
      user[reward] += rewards[reward]
      text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
    }
    //conn.sendButton(m.chat,'*––––––『 WEEKLY 』––––––*', text.trim(), null, [['Profile', ''], ['Monthly', '.monthly']],m)
    m.reply(`
    🎁 *еженедельное вознаграждение*
    
    ▢ *Получил:*
     ${text}`)
    user.lastweekly = new Date * 1
  }
  handler.help = ['weekly']
  handler.tags = ['econ']
  handler.command = /^(недельный)$/i
  
  handler.cooldown = cooldown
  
  export default handler
