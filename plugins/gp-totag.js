// Создайте объект, чтобы отслеживать время последнего использования команды для каждого пользователя
const lastUsed = {};

let handler = async (m, { conn, text, participants }) => {
    const userId = m.sender; // Получаем идентификатор отправителя команды

    // Проверяем, когда была последний раз использована команда для этого пользователя
    const lastUsageTime = lastUsed[userId] || 0;
    const currentTime = Date.now();
    
    // Проверяем, прошло ли уже 24 часа с момента последнего использования
    if (currentTime - lastUsageTime < 24 * 60 * 60 * 1000) {
        throw '❌ Вы можете использовать эту команду только раз в сутки.';
    }

    // Если все в порядке, продолжаем выполнение команды
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid);
    if (!m.quoted) throw '✳️ Reply to a message';
    
    conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users });

    // Обновляем время последнего использования команды для пользователя
    lastUsed[userId] = currentTime;
};

handler.help = ['totag'];
handler.tags = ['group'];
handler.command = /^(totag|tag)$/i;
handler.admin = true;
handler.group = true;

export default handler;
