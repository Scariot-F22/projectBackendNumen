const getFibonacci = (req, res)=>{
    const limit = req.query.quantity;
    let fib = [0, 1];

    for (let i = 2; i < limit; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return res.status(200).send(fib)
}

module.exports = {
    getFibonacci
};