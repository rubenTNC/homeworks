function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    const objectInCache = cache.find(item => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }
    let result = func(...args);
    cache.push({ hash, value: result });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;

}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => func(...args), delay);
    setTimeout(() => timeoutId = null, delay)
  };
}

function debounceDecorator2(func, delay) {
  let timeoutId = null;

  function wrapper(...args) {
    wrapper.count++; 

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => func(...args), delay);
    setTimeout(() => timeoutId = null, delay);
  }
  wrapper.count = 0; 

  return wrapper;
}
