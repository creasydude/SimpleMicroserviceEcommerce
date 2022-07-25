const productIdGenerator = (num : number) => {
    const numbers = ["1","2","3","4","5","6","7","8","9","0"];
    let result : string = "";
    for (let index = 0; index < num; index++) {
        result += numbers[Math.floor(Math.random() * 10)];
    }
    return result;
}

export default productIdGenerator;