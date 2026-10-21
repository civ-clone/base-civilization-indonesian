import Indonesian from './Indonesian';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

// The first is the capital.
(
  [
    'Majapahit',
    'Banjarmasin',
    'Kutai',
    'Palembang',
    'Singhasari',
    'Kediri',
    'Surabaya',
    'Jakarta',
    'Pontianak',
    'Samarinda',
    'Makassar',
    'Demak',
    'Banten',
    'Mataram',
    'Yogyakarta',
    'Surakarta',
    'Semarang',
    'Bandung',
    'Cirebon',
    'Tuban',
    'Gresik',
    'Malang',
    'Denpasar',
    'Ternate',
    'Tidore',
    'Ambon',
    'Manado',
    'Aceh',
    'Medan',
    'Padang',
    'Jambi',
    'Balikpapan',
    'Kupang',
    'Jayapura',
  ] as string[]
).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Indonesian, i === 0))
);
