/* Copyright (C) 2022 RIPPER-SER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
https://github.com/RIPPER-SER/bixbymowl
*/
//Dont copy this file without credit


//BASIC REQUIREMENTS
const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'dq', fromMe: true, desc: 'random Alia bhatt images'}, (async (message, match) => {

    var fetch_img = new Array ();
    
    fetch_img[0] = "https://telegra.ph/file/1745416c09b18483ad2d4.jpg";
    
    fetch_img[1] = "https://telegra.ph/file/3464789cfd8684111375f.jpg";
    
    fetch_img[2] = "https://telegra.ph/file/a19053f75861f6f959d2b.jpg";
    
    fetch_img[3] = "https://telegra.ph/file/a4c5fde1aa9545203ba87.jpg";
    
    fetch_img[4] = "https://telegra.ph/file/c868610a3f40941aae92d.jpg";
    
    fetch_img[5] = "https://telegra.ph/file/5f43b11a4351de3cf80e1.jpg";
    
    fetch_img[6] = "https://telegra.ph/file/39c720ad6bd0802d8c24f.jpg";
    
    fetch_img[7] = "https://telegra.ph/file/7d2508f68267989117494.jpg";
    
    fetch_img[8] = "https://telegra.ph/file/c646a7f9946eb63315557.jpg";
    
    fetch_img[9] = "https://telegra.ph/file/c02bb1c2295dddbd35dc9.jpg";
    
    fetch_img[10] = "https://telegra.ph/file/41f1ba9da3b937b04cc5f.jpg";
    
    fetch_img[11] = "https://telegra.ph/file/602ac710f31edb7865034.jpg";
    
    fetch_img[12] = "https://telegra.ph/file/bdeddc9dd51742926a4ba.jpg";
    
    fetch_img[13] = "https://telegra.ph/file/f4f5af1c8405a2de3624d.jpg";
    
    fetch_img[14] = "https://telegra.ph/file/b26c5cc05b355c532b178.jpg";
    
    fetch_img[15] = "https://telegra.ph/file/547987c1a8e8b18bcbe5e.jpg";
    
    fetch_img[16] = "https://telegra.ph/file/8349109c7595d1980b4b6.jpg";
    
    fetch_img[17] = "https://telegra.ph/file/efab43b3d265fb02d7e07.jpg";
    
    fetch_img[18] = "https://telegra.ph/file/14d91286b706a2c51513d.jpg";
    
    fetch_img[19] = "https://telegra.ph/file/2406269920e682e3fde34.jpg";
    
    fetch_img[20] = "https://telegra.ph/file/22162df4205a2e82b304a.jpg";
    
    fetch_img[21] = "https://telegra.ph/file/a37a45cf025c92a15f9b8.jpg";
    
    fetch_img[22] = "https://telegra.ph/file/ddce1e5a5d881e8b307e0.jpg";
    
    fetch_img[23] = "https://telegra.ph/file/e6dc607261d02def67e1e.jpg";
    
    fetch_img[24] = "https://telegra.ph/file/3ec8ba1b1ca572d36a0cf.jpg";
    
    fetch_img[25] = "https://telegra.ph/file/4adafa508bf9e305248c7.jpg";
    
    fetch_img[26] = "https://telegra.ph/file/004b23c16665e69290235.jpg";
    
    fetch_img[27] = "https://telegra.ph/file/2568e3480ff23ee258344.jpg";
    
    fetch_img[28] = "https://telegra.ph/file/35a490a1b656a0d678607.jpg";
    
    fetch_img[29] = "https://telegra.ph/file/a068b516275bcc44a8e69.jpg";
    
    fetch_img[30] = "https://telegra.ph/file/b11ce9ec3e25154536b7b.jpg";
    
    fetch_img[31] = "https://telegra.ph/file/7c70e63c2cbd3ae49737e.jpg";
    
    fetch_img[32] = "https://telegra.ph/file/775d83cd02c3add3c3243.jpg";
    
    fetch_img[33] = "https://telegra.ph/file/2eb40332c25e5ade79308.jpg";
    
    fetch_img[34] = "https://telegra.ph/file/ddfc39d90ede2578688a7.jpg";
    
    fetch_img[35] = "https://telegra.ph/file/eaa23703271056485aa1c.jpg";
    
    fetch_img[37] = "https://telegra.ph/file/fa68cb7ad1052617bada8.jpg";
    
    fetch_img[38] = "https://telegra.ph/file/8d915b9b0cb1a691ad11a.jpg";
    
    fetch_img[39] = "https://telegra.ph/file/27d5a2e209fd34201af74.jpg";
    
    fetch_img[40] = "https://telegra.ph/file/c5efd890e395e27d51c44.jpg";
    
    fetch_img[41] = "https://telegra.ph/file/366ba22a8dfbfd62d7b13.jpg";
    
    fetch_img[42] = "https://telegra.ph/file/9dd66cf0c48c794629b85.jpg";
    
    fetch_img[43] = "https://telegra.ph/file/7fd7e742fb80ef5afaecc.jpg";
    
    fetch_img[44] = "https://telegra.ph/file/b7008fe9392850769af0f.jpg";
    
    fetch_img[45] = "https://telegra.ph/file/08d11cd4e24a4a36f63a6.jpg";
    
    fetch_img[46] = "https://telegra.ph/file/642631d4230e866e183f5.jpg";
    
    fetch_img[47] = "https://telegra.ph/file/130f305640b641d4a57d4.jpg";
    
    fetch_img[48] = "https://telegra.ph/file/42e3badc7d2e7271aafe2.jpg";
    
    fetch_img[49] = "https://telegra.ph/file/e2135281c40ca0b3324e3.jpg";
    
    fetch_img[50] = "https://telegra.ph/file/c4f44855af0bded55b71a.jpg";
    
    fetch_img[51] = "https://telegra.ph/file/5571c6eec62fb81efb4fe.jpg";
    
    fetch_img[52] = "https://telegra.ph/file/e409e1f58841a719df8a8.jpg";
    
    fetch_img[53] = "https://telegra.ph/file/361f78db4a4c5777c58c0.jpg";
    
    fetch_img[54] = "https://telegra.ph/file/e47bb5537b5fcb1a4dd9d.jpg";
    
    fetch_img[55] = "https://telegra.ph/file/19c9c2becb4d2e6109be4.jpg";
    
    fetch_img[56] = "https://telegra.ph/file/e23953e1a6d6b7471d1df.jpg";
    
    fetch_img[57] = "https://telegra.ph/file/40d09c88dcc7f30726bf5.jpg";
    
    fetch_img[58] = "https://telegra.ph/file/d60d8bfc3170bb5d70c82.jpg";
    
    fetch_img[59] = "https://telegra.ph/file/09e9d5dff7b07d68bb89c.jpg";
    
    fetch_img[60] = "https://telegra.ph/file/1ada76981625d68a864d4.jpg";
    
    fetch_img[61] = "https://telegra.ph/file/27a2f93d060a6afedcc0b.jpg";
    
    fetch_img[62] = "https://telegra.ph/file/31da3372a0d43d60531cd.jpg";
    
    fetch_img[63] = "https://telegra.ph/file/a78468262b3040b1fc088.jpg";
    
    fetch_img[64] = "https://telegra.ph/file/aa69a10ce67a02d9115b0.jpg";
    
    fetch_img[65] = "https://telegra.ph/file/73cdd291cd2715e2a6d32.jpg";
    
    fetch_img[66] = "https://telegra.ph/file/81f898b1308ce0a5a5491.jpg";
    
    var i = Math.floor(66*Math.random())

    var respoimage = await axios.get(`${fetch_img[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made By Bixby Mowl'})

    }));

}
/*this plugin is full created by ziyan don't copy this without credit*/
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'dq', fromMe: false, desc:'random Alia bhatt images '}, (async (message, match) => {

    var fetch_img = new Array ();
    
    fetch_img[0] = "https://telegra.ph/file/1745416c09b18483ad2d4.jpg";
    
    fetch_img[1] = "https://telegra.ph/file/3464789cfd8684111375f.jpg";
    
    fetch_img[2] = "https://telegra.ph/file/a19053f75861f6f959d2b.jpg";
    
    fetch_img[3] = "https://telegra.ph/file/a4c5fde1aa9545203ba87.jpg";
    
    fetch_img[4] = "https://telegra.ph/file/c868610a3f40941aae92d.jpg";
    
    fetch_img[5] = "https://telegra.ph/file/5f43b11a4351de3cf80e1.jpg";
    
    fetch_img[6] = "https://telegra.ph/file/39c720ad6bd0802d8c24f.jpg";
    
    fetch_img[7] = "https://telegra.ph/file/7d2508f68267989117494.jpg";
    
    fetch_img[8] = "https://telegra.ph/file/c646a7f9946eb63315557.jpg";
    
    fetch_img[9] = "https://telegra.ph/file/c02bb1c2295dddbd35dc9.jpg";
    
    fetch_img[10] = "https://telegra.ph/file/41f1ba9da3b937b04cc5f.jpg";
    
    fetch_img[11] = "https://telegra.ph/file/602ac710f31edb7865034.jpg";
    
    fetch_img[12] = "https://telegra.ph/file/bdeddc9dd51742926a4ba.jpg";
    
    fetch_img[13] = "https://telegra.ph/file/f4f5af1c8405a2de3624d.jpg";
    
    fetch_img[14] = "https://telegra.ph/file/b26c5cc05b355c532b178.jpg";
    
    fetch_img[15] = "https://telegra.ph/file/547987c1a8e8b18bcbe5e.jpg";
    
    fetch_img[16] = "https://telegra.ph/file/8349109c7595d1980b4b6.jpg";
    
    fetch_img[17] = "https://telegra.ph/file/efab43b3d265fb02d7e07.jpg";
    
    fetch_img[18] = "https://telegra.ph/file/14d91286b706a2c51513d.jpg";
    
    fetch_img[19] = "https://telegra.ph/file/2406269920e682e3fde34.jpg";
    
    fetch_img[20] = "https://telegra.ph/file/22162df4205a2e82b304a.jpg";
    
    fetch_img[21] = "https://telegra.ph/file/a37a45cf025c92a15f9b8.jpg";
    
    fetch_img[22] = "https://telegra.ph/file/ddce1e5a5d881e8b307e0.jpg";
    
    fetch_img[23] = "https://telegra.ph/file/e6dc607261d02def67e1e.jpg";
    
    fetch_img[24] = "https://telegra.ph/file/3ec8ba1b1ca572d36a0cf.jpg";
    
    fetch_img[25] = "https://telegra.ph/file/4adafa508bf9e305248c7.jpg";
    
    fetch_img[26] = "https://telegra.ph/file/004b23c16665e69290235.jpg";
    
    fetch_img[27] = "https://telegra.ph/file/2568e3480ff23ee258344.jpg";
    
    fetch_img[28] = "https://telegra.ph/file/35a490a1b656a0d678607.jpg";
    
    fetch_img[29] = "https://telegra.ph/file/a068b516275bcc44a8e69.jpg";
    
    fetch_img[30] = "https://telegra.ph/file/b11ce9ec3e25154536b7b.jpg";
    
    fetch_img[31] = "https://telegra.ph/file/7c70e63c2cbd3ae49737e.jpg";
    
    fetch_img[32] = "https://telegra.ph/file/775d83cd02c3add3c3243.jpg";
    
    fetch_img[33] = "https://telegra.ph/file/2eb40332c25e5ade79308.jpg";
    
    fetch_img[34] = "https://telegra.ph/file/ddfc39d90ede2578688a7.jpg";
    
    fetch_img[35] = "https://telegra.ph/file/eaa23703271056485aa1c.jpg";
    
    fetch_img[37] = "https://telegra.ph/file/fa68cb7ad1052617bada8.jpg";
    
    fetch_img[38] = "https://telegra.ph/file/8d915b9b0cb1a691ad11a.jpg";
    
    fetch_img[39] = "https://telegra.ph/file/27d5a2e209fd34201af74.jpg";
    
    fetch_img[40] = "https://telegra.ph/file/c5efd890e395e27d51c44.jpg";
    
    fetch_img[41] = "https://telegra.ph/file/366ba22a8dfbfd62d7b13.jpg";
    
    fetch_img[42] = "https://telegra.ph/file/9dd66cf0c48c794629b85.jpg";
    
    fetch_img[43] = "https://telegra.ph/file/7fd7e742fb80ef5afaecc.jpg";
    
    fetch_img[44] = "https://telegra.ph/file/b7008fe9392850769af0f.jpg";
    
    fetch_img[45] = "https://telegra.ph/file/08d11cd4e24a4a36f63a6.jpg";
    
    fetch_img[46] = "https://telegra.ph/file/642631d4230e866e183f5.jpg";
    
    fetch_img[47] = "https://telegra.ph/file/130f305640b641d4a57d4.jpg";
    
    fetch_img[48] = "https://telegra.ph/file/42e3badc7d2e7271aafe2.jpg";
    
    fetch_img[49] = "https://telegra.ph/file/e2135281c40ca0b3324e3.jpg";
    
    fetch_img[50] = "https://telegra.ph/file/c4f44855af0bded55b71a.jpg";
    
    fetch_img[51] = "https://telegra.ph/file/5571c6eec62fb81efb4fe.jpg";
    
    fetch_img[52] = "https://telegra.ph/file/e409e1f58841a719df8a8.jpg";
    
    fetch_img[53] = "https://telegra.ph/file/361f78db4a4c5777c58c0.jpg";
    
    fetch_img[54] = "https://telegra.ph/file/e47bb5537b5fcb1a4dd9d.jpg";
    
    fetch_img[55] = "https://telegra.ph/file/19c9c2becb4d2e6109be4.jpg";
    
    fetch_img[56] = "https://telegra.ph/file/e23953e1a6d6b7471d1df.jpg";
    
    fetch_img[57] = "https://telegra.ph/file/40d09c88dcc7f30726bf5.jpg";
    
    fetch_img[58] = "https://telegra.ph/file/d60d8bfc3170bb5d70c82.jpg";
    
    fetch_img[59] = "https://telegra.ph/file/09e9d5dff7b07d68bb89c.jpg";
    
    fetch_img[60] = "https://telegra.ph/file/1ada76981625d68a864d4.jpg";
    
    fetch_img[61] = "https://telegra.ph/file/27a2f93d060a6afedcc0b.jpg";
    
    fetch_img[62] = "https://telegra.ph/file/31da3372a0d43d60531cd.jpg";
    
    fetch_img[63] = "https://telegra.ph/file/a78468262b3040b1fc088.jpg";
    
    fetch_img[64] = "https://telegra.ph/file/aa69a10ce67a02d9115b0.jpg";
    
    fetch_img[65] = "https://telegra.ph/file/73cdd291cd2715e2a6d32.jpg";
    
    fetch_img[66] = "https://telegra.ph/file/81f898b1308ce0a5a5491.jpg";
    
    var i = Math.floor(66*Math.random())

    var respoimage = await axios.get(`${fetch_img[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made By Bixby Mowl'})

    }));

}
