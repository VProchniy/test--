let n = 5;
n *= 2 + 1;
console.log(n);
n -= 3;
console.log(n);

n++;
console.log(n);

let counter = 1;
let a = ++counter; // (*)

console.log(a); //2

let counters = 1;
let b = counters++;
console.log(b); //1
let h = (1 + 2, 2 + 3);
console.log(h);

"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)