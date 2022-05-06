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

Bixby.addCommand({pattern: 'owner', fromMe: ziyan, dontAddCommandList: true}, (async (message, match) => {

    

var image = await axios.get ('https://i.ibb.co/HHzqnYH/1651746164-picsay.jpg', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: ` ༺═─⃝ ʀᴇᴀʟ ᴋɪɴɢ ᴅᴀʀᴋ ᴀʟᴘʜᴀ ⃝─═༻\n\nᴡᴇʟᴄᴏᴍᴇ ᴛᴏ Qᴜᴇᴇɴ ʙɪxʙʏ ᴘᴜʙʟɪᴄ ʙᴏᴛ \n\n🏓. OWNER   ➢️ ᴅᴀʀᴋ ᴀʟᴘʜᴀ(ᴛʜɪɴᴜʀᴀ)\n🏓️. AGE ➢️ 19\n🏓. SCHOOL ➢️ ɴ.ɴ.ᴄ \n🏓. LIVES ON ➢ ɴɪᴋᴇᴡᴇʀᴀᴛɪʏᴀ ꜱʟ\n🏓. AT MUSIC ➢ ᴅᴊ ᴛʜɪɴᴜʀᴀ ᴊᴀʏ ᴠᴅ \n\n Qᴜᴇᴇɴ ʙɪxʙʏ ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ\n `,quoted: message.data})

    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '⚽ OK ⚽' }, type: 1},

        {buttonId: 'id2', buttonText: {displayText: '⚡ Thanks ⚡' }, type: 1}

      ]

      

      const buttonMessage = {

          contentText: 'ʜᴀʏ ɪᴍ ᴛʜɪɴᴜʀᴀ ( ᴋɪɴɢ ᴅᴀ ) ʙʏ  ᴀʟᴘʜᴀ ᴛᴇᴀᴍ',

          footerText: '2022 ᴍᴀʏ ꜱᴛᴀʙʟᴇ ᴠᴇʀꜱɪᴏɴ',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

      }));

