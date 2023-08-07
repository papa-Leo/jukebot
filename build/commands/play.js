"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.play = void 0;
const voice_1 = require("@discordjs/voice");
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
        const media = interaction.options.get('media').value;
        const voiceChannel = interaction.guild.members.cache.get(interaction.member.user.id).voice.channelId;
        await interaction.reply(`Now playing ${media}`);
        const connection = (0, voice_1.joinVoiceChannel)({
            channelId: voiceChannel,
            guildId: interaction.guildId,
            adapterCreator: interaction.guild.voiceAdapterCreator
        });
        const player = (0, voice_1.createAudioPlayer)();
        const subscription = connection.subscribe(player);
        if (subscription) {
            setTimeout(() => subscription.unsubscribe(), 5000);
        }
        const song = (0, voice_1.createAudioResource)('../../samples/mechanoid-exxotik.mp3');
        player.play(song);
    }
};
//# sourceMappingURL=play.js.map