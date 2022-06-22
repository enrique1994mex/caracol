
function Caracol(m,n) {

    //Crear un nuevo array
    let myArray = new Array(m);

    for(let i = 0; i < myArray.length; i++) {
        myArray[i] = new Array(n);
    }

    for(let row = 0; row < m; row++) {
        for(let column = 0; column < n; column++) {
            myArray[row][column] = 1;
        }
    }

    //Objeto con propiedades fila, columna y dirección
    let elemento = {
        fila: 0,
        columna: 0,
        direccion: 'R'
    }

    //Valores inciales
    myArray[elemento.fila][elemento.columna] = null;
    console.log(elemento.fila, elemento.columna, elemento.direccion)

    //Recorrido de la matriz
    for(let vuelta = 0; vuelta < m*n+2; vuelta ++) {

        console.log(`vuelta ${vuelta+1}`)

        //Switch con las cuatro direcciones
        switch (elemento.direccion) {
            case 'R':
                if((myArray[elemento.fila][elemento.columna+1] != undefined) && (myArray[elemento.fila][elemento.columna+1] != null)) {
                    elemento.columna = elemento.columna + 1;
                    console.log(elemento.fila, elemento.columna, elemento.direccion)
                    myArray[elemento.fila][elemento.columna] = null;
        
                } else {
                    elemento.direccion = 'D';
        
                }
                break;
            
            case 'D':
                if((myArray[elemento.fila+1] != undefined) && (myArray[elemento.fila+1] != null)) {
                    elemento.fila = elemento.fila + 1;
                    console.log(elemento.fila, elemento.columna, elemento.direccion)
                    myArray[elemento.fila][elemento.columna] = null; 
        
                } else {
                    elemento.direccion = 'L'; 
                }
                break;
            
            case 'L': 
                if((myArray[elemento.fila][elemento.columna-1] != undefined) && (myArray[elemento.fila][elemento.columna-1] != null)) {
                    elemento.columna = elemento.columna -1;
                    console.log(elemento.fila, elemento.columna, elemento.direccion)
                    myArray[elemento.fila][elemento.columna] = null;
                } else {
                    elemento.direccion = 'U';
                }
                break; 

            case 'U':
                if((myArray[elemento.fila-1][elemento.columna] != undefined) && (myArray[elemento.fila-1][elemento.columna] != null)) {
                    elemento.fila = elemento.fila - 1;
                    console.log(elemento.fila, elemento.columna, elemento.direccion)
                    myArray[elemento.fila][elemento.columna] = null;
                } else {
                    elemento.direccion = 'R';
                }
                break; 
        
            default:
                break;
        }

    } 

    //Retornar la dirección del último elemento
    return elemento.direccion
}


