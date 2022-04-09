

const Asena = require('../events');
const con = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');

// Descriptions
const TRGAY = "Yanıtladığınız kişinin gay yüzdesini ölçer."
const ENGAY = "Measures the percentage of gays you respond to."
const HIGAY = "आपके द्वारा प्रतिसाद देने वाले समलैंगिकों के प्रतिशत को मापता है"
const AZGAY = "Yanıtladığınız kişinin gay yüzdesini ölçer."

// Need Reply
const TRREP = "```Herhangi Bir Mesajı Yanıtlaman Gerekiyor!```"
const ENREP = "```You Need To Reply Any Message!```"
const HIREP = "```आपको किसी भी संदेश का जवाब देने की आवश्यकता है```"
const AZREP = "```Herhangi Bir Mesajı Yanıtlaman Gerekiyor!```"

// Plugin Start 
if (con.LANG === 'TR') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'meter', fromMe: true, desc: TRGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, TRREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Adlı Kişinin Gay Yüzdesi Hesaplanıyor 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var fetch_text = new Array ();
            fetch_text[0] = "*%0*";
            fetch_text[1] = "*%1*";
            fetch_text[2] = "*%2*";
            fetch_text[3] = "*%3*";
            fetch_text[4] = "*%4*";
            fetch_text[5] = "*%5*";
            fetch_text[6] = "*%6*";
            fetch_text[7] = "*%7*";
            fetch_text[8] = "*%8*";
            fetch_text[9] = "*%9*";
            fetch_text[10] = "*%10*";
            fetch_text[11] = "*%11*";
            fetch_text[12] = "*%12*";
            fetch_text[13] = "*%13*";
            fetch_text[14] = "*%14*";
            fetch_text[15] = "*%15*";
            fetch_text[16] = "*%16*";
            fetch_text[17] = "*%17*";
            fetch_text[18] = "*%18*";
            fetch_text[19] = "*%19*";
            fetch_text[20] = "*%20*";
            fetch_text[21] = "*%21*";
            fetch_text[22] = "*%22*";
            fetch_text[23] = "*%23*";
            fetch_text[24] = "*%24*";
            fetch_text[25] = "*%25*";
            fetch_text[26] = "*%26*";
            fetch_text[27] = "*%27*";
            fetch_text[28] = "*%28*";
            fetch_text[29] = "*%29*";
            fetch_text[30] = "*%30*";
            fetch_text[31] = "*%31*";
            fetch_text[32] = "*%32*";
            fetch_text[33] = "*%33*";
            fetch_text[34] = "*%34*";
            fetch_text[35] = "*%35*";
            fetch_text[36] = "*%36*";
            fetch_text[37] = "*%37*";
            fetch_text[38] = "*%38*";
            fetch_text[39] = "*%39*";
            fetch_text[40] = "*%40*";
            fetch_text[41] = "*%41*";
            fetch_text[42] = "*%42*";
            fetch_text[43] = "*%43*";
            fetch_text[44] = "*%44*";
            fetch_text[45] = "*%45*";
            fetch_text[46] = "*%46*";
            fetch_text[47] = "*%47*";
            fetch_text[48] = "*%48*";
            fetch_text[49] = "*%49*";
            fetch_text[50] = "*%50*";
            fetch_text[51] = "*%51*";
            fetch_text[52] = "*%52*";
            fetch_text[53] = "*%53*";
            fetch_text[54] = "*%54*";
            fetch_text[55] = "*%55*";
            fetch_text[56] = "*%56*";
            fetch_text[57] = "*%57*";
            fetch_text[58] = "*%58*";
            fetch_text[59] = "*%59*";
            fetch_text[60] = "*%60*";
            fetch_text[61] = "*%61*";
            fetch_text[62] = "*%62*";
            fetch_text[63] = "*%63*";
            fetch_text[64] = "*%64*";
            fetch_text[65] = "*%65*";
            fetch_text[66] = "*%66*";
            fetch_text[67] = "*%67*";
            fetch_text[68] = "*%68*";
            fetch_text[69] = "*%69*";
            fetch_text[70] = "*%70*";
            fetch_text[71] = "*%71*";
            fetch_text[72] = "*%72*";
            fetch_text[73] = "*%73*";
            fetch_text[74] = "*%74*";
            fetch_text[75] = "*%75*";
            fetch_text[76] = "*%76*";
            fetch_text[77] = "*%77*";
            fetch_text[78] = "*%78*";
            fetch_text[79] = "*%79*";
            fetch_text[80] = "*%80*";
            fetch_text[81] = "*%81*";
            fetch_text[82] = "*%82*";
            fetch_text[83] = "*%83*";
            fetch_text[84] = "*%84*";
            fetch_text[85] = "*%85*";
            fetch_text[86] = "*%86*";
            fetch_text[87] = "*%87*";
            fetch_text[88] = "*%88*";
            fetch_text[89] = "*%89*";
            fetch_text[90] = "*%90*";
            fetch_text[91] = "*%91*";
            fetch_text[92] = "*%92*";
            fetch_text[93] = "*%93*";
            fetch_text[94] = "*%94*";
            fetch_text[95] = "*%95*";
            fetch_text[96] = "*%96*";
            fetch_text[97] = "*%97*";
            fetch_text[98] = "*%98*";
            fetch_text[99] = "*%99*";
            fetch_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/Bixby/media/gif/giphy.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Yüzdesi Hesaplandı!* 🏳️‍🌈\n*Sonuç:* ${fetch_text[i]}` }
            )
        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'meter', fromMe: false, desc: TRGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, TRREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Adlı Kişinin Gay Yüzdesi Hesaplanıyor 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var fetch_text = new Array ();
            fetch_text[0] = "*%0*";
            fetch_text[1] = "*%1*";
            fetch_text[2] = "*%2*";
            fetch_text[3] = "*%3*";
            fetch_text[4] = "*%4*";
            fetch_text[5] = "*%5*";
            fetch_text[6] = "*%6*";
            fetch_text[7] = "*%7*";
            fetch_text[8] = "*%8*";
            fetch_text[9] = "*%9*";
            fetch_text[10] = "*%10*";
            fetch_text[11] = "*%11*";
            fetch_text[12] = "*%12*";
            fetch_text[13] = "*%13*";
            fetch_text[14] = "*%14*";
            fetch_text[15] = "*%15*";
            fetch_text[16] = "*%16*";
            fetch_text[17] = "*%17*";
            fetch_text[18] = "*%18*";
            fetch_text[19] = "*%19*";
            fetch_text[20] = "*%20*";
            fetch_text[21] = "*%21*";
            fetch_text[22] = "*%22*";
            fetch_text[23] = "*%23*";
            fetch_text[24] = "*%24*";
            fetch_text[25] = "*%25*";
            fetch_text[26] = "*%26*";
            fetch_text[27] = "*%27*";
            fetch_text[28] = "*%28*";
            fetch_text[29] = "*%29*";
            fetch_text[30] = "*%30*";
            fetch_text[31] = "*%31*";
            fetch_text[32] = "*%32*";
            fetch_text[33] = "*%33*";
            fetch_text[34] = "*%34*";
            fetch_text[35] = "*%35*";
            fetch_text[36] = "*%36*";
            fetch_text[37] = "*%37*";
            fetch_text[38] = "*%38*";
            fetch_text[39] = "*%39*";
            fetch_text[40] = "*%40*";
            fetch_text[41] = "*%41*";
            fetch_text[42] = "*%42*";
            fetch_text[43] = "*%43*";
            fetch_text[44] = "*%44*";
            fetch_text[45] = "*%45*";
            fetch_text[46] = "*%46*";
            fetch_text[47] = "*%47*";
            fetch_text[48] = "*%48*";
            fetch_text[49] = "*%49*";
            fetch_text[50] = "*%50*";
            fetch_text[51] = "*%51*";
            fetch_text[52] = "*%52*";
            fetch_text[53] = "*%53*";
            fetch_text[54] = "*%54*";
            fetch_text[55] = "*%55*";
            fetch_text[56] = "*%56*";
            fetch_text[57] = "*%57*";
            fetch_text[58] = "*%58*";
            fetch_text[59] = "*%59*";
            fetch_text[60] = "*%60*";
            fetch_text[61] = "*%61*";
            fetch_text[62] = "*%62*";
            fetch_text[63] = "*%63*";
            fetch_text[64] = "*%64*";
            fetch_text[65] = "*%65*";
            fetch_text[66] = "*%66*";
            fetch_text[67] = "*%67*";
            fetch_text[68] = "*%68*";
            fetch_text[69] = "*%69*";
            fetch_text[70] = "*%70*";
            fetch_text[71] = "*%71*";
            fetch_text[72] = "*%72*";
            fetch_text[73] = "*%73*";
            fetch_text[74] = "*%74*";
            fetch_text[75] = "*%75*";
            fetch_text[76] = "*%76*";
            fetch_text[77] = "*%77*";
            fetch_text[78] = "*%78*";
            fetch_text[79] = "*%79*";
            fetch_text[80] = "*%80*";
            fetch_text[81] = "*%81*";
            fetch_text[82] = "*%82*";
            fetch_text[83] = "*%83*";
            fetch_text[84] = "*%84*";
            fetch_text[85] = "*%85*";
            fetch_text[86] = "*%86*";
            fetch_text[87] = "*%87*";
            fetch_text[88] = "*%88*";
            fetch_text[89] = "*%89*";
            fetch_text[90] = "*%90*";
            fetch_text[91] = "*%91*";
            fetch_text[92] = "*%92*";
            fetch_text[93] = "*%93*";
            fetch_text[94] = "*%94*";
            fetch_text[95] = "*%95*";
            fetch_text[96] = "*%96*";
            fetch_text[97] = "*%97*";
            fetch_text[98] = "*%98*";
            fetch_text[99] = "*%99*";
            fetch_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/Bixby/media/gif/giphy.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Yüzdesi Hesaplandı!* 🏳️‍🌈\n*Sonuç:* ${fetch_text[i]}` }
            )
        }));
    }
}
else if (con.LANG === 'HI') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'meter', fromMe: true, desc: HIGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, HIREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *समलैंगिक के प्रतिशत की गणना 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var fetch_text = new Array ();
            fetch_text[0] = "*%0*";
            fetch_text[1] = "*%1*";
            fetch_text[2] = "*%2*";
            fetch_text[3] = "*%3*";
            fetch_text[4] = "*%4*";
            fetch_text[5] = "*%5*";
            fetch_text[6] = "*%6*";
            fetch_text[7] = "*%7*";
            fetch_text[8] = "*%8*";
            fetch_text[9] = "*%9*";
            fetch_text[10] = "*%10*";
            fetch_text[11] = "*%11*";
            fetch_text[12] = "*%12*";
            fetch_text[13] = "*%13*";
            fetch_text[14] = "*%14*";
            fetch_text[15] = "*%15*";
            fetch_text[16] = "*%16*";
            fetch_text[17] = "*%17*";
            fetch_text[18] = "*%18*";
            fetch_text[19] = "*%19*";
            fetch_text[20] = "*%20*";
            fetch_text[21] = "*%21*";
            fetch_text[22] = "*%22*";
            fetch_text[23] = "*%23*";
            fetch_text[24] = "*%24*";
            fetch_text[25] = "*%25*";
            fetch_text[26] = "*%26*";
            fetch_text[27] = "*%27*";
            fetch_text[28] = "*%28*";
            fetch_text[29] = "*%29*";
            fetch_text[30] = "*%30*";
            fetch_text[31] = "*%31*";
            fetch_text[32] = "*%32*";
            fetch_text[33] = "*%33*";
            fetch_text[34] = "*%34*";
            fetch_text[35] = "*%35*";
            fetch_text[36] = "*%36*";
            fetch_text[37] = "*%37*";
            fetch_text[38] = "*%38*";
            fetch_text[39] = "*%39*";
            fetch_text[40] = "*%40*";
            fetch_text[41] = "*%41*";
            fetch_text[42] = "*%42*";
            fetch_text[43] = "*%43*";
            fetch_text[44] = "*%44*";
            fetch_text[45] = "*%45*";
            fetch_text[46] = "*%46*";
            fetch_text[47] = "*%47*";
            fetch_text[48] = "*%48*";
            fetch_text[49] = "*%49*";
            fetch_text[50] = "*%50*";
            fetch_text[51] = "*%51*";
            fetch_text[52] = "*%52*";
            fetch_text[53] = "*%53*";
            fetch_text[54] = "*%54*";
            fetch_text[55] = "*%55*";
            fetch_text[56] = "*%56*";
            fetch_text[57] = "*%57*";
            fetch_text[58] = "*%58*";
            fetch_text[59] = "*%59*";
            fetch_text[60] = "*%60*";
            fetch_text[61] = "*%61*";
            fetch_text[62] = "*%62*";
            fetch_text[63] = "*%63*";
            fetch_text[64] = "*%64*";
            fetch_text[65] = "*%65*";
            fetch_text[66] = "*%66*";
            fetch_text[67] = "*%67*";
            fetch_text[68] = "*%68*";
            fetch_text[69] = "*%69*";
            fetch_text[70] = "*%70*";
            fetch_text[71] = "*%71*";
            fetch_text[72] = "*%72*";
            fetch_text[73] = "*%73*";
            fetch_text[74] = "*%74*";
            fetch_text[75] = "*%75*";
            fetch_text[76] = "*%76*";
            fetch_text[77] = "*%77*";
            fetch_text[78] = "*%78*";
            fetch_text[79] = "*%79*";
            fetch_text[80] = "*%80*";
            fetch_text[81] = "*%81*";
            fetch_text[82] = "*%82*";
            fetch_text[83] = "*%83*";
            fetch_text[84] = "*%84*";
            fetch_text[85] = "*%85*";
            fetch_text[86] = "*%86*";
            fetch_text[87] = "*%87*";
            fetch_text[88] = "*%88*";
            fetch_text[89] = "*%89*";
            fetch_text[90] = "*%90*";
            fetch_text[91] = "*%91*";
            fetch_text[92] = "*%92*";
            fetch_text[93] = "*%93*";
            fetch_text[94] = "*%94*";
            fetch_text[95] = "*%95*";
            fetch_text[96] = "*%96*";
            fetch_text[97] = "*%97*";
            fetch_text[98] = "*%98*";
            fetch_text[99] = "*%99*";
            fetch_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/Bixby/media/gif/giphy.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*समलैंगिक प्रतिशत की गणना!* 🏳️‍🌈\n*परिणाम:* ${fetch_text[i]}` }
            )
        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'meter', fromMe: false, desc: HIGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, HIREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *समलैंगिक के प्रतिशत की गणना 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var fetch_text = new Array ();
            fetch_text[0] = "*%0*";
            fetch_text[1] = "*%1*";
            fetch_text[2] = "*%2*";
            fetch_text[3] = "*%3*";
            fetch_text[4] = "*%4*";
            fetch_text[5] = "*%5*";
            fetch_text[6] = "*%6*";
            fetch_text[7] = "*%7*";
            fetch_text[8] = "*%8*";
            fetch_text[9] = "*%9*";
            fetch_text[10] = "*%10*";
            fetch_text[11] = "*%11*";
            fetch_text[12] = "*%12*";
            fetch_text[13] = "*%13*";
            fetch_text[14] = "*%14*";
            fetch_text[15] = "*%15*";
            fetch_text[16] = "*%16*";
            fetch_text[17] = "*%17*";
            fetch_text[18] = "*%18*";
            fetch_text[19] = "*%19*";
            fetch_text[20] = "*%20*";
            fetch_text[21] = "*%21*";
            fetch_text[22] = "*%22*";
            fetch_text[23] = "*%23*";
            fetch_text[24] = "*%24*";
            fetch_text[25] = "*%25*";
            fetch_text[26] = "*%26*";
            fetch_text[27] = "*%27*";
            fetch_text[28] = "*%28*";
            fetch_text[29] = "*%29*";
            fetch_text[30] = "*%30*";
            fetch_text[31] = "*%31*";
            fetch_text[32] = "*%32*";
            fetch_text[33] = "*%33*";
            fetch_text[34] = "*%34*";
            fetch_text[35] = "*%35*";
            fetch_text[36] = "*%36*";
            fetch_text[37] = "*%37*";
            fetch_text[38] = "*%38*";
            fetch_text[39] = "*%39*";
            fetch_text[40] = "*%40*";
            fetch_text[41] = "*%41*";
            fetch_text[42] = "*%42*";
            fetch_text[43] = "*%43*";
            fetch_text[44] = "*%44*";
            fetch_text[45] = "*%45*";
            fetch_text[46] = "*%46*";
            fetch_text[47] = "*%47*";
            fetch_text[48] = "*%48*";
            fetch_text[49] = "*%49*";
            fetch_text[50] = "*%50*";
            fetch_text[51] = "*%51*";
            fetch_text[52] = "*%52*";
            fetch_text[53] = "*%53*";
            fetch_text[54] = "*%54*";
            fetch_text[55] = "*%55*";
            fetch_text[56] = "*%56*";
            fetch_text[57] = "*%57*";
            fetch_text[58] = "*%58*";
            fetch_text[59] = "*%59*";
            fetch_text[60] = "*%60*";
            fetch_text[61] = "*%61*";
            fetch_text[62] = "*%62*";
            fetch_text[63] = "*%63*";
            fetch_text[64] = "*%64*";
            fetch_text[65] = "*%65*";
            fetch_text[66] = "*%66*";
            fetch_text[67] = "*%67*";
            fetch_text[68] = "*%68*";
            fetch_text[69] = "*%69*";
            fetch_text[70] = "*%70*";
            fetch_text[71] = "*%71*";
            fetch_text[72] = "*%72*";
            fetch_text[73] = "*%73*";
            fetch_text[74] = "*%74*";
            fetch_text[75] = "*%75*";
            fetch_text[76] = "*%76*";
            fetch_text[77] = "*%77*";
            fetch_text[78] = "*%78*";
            fetch_text[79] = "*%79*";
            fetch_text[80] = "*%80*";
            fetch_text[81] = "*%81*";
            fetch_text[82] = "*%82*";
            fetch_text[83] = "*%83*";
            fetch_text[84] = "*%84*";
            fetch_text[85] = "*%85*";
            fetch_text[86] = "*%86*";
            fetch_text[87] = "*%87*";
            fetch_text[88] = "*%88*";
            fetch_text[89] = "*%89*";
            fetch_text[90] = "*%90*";
            fetch_text[91] = "*%91*";
            fetch_text[92] = "*%92*";
            fetch_text[93] = "*%93*";
            fetch_text[94] = "*%94*";
            fetch_text[95] = "*%95*";
            fetch_text[96] = "*%96*";
            fetch_text[97] = "*%97*";
            fetch_text[98] = "*%98*";
            fetch_text[99] = "*%99*";
            fetch_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/Bixby/media/gif/giphy.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*समलैंगिक प्रतिशत की गणना!* 🏳️‍🌈\n*परिणाम:* ${fetch_text[i]}` }
            )
        }));
    }
}
else if (con.LANG === 'AZ') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'meter', fromMe: true, desc: AZGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, AZREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Adlı Kişinin Gay Yüzdesi Hesaplanıyor 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var fetch_text = new Array ();
            fetch_text[0] = "*%0*";
            fetch_text[1] = "*%1*";
            fetch_text[2] = "*%2*";
            fetch_text[3] = "*%3*";
            fetch_text[4] = "*%4*";
            fetch_text[5] = "*%5*";
            fetch_text[6] = "*%6*";
            fetch_text[7] = "*%7*";
            fetch_text[8] = "*%8*";
            fetch_text[9] = "*%9*";
            fetch_text[10] = "*%10*";
            fetch_text[11] = "*%11*";
            fetch_text[12] = "*%12*";
            fetch_text[13] = "*%13*";
            fetch_text[14] = "*%14*";
            fetch_text[15] = "*%15*";
            fetch_text[16] = "*%16*";
            fetch_text[17] = "*%17*";
            fetch_text[18] = "*%18*";
            fetch_text[19] = "*%19*";
            fetch_text[20] = "*%20*";
            fetch_text[21] = "*%21*";
            fetch_text[22] = "*%22*";
            fetch_text[23] = "*%23*";
            fetch_text[24] = "*%24*";
            fetch_text[25] = "*%25*";
            fetch_text[26] = "*%26*";
            fetch_text[27] = "*%27*";
            fetch_text[28] = "*%28*";
            fetch_text[29] = "*%29*";
            fetch_text[30] = "*%30*";
            fetch_text[31] = "*%31*";
            fetch_text[32] = "*%32*";
            fetch_text[33] = "*%33*";
            fetch_text[34] = "*%34*";
            fetch_text[35] = "*%35*";
            fetch_text[36] = "*%36*";
            fetch_text[37] = "*%37*";
            fetch_text[38] = "*%38*";
            fetch_text[39] = "*%39*";
            fetch_text[40] = "*%40*";
            fetch_text[41] = "*%41*";
            fetch_text[42] = "*%42*";
            fetch_text[43] = "*%43*";
            fetch_text[44] = "*%44*";
            fetch_text[45] = "*%45*";
            fetch_text[46] = "*%46*";
            fetch_text[47] = "*%47*";
            fetch_text[48] = "*%48*";
            fetch_text[49] = "*%49*";
            fetch_text[50] = "*%50*";
            fetch_text[51] = "*%51*";
            fetch_text[52] = "*%52*";
            fetch_text[53] = "*%53*";
            fetch_text[54] = "*%54*";
            fetch_text[55] = "*%55*";
            fetch_text[56] = "*%56*";
            fetch_text[57] = "*%57*";
            fetch_text[58] = "*%58*";
            fetch_text[59] = "*%59*";
            fetch_text[60] = "*%60*";
            fetch_text[61] = "*%61*";
            fetch_text[62] = "*%62*";
            fetch_text[63] = "*%63*";
            fetch_text[64] = "*%64*";
            fetch_text[65] = "*%65*";
            fetch_text[66] = "*%66*";
            fetch_text[67] = "*%67*";
            fetch_text[68] = "*%68*";
            fetch_text[69] = "*%69*";
            fetch_text[70] = "*%70*";
            fetch_text[71] = "*%71*";
            fetch_text[72] = "*%72*";
            fetch_text[73] = "*%73*";
            fetch_text[74] = "*%74*";
            fetch_text[75] = "*%75*";
            fetch_text[76] = "*%76*";
            fetch_text[77] = "*%77*";
            fetch_text[78] = "*%78*";
            fetch_text[79] = "*%79*";
            fetch_text[80] = "*%80*";
            fetch_text[81] = "*%81*";
            fetch_text[82] = "*%82*";
            fetch_text[83] = "*%83*";
            fetch_text[84] = "*%84*";
            fetch_text[85] = "*%85*";
            fetch_text[86] = "*%86*";
            fetch_text[87] = "*%87*";
            fetch_text[88] = "*%88*";
            fetch_text[89] = "*%89*";
            fetch_text[90] = "*%90*";
            fetch_text[91] = "*%91*";
            fetch_text[92] = "*%92*";
            fetch_text[93] = "*%93*";
            fetch_text[94] = "*%94*";
            fetch_text[95] = "*%95*";
            fetch_text[96] = "*%96*";
            fetch_text[97] = "*%97*";
            fetch_text[98] = "*%98*";
            fetch_text[99] = "*%99*";
            fetch_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/Bixby/media/gif/giphy.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Yüzdesi Hesaplandı!* 🏳️‍🌈\n*Sonuç:* ${fetch_text[i]}` }
            )
        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'meter', fromMe: false, desc: AZGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, AZREP, MessageType.text);

            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Adlı Kişinin Gay Yüzdesi Hesaplanıyor 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var fetch_text = new Array ();
            fetch_text[0] = "*%0*";
            fetch_text[1] = "*%1*";
            fetch_text[2] = "*%2*";
            fetch_text[3] = "*%3*";
            fetch_text[4] = "*%4*";
            fetch_text[5] = "*%5*";
            fetch_text[6] = "*%6*";
            fetch_text[7] = "*%7*";
            fetch_text[8] = "*%8*";
            fetch_text[9] = "*%9*";
            fetch_text[10] = "*%10*";
            fetch_text[11] = "*%11*";
            fetch_text[12] = "*%12*";
            fetch_text[13] = "*%13*";
            fetch_text[14] = "*%14*";
            fetch_text[15] = "*%15*";
            fetch_text[16] = "*%16*";
            fetch_text[17] = "*%17*";
            fetch_text[18] = "*%18*";
            fetch_text[19] = "*%19*";
            fetch_text[20] = "*%20*";
            fetch_text[21] = "*%21*";
            fetch_text[22] = "*%22*";
            fetch_text[23] = "*%23*";
            fetch_text[24] = "*%24*";
            fetch_text[25] = "*%25*";
            fetch_text[26] = "*%26*";
            fetch_text[27] = "*%27*";
            fetch_text[28] = "*%28*";
            fetch_text[29] = "*%29*";
            fetch_text[30] = "*%30*";
            fetch_text[31] = "*%31*";
            fetch_text[32] = "*%32*";
            fetch_text[33] = "*%33*";
            fetch_text[34] = "*%34*";
            fetch_text[35] = "*%35*";
            fetch_text[36] = "*%36*";
            fetch_text[37] = "*%37*";
            fetch_text[38] = "*%38*";
            fetch_text[39] = "*%39*";
            fetch_text[40] = "*%40*";
            fetch_text[41] = "*%41*";
            fetch_text[42] = "*%42*";
            fetch_text[43] = "*%43*";
            fetch_text[44] = "*%44*";
            fetch_text[45] = "*%45*";
            fetch_text[46] = "*%46*";
            fetch_text[47] = "*%47*";
            fetch_text[48] = "*%48*";
            fetch_text[49] = "*%49*";
            fetch_text[50] = "*%50*";
            fetch_text[51] = "*%51*";
            fetch_text[52] = "*%52*";
            fetch_text[53] = "*%53*";
            fetch_text[54] = "*%54*";
            fetch_text[55] = "*%55*";
            fetch_text[56] = "*%56*";
            fetch_text[57] = "*%57*";
            fetch_text[58] = "*%58*";
            fetch_text[59] = "*%59*";
            fetch_text[60] = "*%60*";
            fetch_text[61] = "*%61*";
            fetch_text[62] = "*%62*";
            fetch_text[63] = "*%63*";
            fetch_text[64] = "*%64*";
            fetch_text[65] = "*%65*";
            fetch_text[66] = "*%66*";
            fetch_text[67] = "*%67*";
            fetch_text[68] = "*%68*";
            fetch_text[69] = "*%69*";
            fetch_text[70] = "*%70*";
            fetch_text[71] = "*%71*";
            fetch_text[72] = "*%72*";
            fetch_text[73] = "*%73*";
            fetch_text[74] = "*%74*";
            fetch_text[75] = "*%75*";
            fetch_text[76] = "*%76*";
            fetch_text[77] = "*%77*";
            fetch_text[78] = "*%78*";
            fetch_text[79] = "*%79*";
            fetch_text[80] = "*%80*";
            fetch_text[81] = "*%81*";
            fetch_text[82] = "*%82*";
            fetch_text[83] = "*%83*";
            fetch_text[84] = "*%84*";
            fetch_text[85] = "*%85*";
            fetch_text[86] = "*%86*";
            fetch_text[87] = "*%87*";
            fetch_text[88] = "*%88*";
            fetch_text[89] = "*%89*";
            fetch_text[90] = "*%90*";
            fetch_text[91] = "*%91*";
            fetch_text[92] = "*%92*";
            fetch_text[93] = "*%93*";
            fetch_text[94] = "*%94*";
            fetch_text[95] = "*%95*";
            fetch_text[96] = "*%96*";
            fetch_text[97] = "*%97*";
            fetch_text[98] = "*%98*";
            fetch_text[99] = "*%99*";
            fetch_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/Bixby/media/gif/giphy.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Yüzdesi Hesaplandı!* 🏳️‍🌈\n*Sonuç:* ${fetch_text[i]}` }
            )
        }));
    }
}
else {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'meter', fromMe: true, desc: ENGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, ENREP, MessageType.text);

            await message.client.sendMessage(message.jid, '*Calculating* ' + '@' + message.reply_message.jid.split('@')[0] + '’s *Gay Meter.. 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var fetch_text = new Array ();
            fetch_text[0] = "*%0*";
            fetch_text[1] = "*%1*";
            fetch_text[2] = "*%2*";
            fetch_text[3] = "*%3*";
            fetch_text[4] = "*%4*";
            fetch_text[5] = "*%5*";
            fetch_text[6] = "*%6*";
            fetch_text[7] = "*%7*";
            fetch_text[8] = "*%8*";
            fetch_text[9] = "*%9*";
            fetch_text[10] = "*%10*";
            fetch_text[11] = "*%11*";
            fetch_text[12] = "*%12*";
            fetch_text[13] = "*%13*";
            fetch_text[14] = "*%14*";
            fetch_text[15] = "*%15*";
            fetch_text[16] = "*%16*";
            fetch_text[17] = "*%17*";
            fetch_text[18] = "*%18*";
            fetch_text[19] = "*%19*";
            fetch_text[20] = "*%20*";
            fetch_text[21] = "*%21*";
            fetch_text[22] = "*%22*";
            fetch_text[23] = "*%23*";
            fetch_text[24] = "*%24*";
            fetch_text[25] = "*%25*";
            fetch_text[26] = "*%26*";
            fetch_text[27] = "*%27*";
            fetch_text[28] = "*%28*";
            fetch_text[29] = "*%29*";
            fetch_text[30] = "*%30*";
            fetch_text[31] = "*%31*";
            fetch_text[32] = "*%32*";
            fetch_text[33] = "*%33*";
            fetch_text[34] = "*%34*";
            fetch_text[35] = "*%35*";
            fetch_text[36] = "*%36*";
            fetch_text[37] = "*%37*";
            fetch_text[38] = "*%38*";
            fetch_text[39] = "*%39*";
            fetch_text[40] = "*%40*";
            fetch_text[41] = "*%41*";
            fetch_text[42] = "*%42*";
            fetch_text[43] = "*%43*";
            fetch_text[44] = "*%44*";
            fetch_text[45] = "*%45*";
            fetch_text[46] = "*%46*";
            fetch_text[47] = "*%47*";
            fetch_text[48] = "*%48*";
            fetch_text[49] = "*%49*";
            fetch_text[50] = "*%50*";
            fetch_text[51] = "*%51*";
            fetch_text[52] = "*%52*";
            fetch_text[53] = "*%53*";
            fetch_text[54] = "*%54*";
            fetch_text[55] = "*%55*";
            fetch_text[56] = "*%56*";
            fetch_text[57] = "*%57*";
            fetch_text[58] = "*%58*";
            fetch_text[59] = "*%59*";
            fetch_text[60] = "*%60*";
            fetch_text[61] = "*%61*";
            fetch_text[62] = "*%62*";
            fetch_text[63] = "*%63*";
            fetch_text[64] = "*%64*";
            fetch_text[65] = "*%65*";
            fetch_text[66] = "*%66*";
            fetch_text[67] = "*%67*";
            fetch_text[68] = "*%68*";
            fetch_text[69] = "*%69*";
            fetch_text[70] = "*%70*";
            fetch_text[71] = "*%71*";
            fetch_text[72] = "*%72*";
            fetch_text[73] = "*%73*";
            fetch_text[74] = "*%74*";
            fetch_text[75] = "*%75*";
            fetch_text[76] = "*%76*";
            fetch_text[77] = "*%77*";
            fetch_text[78] = "*%78*";
            fetch_text[79] = "*%79*";
            fetch_text[80] = "*%80*";
            fetch_text[81] = "*%81*";
            fetch_text[82] = "*%82*";
            fetch_text[83] = "*%83*";
            fetch_text[84] = "*%84*";
            fetch_text[85] = "*%85*";
            fetch_text[86] = "*%86*";
            fetch_text[87] = "*%87*";
            fetch_text[88] = "*%88*";
            fetch_text[89] = "*%89*";
            fetch_text[90] = "*%90*";
            fetch_text[91] = "*%91*";
            fetch_text[92] = "*%92*";
            fetch_text[93] = "*%93*";
            fetch_text[94] = "*%94*";
            fetch_text[95] = "*%95*";
            fetch_text[96] = "*%96*";
            fetch_text[97] = "*%97*";
            fetch_text[98] = "*%98*";
            fetch_text[99] = "*%99*";
            fetch_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/Bixby/media/gif/giphy.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Meter Calculated!* 🏳️‍🌈\n*Result:* ${fetch_text[i]}` }
            )
        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'meter', fromMe: false, desc: ENGAY}, (async (message, match) => {

            if (message.reply_message === false) return await message.client.sendMessage(message.jid, ENREP, MessageType.text);

            await message.client.sendMessage(message.jid, '*Calculating* ' + '@' + message.reply_message.jid.split('@')[0] + '’s *Gay Meter.. 🏳️‍🌈*', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

            await new Promise(r => setTimeout(r, 2100));

            var fetch_text = new Array ();
            fetch_text[0] = "*%0*";
            fetch_text[1] = "*%1*";
            fetch_text[2] = "*%2*";
            fetch_text[3] = "*%3*";
            fetch_text[4] = "*%4*";
            fetch_text[5] = "*%5*";
            fetch_text[6] = "*%6*";
            fetch_text[7] = "*%7*";
            fetch_text[8] = "*%8*";
            fetch_text[9] = "*%9*";
            fetch_text[10] = "*%10*";
            fetch_text[11] = "*%11*";
            fetch_text[12] = "*%12*";
            fetch_text[13] = "*%13*";
            fetch_text[14] = "*%14*";
            fetch_text[15] = "*%15*";
            fetch_text[16] = "*%16*";
            fetch_text[17] = "*%17*";
            fetch_text[18] = "*%18*";
            fetch_text[19] = "*%19*";
            fetch_text[20] = "*%20*";
            fetch_text[21] = "*%21*";
            fetch_text[22] = "*%22*";
            fetch_text[23] = "*%23*";
            fetch_text[24] = "*%24*";
            fetch_text[25] = "*%25*";
            fetch_text[26] = "*%26*";
            fetch_text[27] = "*%27*";
            fetch_text[28] = "*%28*";
            fetch_text[29] = "*%29*";
            fetch_text[30] = "*%30*";
            fetch_text[31] = "*%31*";
            fetch_text[32] = "*%32*";
            fetch_text[33] = "*%33*";
            fetch_text[34] = "*%34*";
            fetch_text[35] = "*%35*";
            fetch_text[36] = "*%36*";
            fetch_text[37] = "*%37*";
            fetch_text[38] = "*%38*";
            fetch_text[39] = "*%39*";
            fetch_text[40] = "*%40*";
            fetch_text[41] = "*%41*";
            fetch_text[42] = "*%42*";
            fetch_text[43] = "*%43*";
            fetch_text[44] = "*%44*";
            fetch_text[45] = "*%45*";
            fetch_text[46] = "*%46*";
            fetch_text[47] = "*%47*";
            fetch_text[48] = "*%48*";
            fetch_text[49] = "*%49*";
            fetch_text[50] = "*%50*";
            fetch_text[51] = "*%51*";
            fetch_text[52] = "*%52*";
            fetch_text[53] = "*%53*";
            fetch_text[54] = "*%54*";
            fetch_text[55] = "*%55*";
            fetch_text[56] = "*%56*";
            fetch_text[57] = "*%57*";
            fetch_text[58] = "*%58*";
            fetch_text[59] = "*%59*";
            fetch_text[60] = "*%60*";
            fetch_text[61] = "*%61*";
            fetch_text[62] = "*%62*";
            fetch_text[63] = "*%63*";
            fetch_text[64] = "*%64*";
            fetch_text[65] = "*%65*";
            fetch_text[66] = "*%66*";
            fetch_text[67] = "*%67*";
            fetch_text[68] = "*%68*";
            fetch_text[69] = "*%69*";
            fetch_text[70] = "*%70*";
            fetch_text[71] = "*%71*";
            fetch_text[72] = "*%72*";
            fetch_text[73] = "*%73*";
            fetch_text[74] = "*%74*";
            fetch_text[75] = "*%75*";
            fetch_text[76] = "*%76*";
            fetch_text[77] = "*%77*";
            fetch_text[78] = "*%78*";
            fetch_text[79] = "*%79*";
            fetch_text[80] = "*%80*";
            fetch_text[81] = "*%81*";
            fetch_text[82] = "*%82*";
            fetch_text[83] = "*%83*";
            fetch_text[84] = "*%84*";
            fetch_text[85] = "*%85*";
            fetch_text[86] = "*%86*";
            fetch_text[87] = "*%87*";
            fetch_text[88] = "*%88*";
            fetch_text[89] = "*%89*";
            fetch_text[90] = "*%90*";
            fetch_text[91] = "*%91*";
            fetch_text[92] = "*%92*";
            fetch_text[93] = "*%93*";
            fetch_text[94] = "*%94*";
            fetch_text[95] = "*%95*";
            fetch_text[96] = "*%96*";
            fetch_text[97] = "*%97*";
            fetch_text[98] = "*%98*";
            fetch_text[99] = "*%99*";
            fetch_text[100] = "*%100*";

            var i = Math.floor(100*Math.random())

            await message.client.sendMessage(
                message.jid, 
                fs.readFileSync("/root/Bixby/media/gif/giphy.mp4"),
                MessageType.video, 
                { mimetype: Mimetype.gif, caption: `*Gay Meter Calculated By Bixby!* 🏳️‍🌈\n*Result:* ${fetch_text[i]}` }
            )
        }));
    }
}
