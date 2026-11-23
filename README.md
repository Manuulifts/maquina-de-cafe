# Máquina expendedora de café

## Entradas
### Del cliente

| Entrada | Descripción |
| :--- |  ---: |
| Saldo | Valor numérico acumulado por el cliente| 
| Bebida elegida | Tinto, cafe con leche, capuchino, té, mocaccino, chocolate | 
| Azúcar| De 0 a 10 gramos, ajustable mediante botones (+) y (-)| 
| Cancelar| Si/No| 

### Del distribuidor
|Entrada | Descripción  |
| :--- | ---: |
| Recarga de insumos | Café, leche, azúcar, chocolate en polvo, té| 
| Recarga de vasos | Cantidad máxima de vasos 200 unidades de 6oz| 
| Recarga de billetes | Billetes de $2.000, $5.000 y $10.000.| 
| Recarga de monedas| Monedas de $100, $200 y $500| 

## Precios
| Bebida | Precio |
| :--- | ---: |
| Tinto | $2.000 |
| Café con leche | $2.500 |
| Capuchino | $3.500 |
| Mocaccino | $4.000 |
| Té | $2.500 |
| Chocolate | $3.000 |

## Recetas
| Bebida | Café (g) | Leche (g) | Chocolate (g) | Té (g) | Agua (ml) |
| :--- | ---: | ---: | ---: | ---: | ---: |
| Tinto | 3 | 0 | 0 | 0 | 180 |
| Café con leche | 3 | 10 | 0 | 0 | 180 |
| Capuchino | 3 | 15 | 0 | 0 | 180 |
| Mocaccino | 2.5 | 10 | 10 | 0 | 180 |
| Té | 0 | 0 | 0 | 10 | 180 |
| Chocolate | 0 | 6 | 22 | 0 | 180 |
**Nota:** Los vasos tienen una capacidad de 8 oz, pero cada bebida se sirve con 6 oz de agua. El agua no se descuenta del inventario. La cantidad de azúcar depende de la selección del cliente.

## Capacidad del inventario
| Insumo | Cantidad máxima |
| :--- | ---: |
| Café | 500 g |
| Leche | 3000 g |
| Chocolate | 3600 g |
| Té | 2400 g |
| Azúcar | 2000 g |
| Vasos | 200 unidades |
| Agua | Ilimitada|

## Proceso
### Pasos
1. Recibir el dinero y sumar el saldo.
2. Esperar a que el cliente escoja la bebida y la cantidad de azúcar.
3. Revisar las reglas del negocio.
4. Si todo está correcto, servir la bebida.
5. Descontar los ingredientes y vasos del stock.
6. Calcular y entregar las vueltas.

## Reglas
| # | Regla | 
| :--- |  ---: |
| 1 | El cliente puede abonar dinero para aumentar su saldo disponible. | 
| 2 | Solo se sirve la bebida si el saldo es mayor o igual al precio del producto. | 
| 3 | La máquina solo permite servir bebidas cuando cuenta con los ingredientes, vasos y dinero suficientes para operar. | 
| 4 | Si el cliente cancela se devuelve todo el saldo.| 
| 5 | Si algún elemento del inventario (ingredientes, vasos, billetes o monedas) tiene una cantidad inferior al mínimo establecido, la máquina suspende todas sus operaciones hasta que el distribuidor realice la recarga correspondiente.| 
| 6 | Solo el distribuidor puede realizar recargas y no puede superar las cantidades máximas establecidas.|  
| 7 | La cantidad máxima de azúcar por bebida es de 10gr. | 
| 8 | Se utilizan las cantidades de ingredientes establecidas en la receta de cada bebida, excepto el azúcar, que depende de la selección del cliente.|
| 9 | No se debe descontar inventario si la compra no se completa. |
| 10 | El saldo y las cantidades de inventario no pueden tomar valores negativos. |

### Cálculos
- Saldo  = suma de los abonos ingresados por el cliente.
- Vueltas = Saldo - Precio bebida.
- Stock nuevo = Stock actual - Ingredientes utilizados en la receta
- Vasos nuevos = Vasos actuales - 1

## Salidas
| Salida | Cuando se cumple |
| :--- | :--- |
| Bebida servida | Cuando se cumplen todas las reglas. |
| Vueltas | Cuando el saldo es mayor al precio de la bebida. |
| Devolución total | Cuando el usuario cancela. |
| Mensaje "Saldo insuficiente" | Cuando el saldo es menor al precio de la bebida. |
| Mensaje "Máquina fuera de servicio" | Cuando algún elemento del inventario está por debajo del mínimo establecido y la máquina suspende sus operaciones. |
| Alerta al distribuidor | Cuando la máquina requiere una recarga de inventario.|

