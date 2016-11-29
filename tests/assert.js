module.exports = function assert(found, expected) {
    if (Array.isArray(found)) {
        found = found.join();
    }
    if (Array.isArray(expected)) {
        expected = expected.join();
    }
    if (found !== expected) {
        throw new Error('Expected ' + expected + ', but ' + found + ' found!');
    }
};
