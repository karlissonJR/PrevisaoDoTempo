function capitalize(word) {

    lowerWords = ['de', 'dos', 'e', 'da', 'do', 'das', 'no', 'del']

    words = word.split(' ')

    capitalizedWord = ''
    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            capitalizedWord += ' '
        }

        if (lowerWords.indexOf(words[i]) === -1) {
            capitalizedWord += words[i][0].toUpperCase() + words[i].slice(1)
        } else {
            capitalizedWord += words[i][0].toLowerCase() + words[i].slice(1)
        }
    }

    //capitalizedWord =  word[0].toUpperCase() + word.slice(1)
    return capitalizedWord
}

function formatDate(date) {
    return date.split('-').reverse().join('/')
}