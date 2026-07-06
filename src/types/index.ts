export interface Hero {
  id: string;
  name: string;
  role: string;
}

export interface Item {
  id: string;
  name: string;
  category: string;
}

export type GameStage = 'lane' | 'mid' | 'late';

export interface AssistantRequest {
  myHero: string;
  enemyHero: string;
  gameStage: GameStage;
  itemsBought: string;
  mainProblem: string;
  troublesomeAbilities: string;
  description: string;
}

export interface AssistantResponse {
  summary: string;
  buyNow: string[];
  buyNext: string[];
  whyItWorks: string;
  playstyleChanges: string;
  mistakesToAvoid: string;
  alternatives: string[];
}
