
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
	return `
┏━━❉ *𝘼𝘽𝙊𝙐𝙏 𝘽𝙊𝙏* ❉━━⊱
┣⊱ *nama* : ${pushname}
┣⊱ *nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *level* : ${getLevelingLevel(sender)}
┣⊱ *user register : ${_registered.length}
┗━━━━━━━━━━━━━━━━━━━━⊱

┏━━❉ *𝙇𝙀𝙑𝙀𝙇 0* ❉━━⊱
┣⊱ *${prefix}sticker*
┣⊱ *${prefix}tts*
┣⊱ *${prefix}toimg*
┣━━❉ *𝙇𝙀𝙑𝙀𝙇 2* ❉━━⊱
┣⊱ *${prefix}ocr*
┣⊱ *${prefix}quotemaker*
┣⊱ *${prefix}tiktokstalk*
┣⊱ *${prefix}fototiktok*
┣⊱ *${prefix}truth*
┣⊱ *${prefix}dare*
┣━━❉ *𝙇𝙀𝙑𝙀𝙇 4* ❉━━⊱
┣⊱ *${prefix}text3d*
┣⊱ *${prefix}bucin*
┣⊱ *${prefix}hilih*
┣⊱ *${prefix}persengay*
┣⊱ *${prefix}ssweb*
┣━━❉ *𝙇𝙀𝙑𝙀𝙇 6* ❉━━⊱
┣⊱ *${prefix}artinama*
┣⊱ *${prefix}spamcall*
┣⊱ *${prefix}quotes*
┣⊱ *${prefix}kbbi*
┣⊱ *${prefix}map*
┣⊱ *${prefix}cerpen*
┣━━❉ *𝙇𝙀𝙑𝙀𝙇 8* ❉━━⊱
┣⊱ *${prefix}chord*
┣⊱ *${prefix}lirik*
┣⊱ *${prefix}phlogo*
┣━━❉ *𝙇𝙀𝙑𝙀𝙇 9* ❉━━⊱
┣⊱ *${prefix}bisakah*
┣⊱ *${prefix}apakah*
┣⊱ *${prefix}kapankah*
┣⊱ *${prefix}rate*
┣⊱ *${prefix}owner*
┗━━━━━━━━━━━━━━⊱

┏━━❉ *𝙉𝙎𝙁𝙒* ❉━━━━⊱
┣⊱ *${prefix}waifu*
┣⊱ *${prefix}anime*
┣⊱ *${prefix}neko*
┣⊱ *${prefix}dewabatch*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}indohot*
┗━━━━━━━━━━━━━━⊱

┏━━❉ *𝙂𝙍𝙊𝙐𝙋* ❉━━━━⊱
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add*
┣⊱ *${prefix}kick*
┣⊱ *${prefix}setname*
┣⊱ *${prefix}setdesc*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━❉ *𝙊𝙒𝙉𝙀𝙍* ❉━━━⊱
┣⊱ *${prefix}bc*
┣⊱ *${prefix}setprefix*
┣⊱ *${prefix}getses*
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block*
┣⊱ *${prefix}unblock*
┣⊱ *${prefix}leave*
┣⊱ *${prefix}clone*
┗━━━━━━━━━━━━━━⊱
`
}
exports.help = help



  
