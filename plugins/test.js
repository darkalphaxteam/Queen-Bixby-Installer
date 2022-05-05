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

Bixby.addCommand({pattern: '1test', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

// send a buttons message!

    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

var plk_here = new Date().toLocaleDateString(get_localized_date)

var afnplk = '⏱ Time :' + plk_say + '\n\n 📅 Date :' + plk_here + ''

	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'All Menu \n\n🏟️ .vtalk\n.   Voice chat ආරම්භ කරයි.\n\n🏟️ .fulleva \n.  full functional Eva features ආරම්භ කරයි. Turn your account into a ai chatbot!\n⌨️ Eg:- : .fulleva on / off\n\n🏟️ .xmedia\n.  මෙවලම් 25කින් සමන්විත Plugin සමූහය. \n\n🏟️ .ownercmnd\n.   User සහ Sudo සදහා වලංගු Command \n\n🏟️ .anime\n.  අහඹු  anime රූප   \n\n🏟️ .ttp \n.  අකුරු සමූහයක් සරල පෙල පින්තාරුවක් බවට. \n\n🏟️ .attp \n.  Text දේදුනු ආකාරයේ ස්ටිකර් බවට . \n🏟️ .autobio\n .  Auto Bio පහසුකම \n⌨️ Eg:- : .autobio on / off\n\n🏟️ .carbo n\n.  කාබන් ආකාරයේ Photo  ලබා ගැනීම  \n\n🏟️ .mp3\n.  Video එකක්  Mp3 බවට පරිවර්තනය  \n\n🏟️ .photo\n.  ස්ටිකරයක් Photo එකක් බවට . \n\n🏟️ .mp4\n.  චලන ස්ටිකරයක් Video එකක්  බවට . \n\n🏟️ .dict\n .  Dictionery බාවිතය.Eg: .dict en_US;lead For supporting languages send *.lngcode* \n\n🏟️ .find\n.  ගීතයක් සෙවීමට \n\n🏟️ .welcome\n.  Welcome Massege සාදනු ලබයි.  එම Command  එක හිස්ව  ලබාදීමෙන් පෙර සැකසූ පනිවිඩය ලබා ගත හැක .\n \n🏟️ .goodbye\n.  සමුගැනීමෙ පනිවිඩය සාදයි . . \n\n🏟️ .antilink \n.   Antilink ආරක්ෂක පත්ධතිය ආරම්භ කරයි. .\n⌨️ Eg:- : .antilink on / off \n\n🏟️ .ffire \n.  Free Fire ලෝගෝ එකතුව \n\n🏟️ .emo \n.  emogi  png වෙත පරිවර්තනය \n\n🏟️ .notes\n.  ඔබ තැබූ සටහන් පෙන්වයි . n\n🏟️ .owner\n.  bot owner ගේ තොරතුරු පෙන්වයි  \n\n🏟️ .jid \n.  සමූහයක Group Jid Number  ලබා ගනී.\n\n🏟️ .random \n.  word image \n\n🏟️ .brdmore \n.  add readmore before your text \n\n🏟️ .rdmore \n.  add readmore before your text\n\n 🏟️ .removebg \n.  Removes the background of the photos. \n\n🏟️ .report \n.  Sends reports to group admins. \n\n🏟️ .scan \n.  Checks whether the entered number is registered on WhatApp. \n\n🏟️ .trt\n.  It translates with Google Translate. You must reply any message.\n⌨️ Eg:- : .trt tr it (From Turkish to Italian)\n\n🏟️ .detectlang\n.  Guess the language of the replied message.\n\n🏟️ .currency\n\n🏟️ .tts \n.  It converts text to sound.\n\n 🏟️ .song \n.  Uploads the song you wrote. \n\n🏟️ .video\n .  Downloads video from YouTube. \n\n🏟️ .sing \n.  It sings song that you have written\n\n 🏟️ .song \n.  Uploads the song you wrote for ios users. \n\n🏟️ .wiki \n.  Searches query on Wikipedia. \n\n🏟️ .img \n.  Searches for related pics on Google. \n\n🏟️ .github \n.  Collects github information from the given username.\n⌨️ Example: .github RIPPER-SER \n\n🏟️ .lyric \n.  Finds the lyrics of the song. \n\n🏟️ .covid \n.  Shows the daily and overall covid table of more than 15 countries. \n\n🏟️ .sweather \n.  Gives you the weekly interpretations of space weather observations provided by the Space Weather Research Center (SWRC) for a p. \n\n🏟️ .compliment \n.  It sends complimentry sentenses \n\n🏟️ .hmod \n.  Finds mod apps from happymod \n\n🏟️ .insult \n.  It sends insulted words \n\n🏟️ .movie \n.  Shows movie info. \n\n🏟️ .joke \n\n.  It sends random jokes \n\n🏟️ .molu\n .  Chat with Bixby. Use .molu <message> \n\n🏟️ .owner\n.  shows the detail of bot owner \n\n🏟️ .quote \n.  It shares famous quotes \n\n🏟️ .ss \n.  Takes a screenshot from the page in the given link. \n\n🏟️ .setvar\n.  It sends high resolution wallpapers. \n\n🏟️ .show \n.  Get info related to tv series and shows \n\n🏟️ .ig \n.  Fetches user informations from instagram \n\n🏟️ .animesay \n.  It writes the text inside the banner the anime girl is holding \n\n🏟️ .changesay \n.  Turns the text into the change my mind poster. \n\n🏟️ .trumpsay\n .  Converts the text to Trumps tweet. \n\n🏟️ .bgm \n.  turn on and turn off bgm. -bot owner command\n⌨️ Eg:- : .bgm on / off\n\n🏟️ .autosticker \n.  turn on and turn off bgm. -bot owner command\n⌨️ Eg:- : .sticker on / off\n\n🏟️ .sudo \n.  changes sudo numbers\n⌨️ Eg:- : .sudo *your number*\n\n🏟️ .caption \n.  changes all captions\n⌨️ Eg:- : .caption *Made by Bixby Mowl*\n\n🏟️ .handlers \n.  changes handlers\n⌨️ Eg:- : .handler ^[.!] \n\n🏟️ .botname \n.  change your bot name\n⌨️ Eg:- : .botname *name* \n\n🏟️ .theri  \n.  change your theri commands\n⌨️ Eg:- : .theri command,command\n\n🏟️ .sticker\n.  It converts your replied photo or video to sticker.\n\n🏟️ .alive\n.  Does bot work?\n\n🏟️ .sysd\n.  Shows the system properties. \n\n🏟️ .tagadmin\n.  Tags group admins.\n🏟️ .txtit\n.  Shows text to image tools with unlimited access. \n\n🏟️ .theri \n.  turn on & off anti-badword To remove members when they use bad words\n⌨️ Eg:- : .theri no / yes\n\n🏟️ .a \n.  Converts audio to sound recording. \n\n🏟️ .unvoice\n.  Converts audio to sound recording.\n\n🏟️ .update\n.  Checks the update. \n\n🏟️ .update now\n.  It makes updates. \n\n🏟️ .wallpaper\n.  It sends high resolution wallpapers. \n\n🏟️ .wame \n.  Get a link to the user chat. \n\n🏟️ .reset warn\n.  it sends good morning message\n\n🏟️ .weather \n.  Shows the weather. \n\n🏟️ .speedtest\n.  Measures Download and Upload speed. \n\n🏟️ .ping\n.  Measures your ping. \n\n🏟️ .short\n .  Shorten the long link. \n\n🏟️ .calc \n.  Performs simple math operations. \n\n🏟️ .whois\n.  Displays metadata data of group or person.\n\n🏟️ .gdmrng\n\n.  it sends good morning message\n\n🏟️ .gdni8\n.  it sends good night message\n '}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: 'X-Media \n\nXMEDIA COMMANDS ARE.\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc:Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc:Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc:Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc:Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc:Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc:Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc:Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc:Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc:Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc:Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc:Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\nℹ️Desc:Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc:Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc:Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc:Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc:  Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n🇬🇧 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n🇬🇧 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n🇬🇧 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.\n🇬🇧 Applies a art effect to the photo\n\n '}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: 'Git \n\n🎯 *Creater Ziyan , Midlaj and Thinura\n\n📊  Owner number wa.me/94711421243\n\n📊 *Owner Number wa.me/94711421243*\n\n📊 Whatsapp group : https://chat.whatsapp.com/LqqFmG64j5KFUxSje40UNz\n\n📊 *Githublink       https://github.com/ALPHA-OFFICIAL-WA-TEAM/SL-BIXBY-BOT*\n'  }, type: 1},

      ]

      

      const buttonMessage = {

          contentText: ' ╔════════ʙɪxʙʏ════════╗\n\nᴡᴇʟᴄᴏᴍᴇ ᴛᴏ Qᴜᴇᴇɴ ʙɪxʙʏ ᴘᴜʙʟɪᴄ ʙᴏᴛ ᴍᴇɴᴜ\n\n🛢️. OWNER   ➢️ ᴅᴀʀᴋ ᴀʟᴘʜᴀ\n🛢️️. VERSION ➢️ 1.5.2\n🛢️. WORKTYPE ➢️ ᴘᴜʙʟɪᴄ \n🛢️. BASE ➢ ᴡʜᴀᴛꜱʙɪxʙʏ \n🛢️. BOT FOR ➢ ᴏɴʟʏ ꜱɪɴʜᴀʟᴀ \n\n Qᴜᴇᴇɴ ʙɪxʙʏ ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ\n',

          footerText: '╚════════ʙɪxʙʏ════════╝',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
