const debounce = function(func: any, delay: number) {
  let timer: number;
  return function(this: any) {
    const args = arguments;
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };
};

module.exports = {
  debounce: debounce
};
