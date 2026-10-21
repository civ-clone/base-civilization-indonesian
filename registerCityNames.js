"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Indonesian_1 = require("./Indonesian");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
// The first is the capital.
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
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Indonesian_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map