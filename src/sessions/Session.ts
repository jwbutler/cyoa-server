export type Session = {
  id: string;
  readonly scenes: Scene[];
  readonly startingSceneId: string;
  currentSceneId: string;
  readonly items: string[];
};

export type Scene = {
  readonly id: string,
  readonly name: string,
  readonly description: string,
  /** "direction" -> scene id */
  readonly exits: Record<string, string>;
  readonly items: string[];
};