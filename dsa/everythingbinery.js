function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
    var K = Number(input[2])
//console.log(N,K,arr)
var count = [0]
frequencyInSortedArray(0, N, K, arr, count)
console.log(count[0])

 }


 function frequencyInSortedArray(lo, hi, K, arr, count) {
    if (lo >= hi) {
      return -1;
    }
  
    let mid = Math.floor((hi + lo) / 2);
  
    if (arr[mid] == K) {
        count[0]++;
      frequencyInSortedArray(lo, mid, K, arr, count);
      frequencyInSortedArray(mid + 1, hi, K, arr, count);
    } else if (arr[mid] > K) {
      return frequencyInSortedArray(lo, mid, K, arr, count);
    } else {
      return frequencyInSortedArray(mid + 1, hi, K, arr, count);
    }
  }

if (process.env.USERNAME === "srini") {
  runProgram(`6
  1 1 1 2 2 2	
  1`);
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
