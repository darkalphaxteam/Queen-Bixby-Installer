const Bixby = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Bixby.addCommand({ pattern: 'creator ?(.*)', fromMe: false, desc: 'creater number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:ZIYAN [OWNER]\n' // full name
            + 'ORG:ZIYAN;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=919446072492:+91 9446072492\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "ZIYAN [OWNER]", vcard: vcard}, MessageType.contact)
}))
