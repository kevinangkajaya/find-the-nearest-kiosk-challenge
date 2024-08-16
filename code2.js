import datas from "./data.js"

for (let data of datas) {
    let result = []
    let visited = []
    let maxCount = (data.length - 1) * 2

    let print = (text) => {
        console.log(text)
    }

    let funcRec = (i, j, count) => {
        // print(`enter  ${i} ${j} ${count}`)

        if (count > maxCount) {
            return Number.MAX_SAFE_INTEGER
        }
        if (i < 0 || j < 0 || i >= data.length || j >= data[i].length) {
            // out of bound
            // print("out of bound")
            return Number.MAX_SAFE_INTEGER
        }

        if (result[i][j] !== null) { // value exist in this cell
            // print("already exist")
            return result[i][j] + count
        }

        // if (visited[i][j] === true) { // already visited
        //     // print("already visited")
        //     return Number.MAX_SAFE_INTEGER
        // }
        // visited[i][j] = true

        // print(`data[${i}][${j}]: ${data[i][j]}`)
        if (data[i][j] === 'k') {
            // console.log("k, count: ", count)
            result[i][j] = 0
            return count
        }
        else if (data[i][j] === 'c') {
            // print("c")
            let a = funcRec(i + 1, j, count + 1)
            // print(`a, count: ${a}`)
            let b = funcRec(i - 1, j, count + 1)
            // print(`b, count: ${b}`)
            let c = funcRec(i, j + 1, count + 1)
            // print(`c, count: ${c}`)
            let d = funcRec(i, j - 1, count + 1)
            // print(`d, count: ${d}`)
            print(`abcd, ${i},${j}: ${a}, ${b}, ${c}, ${d}`)
            let final = Math.min(a, b, c, d) + count
            print(`final, count: ${final}`)
            maxCount = final
            return final
        }
    }

    let resetVisited = () => {
        visited = []
        for (let i = 0; i < data.length; i++) {
            visited.push([])
            for (let j = 0; j < data.length; j++) {
                visited[i].push(null)
            }
        }
    }

    for (let i = 0; i < data.length; i++) {
        result.push([])
        for (let j = 0; j < data.length; j++) {
            result[i].push(null)
        }
    }

    // console.log(result, visited)

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (i !== 0 || j !== 2) continue
            resetVisited()
            result[i][j] = funcRec(i, j, 0)
            // break
            // console.log("result[i][j]: ",result[i][j])
        }
    }


    console.log(result)
}