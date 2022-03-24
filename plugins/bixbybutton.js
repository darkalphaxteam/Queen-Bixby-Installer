const Bixby = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvQml4Ynkv', pay:'' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Bixby.addCommand({pattern: 'help', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '.menu'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: '.xmedia}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: '.git'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' 𝙷𝚢 𝙱𝚛𝚘....👋🏻\n\n         ☆ *𝙱𝙾𝚃 𝙸𝙽𝙵𝙾* ☆\n\n🎗️ ɴᴀᴍᴇ  : ꪶ͢ɪͥᴛͭsᷤ ͢ᴍͫᴇͤ 𝙼𝙸𝚂𝚂 𝙷𝙴𝙻𝙴𝙽𝙰      \n🎗️ sᴛᴀᴛᴇs : ᴘᴜʙʟɪᴄ\n🎗️ ᴛɪᴍᴇ   : ```' + plk_say + '```\n🎗️ ᴅᴀᴛᴇ : ```' + plk_here + '```\n🎗️ ᴘᴇʀғɪx : [ . ]\n\n         ☆ *𝙲𝚁𝙴𝚃𝙴𝚁𝚂* ☆\n\n🎗ZIYAN\n\n          ☆ *𝚃𝙷𝙰𝙽𝙺𝚂* ☆\n\n🎗️ ᴄʟɪᴄᴋ ᴍᴇɴᴜ ᴀɴᴅ ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ\n',
          footerText: '©BIXBY MOWL™',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));