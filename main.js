// let gustavo_nota_av1 = 8;
// let gustavo_nota_av2 = 9.6;
// let gustavo_media = (gustavo_nota_av1+gustavo_nota_av2)/2;

// console.log("Média: " + gustavo_media);

// console.log("Exemplo com array:");

// let notas_gustavo =  [8, 9.6];
// notas_gustavo[2] = (notas_gustavo[0]+notas_gustavo[1])/2;

// console.log("Média array: " + notas_gustavo[2]);

let prim = 0;
let seg = 0;
let aux = 0;

let ordem = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];


for (let i = 0; i < ordem.length; i++) {
    for (let j = 0; j < i; j++) {
    prim = ordem[i];
    seg = ordem[j];
  if(prim < seg){
    aux = prim;
    ordem[i] = seg;
    ordem[j] = aux;
}
     } 
    }
    
console.log(ordem);
