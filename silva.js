const { zokou } = require('../framework/france');

zokou(
    {
        nomCom: 'silva.stat',
        categorie: 'Maestria rpverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '  https://telegra.ph/file/9a1c19808b8b4e6bcf636.jpg';
            const msg =  ╭━━━「 ♻️𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫🎮 」❏
┆ *_♻️♯ROLE PLAYVERSE🎮_*
╰━━━━━━━━━━━━━❖
*❖Pseudo*👤:「 SILVA GAVIAL」
*❖Type de mage*👤:「 *_MAHOTSUKAI_*」
*❖Race*:「 *_HUMAIN_*」
*❖Rang*:「E 」
*❖Classe*:「 *_NOVICE 🥉_*」
        ━━━━━━━━━━━━╮
                                                           ┆
❖━━━━━━━━━━━━━╯

*LOSE : 00 💢*
*WIN : 00 💢*
*LEVEL : START 🌟*
*_Trophee : 00🏆_*

╭━━━「 ♻️𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 🎮」❏
┆ *_♻️♯TOTAL FIGHT SEASON: 00 🎮⚔️🛡️_*
╰━━━━━━━━━━━━━❖
*❏ MX : 10000 🧭*
*❏ TOKEN : 00 🎟️*
*❏ EC : 00 ♦️*
 ━━━━━━━━━━━━━━━
*Equipment🎒: 00🥋*;    
  zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);