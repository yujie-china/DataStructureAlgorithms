

function lastRemaining (n: number, m: number) {

    let position = 0;
    for (let i = 2; i <= n; i++) {
        position = (position + m) % m;
    }
    return position;

}

console.log(lastRemaining(5, 3));//3
