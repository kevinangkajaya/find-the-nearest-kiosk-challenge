import datas from "./data.js"
import dataTest from "./dataTest.js"

let answers = []

class Coor {
    constructor(x, y, distance) {
        this.x = x;
        this.y = y;
        this.distance = distance
    }
}

const getToVisit = (kiosk, toVisit = []) => {
    toVisit.push(new Coor(kiosk.x + 1, kiosk.y, kiosk.distance + 1))
    toVisit.push(new Coor(kiosk.x - 1, kiosk.y, kiosk.distance + 1))
    toVisit.push(new Coor(kiosk.x, kiosk.y + 1, kiosk.distance + 1))
    toVisit.push(new Coor(kiosk.x, kiosk.y - 1, kiosk.distance + 1))
}

for (let data of datas) {
    let result = []
    let kiosks = []

    // initialize result and kiosks
    for (let i = 0; i < data.length; i++) {
        result.push([])
        for (let j = 0; j < data[i].length; j++) {
            if (data[i][j] === "k") {
                const coor = new Coor(j, i, 0)
                kiosks.push(coor)
                result[i].push(0)
            }
            else {
                result[i].push(null)
            }
        }
    }

    // console.log(kiosks)

    // loop through kiosks to spread out and find neighbour's distance
    for (let kiosk of kiosks) {
        let toVisit = []
        let visited = []
        visited.push(new Coor(kiosk.x, kiosk.y, 0))
        getToVisit(kiosk, toVisit)
        while (toVisit.length > 0) {
            let currentKiosk = toVisit[0]
            toVisit.shift()

            // check out of bound
            if (currentKiosk.x < 0 || currentKiosk.y < 0 || currentKiosk.x >= data[0].length || currentKiosk.y >= data.length) {
                continue
            }

            // check visited
            let shouldContinueNext = false
            for (const v of visited) {
                if (v.x === currentKiosk.x && v.y === currentKiosk.y) {
                    shouldContinueNext = true
                    break
                }
            }
            if (shouldContinueNext) {
                continue
            }

            // check if distance is already bigger
            if (result[currentKiosk.y][currentKiosk.x] !== null && currentKiosk.distance >= result[currentKiosk.y][currentKiosk.x]) {
                continue
            }

            visited.push(new Coor(currentKiosk.x, currentKiosk.y, 0))
            getToVisit(currentKiosk, toVisit)
            if (result[currentKiosk.y][currentKiosk.x] === null) {
                result[currentKiosk.y][currentKiosk.x] = currentKiosk.distance
            }
            else if (currentKiosk.distance < result[currentKiosk.y][currentKiosk.x]) {
                result[currentKiosk.y][currentKiosk.x] = currentKiosk.distance
            }
        }
    }


    console.log(result)
    answers.push(result)
}

dataTest(answers)