import { Command } from "../interfaces/Command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const ping: Command = {
	data: new SlashCommandBuilder()
	.setName('ping')
	.setDescription('A test command'),
	run: async (interaction) => {
		await interaction.reply('pong!🏓');
	}
};
