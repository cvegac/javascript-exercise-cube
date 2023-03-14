let n = 1;

if (n < 1 || n > 4) {
    console.log("ERROR");
}
else {
    let lengthSideMax = n * 4 - 1;
    let matriz = Array(lengthSideMax).fill(Array(lengthSideMax));
    for (let i = 0; i < lengthSideMax / 2; i++) {
        let arrayTemp = new Array(lengthSideMax);
        arrayTemp[0] = "*";
        for (let j = 1; j < arrayTemp.length; j++) {
            if (i == 0) {
                arrayTemp[j] = "*";
            }
            else if (arrayTemp[j - 1] === "*" && (j <= i || j >= lengthSideMax - i)) {
                arrayTemp[j] = " ";
            }
            else if (arrayTemp[j - 1] === " " && (j <= i || j >= lengthSideMax - i)) {
                arrayTemp[j] = "*";
            }
            else if (arrayTemp[j - 1] === " ") {
                arrayTemp[j] = " ";
            }
            else if (arrayTemp[j - 1] === "*") {
                arrayTemp[j] = "*";
            }

        }
        matriz[i] = arrayTemp;
    }
    for (let i = 0; i < lengthSideMax / 2; i++) {
        console.log(matriz[i].join(""));
    }
    for (let i = (lengthSideMax - 3) / 2; i >= 0; i--) {
        console.log(matriz[i].join(""));
    }
}
