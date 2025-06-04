export interface Weapon {
  name: string;
  trait: string;
  damage: string;
  feature: string;
}

export interface Armor {
  name: string;
  baseThresholds: string;
  baseScore: string;
  feature: string;
}

export interface InventoryWeapon {
  name: string;
  trait: string;
  damage: string;
  feature: string;
  primary: boolean;
  secondary: boolean;
}

export interface FormState {
  name: string;
  pronouns: string;
  heritage: string;
  subclass: string;
  level: string;
  agility: string;
  strength: string;
  finesse: string;
  instinct: string;
  presence: string;
  knowledge: string;
  evasion: boolean;
  armor: boolean[];
  minorDamage: number;
  majorDamage: number;
  severeDamage: number;
  hp: boolean[];
  stress: boolean[];
  hope: boolean[];
  experience: boolean[];
  gold: boolean[];
  goldBags: boolean[];
  goldChest: boolean[];
  proficiency: number;
  primaryWeapon: Weapon;
  secondaryWeapon: Weapon;
  activeArmor: Armor;
  inventory: string;
  inventoryWeapons: InventoryWeapon[];
} 