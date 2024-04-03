export interface BaseTeam {
  id: number;
  placeName: {
    default: string;
  };
  abbrev: string;
  logo: string;
  darkLogo: string;
  score: number;
}
