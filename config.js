/**
 * Base By Dika Ardnt.
 * Recode By GuaAbuzz
 * Kalau Mau Recode, Edit Aja Di confiq.js
 * Contact Me On wa.me/6289636827082
 * Follow https://github.com/Abuzzpoet
 */

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
    //gausah di apa² in!
    zenz: 'https://zenzapis.xyz',
    botz: 'https://betabotz-api.herokuapp.com',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
    //gausah di apa² in, Udah Free kok :)
    'https://zenzapis.xyz': 'akame-chan>_<',
    'https://betabotz-api.herokuapp.com': 'BetaBotz',
}

//—————「 Set Nama Bot & Own 」—————//
//terserah mau ubah atau nggak
global.namabot = 'Felicity-MD'
global.namaowner = 'thisiszam'

//—————「 Setting Owner 」—————//
//terserah mau ubah atau nggak
global.owner = ['6281389368689']
global.premium = ['6281389368689']

//—————「 Setting Nomor Donasi 」—————//
//ubah aja kalau ada yg gapunya kasih tanda -
global.telkomsel = ['6281389368689']
global.xl = ['-']
global.indosat = ['-']
global.tri = ['6289530417506']
global.smartfren = ['-']
global.gopay = ['6281389368689']
global.dana = ['6281389368689']
global.ovo = ['6281389368689']
global.saweria = ['-']

//—————「 Set Kebutuhan Button 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :)
global.github = 'https://github.com/AzamXd'
global.myweb = 'https://tiktok.com/@thisiszam.prst'

//—————「 Set Wm 」—————//
//terserah mau ubah atau nggak
global.packname = 'thisis'
global.author = 'zam'

//—————「 Set Nama Session 」—————//
//gausah di apa² ini!
global.sessionName = 'session'

//—————「 Set Prefix 」—————//
//gausah di apa² ini!
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']

//—————「 Set Simbol 」—————//
//terserah mau ubah atau nggak
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: 'Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: 'Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak
global.limitawal = {
    premium: "Infinity",
    free: 100,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/Elemen Baru 67 [4884344].png')
global.visoka = { url: 'https://telegra.ph/file/de381b0caeb315a99c68a.mp4' }

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
