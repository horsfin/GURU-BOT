/*
DON'T MODIFY THIS CODE
This code is responsible for handling donation related commands..
*/
let handler = async(m, { conn, usedPrefix, command }) => {
    console.log(`Command received: ${command}`);

    let message = `
*Привет, я ценю вашу поддержку! 🙏*
    
// Если хочешь закинуть деньжат владельцу и купить xp или кристалы, то пиши команду /owner для связи с владельцем!`;

    let img = 'https://i.postimg.cc/qBNB6LwK/barbaric-horse-killing-France.jpg'; 

    console.log("Sending message and image...");
    await conn.sendFile(m.chat, img, 'donation.jpg', message, m, false, rpyp);
    console.log("Message and image sent.");
};

handler.help = ['Donate'];
handler.tags = ['Main'];
handler.command = ['donate', 'support', 'contribute'];

export default handler;
