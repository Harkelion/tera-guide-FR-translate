// Akalath Quarantine
//
// made by michengs

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = ES;

	let debuff = null;
 
	function firstboss_debuff_event(skillid) {
		switch (skillid) {
			case 3119: // red inside
				if (debuff === 1) { // red deuff
					handlers.text({
						sub_type: "message",
						message: "OUT (blue)",
						message_RU: "ОТ НЕГО"
					});
				}
				if (debuff === 2) { // blue deuff
					handlers.text({
						sub_type: "message",
						message: "IN (red)",
						message_RU: "К НЕМУ"
					});
				}
				break;

			case 3220: // blue inside
				if (debuff === 1) { // red deuff
					handlers.text({
						sub_type: "message",
						message: "IN (blue)",
						message_RU: "К НЕМУ"
					});
				}
				if (debuff === 2) { // blue deuff
					handlers.text({
						sub_type: "message",
						message: "OUT (red)",
						message_RU: "ОТ НЕГО"
					});
				}
				break;

			case 30231000: // red debuff added
				debuff = 1;
				break;

			case 30231001: // blue debuff added
				debuff = 2;
				break;

			default: // debuff removed
				debuff = null;
		}
	}

	return {
		// 1 BOSS
		"nd-3023-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Debuff removed
		"die": [{ type: "func", func: firstboss_debuff_event }],
		// Debuf added
		"ae-0-0-30231000": [{ type: "func", func: firstboss_debuff_event, args: [30231000] }], // AoE (red)
		"ae-0-0-30231001": [{ type: "func", func: firstboss_debuff_event, args: [30231001] }], // AoE (blue)
		"am-3023-1000-30231000": [{ type: "func", func: firstboss_debuff_event, args: [30231000] }], // Red
		"am-3023-1000-30231001": [{ type: "func", func: firstboss_debuff_event, args: [30231001] }], // Blue
		//
		"s-3023-1000-104-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_RU: "Прыжок + Стан" }],
		"s-3023-1000-105-0": [{ type: "text", sub_type: "message", message: "Back", message_RU: "Поворот назад" }],
		"s-3023-1000-110-0": [
			{ type: "text", sub_type: "message", message: "Stun", message_RU: "Передний стан" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 175, 10, 260, 0, 6000] }
		],
		"s-3023-1000-111-0": [
			{ type: "text", sub_type: "message", message: "Left Slash", message_RU: "Левая полоса" },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 6, 302, 270, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 176, 502, 270, 200, 0, 2000] }
		],
		"s-3023-1000-112-0": [
			{ type: "text", sub_type: "message", message: "Right Slash", message_RU: "Правая полоса" },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 354, 302, 90, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 184, 502, 90, 200, 0, 2000] }
		],
		"s-3023-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Left Slash", message_RU: "Левая полоса" },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 6, 302, 270, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 176, 502, 270, 200, 0, 2000] }
		],
		"s-3023-1000-114-0": [
			{ type: "text", sub_type: "message", message: "Right Slash", message_RU: "Правая полоса" },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 200, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 20, 0, 300, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 354, 302, 90, 200, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 184, 502, 90, 200, 0, 2000] }
		],
		"s-3023-1000-115-0": [
			{ type: "text", sub_type: "message", message: "Back Attack", message_RU: "Удар назад" },
			{ type: "spawn", func: "semicircle", args: [90, 270, 553, 0, 0, 20, 160, 100, 2000] },
			{ type: "spawn", func: "semicircle", args: [90, 270, 553, 0, 0, 12, 240, 100, 2000] },
			{ type: "spawn", func: "semicircle", args: [90, 270, 553, 0, 0, 10, 330, 100, 2000] }
		],
		"s-3023-1000-116-0": [
			{ type: "text", sub_type: "message", message: "Kaia's Shield", message_RU: "Кайа", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Thrall of Protection", message_RU: "Кайа", class_position: "mystic" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 530, 0, 6000] }
		],
		"s-3023-1000-3107-0": [
			{ type: "text", sub_type: "message", message: "Smash", message_RU: "Конус вперед" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 4000] }
		],
		"s-3023-1000-3115-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 3500] }
		],
		"s-3023-1000-3116-0": [
			{ type: "text", sub_type: "message", message: "Circles + Spin", message_RU: "Круги + Крутилка" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 320, 0, 5000] }
		],
		"s-3023-1000-3119-0": [
			{ type: "func", func: firstboss_debuff_event, args: [3119] }, // red inside
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 600, 0, 4000] }
		],
		"s-3023-1000-3220-0": [
			{ type: "func", func: firstboss_debuff_event, args: [3220] }, // blue inside
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 270, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 600, 0, 4000] }
		],

		// 2 BOSS
		"nd-3023-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3023-2000-164-0": [{ type: "text", sub_type: "message", message: "Counter Attack (bleed)", message_RU: "Отпрыжка (Кровоток)" }],
		"s-3023-2000-166-0": [{ type: "text", sub_type: "message", message: "Turn-back", message_RU: "Оборот назад" }],
		"s-3023-2000-175-0": [
			{ type: "text", sub_type: "message", message: "Incoming Stun", message_RU: "Рёв" },
			{ type: "text", sub_type: "message", delay: 1500, message: "Dodge", message_RU: "Эвейд" }
		],
		"s-3023-2000-178-0": [{ type: "text", sub_type: "message", message: "Scratching (bleed)", message_RU: "Крутилка (Кровоток)" }],
		"s-3023-2000-181-0": [
			{ type: "text", sub_type: "message", message: "Rock Throw", message_RU: "Полоса вперед" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 10, 1000, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 350, 1000, 0, 4000] }
		],
		"s-3023-2000-182-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид" }],
		"s-3023-2000-185-0": [
			{ type: "text", sub_type: "message", message: "Big jump (Kaia's Shield)", message_RU: "Прыжок (кайа)", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Big jump (Thrall of Protection)", message_RU: "Прыжок (кайа)", class_position: "mystic" },
			{ type: "text", sub_type: "alert", delay: 110000, message: "Big jump soon...", message_RU: "Скоро прыжок...", class_position: "heal" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 500, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 750, 0, 6000] }
		],
		"s-3023-2000-202-0": [
			{ type: "text", sub_type: "message", message: "Backstab", message_RU: "Назад + Вперед" },
			{ type: "spawn", func: "vector", args: [553, 90, 80, 180, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 180, 500, 0, 3000] }
		],
		"s-3023-2000-207-0": [{ type: "text", sub_type: "message", message: "Phantom x5 (bleed)", message_RU: "Прыжки x5 (Кровоток)" }],
		"s-3023-2000-212-0": [{ type: "text", sub_type: "message", message: "Flash (bleed)", message_RU: "Байт (Кровоток)" }]
	};
};