


function stripInput(input) {
    return input.match(/[(){}\[\]]/g);
}

module.exports = {
    stripInput
}


