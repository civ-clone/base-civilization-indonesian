import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Indonesian from '../Indonesian';

export class Gitarja extends Leader {
  static civilization(): typeof Civilization {
    return Indonesian;
  }

  name(): string {
    return 'Gitarja';
  }
}

export default Gitarja;
