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
Pour que les guides fonctionnent, vous devez installer une version compatible de **library** et **tera-guide-core** :
1. Téléchargez **library** **[ici](https://git.dev.hsdn.org/tera-v92/library/archive/master.zip)** et placez-le dans votre dossier **mods** .
2. Téléchargez **tera-guide-core** **[ici](https://github.com/hsdn/tera-guide-core/archive/refs/heads/master.zip)** et placez-le dans votre dossier **mods** en tant que **"tera-guide-core"**,
     pas "tera-guide-core-master".

### ✅: prise en charge de la langue française dans les guides et le chat pour le serveur TERA de Menma
1. Téléchargez le fichier **[fonts_eur.patched.gpk](https://drive.google.com/file/d/1LQBCKI4yxprVOCqJSQa2bwNiVnNQoZyx/view?usp=sharing)** et placez-le dans le répertoire `\Client\S1Game \CookedPC\Art_Data\Packages\S1UI`.
2. Accédez au TERA de Menma et entrez la commande **guide fr** dans le chat de la boîte à outils du jeu.

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
Toolbox(/8) | Command description | Описание команды
--- | --- | ---
**guide** | Module on/off | Вкл./выкл. модуля
**guide&nbsp;gui** | Show module GUI| Показать графический интерфейс
**guide&nbsp;voice**<br>(default: off) | Text-to-speech (TTS) notices on/off, speech rate is set by command **guide `1`~`10`** | Вкл./выкл. голосовых уведомлений (TTS), скорость чтения задается командой **guide `1`~`10`**
**guide&nbsp;lNotice**<br>(default: off) | Send notices to chat channel "Notice" instead of on-screen messages on/off | Вкл./выкл. отправки уведомлений в канал чата "Важно" вместо показа экранных сообщений
**guide&nbsp;gNotice**<br>(default: off) | Send notices to party chat channel on/off | Вкл./выкл. отправки уведомлений в канал чата группы
**guide&nbsp;`auto`/`en`/`ru`**<br>(default: auto) | Set guide language | Выбор языка перевода
**guide&nbsp;`1`~`10`**<br>(default: 2) | Set TTS speech rate | Регулировка скорости чтения голосовых сообщений
**guide&nbsp;spawnObject**<br>(default: on) | Spawn marker objects on/off | Вкл./выкл. спавна маркировочных объектов
**guide&nbsp;stream**<br>(default: off) | Streamer Mode on/off (hide all notices and objects, TTS will played) | Вкл./выкл. режима стримера (скрывает все уведомления и маркеры, TTS будет проигрываться)
**guide&nbsp;dungeons** | List of all supported dungeons and its ids | Список всех поддерживаемых данжей и их id
**guide&nbsp;verbose&nbsp;`id`**<br>(default: on for all) | Send notices for specified by `id` dungeon on/off | Вкл./выкл. всех уведомлений для данжа, где `id` - идентификатор данжа
**guide&nbsp;spawnObject&nbsp;`id`**<br>(default: on for all) | Spawn marker objects for specified by `id` dungeon on/off | Вкл./выкл. спавна объектов для данжа, где `id` - идентификатор данжа
**guide&nbsp;help** | List of supported commands | Вывод поддерживаемых команд

## Supported dungeons / Поддерживаемые данжи

### Patch v92.04 (Menma's TERA)
id | Dungeon name | Название данжа
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

## Notices settings / Настройка уведомлений

* On screen (on bottom side) and chat notices, if **lNotice** parameter is *on*.   
  Уведомления на экране (в нижней части), а также в чате, если параметр **lNotice** - *включен*.   
  ![](https://i.imgur.com/BPlK58M.png)

* When **gNotice** parameter is *on*, notices will also be sent to party chat channel.   
  Если параметр **gNotice** был *включен*, уведомления также будут отправляться в канал чата группы.   

* The message on top side of the screen, if **lNotice** parameter is *off* (by default).   
  Сообщение в верхней части экрана, если параметр **lNotice** - *выключен* (по-умолчанию).   
  ![](https://i.imgur.com/r2bb8Wc.png)   
  You can set the color for this type of notices using the commands or GUI (also change color in the Toolbox chat).   
  Возможен выбор цвета для этого вида уведомлений при помощи команд или графического интерфейса (также изменяется цвет в чате Toolbox).

* When Streamer Mode is *on* (**stream** parameter), all text notices ONLY sent to Toolbox(/8) chat channel, but TTS notices will be played.   
  Если *включен* режим стримера (парам. **stream**), все текстовые уведомления будут отправляться ТОЛЬКО в канал чата Toolbox(/8), однако голосовые уведомления будут проигрываться.

* To disable or enable TTS notifications, use the **guide voice** command.   
  Для отключения или включения голосовых уведомлений используется команда **guide voice**.

## Module GUI / Графический интерфейс

* When you enter the **guide gui** command, the module GUI is displayed, allowing you to change basic settings.   
  При вводе команды **guide gui** отображается графический интерфейс модуля, позволяющий осуществить основные настройки.   
  ![](https://i.imgur.com/72hDCvQ.png)

## More information / Дополнительная информация

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
