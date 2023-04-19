const bubbleSort = (list) => {
  for (let i = 0; i < list.length; i++) {
    console.log(list);
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        let help = list[j];
        list[j] = list[j + 1];
        list[j + 1] = help;
      }
    }
  }
  return list;
};

const main = () => {
  const list = [55, 33, 23, 64, 13, 2, 6, 43];
  console.log(bubbleSort(list));
};

main();
