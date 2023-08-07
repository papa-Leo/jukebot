import { Command } from "../interfaces/Command";
import { ping } from "./ping";
import { play } from "./play";

export const CommandList: Command[] = [ping, play];