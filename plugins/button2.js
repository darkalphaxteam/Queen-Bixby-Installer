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

        {buttonId: 'id1', buttonText: {displayText: 'Github \n\n\nhttps://github.com/ALPHA-OFFICIAL-WA-TEAM/SL-BIXBY-BOT'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: 'WhatsApp \n\n\nhttps://chat.whatsapp.com/LqqFmG64j5KFUxSje40UNz'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: 'Youtube \n\n\nhttps://youtube.com/channel/UCvpyOCBCaBSCdv4QolnO0WQ'}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: "*Hii There  I'm Queen Bixby by King Dark Alpha (ALPHA TEAM) Queen Bixby is Modified Version of the WhatsBixby by Ziyan  Queen & Queen Thanks For using Queen Bixby Many Features Comming Soon* 😆",

          footerText: 'Queen Bixby Public Edition ',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
