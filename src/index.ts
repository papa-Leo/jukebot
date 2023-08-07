import { Client, GatewayIntentBits } from 'discord.js';
import { onInteraction } from './events/onInteraction';
import { deployCommands } from './deployCommands';
require('dotenv').config();

(async () => {
	// fetch environment variables
	const token = process.env.DISCORD_TOKEN;
	const clientId = process.env.CLIENT_ID;
	const guildId = process.env.GUILD_ID;

	// verify environment variables
	let areEnvironmentVariablesSet: boolean = false;
	if (!token) {
		console.error('Missing Discord bot token.🔣');
		areEnvironmentVariablesSet = true;
	}
	if (!clientId) {
		console.error('Missing client ID.🔣');
		areEnvironmentVariablesSet = true;
	}
	if (!guildId) {
		console.error('Missing dev guild ID.🔣');
		areEnvironmentVariablesSet = true;
	}
	if (areEnvironmentVariablesSet) process.exit(1);

	const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // connect to discord client
	
	client.on("ready", () => {
		console.log(`🤖 Bot connected to Discord... Jukebot is live!✅`);
	});

	client.on("interactionCreate", async (interaction) => await onInteraction(interaction));

	await client.login(token); // login to client

	deployCommands(token, clientId, guildId);
})();
