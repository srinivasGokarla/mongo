function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var arr = input[1].trim().split(" ").map(Number).sort((a, b) => a - b)
//console.log(arr)
var arr1 = []
for(let i = 0; i < arr.length; i++) {
    arr1.push(arr[i] * i)

}
var sum = 0
for(let j= 0; j < arr1.length; j++) {
    sum = sum + arr1[j]
}
console.log(sum)
}

if (process.env.USERNAME === "srini") {
  runProgram(`4
  2 5 1 6`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
