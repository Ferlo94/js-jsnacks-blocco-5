// Crea un array di 10 oggetti che rappresentano una zucchina, 
// indicando per ognuna varietà, weight e lunghezza.
// Calcola quanto pesano tutte le zucchine.


const zucchine = [

    {
        variety: "zucchina verde",
        weight: 5,
        lenght: "1cm",
    },

    {
        variety: "zucchina blu",
        weight: 2,
        lunghezza: "5cm",
    },

    {
        variety: "zucchina rossa",
        weight: 7,
        lunghezza: "3cm",
    },

    {
        variety: "zucchina viola",
        weight: 2,
        lunghezza: "2cm",
    },

    {
        variety: "zucchina arancio",
        weight:4,
        lunghezza: "5cm",
    },

    {
        variety: "zucchina porpora",
        weight: 6,
        lunghezza: "7cm",
    },
    {
        variety: "zucchina grande",
        weight: 7,
        lunghezza: "3cm",
    },

    {
        variety: "zucchina piccola",
        weight: 8,
        lunghezza: "1cm",
    },

    {
        variety: "zucchina media",
        weight: 8,
        lunghezza: "9cm",
    },

    {
        variety: "zucchina ovale",
        weight: 2,
        lunghezza: "10cm",
    },
];

let weightZucchine = 0;
for (let i = 0; i < zucchine.length; i++) {
    weightZucchine += zucchine[i].weight;
}

console.log(weightZucchine);