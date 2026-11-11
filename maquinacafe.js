//Maquinita de café//

// bebidas disponibles
const bebidasDisponibles = ["tinto", "cafeconleche", "capuchino", "mocaccino", "te"];

//Precio de cada café
const precioTinto = 3500;
const precioCafeconleche = 4200;
const precioCapuchino = 4500;
const precioMocaccino = 5000;
const precioTe = 3800;

//Stock inventario de la máquina mínimo y máximo de cada ingrediente en gramos 
const stockMinimo = { cafeinstantaneo: 25, lecheenpolvo: 10, chocolateenpolvo: 20, te: 10, vasos: 1,}; //mínimo de cada ingrediente en gramos
const stockMaximo = { cafeinstantaneo: 1000, lecheenpolvo: 1000, chocolateenpolvo: 500, te: 800, vasos: 80, }; //máximo de cada ingrediente en gramos
                      //80 unidades de vasos


//preparación de cada receta por vaso en gramos
const RECETAS = {
    tinto: { cafeinstantaneo: 25, lecheenpolvo: 0, chocolateenpolvo: 0, te: 0, agua: 150 },
    cafeconleche: { cafeinstantaneo: 25, lecheenpolvo: 80, chocolateenpolvo: 0, te: 0, agua: 150 },
    capuchino: { cafeinstantaneo: 25, lecheenpolvo: 100, chocolateenpolvo: 0, te: 0, agua: 150 },
    mocaccino: { cafeinstantaneo: 25, lecheenpolvo: 100, chocolateenpolvo: 200, te: 0, agua: 150 },
    te: { cafeinstantaneo: 0, lecheenpolvo: 0, chocolateenpolvo: 0, te: 100,agua: 150 }
};


// Dinero que acepta la máquina
const monedas = [100, 200, 500,1000];
const billetes = [2000, 5000, 10000, 20000];
const stockBilletes = 80000;                       //dinero en la máquina Billetes para la devuelta 2000, 5000, 10000.
const stockMonedas = 20000;                    //dinero en la máquina Monedas para la devuelta 100, 200, 500.

//Stock de ingredientes en la máquina
let stock = {
    cafeinstantaneo: 1000,
    lecheenpolvo: 1000,
    chocolateenpolvo: 500,
    te: 800,
    vasos: 80
};
//Stock de dinero en la máquina
let stockDinero = {
        2000: 15,
        5000: 4,
        10000: 3,
        100: 10,
        200: 20,
        500: 20
    };
let saldoDinero = 0; //Saldo de dinero ingresado por el usuario
let ventasTotales = 0; //Ventas totales de la máquina
let maquinaEncendida = true; //Estado de la máquina (encendida o apagada)

//Funcion  caja inicio del dia para el operador

function cajaInicioDia() {
    if (stockDinero[2000] < 15 || stockDinero[5000] < 4 || stockDinero[10000] < 3 || stockDinero[100] < 10 || stockDinero[200] < 20 || stockDinero[500] < 20) {
        console.log("La máquina no tiene suficiente dinero para iniciar el día. Por favor, recargue la máquina.");
        maquinaEncendida = false;
    }
}
//funcion para elección de bebida
let menu= parseInt(prompt("Hola. Por favor, seleccione una bebida: \n1. Tinto \n2. Café con leche \n3. Capuchino \n4. Mocaccino \n5. Té"));
let precioBebida;
let saldoBebida;

function comprarBebida(precioBebida) {
    console.log(`El precio de la bebida es: ${precioBebida} pesos.`);
    saldoBebida = Number(prompt("Ingrese el dinero para pagar la bebida:"));
    let mensaje = "";
    if (saldoBebida < precioBebida) {
        mensaje = alert("Saldo insuficiente. Por favor, ingrese más dinero.");
    } else {
        mensaje = alert("Gracias por su compra. Aquí está su bebida.");
    }
    return mensaje;
}



    switch (menu) {
        case 1:}