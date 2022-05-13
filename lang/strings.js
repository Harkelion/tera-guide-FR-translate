"use strict";

// Available strings for additional languages
// If no language is found, the default language (English) will be displayed
module.exports.general = {

	// Français
	fr: {
		unknowncommand: "Commande invalide, tapez guide help",
		helpheader: "Entrer \"guide help\" pour afficher l'aide",
		helpbody: [
			["guide, activer/désactiver le module module", "PRMSG"],
			["guide gui, afficher l'interface graphique", "PRMSG"],
			["guide voice, activer/désactiver lex messages vocaux", "PRMSG"],
			["guide lNotice,  activer/désactiver envoyer des notifications dans le chat plutôt qu'à l'écran", "PRMSG"],
			["guide gNotice, activer/désactiver envoyer des messages au chat de groupe", "PRMSG"],
			["guide auto~en~fr, choix de la langue de traduction", "PRMSG"],
			["guide male~female, sélectionner le sexe de l'annonceur vocal (si disponible)", "PRMSG"],
			["guide 1~10, réglage de la vitesse de lecture des messages vocaux", "PRMSG"],
			["guide spawnObject, activer/désactiver l'apparition d'objets de marquage", "PRMSG"],
			["guide stream, activer/désactiver le mode streamer (masquer les messages et les objets)", "PRMSG"],
			["guide dungeons, liste de tous les donjons pris en charge et leur identifiant", "PRMSG"],
			["guide verbose id, activer/désactiver tous les messages pour le donjon, où id est l'identifiant du donjon", "PRMSG"],
			["guide spawnObject id, activer/désactiver spawn d'objets pour le donjon, où id est l'identifiant du donjon", "PRMSG"],
			["guide cr, définir la couleur du message: rouge", "CRMSG"],
			["guide co, définir la couleur du message: orange", "COMSG"],
			["guide cy, définir la couleur du message: Jaune", "CYMSG"],
			["guide cg, définir la couleur du message: vert", "CGMSG"],
			["guide cdb, définir la couleur du message: bleu marin", "CDBMSG"],
			["guide cb, définir la couleur du message: bleu", "CBMSG"],
			["guide cv, définir la couleur du message: Violet", "CVMSG"],
			["guide cp, définir la couleur du message: rose", "CPMSG"],
			["guide clp, définir la couleur du message: rose clair", "CLPMSG"],
			["guide clb, définir la couleur du message: bleu clair", "CLBMSG"],
			["guide cbl, définir la couleur du message: noir", "CBLMSG"],
			["guide cgr, définir la couleur du message: gris", "CGRMSG"],
			["guide cw, définir la couleur du message: blanche", "CWMSG"]
		],
		red: "Rouge",
		green: "vert",
		settings: "paramètres",
		spawnObject: "Apparition d'objets de marquage",
		speaks: "Messages vocaux",
		lNotice: "Notifications de chat au lieu de notifications d'écran",
		gNotice: "Messages dans un canal de discussion de groupe",
		stream: "Mode streamer (cacher les messages et les objets)",
		language: "Sélection de la langue",
		voice: "Voix (genre)",
		rate: "Débit de parole",
		color: "Choix de couleur",
		dungeons: "Paramètres du donjon",
		verbose: "messages",
		objects: "Objets",
		test: "Vérifier",
		module: "Module TERA-Guide",
		enabled: "Activer",
		disabled: "Désactiver",
		male: "Homme",
		female: "Femme",
		voicetest: "[Écoute de la vitesse de lecture des messages]",
		colorchanged: "La couleur du texte du message a changé",
		dgnotfound: "Un donjon avec un tel identifiant n'a pas été trouvé.",
		dgnotspecified: "ID de donjon non spécifié",
		enterdg: "Vous êtes entré dans le donjon",
		fordungeon: "pour le donjon"
	}
};
