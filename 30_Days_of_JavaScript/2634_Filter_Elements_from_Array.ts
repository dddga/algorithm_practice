type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  return arr.filter((n,idx)=>fn(n,idx))
};