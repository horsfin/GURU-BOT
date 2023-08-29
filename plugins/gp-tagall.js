let lastTagallTime = new Map(); // добавляем новую переменную для хранения последнего времени использования команды

let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let currentTime = Date.now(); // получаем текущее время
    let cooldownTime = 24 * 60 * 60 * 1000; // устанавливаем время охлаждения в 24 часа

    let groupId = m.chat; // получаем идентификатор группы

    if (lastTagallTime.has(groupId)) { // проверяем, использовалась ли команда ранее в этой группе
        let lastTime = lastTagallTime.get(groupId); // получаем последнее время использования команды

        if (currentTime - lastTime < cooldownTime) { // проверяем, прошло ли уже время охлаждения
            let remainingTime = cooldownTime - (currentTime - lastTime); // вычисляем оставшееся время охлаждения
            let remainingHours = Math.floor(remainingTime / (1000 * 60 * 60)); // вычисляем оставшееся количество часов
            let remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)); // вычисляем оставшееся количество минут

            m.reply(`Извините, но вы можете использовать эту команду только раз в сутки. Попробуйте еще раз через ${remainingHours} ч. ${remainingMinutes} мин.`); // отправляем сообщение с оставшимся временем
            return; // прекращаем выполнение команды
        }
    }

    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid);
    m.reply(`▢ Группа: *${groupMetadata.subject}*\n▢ Участники: *${participants.length}*${text ? `\n▢ Сообщение: ${text}\n` : ''}\n┌───⊷ *Упоминания*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ RIP ┃ ᴮᴼᵀ ✪──', null, {
        mentions: users
    });

    lastTagallTime.set(groupId, currentTime); // обновляем время последнего использования команды
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
```

