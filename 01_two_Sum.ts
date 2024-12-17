function twoSum(nums: number[], target: number): number[] {
    const numsWithIndex = nums.map((num,idx)=>{
      return {key: idx, num: num}
    })

    numsWithIndex.sort((a,b)=>a.num-b.num)

    let newNums: typeof numsWithIndex = []
    numsWithIndex.map(n=>{
      if (numsWithIndex[0].num + n.num > target) return
      newNums.push(n)
    })

    const numsLen = newNums.length
    let first=0, last=numsLen-1
    let result : number[] = [];
    for(;;){
      if (newNums[first].num + newNums[last].num === target){
        result.push(newNums[first].key, newNums[last].key)
        break
      }

      if (newNums[first].num + newNums[last].num> target){
        last--;
      }
      if (newNums[first].num + newNums[last].num < target){
        first++;
      }
    }
    
    return result
};
twoSum([2,7,11,15],9)
twoSum([3,2,4],6)
twoSum([3,3],6)
twoSum([-3,4,3,90], 0)

/* 
?- 더 효율적인 풀이
*- hash테이블에 배열 값,인덱스를 모두 넣음
*- 반복문을 돌며 값을 가져오고 target-값 을 hashTable에서 찾음
*/