import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*Укажите место для поиска*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "°C"
const Minimum_Temperature = res.data.main.temp_min + "°C"
const Maximum_Temperature = res.data.main.temp_max + "°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `「 📍 」МЕСТО: ${name}\n「 🗺️ 」CТРАНА: ${Country}\n「 🌤️ 」ВИД: ${Weather}\n「 🌡️ 」ТЕМПЕРАТУРА: ${Temperature}\n「 💠 」 МИНИМУМ ТЕМПЕРАТУРЫ: ${Minimum_Temperature}\n「 📛 」 МАКСИМУМ ТЕМПЕРАТУРЫ: ${Maximum_Temperature}\n「 💦 」ВЛАЖНОСТЬ: ${Humidity}\n「 🌬️ 」 СКОРОСТЬ ВЕТРА: ${Wind}`
m.reply(wea)
} catch {
return "*ERROR*"}}
handler.help = ['climate *<place>*']
handler.tags = ['herramientas']
handler.command = /^(climate|weather)$/i
export default handler
