let handler = async (m, { conn, usedPrefix, command}) => {
      let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;
    
      let pp = './Guru.jpg';
      let more = String.fromCharCode(8206);
      let readMore = more.repeat(850); 
    
      let lkr;
      switch (command) {
        case 'list':
lkr = "*Приготовься к чудесам, вот список меню:*\n\n" +
"🤖 *" + usedPrefix + "botmenu* - Панель управления ботом,ей может управлять только мой хозяин\n\n" +
"👑 *" + usedPrefix + "ownermenu* - Священый список только для избранных,для моего босса РИПА!\n\n" +
"🧑‍🤝‍🧑 *" + usedPrefix + "groupmenu* - Групповое меню для админов группы,эй админы пользуйтесь!\n\n" +
"📥 *" + usedPrefix + "dlmenu* - Меню загрузки,загружайте и ищите что хотите маленькие нигодяи!\n\n" +
"🎉 *" + usedPrefix + "funmenu* - Фан меню,найди себе пару или сделай из друга гея!\n\n" +
"💰 *" + usedPrefix + "economymenu* - Меню экономики копай ресурсы и добывай опыт!\n\n" +
"🎮 *" + usedPrefix + "gamemenu* - Игры для тебя дружок,тут ты можешь поднять или профукать опыт!\n\n" +
"🎨 *" + usedPrefix + "stickermenu* - Стикеры,возможностей много попытайся понять все!\n\n" +
"🧰 *" + usedPrefix + "toolmenu* - Набор инструментов,каков твой выбор гений?\n\n" +
"🎩 *" + usedPrefix + "СКРЫТО* - Create a logo that screams YOU. Or whispers. You choose the volume.\n\n" +
"🌙 *" + usedPrefix + "СКРЫТО* - The After Dark menu. But remember, sharing adult secrets must be consent-based.";
break;

          
        
        

        case 'botmenu':
          lkr = `❀° ┄──•••───╮
          𝘽𝙊𝙏 𝙈𝙀𝙉𝙐  
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
   ⎪⌲👑    R.I.P
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
          𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲💎_${usedPrefix}kick *<@тег>*_
    ⎪⌲💎_${usedPrefix}promote *<@тег>*_
    ⎪⌲💎 _${usedPrefix}demote *<@тег>*_
    ⎪⌲💎 _${usedPrefix}infogroup_
    ⎪⌲💎 _${usedPrefix}resetlink_
    ⎪⌲💎 _${usedPrefix}link_
    ⎪⌲💎 _${usedPrefix}setpp *<фото>*_
    ⎪⌲💎 _${usedPrefix}setname *<текст>*_
    ⎪⌲💎 _${usedPrefix}setdesc *<текст>*_
    ⎪⌲💎 _${usedPrefix}setwelcome *<текст>*_
    ⎪⌲💎 _${usedPrefix}setbye *<текст>*_
    ⎪⌲💎 _${usedPrefix}hidetag *<текст/фото/аулио/видео>*_
    ⎪⌲💎 _${usedPrefix}warn *<@тег>*_
    ⎪⌲💎 _${usedPrefix}unwarn *<@тег>*_
    ⎪⌲💎 _${usedPrefix}group *<open/close>*_
    ⎪⌲💎 _${usedPrefix}enable
    ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'downloadermenu':
            case 'dlmenu' :
          lkr = `❀° ┄──•••───╮
          𝘿𝙇 𝙈𝙀𝙉𝙐 
   ╰───•••──┄ °❀     
   ┏━━━ʕ•㉨•ʔ━━━┓
   ⎪⌲💎_${usedPrefix}play_ 
   ⎪⌲💎_${usedPrefix}song_
   ⎪⌲💎 _${usedPrefix}yta <ссылка>_
   ⎪⌲💎 _${usedPrefix}ytv <ссылка>_
   ⎪⌲💎 _${usedPrefix}ytmp3 <ссылка>_
   ⎪⌲💎 _${usedPrefix}ytmp4 <ссылка>_
   ⎪⌲💎 _${usedPrefix}скрыто_
   ⎪⌲💎 _${usedPrefix}pinterest_
   ⎪⌲💎 _${usedPrefix}скрыто <link>_
   ⎪⌲💎 _${usedPrefix}скрыто <link>_
   ⎪⌲💎 _${usedPrefix}скрыто <link>_
   ⎪⌲💎 _${usedPrefix}скрыто <link>_
   ⎪⌲💎 _${usedPrefix}tiktok <ссылка>_
   ⎪⌲💎 _${usedPrefix}скрыто_
   ⎪⌲💎 _${usedPrefix}instagram <ссылка>_
   ⎪⌲💎 _${usedPrefix}spotify_
   ⎪⌲💎 _${usedPrefix}скрыто<link>_
   ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'economymenu':
          lkr = `❀° ┄──•••───╮
          𝙀𝘾𝙊𝙉𝙊𝙈𝙔 
   ╰───•••──┄ °❀     
   ┏━━━ʕ•㉨•ʔ━━━┓
   ⎪⌲👑 _${usedPrefix}claim/daily_
   ⎪⌲👑 _${usedPrefix}скрыто_
   ⎪⌲👑 _${usedPrefix}скрыто_
   ⎪⌲👑 _${usedPrefix}leaderboard_
   ⎪⌲👑 _${usedPrefix}bet_
   ⎪⌲👑 _${usedPrefix}heal_
   ⎪⌲👑 _${usedPrefix}craft_
   ⎪⌲👑 _${usedPrefix}balance_
   ⎪⌲👑 _${usedPrefix}shop_
   ⎪⌲👑 _${usedPrefix}sell_
   ⎪⌲👑 _${usedPrefix}adventure_
   ⎪⌲👑 _${usedPrefix}opencrate_
   ⎪⌲👑 _${usedPrefix}mine_
   ⎪⌲👑 _${usedPrefix}work_
   ⎪⌲👑 _${usedPrefix}скрыто_
   ⎪⌲👑 _${usedPrefix}todiamond_
   ⎪⌲👑 _${usedPrefix}tomoney_
   ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'funmenu':
          lkr = `❀° ┄──•••───╮
          𝙁𝙐𝙉 𝙈𝙀𝙉𝙐
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲👑 _${usedPrefix}character_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}gay_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}ship_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}hornycard_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}stupid_
    ⎪⌲👑 _${usedPrefix}lolicon_
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
          𝙂𝘼𝙈𝙀 𝙈𝙀𝙉𝙐 
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}ppt_
    ⎪⌲👑 _${usedPrefix}slot_
    ⎪⌲👑 _${usedPrefix}casino_
    ⎪⌲👑 _${usedPrefix}ttt_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'stickermenu':
          lkr = `❀° ┄──•••───╮
          𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐
     ╰───•••──┄ °❀     
     ┏━━━ʕ•㉨•ʔ━━━┓
     ⎪⌲👑 _${usedPrefix}sticker_
     ⎪⌲👑 _${usedPrefix}take_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}getsticker_
     ⎪⌲👑 _${usedPrefix}emojimix_
     ⎪⌲👑 _${usedPrefix}toimg_
     ⎪⌲👑 _${usedPrefix}tovid_
     ⎪⌲👑 _${usedPrefix}ttp_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}attp_
     ⎪⌲👑 _${usedPrefix}attp2_
     ⎪⌲👑 _${usedPrefix}attp3_
     ┗━━━ʕ•㉨•ʔ━━━┛`; 
          break;
          case 'toolmenu':
          lkr = `❀° ┄──•••───╮
          𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐
     ╰───•••──┄ °❀     
     ┏━━━ʕ•㉨•ʔ━━━┓
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}calc_
     ⎪⌲👑 _${usedPrefix}google_
     ⎪⌲👑 _${usedPrefix}lyrics_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}ssweb_
     ⎪⌲👑 _${usedPrefix}tts_
     ⎪⌲👑 _${usedPrefix}translate_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}wikipedia_
     ⎪⌲👑 _${usedPrefix}nowa_
     ⎪⌲👑 _${usedPrefix}qrmaker_
     ⎪⌲👑 _${usedPrefix}readqr_
     ⎪⌲👑 _${usedPrefix}fancy_
     ⎪⌲👑 _${usedPrefix}weather_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}tinyurl/shorturl_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}true_
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
    
