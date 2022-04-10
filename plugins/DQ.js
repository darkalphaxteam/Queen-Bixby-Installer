/* Copyright (C) 2022 RIPPER-SER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
https://github.com/RIPPER-SER/bixbymowl
*/

//THIS PlUGIN BY ZIYAN DONT COPY THIS WITHOUT CREDIT

//BASIC REQUIREMENTS

const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'dq', fromMe: true, desc: 'random DQ images'}, (async (message, match) => {

    var fetch_img = new Array ();
    
    fetch_img[0] = "https://telegra.ph/file/b22b26bca855eda465a49.jpg";

    fetch_img[1] = "https://telegra.ph/file/1662d872a5ec9861a8d22.jpg";

    fetch_img[2] = "https://telegra.ph/file/1bc0b57c6f03da5f35bad.jpg";

    fetch_img[3] = "https://telegra.ph/file/eb11ef8f52a17c1fce7e2.jpg";

    fetch_img[4] = "https://telegra.ph/file/084a34ce42cc027df0f7c.jpg";

    fetch_img[5] = "https://telegra.ph/file/02b8281bc125374fd1633.jpg";

    fetch_img[6] = "https://telegra.ph/file/44e940f6cd613fb3d8e9e.jpg";

    fetch_img[7] = "https://telegra.ph/file/fed11bcd5465bd85ae626.jpg";

    fetch_img[8] = "https://telegra.ph/file/751825187e1d595a1dd44.jpg";

    fetch_img[9] = "https://telegra.ph/file/4bc573347ee4d9e4dcbaa.jpg";

    fetch_img[10] = "https://telegra.ph/file/c1f41ceb98053169260e7.jpg";
    
    var i = Math.floor(10*Math.random())

    var respoimage = await axios.get(`${fetch_img[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made By Bixby Mowl'})

    }));

}
/*this plugin is full created by ziyan don't copy this without credit*/
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'dq', fromMe: false, desc:'random DQ images '}, (async (message, match) => {

    var fetch_img = new Array ();
    
    fetch_img[0] = "https://telegra.ph/file/b22b26bca855eda465a49.jpg";

    fetch_img[1] = "https://telegra.ph/file/1662d872a5ec9861a8d22.jpg";

    fetch_img[2] = "https://telegra.ph/file/1bc0b57c6f03da5f35bad.jpg";

    fetch_img[3] = "https://telegra.ph/file/eb11ef8f52a17c1fce7e2.jpg";

    fetch_img[4] = "https://telegra.ph/file/084a34ce42cc027df0f7c.jpg";

    fetch_img[5] = "https://telegra.ph/file/02b8281bc125374fd1633.jpg";

    fetch_img[6] = "https://telegra.ph/file/44e940f6cd613fb3d8e9e.jpg";

    fetch_img[7] = "https://telegra.ph/file/fed11bcd5465bd85ae626.jpg";

    fetch_img[8] = "https://telegra.ph/file/751825187e1d595a1dd44.jpg";

    fetch_img[9] = "https://telegra.ph/file/4bc573347ee4d9e4dcbaa.jpg";

    fetch_img[10] = "https://telegra.ph/file/c1f41ceb98053169260e7.jpg";
    
    var i = Math.floor(10*Math.random())

    var respoimage = await axios.get(`${fetch_img[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made By Bixby Mowl'})

    }));

}
