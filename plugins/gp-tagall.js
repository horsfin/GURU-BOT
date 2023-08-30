const lastUsed = {}; // Объект для хранения времени последнего использования команды для каждой группы

let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    const groupId = m.chat; // Получаем идентификатор группы
    const currentTime = Date.now();

    // Проверяем, когда была последний раз использована команда в этой группе
    const lastUsageTime = lastUsed[groupId] || 0;

    // Проверяем, прошло ли уже 24 часа с момента последнего использования
    if (currentTime - lastUsageTime < 24 * 60 * 60 * 1000) {
        throw '❌ Эту команду можно использовать раз в сутки.';
    }

    // Если все в порядке, продолжаем выполнение команды
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid);
    m.reply(`▢ Группа : *${groupMetadata.subject}*\n▢ Участники : *${participants.length}*${text ? `\n▢ Сообщение : ${text}\n` : ''}\n┌───⊷ *Упоминание*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ R.I.P ┃ ᴮᴼᵀ ✪──', null, {
        mentions: users
    });

    // Обновляем время последнего использования команды для этой группы
    lastUsed[groupId] = currentTime;
}

handler.help = ['tagall'];
handler.tags = ['group'];
handler.command = ['tagall'];
handler.admin = true;
handler.group = true;

export default handler;
