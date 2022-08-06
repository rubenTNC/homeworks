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
    if (!firstStart) {
      const result = func(...args);
      firstStart = true;
      setTimeout(() => firstStart = false, delay);
      return result;
    }
  };
}

function debounceDecorator2(func) {
  let firstStart = false;

  function wrapper(...args) {
    wrapper.count.push(args);

    if (!isTrottled) {
      const result = func(...args);
      isTrottled = true;

      setTimeout(() => firstStart = false, delay);
      return result;
    }
  }
  wrapper.count = [];

  return wrapper;
}
