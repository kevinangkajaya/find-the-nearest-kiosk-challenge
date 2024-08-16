import dataAnswer from "./dataAnswer.js";

const compareArrays = (currentExpectedAnswer, currentAnswer) => {
    for (let i = 0; i < currentExpectedAnswer.length; i++) {
        for (let j = 0; j < currentExpectedAnswer[i].length; j++) {
            if (currentExpectedAnswer[i][j] !== currentAnswer[i][j]) {
                return false;
            }
        }
    }
    return true
}

const dataTest = (answers = []) => {
    let failed = []
    for (let i = 0; i < dataAnswer.length; i++) {
        let success = compareArrays(dataAnswer[i], answers[i])
        if (!success) {
            failed.push(i + 1)
        }
    }
    console.log(`Success: ${dataAnswer.length - failed.length}, failed: ${failed.length}, failed on test number: ${failed}`)
}

export default dataTest