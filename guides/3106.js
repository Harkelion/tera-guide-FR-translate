// Killing Grounds
//
// made by HSDN / Kuroine

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		"nd-3106-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"qb-3106-1000-32061001": [{ type: "text", sub_type: "message", message: "Debuff (Close)", message_RU: "Дебаф (ближние)" }],
		"qb-3106-1000-32061002": [{ type: "text", sub_type: "message", message: "Debuff (Furthest)", message_RU: "Дебаф (дальние)" }],

		"s-3106-1000-106-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_RU: "Оборот (откид)" }],
		"s-3106-1000-108-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_RU: "Оборот (откид)" }],
		"s-3106-1000-109-0": [{ type: "text", sub_type: "message", message: "Jump (Knockdown)", message_RU: "Прыжок (опрокид)" }],
		"s-3106-1000-201-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Удар вперед" }],
		"s-3106-1000-202-0": [{ type: "text", sub_type: "message", message: "Front AoE", message_RU: "Переднее АоЕ" }],
		"s-3106-1000-203-0": [{ type: "text", sub_type: "message", message: "Front AoE + Wave", message_RU: "Переднее АоЕ + волна" }],
		"s-3106-1000-205-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" }],
		"s-3106-1000-206-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" }],
		"s-3106-1000-207-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" }],
		"s-3106-1000-209-0": [
			{ type: "text", sub_type: "message", message: "Stomp (Knockdown)", message_RU: "Опрокид" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 400, 0, 2500] }
		],
		"s-3106-1000-210-0": [
			{ type: "text", sub_type: "message", message: "Stomp (Knockdown)", message_RU: "Опрокид" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 400, 0, 2500] }
		],
		"s-3106-1000-211-0": [{ type: "text", sub_type: "message", message: "Push", message_RU: "Откид" }],
		"s-3106-1000-216-0": [{ type: "text", sub_type: "message", message: "Somersault", message_RU: "Кувырок" }],
		"s-3106-1000-508-0": [
			{ type: "text", sub_type: "message", message: "Outward Waves (Out > In)", message_RU: "Волны наружу (от него > к нему)" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 350, 1500, 5000] }
		],
		"s-3106-1000-509-0": [
			{ type: "text", sub_type: "message", message: "Inward Waves (In > Out)", message_RU: "Волны внутрь (к нему > от него)" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 350, 1500, 5000] }
		],
		"s-3106-1000-507-0": [{ type: "text", sub_type: "message", message: "Leash + Jump (Knockdown)", message_RU: "Притяжка + прыжок (опрокид)" }],

		"s-3106-1000-518-0": [{ type: "text", sub_type: "message", message: "Unleash", message_RU: "Бешенство" }],
		"s-3106-1000-519-0": [{ type: "text", sub_type: "message", message: "Unleash", message_RU: "Бешенство" }],
		"s-3106-1000-307-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" }],
		"s-3106-1000-309-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Удар вперед" }],
		"s-3106-1000-321-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ" }],
		"s-3106-1000-324-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ" }]
	};
};