function runProgram(input) {
    input = input.trim().split("\n")
    var [N,testcases] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    arr.sort((a,b)=> a - b);
    var line = 2;
    for(var i = 0; i < testcases; i++){
        var K = Number(input[line++]);
       
        if(discoverNumber(0,N - 1,K,arr)){
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
    }
    function discoverNumber(lo,hi,K,arr){
        if(lo > hi){
            return false;
        } else {
            var mid = Math.floor(lo + (hi - lo) / 2);
            if(arr[mid] == K){
                return true;
            } else if(K < arr[mid]){
                return discoverNumber(lo,mid - 1,K,arr);
            }else{
                return discoverNumber(mid + 1,hi,K,arr);
            }
        }
        
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`5 10
      50 40 30 20 10
      10
      20
      30
      40
      50
      60
      70
      80
      90
      100`);
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