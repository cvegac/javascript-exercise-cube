let n = 3;

if (n < 1 || n > 4) {
    console.log("ERROR");
}
else {
    let lengthSideMax = n * 4 - 1;
    let array = new Array(lengthSideMax);
    for (let i = 0; i < lengthSideMax; i++) {
        array[i] = new Array(lengthSideMax).fill(" ");
    }
    for (let i = 0; i < n; i++) {
        let initPoint = i * 2;
        let finishPoint = lengthSideMax - initPoint;
        for (let f = initPoint; f < finishPoint; f++) {
            for (let c = initPoint; c < finishPoint; c++) {
                if (f == initPoint || c == initPoint) {
                    array[f][c] = "*";
                }
                if (f == finishPoint - 1 || c == finishPoint - 1) {
                    array[f][c] = "*";
                }
            }
        }
    }
    for (let i = 0; i < lengthSideMax; i++) {
        console.log(array[i].join(""));
    }
}
