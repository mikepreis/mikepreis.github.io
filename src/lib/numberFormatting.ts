let insertCommas = function(valueString : string) {

    let indexOfFirstValueInString = 0;

    if (valueString.indexOf("-") === 0)
        indexOfFirstValueInString = 1;


    for (let stringIndex = valueString.length - 3; stringIndex > indexOfFirstValueInString; stringIndex -= 3)
        valueString = valueString.slice(0, stringIndex) + "," + valueString.slice(stringIndex, valueString.length);


    return valueString;
};

export function insertCommasIntoValueString(valueString : string) {

    let e = valueString.indexOf("e");
    let dot = valueString.indexOf(".");

    if (e === -1 && dot === -1)
        valueString = insertCommas(valueString);

    else {

        if (e === -1)
            valueString = insertCommas(valueString.slice(0, dot)) + valueString.slice(dot, valueString.length);

        else if (dot === -1)
            valueString = insertCommas(valueString.slice(0, e)) + valueString.slice(e, valueString.length);

        else {

            if (dot < e)
                valueString = insertCommas(valueString.slice(0, dot)) + valueString.slice(dot, valueString.length);
                
            else
                valueString = insertCommas(valueString.slice(0, e)) + valueString.slice(e, valueString.length);
        }
    }

    return valueString;
}