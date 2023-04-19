const insertSort = (list) => {
  for (let i = 1; i < list.length; i++) {
    currval = list[i];
    currpos = i;
    while (currpos > 0 && list[currpos - 1] > currval) {
      list[currpos] = list[currpos - 1];
      currpos -= 1;
    }
    list[currpos] = currval;
  }
  return list;
};

const main = () => {
  const list = [];
  for (let i = 0; i < 10; i++) {
    list.push(Math.floor(Math.random() * 100));
  }

  console.log(list);
  console.log(insertSort(list));
};

main();
