import { Command } from "../interfaces/Command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const play: Command = {
	data: new SlashCommandBuilder()
	.setName('play')
	.setDescription('Play a song or playlist')
	.addStringOption((option) =>
		option
		.setName('media')
		.setDescription('The media to play')
		.setRequired(true)
	),
	run: async (interaction) => {
		const media = interaction.options.get('media', true).value;
		await interaction.reply(`Now playing ${media}`);
	}
};
