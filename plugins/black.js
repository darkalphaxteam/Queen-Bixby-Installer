/* Copyright (C) 2022 RIPPER-SER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
https://github.com/RIPPER-SER/bixbymowl
*/

//THIS PLUGIN BY Karthik terror boy
const Bixby = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

    Bixby.addCommand({pattern: 'sendi$', fromMe: true, desc: 'Download status from wa'}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,'reply to a status', MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,'*Downloading Image Status* \n\n ```If it is video status try cmd [.sndv]```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            ffmpeg(location)
                .save('status.png')
                .on('end', async () => {
                    await message.client.sendMessage(message.jid,fs.readFileSync('status.png'), MessageType.image ,{caption: '```©Bixby Mowl```'  , mimetype: Mimetype.jpg, quoted: message.data});
            });
        return 
        }

        ffmpeg(location)
            .save('status.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid,fs.readFileSync('status.mp4'), MessageType.video , {caption: '```©Bixby Mowl```'  , mimetype: Mimetype.mp4, quoted: message.data});
            });
        return 
    }));
    
    
    
   Bixby.addCommand({pattern: 'sendv$', fromMe: true, desc: 'Download status from wa'}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,'reply to a status', MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,'*Downloading Video Status* \n\n ```If it is image try cmd [.sndi]```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === true && message.reply_message.video) {
            ffmpeg(location)    
            .save('output.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp4'), MessageType.video ,{caption: '```©Bixby Mowl```'  , mimetype: Mimetype.mp4, quoted: message.data});
            });
        return 
        }

        ffmpeg(location)    
            .save('output.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp4'), MessageType.video, {caption: '```©Bixby Mowl```'  , mimetype: Mimetype.mp4, quoted: message.data});
            });
        return 
    }));
