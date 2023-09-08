
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      role: '🏅',
      level: '⬆️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  },
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    // this code make config.js to be a more understandable code
    const role = [
      { name: 'Воин V', level: 0 }, { name: 'Воин IV', level: 4 }, { name: 'Воин III', level: 8 }, { name: 'Воин II', level: 12 }, { name: 'Воин I', level: 16 },
      { name: 'Паладин V', level: 20 }, { name: 'Паладин IV', level: 24 }, { name: 'Паладин III', level: 28 }, { name: 'Паладин II', level: 32 }, { name: 'Паладин I', level: 36 },
      { name: 'Колдун V', level: 40 }, { name: 'Колдун IV', level: 44 }, { name: 'Колдун III', level: 48 }, { name: 'Колдун II', level: 52 }, { name: 'Колдун I', level: 56 },
      { name: 'Следопыт V', level: 60 }, { name: 'Следопыт IV', level: 64 }, { name: 'Следопыт III', level: 68 }, { name: 'Следопыт II', level: 72 }, { name: 'Следопыт I', level: 76 },
      { name: 'Маг V', level: 80 }, { name: 'Маг IV', level: 84 }, { name: 'Маг III', level: 88 }, { name: 'Маг II', level: 92 }, { name: 'Маг I', level: 96 },
      { name: 'Священник V', level: 100 }, { name: 'Священник IV', level: 104 }, { name: 'Священник III', level: 108 }, { name: 'Священник II', level: 112 }, { name: 'Священник I', level: 116 },
      { name: 'Вор V', level: 120 }, { name: 'Вор IV', level: 124 }, { name: 'Вор III', level: 128 }, { name: 'Вор II', level: 132 }, { name: 'Вор I', level: 136 },
      { name: 'Убийца V', level: 140 }, { name: 'Убийца IV', level: 144 }, { name: 'Убийца III', level: 148 }, { name: 'Убийца II', level: 152 }, { name: 'Убийца I', level: 156 },
      { name: 'Монах V', level: 160 }, { name: 'Монах IV', level: 164 }, { name: 'Монах III', level: 168 }, { name: 'Монах II', level: 172 }, { name: 'Монах I', level: 176 },
{ name: 'Бард V', level: 180 }, { name: 'Бард IV', level: 184 }, { name: 'Бард III', level: 188 }, { name: 'Бард II', level: 192 }, { name: 'Бард I', level: 196 },
{ name: 'Некромант V', level: 200 }, { name: 'Некромант IV', level: 204 }, { name: 'Некромант III', level: 208 }, { name: 'Некромант II', level: 212 }, { name: 'Некромант I', level: 216 },
{ name: 'Чернокнижник V', level: 220 }, { name: 'Чернокнижник IV', level: 224 }, { name: 'Чернокнижник III', level: 228 }, { name: 'Чернокнижник II', level: 232 }, { name: 'Чернокнижник I', level: 236 },
{ name: 'Волшебник V', level: 240 }, { name: 'Волшебник IV', level: 244 }, { name: 'Волшебник III', level: 248 }, { name: 'Волшебник II', level: 252 }, { name: 'Волшебник I', level: 256 },
{ name: 'Мудрец V', level: 260 }, { name: 'Мудрец IV', level: 264 }, { name: 'Мудрец III', level: 268 }, { name: 'Мудрец II', level: 272 }, { name: 'Мудрец I', level: 276 },
{ name: 'Богомол V', level: 280 }, { name: 'Богомол IV', level: 284 }, { name: 'Богомол III', level: 288 }, { name: 'Богомол II', level: 292 }, { name: 'Богомол I', level: 296 },
{ name: 'Изгой V', level: 300 }, { name: 'Изгой IV', level: 304 }, { name: 'Изгой III', level: 308 }, { name: 'Изгой II', level: 312 }, { name: 'Изгой I', level: 316 },
{ name: 'Драчун V', level: 320 }, { name: 'Драчун IV', level: 324 }, { name: 'Драчун III', level: 328 }, { name: 'Драчун II', level: 332 }, { name: 'Драчун I', level: 336 },
{ name: 'Лучник V', level: 340 }, { name: 'Лучник IV', level: 344 }, { name: 'Лучник III', level: 348 }, { name: 'Лучник II', level: 352 }, { name: 'Лучник I', level: 356 },
{ name: 'Снайпер V', level: 360 }, { name: 'Снайпер IV', level: 364 }, { name: 'Снайпер III', level: 368 }, { name: 'Снайпер II', level: 372 }, { name: 'Снайпер I', level: 376 },
{ name: 'Ниндзя V', level: 380 }, { name: 'Ниндзя IV', level: 384 }, { name: 'Ниндзя III', level: 388 }, { name: 'Ниндзя II', level: 392 }, { name: 'Ниндзя I', level: 396 },
{ name: 'Самурай V', level: 400 }, { name: 'Самурай IV', level: 404 }, { name: 'Самурай III', level: 408 }, { name: 'Самурай II', level: 412 }, { name: 'Самурай I', level: 416 },
{ name: 'Берсеркер V', level: 420 }, { name: 'Берсеркер IV', level: 424 }, { name: 'Берсеркер III', level: 428 }, { name: 'Берсеркер II', level: 432 }, { name: 'Берсеркер I', level: 436 },
{ name: 'Легенда V', level: 440 }, { name: 'Легенда IV', level: 444 }, { name: 'Легенда III', level: 448 }, { name: 'Легенда II', level: 452 }, { name: 'Легенда I', level: 456 },
{ name: 'Чемпион V', level: 460 }, { name: 'Чемпион IV', level: 464 }, { name: 'Чемпион III', level: 468 }, { name: 'Чемпион II', level: 472 }, { name: 'Чемпион I', level: 476 },
{ name: 'Грандмастер V', level: 480 }, { name: 'Грандмастер IV', level: 484 }, { name: 'Грандмастер III', level: 488 }, { name: 'Грандмастер II', level: 492 }, { name: 'Грандмастер I', level: 496 },
{ name: 'Старейшина V', level: 500 }, { name: 'Старейшина IV', level: 504 }, { name: 'Старейшина III', level: 508 }, { name: 'Старейшина II', level: 512 }, { name: 'Старейшина I', level: 516 },
{ name: 'Бессмертный V', level: 520 }, { name: 'Бессмертный IV', level: 524 }, { name: 'Бессмертный III', level: 528 }, { name: 'Бессмертный II', level: 532 }, { name: 'Бессмертный I', level: 536 },
{ name: 'Нефелем V', level: 540 }, { name: 'Нефелем IV', level: 544 }, { name: 'Нефелем III', level: 548 }, { name: 'Нефелем II', level: 552 }, { name: 'Нефелем I', level: 556 },
{ name: 'Вечный V', level: 560 }, { name: 'Вечный IV', level: 564 }, { name: 'Вечный III', level: 568 }, { name: 'Вечный II', level: 572 }, { name: 'Вечный I', level: 576 },
{ name: 'Нептун V', level: 580 }, { name: 'Нептун IV', level: 584 }, { name: 'Нептун III', level: 588 }, { name: 'Нептун II', level: 592 }, { name: 'Нептун I', level: 596 },
{ name: 'Плутон V', level: 600 }, { name: 'Плутон IV', level: 604 }, { name: 'Плутон III', level: 608 }, { name: 'Плутон II', level: 612 }, { name: 'Плутон I', level: 616 },
{ name: 'Эрида V', level: 620 }, { name: 'Эрида IV', level: 624 }, { name: 'Эрида III', level: 628 }, { name: 'Эрида II', level: 632 }, { name: 'Эрида I', level: 636 },
{ name: 'Восхождение V', level: 640 }, { name: 'Восхождение IV', level: 644 }, { name: 'Восхождение III', level: 648 }, { name: 'Восхождение II', level: 652 }, { name: 'Восхождение I', level: 656 },
{ name: 'Элизиум V', level: 660 }, { name: 'Элизиум IV', level: 664 }, { name: 'Элизиум III', level: 668 }, { name: 'Элизиум II', level: 672 }, { name: 'Элизиум I', level: 676 },
{ name: 'Эфир V', level: 680 }, { name: 'Эфир IV', level: 684 }, { name: 'Эфир III', level: 688 },{ name: 'Эзер II', level: 692 }, { name: 'Эзер I', level: 696 },
{ name: 'Гея V', level: 700 }, { name: 'Гея IV', level: 704 }, { name: 'Гея III', level: 708 }, { name: 'Гея II', level: 712 }, { name: 'Гея I', level: 716 },
{ name: 'Аид V', level: 720 }, { name: 'Аид IV', level: 724 }, { name: 'Аид III', level: 728 }, { name: 'Аид II', level: 732 }, { name: 'Аид I', level: 736 },
{ name: 'Хеймдалл V', level: 740 }, { name: 'Хеймдалл IV', level: 744 }, { name: 'Хеймдалл III', level: 748 }, { name: 'Хеймдалл II', level: 752 }, { name: 'Хеймдалл I', level: 756 },
{ name: 'Гиперион V', level: 760 }, { name: 'Гиперион IV', level: 764 }, { name: 'Гиперион III', level: 768 }, { name: 'Гиперион II', level: 772 }, { name: 'Гиперион I', level: 776 },
{ name: 'Ирис V', level: 780 }, { name: 'Ирис IV', level: 784 }, { name: 'Ирис III', level: 788 }, { name: 'Ирис II', level: 792 }, { name: 'Ирис I', level: 796 },
{ name: 'Юпитер V', level: 800 }, { name: 'Юпитер IV', level: 804 }, { name: 'Юпитер III', level: 808 }, { name: 'Юпитер II', level: 812 }, { name: 'Юпитер I', level: 816 },
{ name: 'Кронос V', level: 820 }, { name: 'Кронос IV', level: 824 }, { name: 'Кронос III', level: 828 }, { name: 'Кронос II', level: 832 }, { name: 'Кронос I', level: 836 },
{ name: 'Лилит V', level: 840 }, { name: 'Лилит IV', level: 844 }, { name: 'Лилит III', level: 848 }, { name: 'Лилит II', level: 852 }, { name: 'Лилит I', level: 856 },
{ name: 'Мельстром V', level: 860 }, { name: 'Мельстром IV', level: 864 }, { name: 'Мельстром III', level: 868 }, { name: 'Мельстром II', level: 872 }, { name: 'Мельстром I', level: 876 },
{ name: 'Нова V', level: 880 }, { name: 'Нова IV', level: 884 }, { name: 'Нова III', level: 888 }, { name: 'Нова II', level: 892 }, { name: 'Нова I', level: 896 },
{ name: 'Один V', level: 900 }, { name: 'Один IV', level: 904 }, { name: 'Один III', level: 908 }, { name: 'Один II', level: 912 },
 { name: 'Один I', level: 916 },{ name: 'Осирис V', level: 920 }, { name: 'Осирис IV', level: 924 }, { name: 'Осирис III', level: 928 }, { name: 'Осирис II', level: 932 }, { name: 'Осирис I', level: 936 },
{ name: 'Посейдон V', level: 940 }, { name: 'Посейдон IV', level: 944 }, { name: 'Посейдон III', level: 948 }, { name: 'Посейдон II', level: 952 }, { name: 'Посейдон I', level: 956 },
{ name: 'Рагнарок V', level: 960 }, { name: 'Рагнарок IV', level: 964 }, { name: 'Рагнарок III', level: 968 }, { name: 'Рагнарок II', level: 972 }, { name: 'Рагнарок I', level: 976 },
{ name: 'Сатурн V', level: 980 }, { name: 'Сатурн IV', level: 984 }, { name: 'Сатурн III', level: 988 }, { name: 'Сатурн II', level: 992 }, { name: 'Сатурн I', level: 996 },
{ name: 'Титан V', level: 1000 }, { name: 'Титан IV', level: 1004 }, { name: 'Титан III', level: 1008 }, { name: 'Титан II', level: 1012 }, { name: 'Титан I', level: 1016 },
{ name: 'Уран V', level: 1020 }, { name: 'Уран IV', level: 1024 }, { name: 'Уран III', level: 1028 }, { name: 'Уран II', level: 1032 }, { name: 'Уран I', level: 1036 },
{ name: 'Венера V', level: 1040 }, { name: 'Венера IV', level: 1044 }, { name: 'Венера III', level: 1048 }, { name: 'Венера II', level: 1052 }, { name: 'Венера I', level: 1056 },
{ name: 'Зевс V', level: 1060 }, { name: 'Зевс IV', level: 1064 }, { name: 'Зевс III', level: 1068 }, { name: 'Зевс II', level: 1072 }, { name: 'Зевс I', level: 1076 },
    ]

    return role.reverse().find(role => level >= role.level)
  }
}
