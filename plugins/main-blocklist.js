
let handler = async (m, { conn }) => {
	
	await conn.fetchBlocklist().then(async data => {
		let txt = `*≡ ЛИСТ *\n\n*ВСЕГО :* ${data.length}\n\n┌─⊷\n`
		for (let i of data) {
			txt += `▢ @${i.split("@")[0]}\n`
		}
		txt += "└───────────"
		return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
	}).catch(err => {
		console.log(err);
		throw 'нет номеров блока'
	})
}

handler.help = ['blocklist']
handler.tags = ['main']
handler.command = ['блоклист', 'listblock'] 

export default handler
