// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const zucchine = [

    {
        variety: "zucchina verde",
        weight: 5,
        lunghezza: 1,
    },

    {
        variety: "zucchina blu",
        weight: 2,
        lunghezza: 10,
    },

    {
        variety: "zucchina rossa",
        weight: 7,
        lunghezza: 3,
    },

    {
        variety: "zucchina viola",
        weight: 2,
        lunghezza: 23,
    },

    {
        variety: "zucchina arancio",
        weight:4,
        lunghezza: 20,
    },

    {
        variety: "zucchina porpora",
        weight: 6,
        lunghezza: 7,
    },
    {
        variety: "zucchina grande",
        weight: 7,
        lunghezza: 3,
    },

    {
        variety: "zucchina piccola",
        weight: 8,
        lunghezza: 1,
    },

    {
        variety: "zucchina media",
        weight: 8,
        lunghezza: 9,
    },

    {
        variety: "zucchina ovale",
        weight: 2,
        lunghezza: 36,
    },
];


const short = [];
const long = [];

for (let i = 0; i < zucchine.length; i++) {
    
    if (zucchine[i].lunghezza < 15) {
        short.push(zucchine[i]);
    } else {
        long.push(zucchine[i]);
    }
}

console.log(short, long);