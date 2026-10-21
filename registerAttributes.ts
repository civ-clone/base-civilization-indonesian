import Indonesian from './Indonesian';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Indonesian',
  nation: 'Indonesia',
  colors: ['#E8590C', '#FFF'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Indonesian, name, value))
);
