import { Mode } from '@prisma/client';

export interface GameConfig {
	teams: number;
	playersPerTeam: number;
	maxPartySize: number;
}

export interface QueueConfig {
	maximumStdev: number;
}

export const gameConfig: Record<Mode, GameConfig> = {
	[Mode.Open]: {
		teams: 2,
		playersPerTeam: 4,
		maxPartySize: 4,
	},
	[Mode.Unranked]: {
		teams: 2,
		playersPerTeam: 4,
		maxPartySize: 4,
	},
	[Mode.Ranked]: {
		teams: 2,
		playersPerTeam: 4,
		maxPartySize: 4,
	},
};

export const queueConfig: Record<Mode, QueueConfig> = {
	[Mode.Open]: {
		maximumStdev: Infinity,
	},
	[Mode.Unranked]: {
		maximumStdev: 5,
	},
	[Mode.Ranked]: {
		maximumStdev: 2,
	},
};
