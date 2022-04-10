const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const con = require('../config');

// Descriptions
const ENGAY = "Hack the person you reply to."

// Need Reply
const ENREP = "```You must reply to a message!```"


if (con.WORKTYPE === 'private') {
    
    Asena.addCommand({pattern: 'hack', fromMe: true, OnlyGroup: true, desc: ENGAY}, (async (message, match) => {
    
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, ENREP, MessageType.text);

    await message.client.sendMessage(message.jid, '*hacking to*' + '@' + message.reply_message.jid.split('@')[0] + '... >:)', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

    await new Promise(r => setTimeout(r, 1500));
    await message.sendMessage('Python Version: 3.6\nHacker: *BIXBY*\nWEB API: True');
    await new Promise(r => setTimeout(r, 1200));
    await message.sendMessage('██╗░░██╗\n██║░░██║\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░█████╗░\n██╔══██╗\n██║░░╚═╝\n██║░░██╗\n╚█████╔╝\n░╚════╝░');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('██╗░░██╗\n██║░██╔╝\n█████═╝░\n██╔═██╗░\n██║░╚██╗\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('██╗\n██║\n██║\n██║\n██║\n╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('███╗░░██╗\n████╗░██║\n██╔██╗██║\n██║╚████║\n██║░╚███║\n╚═╝░░╚══╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░██████╗░\n██╔════╝░\n██║░░██╗░\n██║░░╚██╗\n╚██████╔╝\n░╚═════╝░');

    await new Promise(r => setTimeout(r, 1500));

    await message.sendMessage('*¡The target system is being hacked right now!!*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 1%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 3%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 6%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 1%\nℂá𝕞𝕒𝕣𝕒: 3%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*Running process...*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 18%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 25%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 34%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 14%\nℂá𝕞𝕒𝕣𝕒: 16%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*Hacking the system security*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 48%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 44%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 57%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 14%\nℂá𝕞𝕒𝕣𝕒: 62%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*Eliminating system crashes...*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 68%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 84%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 92%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 89%\nℂá𝕞𝕒𝕣𝕒: 86%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*Connecting to the destination account through the WhatsApp WEB API*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 93%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 90%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 88%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 94%\nℂá𝕞𝕒𝕣𝕒: 96%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('😈 *Hacked account*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 100%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 100%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 100%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 100%\nℂá𝕞𝕒𝕣𝕒: 100%');

    await new Promise(r => setTimeout(r, 2500));

    await message.sendMessage('*¡Information saved in the Bixby Mowl database! >:D*');

}));

Asena.addCommand({pattern: 'chocolate', fromMe: true, OnlyGroup: true}, (async (message, match) => {

    await message.sendMessage('{__/}\n( • - • )\n/>🍫 I give you a chocolate');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n🍫 <   Or not. you already have');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>🍫 I cant sacrifice you...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>☕️ I better give you this');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>❤️ take this too but dont break it please');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>💔 I said dont break it');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n💔< You must be sorry you did..');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/> ❤️ or take another...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>💔 I hate you');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>❤️ take this one more time but if you break it ill be mad');
    await new Promise(r => setTimeout(r, 1800));

    await message.sendMessage('Made by *Bixby Mowl* >:D');

}));
}
    
else if (con.WORKTYPE === 'public') {
    
    Asena.addCommand({pattern: 'hack', fromMe: false, OnlyGroup: true, desc: ENGAY}, (async (message, match) => {
    
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, ENREP, MessageType.text);

    await message.client.sendMessage(message.jid, '*hacking to*' + '@' + message.reply_message.jid.split('@')[0] + '... >:)', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

    await new Promise(r => setTimeout(r, 1500));
    await message.sendMessage('Python Version: 3.6\nHacker: *BIXBY*\nWEB API: True');
    await new Promise(r => setTimeout(r, 1200));
    await message.sendMessage('██╗░░██╗\n██║░░██║\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░█████╗░\n██╔══██╗\n██║░░╚═╝\n██║░░██╗\n╚█████╔╝\n░╚════╝░');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('██╗░░██╗\n██║░██╔╝\n█████═╝░\n██╔═██╗░\n██║░╚██╗\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('██╗\n██║\n██║\n██║\n██║\n╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('███╗░░██╗\n████╗░██║\n██╔██╗██║\n██║╚████║\n██║░╚███║\n╚═╝░░╚══╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░██████╗░\n██╔════╝░\n██║░░██╗░\n██║░░╚██╗\n╚██████╔╝\n░╚═════╝░');

    await new Promise(r => setTimeout(r, 1500));

    await message.sendMessage('*¡The target system is being hacked right now!*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 1%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 3%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 6%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 1%\nℂá𝕞𝕒𝕣𝕒: 3%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*Running process...*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 18%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 25%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 34%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 14%\nℂá𝕞𝕒𝕣𝕒: 16%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*Hacking the system security*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 48%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 44%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 57%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 14%\nℂá𝕞𝕒𝕣𝕒: 62%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*Eliminating system crashes...*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 68%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 84%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 92%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 89%\nℂá𝕞𝕒𝕣𝕒: 86%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*Connecting to the destination account through the WhatsApp WEB API*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 93%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 90%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 88%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 94%\nℂá𝕞𝕒𝕣𝕒: 96%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('😎 *Hacked account*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 100%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 100%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 100%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 100%\nℂá𝕞𝕒𝕣𝕒: 100%');

    await new Promise(r => setTimeout(r, 2500));

    await message.sendMessage('*¡Information saved in the Bixby Mowl database! >:D*');

}));

Asena.addCommand({pattern: 'chocolate', fromMe: false, OnlyGroup: true}, (async (message, match) => {

    await message.sendMessage('{__/}\n( • - • )\n/>🍫 I give you a chocolate');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n🍫<   Or not. you already have');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>🍫 I cant sacrifice you...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>☕️ I better give you this');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>❤️ take this too but dont break it please');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>💔 I said dont break it');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n💔< You must be sorry you did...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/> ❤️ or take another...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>💔 I hate you');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>❤️ take this one more time but if you break it ill be mad');
    await new Promise(r => setTimeout(r, 1800));

    await message.sendMessage('Made by *Bixby-Mowl* >:D');

}));
}
