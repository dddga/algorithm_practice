function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const array : number[]=[]
  arr.map((n,i)=>{
    array.push(fn(n,i))
  })
  return array
};