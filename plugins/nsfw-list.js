let handler = async (m, { conn, usedPrefix }) => {
    if (!global.db.data.chats[m.chat].nsfw) throw `🚫 в группе это запрещено \n\n включите так \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`❎ Вам нету 18`) 
   
m.react(rwait)
    let nsfwCommands = ['xnxx', 'xvid',  'genshin', 'swimsuit', 'schoolswimsuit', 'white', 'barefoot', 'touhou', 'gamecg', 'hololive', 'uncensored', 'sunglasses', 'glasses', 'weapon', 'shirtlift', 'chain', 'fingering', 'flatchest', 'torncloth', 'bondage', 'demon', 'wet', 'pantypull', 'headdress', 'headphone', 'tie', 'anusview', 'shorts', 'stockings', 'topless', 'beach', 'bunnygirl', 'bunnyear', 'idol', 'vampire', 'gun', 'maid', 'bra', 'nobra', 'bikini', 'whitehair', 'blonde', 'pinkhair', 'bed', 'ponytail', 'nude', 'dress', 'underwear', 'foxgirl', 'uniform', 'skirt', 'sex', 'sex2', 'sex3', 'breast', 'twintail', 'spreadpussy', 'tears', 'seethrough', 'breasthold', 'drunk', 'fateseries', 'spreadlegs', 'openshirt', 'headband', 'food', 'close', 'tree', 'nipples', 'erectnipples', 'horns', 'greenhair', 'wolfgirl', 'catgirl'];
  
    let message = `
  *NSFW МЕНЮ* 
  
  Вот список команд. Используйте префикс "${usedPrefix}" а далее название команды:
  
  ${nsfwCommands.map(command => `${usedPrefix}${command}`).join('\n')}
  
 Предупреждение:данные команды выдают 18+ картины.
  `;
  
    console.log("Sending message...");
    await conn.reply(m.chat, message, m);
    console.log("Message sent.");
  };
  
  handler.help = ['nsfw'];
  handler.tags = ['nsfw'];
  handler.command = ['nsfw'];
  handler.group = true
  handler.register = true;

  export default handler;
  
