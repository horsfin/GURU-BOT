
let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/image/.test(mime)) {
    let img = await q.download()
    if (!img) throw '*Реплани фото командой.*'
    await conn.updateProfilePicture(m.chat, img).then(_ => m.reply('Изображение установлено._*'))
    } else throw '*ОТВЕТЬ НА ИЗОБРАЖЕНИЕ.*'}
    handler.command = /^setpp(group|grup|gc)?$/i
    handler.group = true
    handler.admin = true
    handler.botAdmin = true
    export default handler
