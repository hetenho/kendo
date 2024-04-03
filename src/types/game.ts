import type { BaseTeam } from './team';

export interface Game {
  id: number;
  season: number;
  gameType: number;
  venue: { default: string };
  awayTeam: AwayTeam;
  homeTeam: HomeTeam;
  gameOutcome: {
    lastPeriodType: 'REG' | 'OT' | 'SO';
  };
}
export interface GameDay {
  games: Array<Game>;
  date: string;
}
export interface GamesTodayResponse {
  nextStartDate: string;
  gameWeek: Array<GameDay>;
}

export interface HomeTeam extends BaseTeam {
  homeSplitSquad: boolean;
}

export interface AwayTeam extends BaseTeam {
  awaySplitSquad: boolean;
}
