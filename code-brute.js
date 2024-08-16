import datas from "./data.js"
import dataTest from "./dataTest.js"

let answers = []
for (let data of datas) {
    let kiosks = []
    let result = []

    const findClosestKiosk = (currentDataI, currentDataJ) => {
        let smallestDistance = Number.MAX_SAFE_INTEGER
        for (let i = 0; i < kiosks.length; i++) {
            let yDiff = Math.abs(currentDataI - i)
            if (yDiff > smallestDistance) {
                continue
            }
            for (let j = 0; j < kiosks[i].length; j++) {
                let xDiff = Math.abs(currentDataJ - kiosks[i][j])
                if (xDiff > smallestDistance) {
                    continue
                }
                let distance = yDiff + xDiff
                if (distance < smallestDistance) {
                    smallestDistance = distance
                }
            }
        }
        return smallestDistance
    }

    // store where kiosks are
    for (let i = 0; i < data.length; i++) {
        kiosks.push([])
        for (let j = 0; j < data[i].length; j++) {
            if (data[i][j] === 'k') {
                kiosks[i].push(j)
            }
        }
    }

    // create result
    for (let i = 0; i < data.length; i++) {
        result.push([])
        for (let j = 0; j < data[i].length; j++) {
            let distance;
            if (data[i][j] === 'k') {
                distance = 0
            }
            else {
                distance = findClosestKiosk(i, j)
            }
            result[i].push(distance)
        }
    }


    console.log(result)
    answers.push(result)
}

dataTest(answers)