let handler = async (m, { conn, usedPrefix, command}) => {
      let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
      if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;
    
      let pp = './Guru.jpg';
      let more = String.fromCharCode(8206);
      let readMore = more.repeat(850); 
    
      let lkr;
      switch (command) {
        case 'лист':
lkr = "*Приготовься к чудесам, вот список меню:*\n\n" +
"🤖 *" + usedPrefix + "ботменю* - Панель управления ботом,ей может управлять только мой хозяин\n\n" +
"👑 *" + usedPrefix + "менювладельца* - Священый список только для избранных,для моего босса РИПА!\n\n" +
"🧑‍🤝‍🧑 *" + usedPrefix + "грменю* - Групповое меню для админов группы,эй админы пользуйтесь!\n\n" +
"📥 *" + usedPrefix + "згменю* - Меню загрузки,загружайте и ищите что хотите маленькие нигодяи!\n\n" +
"🎉 *" + usedPrefix + "фанменю* - Фан меню,найди себе пару или сделай из друга гея!\n\n" +
"💰 *" + usedPrefix + "экменю* - Меню экономики копай ресурсы и добывай опыт!\n\n" +
"🎮 *" + usedPrefix + "игменю* - Игры для тебя дружок,тут ты можешь поднять или профукать опыт!\n\n" +
"🎨 *" + usedPrefix + "сменю* - Стикеры,возможностей много попытайся понять все!\n\n" +
"🧰 *" + usedPrefix + "инменю* - Набор инструментов,каков твой выбор гений?\n\n" +
"🎩 *" + usedPrefix + "СКРЫТО* - Create a logo that screams YOU. Or whispers. You choose the volume.\n\n" +
"🌙 *" + usedPrefix + "СКРЫТО* - The After Dark menu. But remember, sharing adult secrets must be consent-based.";
break;

          
        
        

        case 'ботменю':
          lkr = `❀° ┄──•••───╮
          БОТ МЕНЮ  
   ╰───•••──┄ °❀     
   ┏━━━ʕ•㉨•ʔ━━━┓
   ⎪⌲👑 _${usedPrefix}_
   ⎪⌲👑 _${usedPrefix}пинг_
   ⎪⌲👑 _${usedPrefix}uptime_
   ⎪⌲👑 _${usedPrefix}bot_
   ⎪⌲👑 _${usedPrefix}владелец_
   ⎪⌲👑 _${usedPrefix}_
   ⎪⌲👑 _${usedPrefix}runtime_
   ⎪⌲👑 _${usedPrefix}инфо_
   ⎪⌲👑 _${usedPrefix}донат_
   ⎪⌲👑 _${usedPrefix}groups_
   ⎪⌲👑 _${usedPrefix}блоклист_
   ⎪⌲👑 _${usedPrefix}listprem_
   ⎪⌲👑    R.I.P
   ┗━━━ʕ•㉨•ʔ━━━┛`; // Your bot menu message here
          break;
        case 'менювладельца':
          lkr = `❀° ┄──•••───╮
          МЕНЮ БОССА  
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
          case 'грменю':
          lkr = `❀° ┄──•••───╮
          ГРУППОВОЕ МЕНЮ 
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲💎_${usedPrefix}кик *<@тег>*_
    ⎪⌲💎_${usedPrefix}повысить *<@тег>*_
    ⎪⌲💎 _${usedPrefix}понизить *<@тег>*_
    ⎪⌲💎 _${usedPrefix}инфогр_
    ⎪⌲💎 _${usedPrefix}_
    ⎪⌲💎 _${usedPrefix}ссылка_
    ⎪⌲💎 _${usedPrefix}сменитьаву *<фото>*_
    ⎪⌲💎 _${usedPrefix}сменить имя *<текст>*_
    ⎪⌲💎 _${usedPrefix}сменитьописание *<текст>*_
    ⎪⌲💎 _${usedPrefix}setwelcome *<текст>*_
    ⎪⌲💎 _${usedPrefix}setbye *<текст>*_
    ⎪⌲💎 _${usedPrefix}хайдтег *<текст/фото/аудио/видео>*_
    ⎪⌲💎 _${usedPrefix}варн *<@тег>*_
    ⎪⌲💎 _${usedPrefix}унварн *<@тег>*_
    ⎪⌲💎 _${usedPrefix}группа *<open/close>*_
    ⎪⌲💎 _${usedPrefix}enable
    ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'downloadermenu':
            case 'згменю' :
          lkr = `❀° ┄──•••───╮
          МЕНЮ ЗАГРУЗЧИК 
   ╰───•••──┄ °❀     
   ┏━━━ʕ•㉨•ʔ━━━┓
   ⎪⌲💎_${usedPrefix}поиск_ 
   ⎪⌲💎_${usedPrefix}песня_
   ⎪⌲💎 _${usedPrefix}юта <ссылка>_
   ⎪⌲💎 _${usedPrefix}ютв <ссылка>_
   ⎪⌲💎 _${usedPrefix}ютмп3 <ссылка>_
   ⎪⌲💎 _${usedPrefix}_
   ⎪⌲💎 _${usedPrefix}скрыто_
   ⎪⌲💎 _${usedPrefix}пинтерест_
   ⎪⌲💎 _${usedPrefix}скрыто <link>_
   ⎪⌲💎 _${usedPrefix}скрыто <link>_
   ⎪⌲💎 _${usedPrefix}скрыто <link>_
   ⎪⌲💎 _${usedPrefix}скрыто <link>_
   ⎪⌲💎 _${usedPrefix}тикток <ссылка>_
   ⎪⌲💎 _${usedPrefix}скрыто_
   ⎪⌲💎 _${usedPrefix}инстаграм <ссылка>_
   ⎪⌲💎 _${usedPrefix}спотифай_
   ⎪⌲💎 _${usedPrefix}скрыто<link>_
   ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'экменю':
          lkr = `❀° ┄──•••───╮
          ЭКОНОМИКА 
   ╰───•••──┄ °❀     
   ┏━━━ʕ•㉨•ʔ━━━┓
   ⎪⌲👑 _${usedPrefix}бонус/недельный/месячный_
   ⎪⌲👑 _${usedPrefix}скрыто_
   ⎪⌲👑 _${usedPrefix}уровень_
   ⎪⌲👑 _${usedPrefix}топ_
   ⎪⌲👑 _${usedPrefix}_
   ⎪⌲👑 _${usedPrefix}здоровье_
   ⎪⌲👑 _${usedPrefix}_
   ⎪⌲👑 _${usedPrefix}балик_
   ⎪⌲👑 _${usedPrefix}купить_
   ⎪⌲👑 _${usedPrefix}продать_
   ⎪⌲👑 _${usedPrefix}приключения_
   ⎪⌲👑 _${usedPrefix}передать_
   ⎪⌲👑 _${usedPrefix}копать_
   ⎪⌲👑 _${usedPrefix}работать_
   ⎪⌲👑 _${usedPrefix}донат_
   ⎪⌲👑 _${usedPrefix}купитькр_
   ⎪⌲👑 _${usedPrefix}_
   ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'фанменю':
          lkr = `❀° ┄──•••───╮
          ФАН МЕНЮ
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲👑 _${usedPrefix}характер_
    ⎪⌲👑 _${usedPrefix}топцветков_
    ⎪⌲👑 _${usedPrefix}топгеев_
    ⎪⌲👑 _${usedPrefix}охота_
    ⎪⌲👑 _${usedPrefix}гей_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}шип_
    ⎪⌲👑 _${usedPrefix}любовь_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}hornycard_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}тупость_
    ⎪⌲👑 _${usedPrefix}лоликон_
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
          case 'игменю':
          lkr = `❀° ┄──•••───╮
          ИГРОВОЕ МЕНЮ 
    ╰───•••──┄ °❀     
    ┏━━━ʕ•㉨•ʔ━━━┓
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ⎪⌲👑 _${usedPrefix}кнб_
    ⎪⌲👑 _${usedPrefix}слот_
    ⎪⌲👑 _${usedPrefix}ставка_
    ⎪⌲👑 _${usedPrefix}ттт_
    ⎪⌲👑 _${usedPrefix}скрыто_
    ┗━━━ʕ•㉨•ʔ━━━┛`; // 
          break;
          case 'сменю':
          lkr = `❀° ┄──•••───╮
          СТИКЕР МЕНЮ
     ╰───•••──┄ °❀     
     ┏━━━ʕ•㉨•ʔ━━━┓
     ⎪⌲👑 _${usedPrefix}с_
     ⎪⌲👑 _${usedPrefix}take_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}найтистики_
     ⎪⌲👑 _${usedPrefix}эмодзимикс_
     ⎪⌲👑 _${usedPrefix}сфото_
     ⎪⌲👑 _${usedPrefix}свидео_
     ⎪⌲👑 _${usedPrefix}ттп_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}аттп_
     ⎪⌲👑 _${usedPrefix}_
     ⎪⌲👑 _${usedPrefix}_
     ┗━━━ʕ•㉨•ʔ━━━┛`; 
          break;
          case 'инменю':
          lkr = `❀° ┄──•••───╮
          МЕНЮ ИНСТРУМЕНТОВ
     ╰───•••──┄ °❀     
     ┏━━━ʕ•㉨•ʔ━━━┓
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}калк_
     ⎪⌲👑 _${usedPrefix}гугл_
     ⎪⌲👑 _${usedPrefix}текст_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}_
     ⎪⌲👑 _${usedPrefix}ттс_
     ⎪⌲👑 _${usedPrefix}перевод_
     ⎪⌲👑 _${usedPrefix}скрыто_
     ⎪⌲👑 _${usedPrefix}вики_
     ⎪⌲👑 _${usedPrefix}nowa_
     ⎪⌲👑 _${usedPrefix}qrmaker_
     ⎪⌲👑 _${usedPrefix}readqr_
     ⎪⌲👑 _${usedPrefix}шрифт_
     ⎪⌲👑 _${usedPrefix}погода_
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
    handler.command = ['лист', 'ботменю', 'менювладельца', 'грменю', 'згменю', 'згменю', 'экменю', 'фанменю', 'игменю', 'сменю', 'nsfwmenu', 'logomenu', 'инменю'];
    
    export default handler
    
