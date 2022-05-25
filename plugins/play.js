const Bixby  = require('../events');

const {MessageType,Mimetype} = require('@adiwajshing/baileys');

const translatte = require('translatte');

const config = require('../config');

const LanguageDetect = require('languagedetect');

const lngDetector = new LanguageDetect();

const Heroku = require('heroku-client');

const heroku = new Heroku({

    token: config.HEROKU.API_KEY

});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

//============================== LYRICS =============================================

const axios = require('axios');

const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");

const solenolyrics= require("solenolyrics"); 

//============================== CURRENCY =============================================

const { exchangeRates } = require('exchange-rates-api');

const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')

//============================== TTS ==================================================

const fs = require('fs');

const https = require('https');

const googleTTS = require('google-translate-tts');

//=====================================================================================

//============================== YOUTUBE ==============================================

const ytdl = require('ytdl-core');

const ffmpeg = require('fluent-ffmpeg');

const yts = require( 'yt-search' )

const got = require("got");

const ID3Writer = require('browser-id3-writer');

const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({

    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',

    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'

});

//=====================================================================================

const Language = require('../language');

const Lang = Language.getString('scrapers');

const Glang = Language.getString('github');

const Slang = Language.getString('lyrics');

const Clang = Language.getString('amazone');

const wiki = require('wikijs').default;

var gis = require('g-i-s');

var dlang_dsc = ''

var closer_res = ''

var dlang_lang = ''

var dlang_similarity = ''

var dlang_other = ''

var dlang_input = ''

if (config.LANG == 'TR') {

    dlang_dsc = 'Yanıtlanan mesajın dilini tahmin eder.'

    closer_res = 'En Yakın Sonuç:'

    dlang_lang = 'Dil:'

    dlang_similarity = 'Benzerlik:'

    dlang_other = 'Diğer Diller'

    dlang_input = 'İşlenen Metin:'

}

if (config.LANG == 'EN') {

    dlang_dsc = 'Guess the language of the replied message.'

    closer_res = 'Closest Result:'

    dlang_lang = 'Language:'

    dlang_similarity = 'Similarity:'

    dlang_other = 'Other Languages'

    dlang_input = 'Processed Text:'

}

if (config.LANG == 'AZ') {

    dlang_dsc = 'Cavablanan mesajın dilini təxmin edin.'

    closer_res = 'Ən yaxın nəticə:'

    dlang_lang = 'Dil:'

    dlang_similarity = 'Bənzərlik:'

    dlang_other = 'Başqa Dillər'

    dlang_input = 'İşlənmiş Mətn:'

}

if (config.LANG == 'ML') {

    dlang_dsc = 'മറുപടി നൽകിയ സന്ദേശത്തിന്റെ ഭാഷ ess ഹിക്കുക.'

    closer_res = 'ഏറ്റവും അടുത്ത ഫലം:'

    dlang_lang = 'നാവ്:'

    dlang_similarity = 'സമാനത:'

    dlang_other = 'മറ്റ് ഭാഷകൾ'

    dlang_input = 'പ്രോസസ്സ് ചെയ്ത വാചകം:'

}

if (config.LANG == 'HI') {

    dlang_dsc = 'उत्तर दिए गए संदेश की भाषा का अनुमान लगाएं'

    closer_res = 'निकटतम परिणाम:'

    dlang_lang = 'जुबान:'

    dlang_similarity = 'समानता:'

    dlang_other = 'अन्य भाषाएँ'

    dlang_input = 'संसाधित पाठ:'

}

if (config.LANG == 'ES') {

    dlang_dsc = 'Adivina el idioma del mensaje respondido.'

    closer_res = 'Resultado más cercano:'

    dlang_lang = 'Lengua:'

    dlang_similarity = 'Semejanza:'

    dlang_other = 'Otros idiomas:'

    dlang_input = 'Texto procesado:'

}

if (config.LANG == 'PT') {

    dlang_dsc = 'Adivinhe o idioma da mensagem respondida.'

    closer_res = 'Resultado mais próximo:'

    dlang_lang = 'Língua:'

    dlang_similarity = 'Similaridade:'

    dlang_other = 'Outras línguas'

    dlang_input = 'Texto Processado:'

}

if (config.LANG == 'ID') {

    dlang_dsc = 'Tebak bahasa pesan yang dibalas.'

    closer_res = 'Hasil Terdekat:'

    dlang_lang = 'Lidah:'

    dlang_similarity = 'Kesamaan:'

    dlang_other = 'Bahasa Lainnya'

    dlang_input = 'Teks yang Diproses:'

}

if (config.LANG == 'RU') {

    dlang_dsc = 'Угадай язык ответного сообщения.'

    closer_res = 'Ближайший результат:'

    dlang_lang = 'Язык:'

    dlang_similarity = 'Сходствo:'

    dlang_other = 'Другие языки'

    dlang_input = 'Обработанный текст:'

}

Bixby.addCommand({pattern: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,'NEED WORD 🍁',MessageType.text);

        let arama = await yts(match[1]);

        arama = arama.all;

        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);

        var reply = await message.client.sendMessage(message.jid,`DOWNLOADING YOUR SONG`,MessageType.text);

        let title = arama[0].title.replace(' ', '+');

        let stream = ytdl(arama[0].videoId, {

            quality: 'highestaudio',

        });

    

        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));

        ffmpeg(stream)

            .audioBitrate(320)

            .save('./' + title + '.mp3')

            .on('end', async () => {

                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));

                writer.setFrame('TIT2', arama[0].title)

                    .setFrame('TPE1', [arama[0].author.name])

                    .setFrame('APIC', {

                        type: 3,

                        data: fs.readFileSync(title + '.jpg'),

                        description: arama[0].description

                    });

                writer.addTag();

                reply = await message.client.sendMessage(message.jid,fs.readFileSync('./' + title + '.jpg'), MessageType.image, { caption: '\n\n Song Name :\n'+ title + ' \n\nUPLOADING YOUR SONG \n\n '+`❦ Qᴜᴇᴇɴ ʙɪxʙʏ ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ ❦ `+'\n' });

                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 2, isForwarded: true }, quoted: message.data, ptt: false});

            });

            

    }));
