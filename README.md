# Máquina expendedora de café

## Entradas
### Del usuario


| Entrada | Valores posibles |
| :--- |  ---: |
| Billete | 2000, 5000, 10000, 20000| 
| Moneda | 100, 200, 500, 1000| 
| Bebida elegida | Tinto, Cafe con leche, capuchino, té, mocaccino | 
| Azúcar| de 0 a 10 gr| 
| Cancelar| si/no| 

### Del operador
|Entrada | Descripción  |
| :--- | ---: |
| Recarga de insumos | café instantaneo, Leche en polvo, azúcar, chocolate en polvo, Té| 
| Recarga de vasos | Cantidad vasos Máximo 80 unidades| 
| Recarga de billetes | Billetes para la devuelta 2000, 5000, 10000. Tener mínimo $ 80000 al inicio del día en billetes surtidos | 
| Recarga de monedas| Monedas para la devuelta 100, 200, 500, 1000 Tener mínimo $ 20000 al incio del día en monedas surtidas| 

## Proceso
### Pasos
1 Recibir el dinero y sumar el saldo
2 Esperar que el usuario escoja bebida y azúcar
3 Revisar las reglas del negocio
4 Si todo esta bien se sirve la bebida
5 Descontar ingredientes y vasos del stock
6 Calcular y entregar laa vueltas
7 Dejar el saldo en 0

## Reglas del negocio

| # | Regla | 
| :--- |  ---: |
| 1 | Solo se aceptan billetes y monedas de la tabla de entradas. Lo demás se rechaza | 
| 2 | Solo se sirve la bebida si el saldo es mayor o igual al precio del producto | 
| 3 | Solo se sirve si  hay vasos y alcanzan los ingredientes de la receta | 
| 4 | Si el usuario cancela se devuelve todo el saldo| 
| 5 | Si no hay monedas para las vueltas, no se sirve y se devuelve todo el saldo | 
| 6 | Si un ingrediente se acaba, esa bebida queda agotada y ñas demás siguen | 
| 7 | Si un insumo llega al mínimo se avisa al operario | 
| 8 | Solo el operario recarga, y no puede pasar el máximo |  
| 9 | El azúcar máximo por bebida es 10 gr | 
| 10 | Se sirve siempre la misma cantidad de cada ingrediente | 

### Cálculos
- Saldo = suma de billetes y monedas ingresadas
- Vueltas = saldo - precio
- Stock nuevo = stock actual - receta de la bebida

## Salidas
| Salida | Cuando se cumple | 
| :--- |  ---: |
| Bebida servida | Cuando se cumplen todas las reglas | 
| Vueltas | Si el saldo es mayor al precio | 
| Devolución total | Solo se sirve si  hay vasos y alcanzan los ingredientes de la receta | 
| Mensaje "Saldo insuficiente"| Si el usuario cancela se devuelve todo el saldo| 
| Mensaje "agotado"| Si no hay monedas para las vueltas, no se sirve y se devuelve todo el saldo | 
| Mensaje "sin cambio " | Si un ingrediente se acaba, esa bebida queda agotada y ñas demás siguen | 
| Alerta al operario| Si un insumo llega al mínimo se avisa al operario | 

