function logIteams(n){
    let counter =0
    for(let i =0 ; i<=n;i++){
        console.log(i)
        counter++
    }
    for(let j =0 ; j<=n;j++){
        console.log(j)
        counter++
    }
    console.log("counter", counter)
}

logIteams(10)