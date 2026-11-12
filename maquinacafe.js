//Maquinita de café//

// bebidas disponibles
const productos = ["tinto", "cafe", "capuchino", "mocaccino", "te", "chocolate"];

//Precio de cada café
const precioTinto = 2000;
const precioCafe = 2500;
const precioCapuchino = 3500;
const precioMocaccino = 4000;
const precioChocolate = 3500;
const precioTe = 2500;
let ingredienteslleno = false; //Variable para indicar si los ingredientes están llenos
let dinerolleno = false; //Variable para indicar si el dinero está lleno

//Stock inventario de la máquina mínimo y máximo de cada ingrediente en gramos 
const stockMin = { cafe: 3, leche: 15, choco: 18, te: 12, vasos: 1, azu: 10 };
//let stockRellenado = { cafe: 500, leche: 3000, choco: 3600, te: 2400, vasos: 200, azu:2000 };
let stock = { cafe: 3, leche: 3000, choco: 3600, te: 12, vasos: 10, azu:10 };
const DineroMin = { "$2000": 15, "$5000": 4, "$10000": 3, "$100": 10, "$200": 20, "$500": 20};
let stockDinero = { $2000: 1, $5000: 4, $10000: 2, $100: 10, $200: 0, $500: 20};

function menuPrincipal() {
    let usuario = prompt ("1. Cliente \n 2. Distribuidor");

    switch (usuario){
        case "1":
        break;
        case "2": 
        menuDistribuidor();
        break;
        default:
        alert("Opción no válida.");
        break;
}
    }
menuPrincipal();
function menuDistribuidor() {
    if (ingredienteslleno==true&&dinerolleno==true){ 
        alert("Todo está rellenado. Volviendo al menú principal.");
        menuPrincipal();
    }
    alert("Stock Actual \n\nIngredientes:\n"+
        "Café: " + stock.cafe + "\n" +
        "Leche: " + stock.leche + "\n" +
        "Chocolate: " + stock.choco + "\n" +
        "Té: " + stock.te + "\n" +
        "Vasos: " + stock.vasos + "\n" +
        "Azúcar: " + stock.azu + "\n\n" +
        "Billetes:\n"+
        "$2000: " + stockDinero.$2000 + "\n" + 
        "$5000: " + stockDinero.$5000 + "\n" +
        "$10000: " + stockDinero.$10000 + "\n\n" +
        "Monedas:\n"+
        "$100: " + stockDinero.$100 + "\n" +
        "$200: " + stockDinero.$200 + "\n" +
        "$500: " + stockDinero.$500 + "\n"

    );
    let distribuidor = prompt ("1. Rellenar Ingredientes \n 2. Rellenar Dinero \n 3. Cancelar");
    switch (distribuidor){
        case "1":
            if ( stock.cafe == stockMin.cafe || stock.leche == stockMin.leche ||stock.choco == stockMin.choco ||stock.te == stockMin.te ||stock.vasos == stockMin.vasos ||stock.azu == stockMin.azu) {
                rellenarIngredientes();
                }
                break;
        case "2":
            if ( stockDinero.$2000 == DineroMin.$2000 || stockDinero.$5000 == DineroMin.$5000 || stockDinero.$10000 == DineroMin.$10000 || stockDinero.$100 == DineroMin.$100 || stockDinero.$200 == DineroMin.$200 || stockDinero.$500 == DineroMin.$500) {
                rellenarDinero();
                }
                break;
        case "3":
            alert("Operación cancelada.");
            break;  
        default:
            alert("Opción no válida.");
            menuDistribuidor();
            break;
            }
    
        }
function rellenarIngredientes() {
    stock.cafe = 500;
    stock.leche = 3000;
    stock.choco = 3600;
    stock.te = 2400;
    stock.vasos = 200;
    stock.azu = 2000;
    ingredienteslleno = true;
    alert("Ingredientes rellenados correctamente. \n"+"Café: " + stock.cafe + "\n" +"Leche: " + stock.leche + "\n" +"Chocolate: " + stock.choco + "\n" +"Té: " + stock.te + "\n" +"Vasos: " + stock.vasos + "\n" +"Azúcar: " + stock.azu);
    menuDistribuidor();       
}
function rellenarDinero() {
    stockDinero.$2000 = 15;
    stockDinero.$5000 = 4;
    stockDinero.$10000 = 3;
    stockDinero.$100 = 10;
    stockDinero.$200 = 20;
    stockDinero.$500 = 20;
    dinerolleno = true;
    alert("Dinero rellenado correctamente. \n"+"Billetes:\n"+"$2000: " + stockDinero.$2000 + "\n" + "$5000: " + stockDinero.$5000 + "\n" +"$10000: " + stockDinero.$10000 + "\n\n" +"Monedas:\n"+"$100: " + stockDinero.$100 + "\n" +"$200: " + stockDinero.$200 + "\n" +"$500: " + stockDinero.$500 + "\n");
    menuDistribuidor();
    }


//preparación de cada receta por vaso en gramos
const recetas = {
    tinto: { cafe: 3, leche: 0, choco: 0, te: 0, agua: 150},
    cafe: { cafe: 3, leche: 10, choco: 0, te: 0, agua: 150},
    capuchino: { cafe: 3, leche: 15, choco: 0, te: 0, agua: 150},
    mocaccino: { cafe: 2.5, leche: 10, choco: 10, te: 0, agua: 150},
    te: { cafe: 0, leche: 0, choco: 0, te: 10,agua: 150},
    chocolate: { cafe: 0, leche: 6, choco: 22, te: 0, agua: 150}
};


// Dinero que acepta la máquina
const monedas = [100, 200, 500,1000];
const billetes = [2000, 5000, 10000, 20000];
const stockBilletes = 80000;                       //dinero en la máquina Billetes para la devuelta 2000, 5000, 10000.
const stockMonedas = 20000;                    //dinero en la máquina Monedas para la devuelta 100, 200, 500.


//Stock de dinero en la máquina

let saldoDinero = 0; //Saldo de dinero ingresado por el usuario
let ventasTotales = 0; //Ventas totales de la máquina
let maquinaEncendida = true; //Estado de la máquina (encendida o apagada)




//funcion para elección de bebida
/*let menu= parseInt(prompt("Hola. Por favor, seleccione una bebida: \n1. Tinto \n2. Café con leche \n3. Capuchino \n4. Mocaccino \n5. Té"));
let precioBebida;
let saldoBebida;*/

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