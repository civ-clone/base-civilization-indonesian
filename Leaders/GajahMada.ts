import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Indonesian from '../Indonesian';

export class GajahMada extends Leader {
  static civilization(): typeof Civilization {
    return Indonesian;
  }

  name(): string {
    return 'Gajah Mada';
  }
}

export default GajahMada;
