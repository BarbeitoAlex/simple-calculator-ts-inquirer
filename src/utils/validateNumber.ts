let validateNum = (answer: string): boolean => {
    if( Number(answer) == NaN ) {
        return false
    } else {
        return true
    }
}

export default validateNum;