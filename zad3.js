const createChessBoard = (size) => {
    for (let i = 0; i < size/2; i++) {
        let k = 1
        let str = ''
        i % 2 === 0 ? k = 1 : k = 0;
        for(let j = 0; j < size; j++){
            if((k+j) % 2 === 0){
                str = `${str}#` 
            } else {
                str = `${str} `
            }
        }
        console.log(str)
    }
}