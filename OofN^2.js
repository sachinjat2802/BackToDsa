function logIteams(n){
    let counter =0
    for(let i =0 ; i<=n;i++){
        for(let j =0 ; j<=n;j++){
            console.log(i,j)
            counter++
        }
    }
    
    console.log("counter", counter)
}

logIteams(10)