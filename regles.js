const { zokou } = require("../framework/zokou");

zokou({
    nomCom: "stats",
    categorie: "Jeu",
}, async (dest, zk, commandeOptions) => {
    const { ms } = commandeOptions;

    // Informations sur les joueurs
    const joueur1 = {
        nom: "joueur1",
        stamina: 100,
        pv: 1000,
        zen: 3000,
    };

    const joueur2 = {
        nom: "joueur2",
        stamina: 100,
        pv: 1000,
        zen: 3000,
    };

    // Informations du combat
    const distance = "10m";
    const portee = "7m";
    const nombreDeTours = "8 TRS";
    const latence = "7 min + 1";
    const rvMessage = "*RV: uniquement en cas d'assurance absolue sinon risque de pénalité ☯️*";
    const respectMessage = "*Respect mutuelle de l'arbitre (modérateur) et de son adversaire*🛑";

    // Préparation du message
    const message = `
*_${joueur1.nom}👤🏵️ :_*
══════════════════
*_stamina 🫀: ${joueur1.stamina}🫀_*
*_PV❤️ : ${joueur1.pv}❤️_*
*_ZENEN🌀 : ${joueur1.zen}🌀_*
░░░░░░░░░░░░░░░░░░
*_${joueur2.nom}👤🏵️ :_*
══════════════════
*_stamina 🫀: ${joueur2.stamina}🫀_*
*_PV❤️ : ${joueur2.pv}❤️_*
*_ZENEN🌀 : ${joueur2.zen}🌀_*
░░░░░░░░░░░░░░░░░░░
*_Distance ${distance}🔵_*
*_Portee ${portee}🔮🧿_*
*_nombre de tour : ${nombreDeTours}🪬_*
*_Latence ${latence} + 1⚠️_*

${rvMessage}
══════════════════
${respectMessage}
░░░░░░░░░░░░░░░░`;

    // Envoi du message
    await zk.sendMessage(dest, { text: message }, { quoted: ms });
});