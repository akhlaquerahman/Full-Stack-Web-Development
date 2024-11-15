// console.log(true && false)
// console.log(false || true)
// console.log(!true)


console.log(false && false)        //   &&(AND) mean *  { 0*0=0 means false }
console.log(true && false)         //   &&(AND) mean *  { 1*0=0 means false }
console.log(false && true)         //   &&(AND) mean *  { 0*1=0 means false }
console.log(true && true)          //   &&(AND) mean *  { 1*1=1 means true }

console.log(false || false)         //   ||(OR) mean +  { 0+0=0 means false}
console.log(false || true)          //   ||(OR) mean +  { 0+1=1 means true }
console.log(true || false)          //   ||(OR) mean +  { 1+0=1 means true }
console.log(true || true)           //   ||(OR) mean +  { 1+1=1 means true }

console.log(!true)                  //   !(NOT) mean +  { !1=0 means false }
console.log(!false)                 //   !(NOT) mean +  { !0=1 means true }