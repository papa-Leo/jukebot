"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
const builders_1 = require("@discordjs/builders");
exports.ping = {
    data: new builders_1.SlashCommandBuilder()
        .setName('ping')
        .setDescription('A test command'),
    run: async (interaction) => {
        await interaction.reply('pong!🏓');
    }
};
//# sourceMappingURL=ping.js.map