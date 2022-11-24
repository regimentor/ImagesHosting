function html(literal, ...substr) {

    // console.log("literal", literal)
    // console.log("substr", substr)
    let result = ""
    substr.forEach((value, i) => {
        console.log(value);
        console.log("literal.raw[i]", literal.raw[i])
        let _literal = literal.raw[i];

        if (Array.isArray(value)) {
            value = value.join("")
        }

        result += _literal;
        result += value;
    })

    return result += literal.raw[literal.raw.length - 1];
}

export {html}