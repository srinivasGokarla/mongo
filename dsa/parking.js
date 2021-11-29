function runProgram(input) {
  input = input.trim().split("\n")
var K = Number(input[0])
var arri = input[1].trim().split(" ").map(Number)
var depa=  input[2].trim().split(" ").map(Number)
//console.log(K,arri,depa)
 
 if(parking(arri,depa,K) === true) {
  console.log("Not Possible")
  
 } else {
  console.log("Possible")
 }
}
function parking(arri,depa,K) {
var count = 0;
var i = 1;
var j = 0;
while(i < arri.length && j < depa.length) {
  if(arri[i] <= depa[j]) {
    count++;
    i++;
  } else {
    j++;
    count--;
  }
  } if(count > K) {
  return false;
    
  }
    return true;
  

}

if (process.env.USERNAME === "srini") {
  runProgram(`1
  1 3 5
  2 6 8`);
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
