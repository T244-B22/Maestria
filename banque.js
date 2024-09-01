const { zokou } = require("../framework/zokou");

const joueurs = {
    "joueur1": { nom: "Lone", solde: 10000 },
    "joueur2": { nom: "Obito", solde: 10000 },
    "joueur2": { nom: "Uzi", solde: 10000 },
    "joueur2": { nom: "Yu", solde: 10000 },
    "joueur2": { nom: "Lmsesar", solde: 10000 },
    "joueur2": { nom: "Irito", solde: 10000 },
    "joueur2": { nom: "Sawyer", solde: 10000 },
    "joueur2": { nom: "Lexander", solde: 10000 },
    "joueur2": { nom: "Silva", solde: 10000 },
    "joueur2": { nom: "Susano", solde: 10000 },
    "joueur2": { nom: "Orsted", solde: 10000 },
    "joueur2": { nom: "Dabi", solde: 10000 },
    "joueur2": { nom: "Gresus", solde: 10000 },
    // Ajoutez d'autres joueurs ici
};

zokou({
    nomCom: "banque",
    categorie: "boutique",
}, async (dest, zk, commandeOptions) => {
    const { ms, arg } = commandeOptions;

    // Vérification des arguments
    const [type, montant, joueurId] = arg.split(" ");
    const montantNum = parseInt(montant);

    if (!joueurs[joueurId]) {
        return zk.sendMessage(dest, { text: `Joueur non trouvé : ${joueurId}` });
    }

    const dateTransaction = new Date().toLocaleDateString();

    // Effectuer l'opération
    if (type === "achat") {
        joueurs[joueurId].solde -= montantNum;
        joueurs[joueurId].transactions.push({ type: 'achat', montant: montantNum, date: dateTransaction });
    } else if (type === "vente") {
        joueurs[joueurId].solde += montantNum;
        joueurs[joueurId].transactions.push({ type: 'vente', montant: montantNum, date: dateTransaction });
    } else {
        return zk.sendMessage(dest, { text: "Type d'opération non valide. Utilisez 'achat' ou 'vente'." });
    }

    // Préparer le message de mise à jour
    const message = `
🧭𝐂𝐎𝐌𝐏𝐓𝐄 𝐁𝐀𝐍𝐂𝐀𝐈𝐑𝐄🧭
▬▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭

ROLISTE 👤:
🏵ACHAT : ${type === "achat" ? montantNum : 0}
🏵VENTE : ${type === "vente" ? montantNum : 0}
💰 SOLDES : 💰
NEW SOLDE : ${joueurs[joueurId].solde}
DATE DE TRANSACTION📆: ${dateTransaction}
░░░░░░░░░░░░░░░░░░░
🌐MAESTRIA RP VERSE🌐
░░░░░░░░░░░░░░░░░░░`;

    // Envoyer le message sur WhatsApp
    await zk.sendMessage(dest, { text: message }, { quoted: ms });
});

// Exemple d'utilisation
async function exempleUsage(zk, dest) {
    await zk.sendMessage(dest, { text: "Utilisez la commande suivante : /transfert achat 20 joueur1" }); // Exemple d'achat
    await zk.sendMessage(dest, { text: "Utilisez la commande suivante : /transfert vente 30 joueur2" }); // Exemple de vente
}