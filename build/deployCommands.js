"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployCommands = void 0;
const _CommandList_1 = require("./commands/_CommandList");
const discord_js_1 = require("discord.js");
const deployCommands = async (token, clientId, guildId) => {
    const rest = new discord_js_1.REST().setToken(token);
    const commandData = _CommandList_1.CommandList.map((command) => command.data.toJSON());
    try {
        console.log(`Started refreshing ${commandData.length} application (/) commands.`);
        const data = await rest.put(discord_js_1.Routes.applicationGuildCommands(clientId, guildId), { body: commandData });
        console.log(`Successfully reloaded application (/) commands.`);
    }
    catch (error) {
        console.error('An error occurred while trying to PUT data:' + error);
    }
};
exports.deployCommands = deployCommands;
//# sourceMappingURL=deployCommands.js.map