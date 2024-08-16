import datas from "./data.js"
import dataTest from "./dataTest.js"

let answers = []

for (let data of datas) {
    let result = []
    let visited = []

    let funcRec = (i, j, count) => {
        // console.log("i,j,count: ",i,j,count)
        if (!visited[i]) {
            visited[i] = []
        }
        else if (visited[i] && visited[i][j] === 1) {
            return count
        }
        visited[i][j] = 1

        if (i < 0 || j < 0 || i >= data.length || j >= data[i].length) {
            return Number.MAX_SAFE_INTEGER;
        }
        // console.log(result[i])
        if (result[i] && result[i].length > 0 && result[i][j]) {
            // console.log("i,j,result[i][j], count: ",i,j,result[i][j], count)
            return result[i][j] + count
        }
        else if (data[i][j] === 'k') {
            // console.log("here")
            // result[i][j] = 0
            return count
        }
        else if (data[i][j] === 'c') {
            // console.log("here2")
            let a = funcRec(i + 1, j, count + 1)
            let b = funcRec(i - 1, j, count + 1)
            let c = funcRec(i, j + 1, count + 1)
            let d = funcRec(i, j - 1, count + 1)
            // console.log("abcd:", a,b,c,d)
            let final = Math.min(a, b, c, d)
            // console.log("result: ", final)
            // result[i][j] = final
            return final
        }
    }

    for (let i = 0; i < data.length; i++) {
        result[i] = []
        for (let j = 0; j < data[i].length; j++) {
            result[i][j] = null
        }
        for (let j = 0; j < data[i].length; j++) {
            visited = []
            result[i][j] = funcRec(i, j, 0)
            // console.log("result[i][j]: ",result[i][j])
        }
    }

    console.log(result)
    answers.push(result)
}

dataTest(answers)