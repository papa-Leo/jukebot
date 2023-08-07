import { CommandList } from "./commands/_CommandList";
import { REST, Routes } from 'discord.js';

export const deployCommands = async (token: string, clientId: string, guildId: string) => {
	const rest = new REST().setToken(token);
	
	// create new array of just Command data
	const commandData = CommandList.map((command) => command.data.toJSON());

	try {
		console.log(`Started refreshing ${commandData.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commandData },
		);
		console.log(`Successfully reloaded application (/) commands.`);
	} catch (error) {
		console.error('An error occurred while trying to PUT data:' + error);
	}
};
