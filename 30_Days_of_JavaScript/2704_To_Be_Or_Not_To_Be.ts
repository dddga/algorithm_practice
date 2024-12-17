type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (val1): any => {
      if(val=== val1) return true 
      else throw new Error("Not Equal")
    },
    notToBe: (val1): any => {
      if(val!== val1) return true 
      else throw new Error("Equal")
    },
  }
};
