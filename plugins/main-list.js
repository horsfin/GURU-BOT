let handler = async (m, { conn, usedPrefix, command}) => {
      let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;
    
      let pp = './Guru.jpg';
      let more = String.fromCharCode(8206);
      let readMore = more.repeat(850); 
    
      let lkr;
      switch (command) {
        case 'list':
lkr = "*Get ready for the ride, here are your ticket options:*\n\n" +
"🤖 *" + usedPrefix + "botmenu* - The Bot's secret control panel. What's your command, oh great one?\n\n" +
"🧑‍🤝‍🧑 *" + usedPrefix + "groupmenu* - Group shenanigans central! Unite, chat, conquer!\n\n" +
"📥 *" + usedPrefix + "dlmenu* - 'DL' stands for 'Delicious Loot'. Come grab your goodies!\n\n" +
"🎉 *" + usedPrefix + "funmenu* - The bot's party hat. Games, jokes and instant ROFLs. Let's get this party started!\n\n" +
"💰 *" + usedPrefix + "economymenu* - Bling bling! Your personal vault of virtual economy. Spend or save? Choose wisely!\n\n" +
"🎮 *" + usedPrefix + "gamemenu* - Enter the gaming arena. May the odds be ever in your favor!\n\n" +
"🎨 *" + usedPrefix + "stickermenu* - A rainbow of stickers for your inner artist. Make your chats pop!\n\n" +
"🧰 *" + usedPrefix + "toolmenu* - Your handy-dandy toolkit. What's your pick, genius?\n\n" +
break;

          
        
        

        case 'botmenu':
          lkr = `❀° ┄──•••───╮
          БОТ МЕНЮ 
   ╰───•••──┄ °❀     
   ┏━━━ʕ•㉨•ʔ━━━┓
   ⎪⌲👑 _${usedPrefix}gita_
   ⎪⌲👑 _${usedPrefix}ping_
   ⎪⌲👑 _${usedPrefix}uptime_
   ⎪⌲👑 _${usedPrefix}bot_
   ⎪⌲👑 _${usedPrefix}owner_
   ⎪⌲👑 _${usedPrefix}script_
   ⎪⌲👑 _${usedPrefix}runtime_
   ⎪⌲👑 _${usedPrefix}infobot_
   ⎪⌲👑 _${usedPrefix}donate_
   ⎪⌲👑 _${usedPrefix}groups_
   ⎪⌲👑 _${usedPrefix}blocklist_
   ⎪⌲👑 _${usedPrefix}listprem_
   ⎪⌲👑    Guru
   ┗━━━ʕ•㉨•ʔ━━━┛`; // Your bot menu message here
          break;
        case 'ownermenu':
          lkr = `❀° ┄──•••───╮
          𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐  
     ╰───•••──┄ °❀     
     ┏━━━ʕ•㉨•ʔ━━━┓
     ⎪⌲👑 _${usedPrefix}banchat_
     ⎪⌲👑 _${usedPrefix}unbanchat_
     ⎪⌲👑 _${usedPrefix}banuser_
     ⎪⌲👑 _${usedPrefix}unbanuser_
     ⎪⌲👑 _${usedPrefix}Broadcast_
     ⎪⌲👑 _${usedPrefix}Broadcastgc_
     ⎪⌲👑 _${usedPrefix}join_
     ⎪⌲👑 _${usedPrefix}setppbot_
     ⎪⌲👑 _${usedPrefix}setprefix_
     ⎪⌲👑 _${usedPrefix}resetprefix_
     ⎪⌲👑 _${usedPrefix}getfile_
     ⎪⌲👑 _${usedPrefix}getplugin_
     ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'groupmenu':
          lkr = `❀° ┄──•••───╮
          ГРУППОВОЕ МЕНЮ
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲💎_${usedPrefix}kick *<@tag>*_
    ⎪⌲💎_${usedPrefix}promote *<@tag>*_
    ⎪⌲💎 _${usedPrefix}demote *<@tag>*_
    ⎪⌲💎 _${usedPrefix}link_
    ⎪⌲💎 _${usedPrefix}setpp *<image>*_
    ⎪⌲💎 _${usedPrefix}setname *<text>*_
    ⎪⌲💎 _${usedPrefix}setdesc *<text>*_
    ⎪⌲💎 _${usedPrefix}setwelcome *<text>*_
    ⎪⌲💎 _${usedPrefix}setbye *<text>*_
    ⎪⌲💎 _${usedPrefix}hidetag *<text/image/audio/vid>*_
    ⎪⌲💎 _${usedPrefix}warn *<@tag>*_
    ⎪⌲💎 _${usedPrefix}unwarn *<@tag>*_
    ⎪⌲💎 _${usedPrefix}group *<open/close>*_
    ⎪⌲💎 _${usedPrefix}enable
    ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'downloadermenu':
            case 'dlmenu' :
          lkr = `❀° ┄──•••───╮
          ДЛ МЕНЮ
   ╰───•••──┄ °❀     
   ┏━━━ʕ•㉨•ʔ━━━┓
   ⎪⌲💎_${usedPrefix}play_
   ⎪⌲💎_${usedPrefix}song_
   ⎪⌲💎 _${usedPrefix}yta <link>_
   ⎪⌲💎 _${usedPrefix}ytv <link>_
   ⎪⌲💎 _${usedPrefix}ytmp3 <link>_
   ⎪⌲💎 _${usedPrefix}ytmp4 <link>_
   ⎪⌲💎 _${usedPrefix}tiktok <link>_
   ⎪⌲💎 _${usedPrefix}instagram <link>_
   ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'economymenu':
          lkr = `❀° ┄──•••───╮
          ЭКОНОМИЯ
   ╰───•••──┄ °❀     
   ┏━━━ʕ•㉨•ʔ━━━┓
   ⎪⌲👑 _${usedPrefix}claim/daily_
   ⎪⌲👑 _${usedPrefix}leaderboard_
   ⎪⌲👑 _${usedPrefix}bet_
   ⎪⌲👑 _${usedPrefix}heal_
   ⎪⌲👑 _${usedPrefix}craft_
   ⎪⌲👑 _${usedPrefix}balance_
   ⎪⌲👑 _${usedPrefix}shop_
   ⎪⌲👑 _${usedPrefix}adventure_
   ⎪⌲👑 _${usedPrefix}mine_
   ⎪⌲👑 _${usedPrefix}work_
   ⎪⌲👑 _${usedPrefix}todiamond_
   ⎪⌲👑 _${usedPrefix}tomoney_
   ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'funmenu':
          lkr = `❀° ┄──•••───╮
          ФАН
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲👑 _${usedPrefix}gay_
    ⎪⌲👑 _${usedPrefix}ship_
    ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'animemenu':
          lkr = `❀° ┄──•••───╮
          𝐴𝑁𝐼𝑀𝐸 𝑀𝐸𝑁𝑈
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲👑 _${usedPrefix}waifu_
    ⎪⌲👑 _${usedPrefix}neko_
    ⎪⌲👑 _${usedPrefix}loli_
    ⎪⌲👑 _${usedPrefix}couplepp_
    ⎪⌲👑 _${usedPrefix}toanime_
    ⎪⌲👑 _${usedPrefix}naruto_
    ⎪⌲👑 _${usedPrefix}itachi_
    ⎪⌲👑 _${usedPrefix}akira_
    ⎪⌲👑 _${usedPrefix}asuna_
    ⎪⌲👑 _${usedPrefix}akiyama_
    ⎪⌲👑 _${usedPrefix}boruto_
    ⎪⌲👑 _${usedPrefix}hornycard_
    ⎪⌲👑 _${usedPrefix}ayuzawa_
    ⎪⌲👑 _${usedPrefix}anna_
    ⎪⌲👑 _${usedPrefix}chiho_
    ⎪⌲👑 _${usedPrefix}chitoge_
    ⎪⌲👑 _${usedPrefix}deidara_
    ⎪⌲👑 _${usedPrefix}erza_
    ⎪⌲👑 _${usedPrefix}elaina_
    ⎪⌲👑 _${usedPrefix}emilia_
    ⎪⌲👑 _${usedPrefix}hestia_
    ⎪⌲👑 _${usedPrefix}hinata_
    ⎪⌲👑 _${usedPrefix}inori_
    ⎪⌲👑 _${usedPrefix}isuzu_
    ⎪⌲👑 _${usedPrefix}kagura_
    ⎪⌲👑 _${usedPrefix}kaori_
    ⎪⌲👑 _${usedPrefix}keneki_
    ⎪⌲👑 _${usedPrefix}kurumi_
    ⎪⌲👑 _${usedPrefix}madara_
    ⎪⌲👑 _${usedPrefix}mikasa_
    ⎪⌲👑 _${usedPrefix}miku_
    ⎪⌲👑 _${usedPrefix}minato_
    ⎪⌲👑 _${usedPrefix}nezuko_
    ⎪⌲👑 _${usedPrefix}sagiri_
    ⎪⌲👑 _${usedPrefix}sasuke_
    ⎪⌲👑 _${usedPrefix}sakura_
    ⎪⌲👑 _${usedPrefix}kotori_
    ┗━━━ʕ•㉨•ʔ━━━┛
    `; 
          break;
          case 'gamemenu':
          lkr = `❀° ┄──•••───╮
          ИГРОВОЕ МЕНЮ
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲👑 _${usedPrefix}slot_
    ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'stickermenu':
           lkr = `❀° ┄──•••───╮
           СТИКЕРЫ
     ╰───•••──┄ °❀     
     ┏━━━ʕ•㉨•ʔ━━━┓
     ⎪⌲👑 _${usedPrefix}sticker_
     ⎪⌲👑 _${usedPrefix}take_
     ⎪⌲👑 _${usedPrefix}emojimix_
     ⎪⌲👑 _${usedPrefix}ttp_
     ⎪⌲👑 _${usedPrefix}attp_
     ⎪⌲👑 _${usedPrefix}attp2_
     ⎪⌲👑 _${usedPrefix}attp3_
     ┗━━━ʕ•㉨•ʔ━━━┛`; 
          break;
          case 'toolmenu':
          lkr = `❀° ┄──•••───╮
          ИНСТРУМЕНТЫ
     ╰───•••──┄ °❀     
     ┏━━━ʕ•㉨•ʔ━━━┓
     ⎪⌲👑 _${usedPrefix}calc_
     ⎪⌲👑 _${usedPrefix}google_
     ⎪⌲👑 _${usedPrefix}lyrics_
     ⎪⌲👑 _${usedPrefix}ssweb_
     ⎪⌲👑 _${usedPrefix}tts_
     ⎪⌲👑 _${usedPrefix}translate_
     ⎪⌲👑 _${usedPrefix}wikipedia_
     ⎪⌲👑 _${usedPrefix}fancy_
     ⎪⌲👑 _${usedPrefix}weather_
     ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'nsfwmenu':
          lkr = `use command ${usedPrefix}nsfw`; // 
          break;
          case 'logomenu':
          lkr = `use ${usedPrefix}logo to see all options \ngfx cmd upto 12`; // 
          break;
        default:
          lkr = `Invalid command. Type ${usedPrefix}list to see available options.`;
      }
    
      conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] });
    
      let done = '👍';
      m.react(done);
    };
    
    handler.help = ['list', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'economymenu', 'funmenu', 'gamemenu', 'stickermenu', 'nsfwmenu', 'logomenu', 'toolmenu'];
    handler.tags = ['main'];
    handler.command = ['list', 'botmenu', 'ownermenu', 'groupmenu', 'dlmenu', 'downloadermenu', 'economymenu', 'funmenu', 'gamemenu', 'stickermenu', 'nsfwmenu', 'logomenu', 'toolmenu'];
    
    export default handler
    
