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

        {buttonId: 'id1', buttonText: {displayText: 'I Am Fine 🥰  \n\n\nLife is Ok😌😂'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: 'Im Not fine Now 😐   \n\n\nLife is Impossible Dont think about past 🤭🌚'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: 'Hii Dear   \n\n\nHave a Nice Day ❄️🐦'}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: "*Hii I'm Bixby How are you* 😆",

          footerText: 'Queen Bixby Public Edition ',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
