function cachingDecoratorNew(func) {
  let cache = {};
  return function (...args) {
    const hach = args.join(',');
    if (hach in cache) {
      console.log(`Из кэша: ${cache[hach]}`);
      return cache[hach];
    }
    const result = func(...args);
    cache[hach] = result;
    console.log(`Вычисляем: ${result}`);
    return result;
  };
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
