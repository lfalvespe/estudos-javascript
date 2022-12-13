import aleatorio from "./aleatorio.js";
import {area, perimetro} from "./retangulo.js";

import numAleat from './aleatorio.js';

const r1 = area(2,3);
const p1 = perimetro(2, 3);

console.log("área: " + r1)
console.log("peímetro: " + p1)

const n = numAleat();

console.log(n);
