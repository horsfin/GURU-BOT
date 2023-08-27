export async function all(m) {
	
  // when someone sends a group link to the bot's dm
  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('открой эту ссылку')) && !m.isBaileys && !m.isGroup) {
   this.sendMessage(m.chat,{text:`Привет @${m.sender.split('@')[0]}\nдружок\n\n_Я рип бот,для связи с владельцем_\n*напиши* \`\`\`.owner\`\`\` *чтобы получить контакт владельца*`.trim()}, {quoted:m});
   /*this.sendButton(m.chat, `*Invite bot to a group*      
    Hallo @${m.sender.split('@')[0]} 
    you can rent the bot to join a group or contact owner 
    more info click on the button
  `.trim(), igfg, null, [['Rent', '/buyprem']] , m, { mentions: [m.sender] })*/
   m.react('💎')
} 

 return !0
}
