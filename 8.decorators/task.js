function cachingDecoratorNew(func) {
  let cache = {};
  return function (...args) {
    const hash = args.join(',');
    if (hash in cache) {
      console.log(`Из кэша: ${cache[hash]}`);
      return `Из кэша: ${cache[hash]}`;
    }
    const result = func(...args);
    cache[hash] = result;
    console.log(`Вычисляем: ${result}`);
    return `Вычисляем: ${result}`;
  };
}


function debounceDecoratorNew(func, delay) {
  let firstStart = false;
  return function (...args) {
    if(!firstStart) {
      func(...args);
      firstStart = true;
      setTimeout(() => firstStart = false, delay);
    }
  };
}

function debounceDecorator2(func) {
  let count = 0;
  if(firstStart) {
    count += 1;
  }
  console.log(count)
  return count;
}
