/**
 * JP BEHRENS - RandomNumber
 */
 function randomNumber({ quanty = 1, sort = null, uniqe = true, min = 0, max = 99 }) {

    let eCode;

    if (quanty > (max - min)) {
        eCode = 101; // Error 101: desired number greater than the difference between min and max value
    } else {

        const numbs = [[], []];   // Empty array in which the random numbers are stored

        let loops = 0; // Here the required loops are counted

        while (numbs[0].length < quanty) {
            // Generates a random number from min to max
            const randNum = Math.floor(Math.random() * (max - min) + min);
            // If the numbers are to be unique
            if (uniqe) {
                if (!numbs[0].includes(randNum)) {
                    numbs[0].push(randNum);
                }
            } else {
                numbs[0].push(randNum);
            }
            // loops are counted up
            loops++;
        }


        for (let i = min; i < max; i++) {
            if (!numbs[0].includes(i)) {
                numbs[1].push(i);
            }

        }

        // Sorting
        if (sort === 'up') { numbs[0].sort((a, b) => a - b); } // Ascending
        if (sort === 'down') { numbs[0].sort((a, b) => b - a); } // Descending


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
console.log(randomNumber({ quanty: 20, sort: 'up' }).numbers.selected);