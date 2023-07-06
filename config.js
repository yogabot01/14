/**
   * Create By THE JO BOT
   * Base by Dika Ardnt
*/

const fs = require('fs')
const chalk = require('chalk')

require("./lib/vn")
require("./src/tiktok")
require("./src/messages")
global.lopyu = ["Lopyu","lopyu","Lop yu","lop yu","Love You","love you","I Love You","I love you","i love you","Love you","Alapyu","alapyu"]
global.waktusapa = ["Pagi","pagi","Selamat pagi","selamat pagi","Slamat pagi","slamat pagi","Met pagi","met pagi","Siang","siang","Selamat siang","selamat siang","Slamat siang","slamat siang","Met siang","met siang","Malam","malam","mlm","Mlm","Selamat malam","Selamat malam","selamat malam","Slamat malam","slamat malam","Met malam","met malam","slamat mlm","met mlm","Met mlm"]
global.sapabot = ["Hi","hi","Hy","hy","Hai","hai","Bot","bot","Botz","botz","Bots","bots","Halo","halo","Loha","loha","Hola","hola","Bro","bro","Brow","brow","Hey","hey","Ada bot?","ada bot?","Bng","bng","Bg","bg","Bang","bang","Abang","abang","Kak","kak","Kk","kk"]
global.bad = ["asu","Asu","asw","Asw","Ajg","ajg","Anjing","anjing","Bajingan","bajingan","Bjingan","bjingan","Babi","babi","Bacot","bacot","Bcot","bcot","Cacat","cacat","Jancok","jancok","Jncok","jncok","Kontol","kontol","Kntl","kntl","KONTOL","kirek","Kirek","Lonte","lonte","Lnte","lnte","Memek","memek","Mmek","mmek","Pler","pler","Silet","Silit","silit","Silet","Tai","tai","Taek","taek","coeg","Bangsat","Tolol","Goblok","Gblk","Mmk","bangsat","goblok","tolol","peler","gblk","mmk","bgst","bngst"]
global.ownername = 'THE JO BOT'
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)
// Other
global.owner = ['60177426853','60177426853','60177426853']
global.creator = "60197063709@s.whatsapp.net"
global.premium = ['60177426853']
global.packname = 'The Jo Bot'
global.author = 'WhatsApp Bot'
global.wlcm = []
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = { url: 'https://telegra.ph/file/313cd5e07455d25a8db88.jpg'}
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
