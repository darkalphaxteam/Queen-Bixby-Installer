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

        {buttonId: 'id1', buttonText: {displayText: 'ð¢ï¸ Github ð¢ï¸ \n\n\nhttps://github.com/ALPHA-OFFICIAL-WA-TEAM/SL-BIXBY-BOT'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: 'âï¸ WhatsApp âï¸\n\n\n https://chat.whatsapp.com/KqO4Yusx8jTG43sGouoXdO'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: 'â Youtube â \n\n\nhttps://youtube.com/channel/UCvpyOCBCaBSCdv4QolnO0WQ'}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: 'ââââââââââÊÉªxÊÊâââââââââ\n\ná´¡á´Êá´á´á´á´ á´á´ Qá´á´á´É´ ÊÉªxÊÊ á´á´ÊÊÉªá´ Êá´á´ á´¡á´ÊÊá´\n\nð¢ï¸. OWNER   â¢ï¸ á´á´Êá´ á´Êá´Êá´\nð¢ï¸ï¸. VERSION â¢ï¸ 1.5.2\nð¢ï¸. WORKTYPE â¢ï¸ á´á´ÊÊÉªá´ \nð¢ï¸. BASE â¢ á´¡Êá´á´ê±ÊÉªxÊÊ \nð¢ï¸. BOT FOR â¢ á´É´ÊÊ ê±ÉªÉ´Êá´Êá´ \n\n Hi i am.'+Config.BOT+'\n\n'+Config.ALIVEMSG+'\n',

          footerText: 'Queen Bixby Public Edition ',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
