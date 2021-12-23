export interface Pokemon {
  id: number;
  name: Name;
  type: string[];
  base: Base;
}

export interface Base {
  hp: number;
  Attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export interface Name {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}
