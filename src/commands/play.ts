import { Command } from "../interfaces/Command";
import { joinVoiceChannel, createAudioPlayer, createAudioResource } from "@discordjs/voice";
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
		const media = interaction.options.get('media').value;
		const voiceChannel = interaction.guild.members.cache.get(interaction.member.user.id).voice.channelId;
		await interaction.reply(`Now playing ${media}`);

		const connection = joinVoiceChannel({
			channelId: voiceChannel,
			guildId: interaction.guildId,
			adapterCreator: interaction.guild.voiceAdapterCreator
		});
		const player = createAudioPlayer();

		const subscription = connection.subscribe(player);
		if (subscription) {
			setTimeout(() => subscription.unsubscribe(), 5000);
		}

		const song = createAudioResource('../../samples/mechanoid-exxotik.mp3');
		player.play(song);
	}
};
