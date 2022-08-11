import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _environment: (Monster | Fighter | SimpleFighter)[];

  constructor(
    character: Fighter,
    environment: (Monster | Fighter | SimpleFighter)[],
  ) {
    super(character);
    this._character = character;
    this._environment = [...environment];
  }

  public fight(): number {
    if (this._character.lifePoints > 0
         && this._environment.some((monster) => monster.lifePoints > 0)) {
      this._environment.map((monster) => monster.attack(this._character));
      this._environment.map((monster) => this._character.attack(monster));
    }
    return this._character.lifePoints === -1 ? -1 : 1;
  }
}
