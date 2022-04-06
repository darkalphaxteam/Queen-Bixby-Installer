const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;


 var W_PUB = ''
 var W_PRI = ''
 var W_ADM = ''
  if (config.LANG == 'EN') {

    W_ADM = 'ᴡᴏʀᴋ ᴛʏᴘᴇ ɪꜱ ᴀᴅᴍɪɴ ɴᴏᴡ' 
    W_PUB = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘᴜʙʟɪᴄ'
    W_PRI = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘʀɪᴠᴀᴛᴇ'
    }

    if (config.LANG == 'ML') {

      W_ADM = 'ᴡᴏʀᴋ ᴛʏᴘᴇ ɪꜱ ᴀᴅᴍɪɴ ɴᴏᴡ'
      W_PUB = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘᴜʙʟɪᴄ'
      W_PRI = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘʀɪᴠᴀᴛᴇ'
    }

 Asena.addCommand({pattern: 'work ?(.*)', fromMe: true,dontAddCommandList: true,desc: 'change bot work type. example - .work public/private/admin' }, (async (message, match) => {
        if (match[1] == 'public') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'public'
                    } 
                });
                await message.sendMessage(W_PUB)
        } else if (match[1] == 'private') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'private'
                    } 
                });
                await message.sendMessage(W_PRI)
         } else if (match[1] == 'private') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'admin'
                    } 
                });
                await message.sendMessage(W_ADM)
        }
    }));
var plk_STN = ''
var AFN_STN = ''
 
  if (config.LANG == 'EN') {
    
    plk_STN = 'make your bot standby'
    AFN_STN = 'make your bot not standby'  
    }

    if (config.LANG == 'ML') {
      
      plk_STN = 'നിങ്ങളുടെ ബോട്ട് സ്റ്റാൻഡ്ബൈ ആക്കുക'
      AFN_STN = 'സ്റ്റാൻഡ്ബൈയിൽ നിന്ന് നിങ്ങളുടെ ബോട്ട് മാറ്റുക' 
    }

MyPnky.addCommand({pattern: 'standby ?(.*)', fromMe: true, desc: plk_STN }, (async (message, match) => {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['STANDBY_MODE']: 'on'
                    } 
                });
     await message.sendMessage('your bot is standby now')
    }));
}
MyPnky.addCommand({pattern: 'run again ?(.*)', fromMe: true, desc: AFN_STN }, (async (message, match) => {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['STANDBY_MODE']: 'off'
                    } 
                });
    await message.sendMessage('your bot will start running in 1 to 2 minute')
    }));

