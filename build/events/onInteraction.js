"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onInteraction = void 0;
const _CommandList_1 = require("../commands/_CommandList");
const onInteraction = async (interaction) => {
    if (interaction.isCommand()) {
        for (const Command of _CommandList_1.CommandList) {
            if (interaction.commandName === Command.data.name) {
                await Command.run(interaction);
                break;
            }
        }
    }
};
exports.onInteraction = onInteraction;
//# sourceMappingURL=onInteraction.js.map