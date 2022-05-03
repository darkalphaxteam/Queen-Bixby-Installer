const Bixby = require('../events');

const fs = require('fs');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const chalk = require('chalk');

const axios = require('axios');

     

     

               Bixby.addCommand({pattern: 'waehi', fromMe: false,dontaddCommandList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/thinura2003/UPLOADS/blob/main/waehi.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'Any⚽WhatsApp⚽Ehi.ehi' , mimetype:  'application/octet-stream' ,quoted: message.data})

        }));

                           Bixby.addCommand({pattern: 'faehi', fromMe: false,dontaddCommandList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/thinura2003/UPLOADS/blob/main/faehi.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'Any⚽Facebook⚽Ehi.ehi' , mimetype: 'application/octet-stream' ,quoted: message.data})

     }));   

        Bixby.addCommand({pattern: 'zoehi', fromMe: false,dontaddCommandList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/thinura2003/UPLOADS/blob/main/zoehi.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'Any⚽Zoom⚽Ehi.ehi' , mimetype: 'application/octet-stream' ,quoted: message.data})

   }));     

        Bixby.addCommand({pattern: 'yuehi', fromMe: false,dontaddCommandList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/thinura2003/UPLOADS/blob/main/yuehi.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'Any⚽Youtube⚽Ehi.ehi' , mimetype: 'application/octet-stream' ,quoted: message.data})

   }));        

        Bixby.addCommand({pattern: 'injec', fromMe: false,dontaddCommandList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/thinura2003/UPLOADS/blob/main/injec.apk?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'HTTP💉INJECTER.apk ' , mimetype: 'application/octet-stream' ,quoted: message.data})

}));

     

  Bixby.addCommand({pattern: 'allehi', fromMe: false,dontaddCommandList:true}, (async (message, match) => {

var document = await axios.get ('https://github.com/thinura2003/UPLOADS/blob/main/waehi.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'Any⚽WhatsApp⚽Ehi.ehi' , mimetype:  'application/octet-stream' ,quoted: message.data})

       

var document = await axios.get ('https://github.com/thinura2003/UPLOADS/blob/main/faehi.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'Any⚽Facebook⚽Ehi.ehi' , mimetype: 'application/octet-stream' ,quoted: message.data})

var document = await axios.get ('https://github.com/thinura2003/UPLOADS/blob/main/zoehi.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'Any⚽Zoom⚽Ehi.ehi' , mimetype: 'application/octet-stream' ,quoted: message.data})

var document = await axios.get ('https://github.com/thinura2003/UPLOADS/blob/main/yuehi.ehi?raw=true', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (document.data), MessageType.document, { filename : 'Any⚽Youtube⚽Ehi.ehi' , mimetype: 'application/octet-stream' ,quoted: message.data})

  

        

}));

              
