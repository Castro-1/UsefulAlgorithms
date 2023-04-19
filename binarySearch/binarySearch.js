const binarySearch = (lista, start, end, target) => {
  if (start > end) return false;

  let middle = Math.floor((start + end) / 2);
  //   console.log(lista[middle]);
  if (lista[middle] === target) return true;
  if (lista[middle] < target)
    return binarySearch(lista, middle + 1, end, target);
  else return binarySearch(lista, start, middle - 1, target);
};

const lista = [1, 3, 5, 6, 6, 8, 27, 34, 55, 76];
if (binarySearch(lista, 0, lista.length - 1, 1)) console.log("Existe");
else console.log("No existe");
