/**
 * JP BEHRENS - RandomNumber
 */
function randomNumber({ quanty = 1, sort = null, uniqe = true, min = 0, max = 99 }) {

    let eCode;

    if (quanty > (max - min)) {
        eCode = 101; // Error 101: angeforderte Anzahl größer als die differenz zwischen min und max Wert
    } else {

        const numbs = [[], []];   // Lerrer Array in den die zufälligen Nummern gespeichert werden

        let runs = 0; // Hier werden die benötighten durchläufe gezählt

        while (numbs[0].length < quanty) {
            // Erzrugt eine zufällige Zahl von Min bis Max
            const randNum = Math.floor(Math.random() * (max - min) + min);
            // Wenn die nummern uniqe sein sollen
            if (uniqe) {
                if (!numbs[0].includes(randNum)) {
                    numbs[0].push(randNum);
                }
            } else {
                numbs[0].push(randNum);
            }

            // Durchläufe werden hochgezäghlt
            runs++;
        }


        for (let i = min; i < max; i++) {
            if (!numbs[0].includes(i)) {
                numbs[1].push(i);
            }

        }

        // Sortieren
        if (sort === 'up') { numbs[0].sort((a, b) => a - b); } // Aufsteigend
        if (sort === 'down') { numbs[0].sort((a, b) => b - a); } // Absteigend


        return {
            error: false,
            numbers: {
                selected: numbs[0],
                notSelected: numbs[1]
            },
            runs
        }
    }

    return {
        error: true,
        eCode: 101
    }
    //return numbs;
}

//Demo
console.log(randomNumber({quanty:20, sort:'up'}).numbers.selected);