function _0x440b(_0x199178,_0x1b8e4a){const _0x528d9e=_0x528d();return _0x440b=function(_0x440bae,_0x30533f){_0x440bae=_0x440bae-0x154;let _0x3c0198=_0x528d9e[_0x440bae];return _0x3c0198;},_0x440b(_0x199178,_0x1b8e4a);}const _0x119af0=_0x440b;(function(_0x1c5b06,_0x4c772c){const _0x233a6e=_0x440b,_0x4a06ce=_0x1c5b06();while(!![]){try{const _0x2e0b76=parseInt(_0x233a6e(0x15e))/0x1*(-parseInt(_0x233a6e(0x174))/0x2)+parseInt(_0x233a6e(0x165))/0x3*(-parseInt(_0x233a6e(0x185))/0x4)+-parseInt(_0x233a6e(0x164))/0x5+parseInt(_0x233a6e(0x156))/0x6*(-parseInt(_0x233a6e(0x173))/0x7)+-parseInt(_0x233a6e(0x16d))/0x8+-parseInt(_0x233a6e(0x15c))/0x9*(-parseInt(_0x233a6e(0x15d))/0xa)+parseInt(_0x233a6e(0x161))/0xb;if(_0x2e0b76===_0x4c772c)break;else _0x4a06ce['push'](_0x4a06ce['shift']());}catch(_0xab9f26){_0x4a06ce['push'](_0x4a06ce['shift']());}}}(_0x528d,0xdb835),MyPnky[_0x119af0(0x175)]({'pattern':_0x119af0(0x15b)+_0x119af0(0x16b),'fromMe':!![],'desc':'changes\x20su'+_0x119af0(0x179),'usage':_0x119af0(0x16f)+_0x119af0(0x176)},async(_0xf1661b,_0x5a855e)=>{const _0x24ce82=_0x119af0;if(config[_0x24ce82(0x163)]==_0x24ce82(0x172)||config[_0x24ce82(0x163)]==_0x24ce82(0x168)){if(_0xf1661b[_0x24ce82(0x17b)+_0x24ce82(0x155)]!==![]&&_0x5a855e[0x1]==''){let _0x188d20=_0xf1661b[_0x24ce82(0x17b)+_0x24ce82(0x155)][_0x24ce82(0x189)][_0x24ce82(0x17a)+'t'];await heroku[_0x24ce82(0x17f)](baseURI+(_0x24ce82(0x167)+'rs'),{'body':{['SUDO']:config[_0x24ce82(0x177)]+','+_0x188d20[_0x24ce82(0x178)](_0x24ce82(0x180)+_0x24ce82(0x15f),',0')}}),await _0xf1661b['sendMessag'+'e'](_0x24ce82(0x18a)+_0x24ce82(0x169)+_0x24ce82(0x154));}else{if(_0xf1661b[_0x24ce82(0x17b)+_0x24ce82(0x155)]==![]&&_0x5a855e[0x1]!==''){if(_0x5a855e[0x1]==_0x24ce82(0x15a))await heroku[_0x24ce82(0x17f)](baseURI+('/config-va'+'rs'),{'body':{[_0x24ce82(0x177)]:config[_0x24ce82(0x177)]+','+_0x5a855e[0x1]+',0'}}),await _0xf1661b[_0x24ce82(0x182)+'e'](_0x24ce82(0x16c)+_0x24ce82(0x16a)+_0x24ce82(0x159)+_0x24ce82(0x187));else _0x5a855e[0x1]!=='clean'&&(await heroku[_0x24ce82(0x17f)](baseURI+(_0x24ce82(0x167)+'rs'),{'body':{[_0x24ce82(0x177)]:config[_0x24ce82(0x177)]+','+_0x5a855e[0x1]+',0'}}),await _0xf1661b['sendMessag'+'e'](_0x24ce82(0x18a)+_0x24ce82(0x183)+_0x24ce82(0x17e)+'G'));}else await _0xf1661b[_0x24ce82(0x182)+'e'](_0x24ce82(0x166)+'NUMBER\x20OR\x20'+'REPLY\x20TO\x20S'+_0x24ce82(0x158)+_0x24ce82(0x17c)+_0x24ce82(0x170)+_0x24ce82(0x171)+_0x24ce82(0x181)+_0x24ce82(0x188)+_0x24ce82(0x184)+_0x24ce82(0x186)+_0x24ce82(0x17d)+_0x24ce82(0x157));}}else await _0xf1661b[_0x24ce82(0x182)+'e']('thise\x20feat'+'ure\x20is\x20cre'+_0x24ce82(0x16e)+_0x24ce82(0x160)+_0x24ce82(0x162));}));function _0x528d(){const _0x43f5ea=['clean','addsudo\x20?(','27eCOsex','1904790QbKCKC','93187hPShrf','p.net','inky\x20and\x20j','37562305AaMcBf','ulie','BOTCREATOR','1181240pKUNfb','2721267xWtJvg','```NEED\x20A\x20','/config-va','farhandqz','DDED\x0a\x20BOT\x20','O\x20REMOVED.','.*)','```ALL\x20SUD','813624OrWftS','ated\x20for\x20p','.sudo\x20*you','AKE\x20THEM\x20S','UDO\x20\x0a\x0a\x20com','afnanplk','140hINLty','2VwLpJE','addCommand','r\x20number*','SUDO','replace','do\x20numbers','participan','reply_mess','SSAGE\x20TO\x20M','move\x20all\x20s','\x20RESTARTIN','patch','@s.whatsap','mand\x20:\x20.ad','sendMessag','DDED\x20\x0a\x20BOT','n\x20\x0a\x20descri','4jSPtzN','ption\x20:\x20re','ARTING```','dsudo\x20clea','data','NEW\x20SUDO\x20A','RESTARTING','age','524652gLOnQo','udo','OMEONES\x20ME','\x20\x0aBOT\x20REST'];_0x528d=function(){return _0x43f5ea;};return _0x528d();}
