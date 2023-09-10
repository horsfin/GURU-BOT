let handler = async (m, { conn, isAdmin }) => { 
   if (m.fromMe) throw 'Nggk' 
   if (isAdmin) throw `*пам-пам-пам*` 
   await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote") 
 } 
 handler.command = /^admin.|atad|autoadmin$/i 
 handler.rowner = true 
 handler.botAdmin = true 
 export default handler