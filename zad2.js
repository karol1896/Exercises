const findDiviser = () => {
    for (let i = 1; i <= 100; i++) {
        if(i % 3 === 0){
            if (i % 5 === 0) {
                console.log('FizzBuzz')
            } else{
                console.log('FIZZ')
            }
        } else if (i % 5 === 0){
            console.log('BUZZ')
        }
    }
}    