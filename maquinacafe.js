//Maquinita de café//

//Precio de cada café
const precioTinto = 3500;
const precioCafeconleche = 4200;
const precioCapuchino = 4500;
const precioMocaccino = 5000;
const precioTe = 3800;

//Stock inventario de la máquina mínimo y máximo de cada ingrediente en gramos
const stockMinimo = { cafeinstantaneo: 2.5, lecheenpolvo: 10, chocolateenpolvo: 20, te: 10, vasos: 1  }; //mínimo de cada ingrediente en gramos
const stockMaximo = { cafeinstantaneo: 1000, lecheenpolvo: 1000, chocolateenpolvo: 500, te: 800, vasos: 80 }; //máximo de cada ingrediente en gramos
let stockCafeinstantaneo = 1000;                //1000 gramos de café instantáneo
let stockLecheenpolvo = 1000;                  //1000 gramos de leche en polvo
let stockAzucar = 500;                        //500 gramos de azúcar
let stockChocolateenpolvo = 500;             //500 gramos de chocolate en polvo
let stockTe = 800;                          //800 gramos de té
let stockVasos = 80;                       //80 unidades de vasos

//preparación de cada receta por vaso en gramos
const RECETAS = {
    tinto: { cafeinstantaneo: 2.5, lecheenpolvo: 0, chocolateenpolvo: 0, te: 0 },
    cafeconleche: { cafeinstantaneo: 2.5, lecheenpolvo: 8, chocolateenpolvo: 0, te: 0 },
    capuchino: { cafeinstantaneo: 2.5, lecheenpolvo: 10, chocolateenpolvo: 0, te: 0 },
    mocaccino: { cafeinstantaneo: 2.5, lecheenpolvo: 10, chocolateenpolvo: 20, te: 0 },
    te: { cafeinstantaneo: 0, lecheenpolvo: 0, chocolateenpolvo: 0, te: 10,  }
};

// Dinero que acepta la máquina
const monedas = [100, 200, 500];
const billetes = [1000, 2000, 5000, 10000, 20000];