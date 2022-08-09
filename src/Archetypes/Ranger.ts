import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _instancesRangers = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._instancesRangers += 1;
    this._energyType = 'stamina';
  }

  public get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this._instancesRangers;
  }
}
