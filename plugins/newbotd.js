const Bixby = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvQml4Ynkv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Bixby.addCommand({pattern: 'bot', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

// send a buttons message!

    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '🛢️ Github 🛢️ \n\n\nhttps://github.com/ALPHA-OFFICIAL-WA-TEAM/SL-BIXBY-BOT'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: '❄️ WhatsApp ❄️\n\n\n https://chat.whatsapp.com/KqO4Yusx8jTG43sGouoXdO'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: '⚀ Youtube ⚀ \n\n\nhttps://youtube.com/channel/UCvpyOCBCaBSCdv4QolnO0WQ'}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: '╔═════════ʙɪxʙʏ════════╗\n\nᴡᴇʟᴄᴏᴍᴇ ᴛᴏ Qᴜᴇᴇɴ ʙɪxʙʏ ᴘᴜʙʟɪᴄ ʙᴏᴛ ᴡᴏʀʟᴅ\n\n🛢️. OWNER   ➢️ ᴅᴀʀᴋ ᴀʟᴘʜᴀ\n🛢️️. VERSION ➢️ 1.5.2\n🛢️. WORKTYPE ➢️ ᴘᴜʙʟɪᴄ \n🛢️. BASE ➢ ᴡʜᴀᴛꜱʙɪxʙʏ \n🛢️. BOT FOR ➢ ᴏɴʟʏ ꜱɪɴʜᴀʟᴀ \n\n Hi i am.'+Config.BOT+'\n\n'+Config.ALIVEMSG+'\n',

          footerText: 'Queen Bixby Public Edition ',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
