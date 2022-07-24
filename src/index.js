const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let resultString = '';
    let bigResult = [];
    let count = 0;
    let dotAndDash = [];

    for (let i = 0; i <= expr.length; i++) {
        if (count !== 10) {
            count++;
            resultString = resultString + expr[i];
        } else {
            count = 1;
            bigResult.push(resultString);
            resultString = '';
            resultString = resultString + expr[i];
        }
    }

    bigResult.forEach((item) => {
        let dotAndDashString = '';
        if (item === '**********') {
            dotAndDash.push(' ');
        } else {
            for (let i = 0; i < item.length; i += 2) {
                if (item[i] === '1' && item[i + 1] === '0') {
                    dotAndDashString += '.';
                } else if (item[i] === '1' && item[i + 1] === '1') {
                    dotAndDashString += '-';
                }
            }
            dotAndDash.push(dotAndDashString);
        }
    });

    let final = '';

    dotAndDash.forEach((item) => {
        if (item === ' ') {
            final += ' ';
        } else {
            final += MORSE_TABLE[item];
        }
    });
    return final;
}

module.exports = {
    decode
}