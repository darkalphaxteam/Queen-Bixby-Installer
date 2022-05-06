const Bixby = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvQml4Ynkv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

let ziyan = Config.WORKTYPE == 'public' ? false : true

Bixby.addCommand({pattern: 'alive', fromMe: ziyan, dontAddCommandList: true}, (async (message, match) => {

    

var image = await axios.get (Config.LG_LOGO , {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG ,quoted: message.data})

    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: Config.BIXBY_ALIVE }, type: 1},

        {buttonId: 'id2', buttonText: {displayText: Config.ALIVE_TWO }, type: 1}

      ]

      

      const buttonMessage = {

          contentText: 'ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ Qᴜᴇᴇɴ ʙɪxʙʏ ( 2022 )',

          footerText: '❦ Qᴜᴇᴇɴ ʙɪxʙʏ ᴍᴀʏ ꜱᴛᴀʙʟᴇ ᴠᴇʀꜱɪᴏɴ ❦',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

      }));

