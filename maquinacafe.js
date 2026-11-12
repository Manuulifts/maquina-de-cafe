

//Precio de cada café

const precioBebidas = {precioTinto: 2000, precioCafe: 2500, precioCapuchino: 3500, precioMocaccino: 4000, precioChocolate: 3500, precioTe: 2500};
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
        menuCliente();
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

const recetas = {
    tinto: { cafe: 3, leche: 0, choco: 0, te: 0, agua: 150},
    cafe: { cafe: 3, leche: 10, choco: 0, te: 0, agua: 150},
    capuchino: { cafe: 3, leche: 15, choco: 0, te: 0, agua: 150},
    mocaccino: { cafe: 2.5, leche: 10, choco: 10, te: 0, agua: 150},
    te: { cafe: 0, leche: 0, choco: 0, te: 10,agua: 150},
    chocolate: { cafe: 0, leche: 6, choco: 22, te: 0, agua: 150}
};


function menuCliente(){
    let eleccion= prompt ("Hola. \nPor favor, seleccione una bebida: \n1. Tinto.............. $2.000\n2. Café con leche..... $2.500\n3. Capuchino.......... $3.500\n4. Mocaccino.......... $4.000\n5. Té................. $2.500\n6. Chocolate.......... $3.000\n7. Salir");
    switch (eleccion) {
        case "1":
            comprarBebida(precioBebidas.precioTinto);
            break;
        case "2":
            comprarBebida(precioBebidas.precioCafe);
            break;
        case "3":
            comprarBebida(precioBebidas.precioCapuchino);
            break;
        case "4":
            comprarBebida(precioBebidas.precioMocaccino);
            break;
        case "5":
            comprarBebida(precioBebidas.precioTe);
            break; 
        case "6":
            comprarBebida(precioBebidas.precioChocolate);
            break;
        case "7":
            alert("Gracias por su visita. ¡Hasta luego!");
            break; 
        default:
            alert("Opción no válida. Por favor, seleccione una bebida del 1 al 7.");
            menuCliente();
            break;
}
}

function comprarBebida(precio) {
    let dineroIngresado = Number(prompt("Ingrese el dinero para pagar la bebida:"));
    while (dineroIngresado < precio) {
        alert("Dinero insuficiente. Le faltan $" + (precio - dineroIngresado));
        dineroIngresado = dineroIngresado + Number(prompt("Ingrese más dinero:"));
    }
    alert("Gracias por su compra. Aquí está su bebida.");
}

const monedas = [100, 200, 500,1000];
const billetes = [2000, 5000, 10000, 20000];
const stockBilletes = 80000;                       //dinero en la máquina Billetes para la devuelta 2000, 5000, 10000.
const stockMonedas = 20000;   