function esPar(lista) {
    return !(lista.length % 2);
}
function esImpar(lista) {
    return lista.length % 2;
}
  
function calcularMediana(lista) {
    const listaEsPar = esPar(lista);
  
    if (listaEsPar) {
      // ...
    } else {
      const indexMitadListaImpar = Math.floor(lista.length / 2);
      const medianaListaImpar = lista[indexMitadListaImpar];
      console.log(indexMitadListaImpar);
      console.log(medianaListaImpar);
      return medianaListaImpar;
    }
}



function calcularPromedio(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }


    // const ejemplo = (a, b) => a + b;
    // const sumarTodosElementos =
    //   (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
    // const sumaLista = lista.reduce((a, b) => a + b);

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
  }