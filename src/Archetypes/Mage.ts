import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _instancesMages = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._instancesMages += 1;
    this._energyType = 'mana';
  }

  public get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this._instancesMages;
  }
}
