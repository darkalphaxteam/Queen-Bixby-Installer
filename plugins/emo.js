const Bixby = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

const request = require('request');

const got = require("got");

const Config = require('../config');

const des = "You Can Png From Any Emoji"

const iii = "Only work with emoji\n emojiyil mathrame work aavukayullu😁"

if (Config.WORKTYPE == 'private') {

    Bixby.addCommand({pattern: 'emo ?(.*)', fromMe: true, desc: des}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made By Bixby Mowl'})

    }));

}

else if (Config.WORKTYPE == 'public') {

    Bixby.addCommand({pattern: 'emo ?(.*)', fromMe: false, desc: des}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made By Bixby Mowl'})

    }));

    Bixby.addCommand({pattern: 'png ?(.*)', fromMe: true,dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made By Bixby Mowl'})

    }));

}
