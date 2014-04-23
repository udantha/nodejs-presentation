console.log("Start =>");

for(var i=0; i<5; i++){
    //execute after i number of seconds
    setTimeout(function(){
        console.log("Still Counting..");
    }, i*1000);
}

console.log("End.");