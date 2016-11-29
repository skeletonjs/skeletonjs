module.exports = function assert(found, expected) {
    if (found !== expected) {
        throw new Error('Expected ' + expected + ', but ' + found + ' found!');
    }
};
