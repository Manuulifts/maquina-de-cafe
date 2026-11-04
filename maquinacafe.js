//Maquinita de café//

//Precio de cada café
const precioTinto = 3500;
const precioCafeconleche = 4200;
const precioCapuchino = 4500;
const precioMocaccino = 5000;
const precioTe = 3800;

//Stock inventario de la máquina mínimo y máximo de cada ingrediente en gramos 
const stockMinimo = { cafeinstantaneo: 25, lecheenpolvo: 10, chocolateenpolvo: 20, te: 10, vasos: 1, agua: 200 }; //mínimo de cada ingrediente en gramos
const stockMaximo = { cafeinstantaneo: 1000, lecheenpolvo: 1000, chocolateenpolvo: 500, te: 800, vasos: 80, agua: Infinity }; //máximo de cada ingrediente en gramos
let stockCafeinstantaneo = 1000;                //1000 gramos de café instantáneo
let stockLecheenpolvo = 1000;                  //1000 gramos de leche en polvo
let stockAzucar = 500;                        //500 gramos de azúcar
let stockChocolateenpolvo = 500;             //500 gramos de chocolate en polvo
let stockTe = 800;                          //800 gramos de té
let stockVasos = 80;                       //80 unidades de vasos
let stockBilletes = 100000;                       //dinero en la máquina Billetes para la devuelta 2000, 5000, 10000.
let stockMonedas = 20000;                    //dinero en la máquina Monedas para la devuelta 100, 200, 500.
let agua = Infinity;                       //agua en la máquina
//preparación de cada receta por vaso en gramos
const RECETAS = {
    tinto: { cafeinstantaneo: 25, lecheenpolvo: 0, chocolateenpolvo: 0, te: 0, agua: 150 },
    cafeconleche: { cafeinstantaneo: 25, lecheenpolvo: 80, chocolateenpolvo: 0, te: 0, agua: 150 },
    capuchino: { cafeinstantaneo: 25, lecheenpolvo: 100, chocolateenpolvo: 0, te: 0, agua: 150 },
    mocaccino: { cafeinstantaneo: 25, lecheenpolvo: 100, chocolateenpolvo: 200, te: 0, agua: 150 },
    te: { cafeinstantaneo: 0, lecheenpolvo: 0, chocolateenpolvo: 0, te: 100,agua: 150 }
};


// Dinero que acepta la máquina
const monedas = [100, 200, 500];
const billetes = [1000, 2000, 5000, 10000, 20000];

//Funcion principal al preparar la bebida
function prepararBebida(bebida seleccionada, dinero ingresado) {
    const receta = RECETAS[bebidaSeleccionada];
}
if (RECETAS< stockMinimo) {
    console.log("No hay suficiente stock para preparar esta bebida.");
}
     if (RECETAS > stockMinimo){
        console.log("Selecciona la bebida que deseas preparar.");
     }
