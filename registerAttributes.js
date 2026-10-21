"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Indonesian_1 = require("./Indonesian");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Indonesian',
    nation: 'Indonesia',
    colors: ['#E8590C', '#FFF'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Indonesian_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map