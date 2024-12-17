type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter2(init: number): Counter {
  let initialData = init
  return {
    increment: ()=> {return ++init},
    decrement: ()=> {return --init},
    reset: ()=> {init = initialData;return init}
  }
};

