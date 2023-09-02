import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {

  let pingMsg = await conn.sendMessage(m.chat, {text: 'пинг...'})

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {

    let latency = (speed() - timestamp).toFixed(4)

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `понг! скорость: ${latency} мс` 
        }
      }
    }, {})

  })

}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['пинг', 'speed'] 

export default handler
