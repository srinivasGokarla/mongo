function runProgram(input) {
    input = input.trim().split("\n")
    var[N,K] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    
    console.log(upperbound(arr,K,0,N-1))
      }
   
      function upperbound(arr,K,L,H) {
          while(L <= H) {
            var  mid = (L + Math.floor((H-L) / 2));

           if(K === arr[mid] && arr[mid+1] != K) {
               return mid + 1;
           } else if(K === arr[mid]) {
               L = mid+1;
           } else if(K < arr[mid]) {
               H = mid-1;
           } else {
               L = mid + 1;
           }

         } if(arr[mid] < K ) {
               return mid+1;

         }else {
             return mid;
         }

              }

      if (process.env.USERNAME === "srini") {
        runProgram(`6 6
        4 6 10 12 18 20`);
    } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function(input) {
            read += input;
        });
        process.stdin.on("end", function() {
            read = read.replace(/\n$/, "");
            read = read.replace(/\n$/, "");
            runProgram(read);
        });
        process.on("SIGINT", function() {
            read = read.replace(/\n$/, "");
            runProgram(read);
            process.exit(0);
        });
    }