"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.play = void 0;
const builders_1 = require("@discordjs/builders");
exports.play = {
    data: new builders_1.SlashCommandBuilder()
        .setName('play')
        .setDescription('Play a song or playlist')
        .addStringOption((option) => option
        .setName('media')
        .setDescription('The media to play')
        .setRequired(true)),
    run: async (interaction) => {
        const media = interaction.options.get('media', true).value;
        await interaction.reply(`Now playing ${media}`);
    }
};
//# sourceMappingURL=play.js.map