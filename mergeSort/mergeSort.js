const mergeSort = (lista) => {
  if (lista.length > 1) {
    let half = Math.floor(lista.length / 2);
    let izquierda = lista.slice(0, half);
    let derecha = lista.slice(half);

    // Recursion
    mergeSort(izquierda);
    mergeSort(derecha);

    // indexing for sublists
    let i = 0;
    let j = 0;
    // indexing for main list
    let k = 0;

    while (i < izquierda.length && j < derecha.length) {
      if (derecha[j] < izquierda[i]) {
        lista[k] = derecha[j];
        j++;
      } else {
        lista[k] = izquierda[i];
        i++;
      }
      k++;
    }
    while (i < izquierda.length) {
      lista[k] = izquierda[i];
      i++;
      k++;
    }
    while (j < derecha.length) {
      lista[k] = derecha[j];
      j++;
      k++;
    }
  }
  return lista;
};

const main = () => {
  let array = [];
  for (let i = 0; i < 10; i++) {
    const random = Math.floor(Math.random() * 100);
    array.push(random);
  }
  console.log(array);
  console.log("-----------------------------------");
  console.log(mergeSort(array));
};

main();
