// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.


const macchine = [

    {
        "auto" : 1,
        "marca": "opel",
        "modello": "pippo",
        "alimentazione": "benzina",
    },
    {
        "auto" : 2,
        "marca": "citroen",
        "modello": "pluto",
        "alimentazione": "benzina",
    },
    {
        "auto" : 3,
        "marca": "lancia",
        "modello": "paperino",
        "alimentazione": "diesel",
    },
    {
        "auto" : 4,
        "marca": "peugeot",
        "modello": "minnie",
        "alimentazione": "gpl",
    },
    {
        "auto" : 5,
        "marca": "ferrari",
        "modello": "qui",
        "alimentazione": "elettrico",
    },
    {
        "auto" : 6,
        "marca": "lamborghini",
        "modello": "quo",
        "alimentazione": "metano",
    },
    {
        "auto" : 7,
        "marca": "fiat",
        "modello": "qua",
        "alimentazione": "benzina",
    },
    {
        "auto" : 8,
        "marca": "opel",
        "modello": "paperino",
        "alimentazione": "diesel",
    },
    {
        "auto" : 9,
        "marca": "ferrari",
        "modello": "gastone",
        "alimentazione": "gpl",
    },
    {
        "auto" : 10,
        "marca": "mazda",
        "modello": "zioPaperone",
        "alimentazione": "metano",
    },
];

arrBenza = [];
arrMiste = [];

const benza = macchine.filter((auto) => {

    if(auto.alimentazione == "benzina") {
        arrBenza.push(auto);
    }
});

console.log(arrBenza);