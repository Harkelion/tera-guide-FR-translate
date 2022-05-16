# tera-guide

## Patch v92.04

### :star: Available in TERA Toolbox for patch 92
* Fully compatible with [unofficial version](https://github.com/tera-private-toolbox/tera-toolbox) of the TERA Toolbox for patch 92.   
  Automatic install from **Get More Mods** tab.

* Entièrement compatible avec [version non officielle](https://github.com/tera-private-toolbox/tera-toolbox) Toolbox TERA pour le patch 92.
   Installation automatique via l'onglet **Get More Mods**.

### :information_source: Manual installation
The tera-guide and [tera-guide-core](https://github.com/hsdn/tera-guide-core) are already compatible with this patch.   
For the guides to work you need a get compatible versions of **library** and **tera-guide-core**:
1. Download **library** from **[here](https://git.dev.hsdn.org/tera-v92/library/archive/master.zip)** and place it to you **mods** folder.
2. Download **tera-guide-core** from **[here](https://github.com/hsdn/tera-guide-core/archive/refs/heads/master.zip)** and place it to you **mods** folder named as **"tera-guide-core"**,   
   not "tera-guide-core-master".

### :information_source: installation manuelle
Les modules tera-guide et [tera-guide-core](https://github.com/hsdn/tera-guide-core) sont actuellement compatibles avec ce patch.
Pour que les guides fonctionnent, vous devez installer une version compatible de **library** et **tera-guide-core** :
1. Téléchargez **library** **[ici](https://git.dev.hsdn.org/tera-v92/library/archive/master.zip)** et placez-le dans votre dossier **mods** .
2. Téléchargez **tera-guide-core** **[ici](https://github.com/hsdn/tera-guide-core/archive/refs/heads/master.zip)** et placez-le dans votre dossier **mods** en tant que **"tera-guide-core"**,
     pas "tera-guide-core-master".

---

## Description 

The dungeon guide module with Text-to-speech notifications, display hints on screen and drawing zones of bosses attacks and mechanics. Available English and Russian languages (detects automatically).

Module d'indices de donjon avec possibilité de notifications vocales, d'affichage d'indices dans le chat ou à l'écran, ainsi que de dessin de zones d'attaque et de mécanismes de boss. Les langues russe et anglaise sont prises en charge (détectées automatiquement).

#### Other translations / Autres traductions
* [**Spanish (Español)** by Loliconera](https://github.com/Loliconera/tera-guide-spanish)
* [**Spanish (Español)** by Emilia](https://github.com/emilia-s2/Guia-DG-Portugues-Espanol)
* [**Portuguese (Português)** by Emilia](https://github.com/emilia-s2/Guia-DG-Portugues-Espanol)

## Dependencies / Dépendances
* **library** - https://github.com/tera-private-toolbox/library
* **tera-guide-core** - https://github.com/hsdn/tera-guide-core

When using TeraToolbox, all dependencies will be installed automatically.   
При использовании TeraToolbox, все зависимости будут установлены автоматически.

## Commands / Commandes
Toolbox(/8) | Command description | Description des commandes
--- | --- | ---
**guide** | Module on/off | Activer / Désactiver le module
**guide&nbsp;gui** | Show module GUI| Afficher l'interface graphique
**guide&nbsp;voice**<br>(default: off) | Text-to-speech (TTS) notices on/off, speech rate is set by command **guide `1`~`10`** | Activer / Désactiver notifications vocales (TTS), la vitesse de lecture est définie par la commande **guide `1`~`10`**
**guide&nbsp;lNotice**<br>(default: off) | Send notices to chat channel "Notice" instead of on-screen messages on/off | Activer / Désactiver envoyer des notifications au canal de discussion "Important" au lieu d'afficher des messages à l'écran
**guide&nbsp;gNotice**<br>(default: off) | Send notices to party chat channel on/off | Activer / Désactiver envoyer des notifications à un canal de discussion de groupe
**guide&nbsp;`auto`/`en`/`ru`**<br>(default: auto) | Set guide language | Sélection d'une langue de traduction
**guide&nbsp;`1`~`10`**<br>(default: 2) | Set TTS speech rate | Réglage de la vitesse de lecture des messages vocaux
**guide&nbsp;spawnObject**<br>(default: on) | Spawn marker objects on/off | Activer / Désactiver apparition d'objets de marquage
**guide&nbsp;stream**<br>(default: off) | Streamer Mode on/off (hide all notices and objects, TTS will played) | Activer / Désactiver mode streamer (masque toutes les notifications et les marqueurs, TTS sera joué)
**guide&nbsp;dungeons** | List of all supported dungeons and its ids | Liste de tous les donjons pris en charge et leurs id
**guide&nbsp;verbose&nbsp;`id`**<br>(default: on for all) | Send notices for specified by `id` dungeon on/off | Activer / Désactiver toutes les notifications pour le donjon, où `id` est l'identifiant du donjon
**guide&nbsp;spawnObject&nbsp;`id`**<br>(default: on for all) | Spawn marker objects for specified by `id` dungeon on/off | Activer / Désactiver apparition d'objets pour le donjon, où "id" est l'identifiant du donjon
**guide&nbsp;help** | List of supported commands | Liste des commandes prises en charge

## Supported dungeons / Поддерживаемые данжи

### Patch v92.04 (Menma's TERA)
id | Dungeon name | Le nom du donjon
--- | --- | ---
7011 | Shadow of the Gutrends (Guardian)
7015 | Escape from Balder's Refuge (Guardian) 
9981 | Velik's Sanctuary (Hard)
9044 | Bahaar's Sanctum 
9056 | Timescape (Hard)
9759 | Forsaken Island (Hard) 
3201 | Gossamer Vault (Hard)
9920 | Antaroth's Abyss (Hard)
9982 | Grotto of Lost Souls (Hard)
9735 | RK-9 Kennel
3739 | Red Refuge
9780 | Velik's Hold (5-Person)
9781 | Velik's Sanctuary

## Notices settings / Paramètres de notification

* On screen (on bottom side) and chat notices, if **lNotice** parameter is *on*.   
  Notifications à l'écran (en bas), ainsi que dans le chat, si le paramètre **lNotice** est *activé*.
  ![](https://i.imgur.com/BPlK58M.png)

* When **gNotice** parameter is *on*, notices will also be sent to party chat channel.   
  Si l'option **gNotice** était *activée*, les notifications seront également envoyées au canal de chat du groupe.  

* The message on top side of the screen, if **lNotice** parameter is *off* (by default).   
  Message en haut de l'écran si le paramètre **lNotice** est *off* (par défaut).  
  ![](https://i.imgur.com/r2bb8Wc.png)   
  You can set the color for this type of notices using the commands or GUI (also change color in the Toolbox chat).   
  Il est possible de sélectionner une couleur pour ce type de notification à l'aide de commandes ou de l'interface graphique (cela change également la couleur dans 
  le chat de la boîte à outils).

* When Streamer Mode is *on* (**stream** parameter), all text notices ONLY sent to Toolbox(/8) chat channel, but TTS notices will be played.   
 Si le mode streamer est *activé* (param. **stream**), toutes les notifications textuelles seront envoyées UNIQUEMENT au canal de discussion Toolbox(/8), mais 
 les notifications vocales seront lues.

* To disable or enable TTS notifications, use the **guide voice** command.   
  Pour désactiver ou activer les notifications vocales, utilisez la commande **guide voice**.

## Module GUI / Interface graphique

* When you enter the **guide gui** command, the module GUI is displayed, allowing you to change basic settings.   
  Lorsque vous entrez la commande **guide gui**, l'interface graphique du module s'affiche, vous permettant d'effectuer les réglages de base.  
  ![](https://i.imgur.com/72hDCvQ.png)

## More information / Informations Complémentaires

* Developers wiki: https://github.com/hsdn/tera-guide-core/wiki
* For questions and suggestions, contact via Discord: **JKQ#5649**

## Credits
- **[Kasea](https://github.com/Kaseaa)** - Original developer of Tera-Guide module
- **[michengs](https://github.com/michengs)** - Author of base code for most guides and module core
- **[ZC](https://github.com/tera-mod)** - Provided coordinates for rendering attack areas and mechanics
- **[Kuroine](https://github.com/Kuroine)** - Author of base code for the DA guide
- **[Multarix](https://github.com/Multarix)** - Author of the RR guide and also making changes to the English translation
- **[Owyn](https://github.com/Owyn)** - Developer of great guides for RK-9, AA and GV, whose code was used
- **[Emilia](https://github.com/emilia-s2)** - Author of Portuguese translation and guardian guides
- **[Loliconera](https://github.com/Loliconera)** - Author of Spanish translation
- **[ITunk](https://github.com/GrafNikola)** - Author of initial Russian translation


