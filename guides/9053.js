// Kezzel's Gorge
//
// Made by Multarix

let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	"s-453-999-103-0": [{ "type": "text", "sub_type": "message", "message": "Smash (Left)", "message_RU": "Удар (лево)" }],
	"s-453-999-104-0": [{ "type": "text", "sub_type": "message", "message": "Smash (Right)", "message_RU": "Удар (право)" }],
	"s-453-999-105-0": [
		{ "type": "text", "sub_type": "message", "message": "Rock Smash", "message_RU": "Удар (танк)", "class_position": "tank" },
		{ "type": "spawn_func", "func": "circle", "args": [true, 553, 0, 210, 14, 190, 0, 3000] }
	],
	"s-453-999-106-0": [
		{ "type": "text", "sub_type": "message", "message": "Blast", "message_RU": "Выстрел" },
		{ "type": "text", "sub_type": "message", "message": "Dodge!", "message_RU": "Эвейд!", "delay": 2000 }
	],
	"s-453-999-107-0": [{ "type": "text", "sub_type": "message", "message": "Whip", "message_RU": "Кнут" }],
	"s-453-999-116-0": [{ "type": "text", "sub_type": "message", "message": "Shield", "message_RU": "Щит" }],
	"s-453-999-119-0": [
		{ "type": "text", "sub_type": "message", "message": "Kaia/Thrall of Protection", "message_RU": "Кайа" },
		{ "type": "spawn_func", "func": "circle", "args": [true, 553, 0, 0, 10, 500, 0, 6000] }
	],
	"s-453-999-120-0": [
		{ "type": "text", "sub_type": "message", "message": "AoE Waves", "message_RU": "AoE волны" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 0, 0, 14, 200, 0, 7000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 0, 0, 10, 390, 0, 7000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 0, 0, 8, 590, 0, 7000] }
	]
};