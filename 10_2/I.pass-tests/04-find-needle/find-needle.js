function findNeedle(words, findWord) {
    const lookForWord = words.findIndex(word => word === findWord);
    return lookForWord
}

module.exports = findNeedle;
