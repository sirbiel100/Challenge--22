export const EmailValidity = (event : string)  => {

    const expression : RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(event)

    return result
}

