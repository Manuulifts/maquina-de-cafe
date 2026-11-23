//Precio de cada café

const precioBebidas = {precioTinto: 2000, precioCafe: 2500, precioCapuchino: 3500, precioMocaccino: 4000, precioChocolate: 3000, precioTe: 2500};
let ingredienteslleno = false; 
let dinerolleno = false; 

const stockMin = { cafe: 3, leche: 15, choco: 18, te: 12, vasos: 1, azu: 10 };
//let stockRellenado = { cafe: 500, leche: 3000, choco: 3600, te: 2400, vasos: 200, azu:2000 };
let stock = { cafe: 3, leche: 3000, choco: 3600, te: 12, vasos: 10, azu:10 };
const DineroMin = { "$2000": 15, "$5000": 4, "$10000": 3, "$100": 10, "$200": 20, "$500": 20};
let stockDinero = { $2000: 1, $5000: 4, $10000: 2, $100: 10, $200: 0, $500: 20};

function actualizarInventario() {
    const equivalencias = {
        coffee: stock.cafe,
        milk: stock.leche,
        sugar: stock.azu,
        chocolate: stock.choco,
        tea: stock.te,
        cups: stock.vasos,
        b10000: stockDinero[10000],
        b5000: stockDinero[5000],
        b2000: stockDinero[2000],
        c500: stockDinero[500],
        c200: stockDinero[200],
        c100: stockDinero[100]
    };

    document.querySelectorAll("#admin-rows tr").forEach(fila => {
        let clave = fila.getAttribute("data-key");
        fila.querySelector("[data-cur]").textContent = equivalencias[clave];
    });
}

actualizarInventario();

document.getElementById("admin-login").addEventListener("submit", function(event) {
    event.preventDefault();

    let pin = document.getElementById("admin-pin").value;

    if (pin === "0000") {
        document.getElementById("admin-panel").hidden = false;
        document.getElementById("admin-login").hidden = true;
        document.getElementById("admin-msg").textContent = "Acceso autorizado";
        actualizarInventario();
    } else {
        document.getElementById("admin-alert").textContent = "PIN incorrecto";
    }
});

function fueraDeServicio() {
    if (stock.cafe < stockMin.cafe || stock.leche < stockMin.leche || stock.choco < stockMin.choco || stock.te < stockMin.te || stock.vasos < stockMin.vasos || stock.azu < stockMin.azu) {
        alert("No hay ingredientes o dinero suficientes. La máquina está fuera de servicio. ");
        return true;
    }
    return false;
}
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
    }

const Azucar = () => {
    let azucar = Number(prompt("Seleccione la cantidad de azúcar que desea:"));
    while (azucar < 0 || azucar > 10 || !Number.isInteger(azucar)){
        azu = prompt("Cantidad no válida. Por favor, seleccione una cantidad de 0 a 10:");
    }
    return eleccionAzucar;
    }

function menuCliente(){
    if (fueraDeServicio()) {
        menuPrincipal();
        return;
    }
    let dineroIngresado = Number(prompt("Ingrese el dinero para pagar la bebida:"));
    elegirBebida(dineroIngresado);
}

function elegirBebida(dineroIngresado,eleccion){
    switch (eleccion) {
        case "1":
            comprarBebida(precioBebidas.precioTinto,dineroIngresado, "Tinto");
            break;
        case "2":
            comprarBebida(precioBebidas.precioCafe,dineroIngresado, "Café");
            break;
        case "3":
            comprarBebida(precioBebidas.precioCapuchino,dineroIngresado, "Capuchino");
            break;
        case "4":
            comprarBebida(precioBebidas.precioMocaccino,dineroIngresado, "Mocacino");
            break;
        case "5":
            comprarBebida(precioBebidas.precioTe,dineroIngresado, "Té");
            break; 
        case "6":
            comprarBebida(precioBebidas.precioChocolate,dineroIngresado, "Chocolate");
            break;
    }
}



function comprarBebida(precio, dineroIngresado, nombreBebida) {

    if (fueraDeServicio()) {
        return;
    }

    if (dineroIngresado < precio) {
        mostrarMensaje("Saldo insuficiente. Te faltan $" + (precio - dineroIngresado));
        return;
    }

    const nombres = {
        "Tinto": "tinto",
        "Café": "cafe",
        "Capuchino": "capuchino",
        "Mocacino": "mocaccino",
        "Té": "te",
        "Chocolate": "chocolate"
    };

    let receta = recetas[nombres[nombreBebida]];

    // Comprobar ingredientes
    for (let ingrediente in receta) {
        if (ingrediente !== "agua" && stock[ingrediente] < receta[ingrediente]) {
            mostrarMensaje("Inventario insuficiente");
            return;
        }
    }

    // Descontar ingredientes
    for (let ingrediente in receta) {
        if (ingrediente !== "agua") {
            stock[ingrediente] -= receta[ingrediente];
        }
    }

    stock.vasos--;
    stock.azu -= azucarElegida;

    saldo = 0;
    document.getElementById("credit").textContent = "$0";
    document.getElementById("dispenser").textContent = nombreBebida;

    actualizarInventario();

    mostrarMensaje("¡Compra exitosa! Disfruta tu bebida!");
}


function cancelarCompra() {
    let dineroDevuelto = saldo;

    saldo = 0;
    document.getElementById("credit").textContent = "$0";

    document.getElementById("balance-input").value = "";

    document.getElementById("bill-output").textContent =
        dineroDevuelto > 0 ? "Devolución: $" + dineroDevuelto : "";

    document.getElementById("coin-output").textContent = "";

    azucarElegida = 0;
    document.getElementById("sugar-value").textContent = "0";

    mostrarMensaje("Saldo devuelto: $" + dineroDevuelto);
}

let saldo = 0;

document.getElementById("balance-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let dinero = Number(document.getElementById("balance-input").value);

    if (dinero > 0) {
        saldo += dinero;
        document.getElementById("credit").textContent = "$" + saldo;

        document.getElementById("balance-input").value = "";
    }
});

let azucarElegida=0;

document.querySelectorAll("[data-sugar]").forEach(function(button) {
    button.addEventListener("click", function() {
        let cantidad = Number(button.getAttribute("data-sugar"));
        if (azucarElegida + cantidad >= 0 && azucarElegida + cantidad <= 10) {
            azucarElegida += cantidad;
            document.getElementById("sugar-value").textContent = azucarElegida;
        }
    });
});

document.querySelectorAll("[data-select]").forEach(function(button) {
    button.addEventListener("click", function() {
        let bebida = button.getAttribute("data-select");
        elegirBebida(saldo, bebida);
    });
});

document.getElementById("mensaje-maquina").textContent = "";
document.querySelector('[data-action="cancel"]').onclick = cancelarCompra;

let temporizadorMensaje;

function mostrarMensaje(mensaje) {
    let pantalla = document.getElementById("mensaje-maquina");

    clearTimeout(temporizadorMensaje);

    pantalla.textContent = mensaje;

    temporizadorMensaje = setTimeout(function() {
        pantalla.textContent = "";
    }, 2000);
}

