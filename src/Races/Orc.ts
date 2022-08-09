import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static intancesOrcs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.intancesOrcs += 1;
  }

  public get name(): string {
    return this.name;
  }

  public get dexterity(): number {
    return this.dexterity;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.intancesOrcs;
  }
}
