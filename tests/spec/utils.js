import assert from '../assert.js';
import utils from '../../lib/utils.js';

/**
 * [
 *   input: [prev, next]
 *   output: [remove, add]
 * ]
 * @type {Array}
 */
const tests = [
    [
        [null, ['a', 'b', 'c']],
        [null, ['a', 'b', 'c']]
    ],
    [
        [['a', 'b', 'c'], null],
        [['a', 'b', 'c'], null]
    ],
    [
        [['a', 'b', 'c'], ['a', 'b', 'c']],
        [null, ['a', 'b', 'c']]
    ],
    [
        [['a', 'b', 'c'], ['a', 'd', 'e']],
        [['b', 'c'], ['a', 'd', 'e']]
    ],
    [
        [['a', 'b', 'c'], ['d', 'e']],
        [['a', 'b', 'c'], ['d', 'e']]
    ]
];

describe('getDiff', () => {
    tests.forEach((test, i) => {
        it('#' + i, function() {
            const diff = utils.getDiff(test[0][0], test[0][1]);

            assert(diff[0], test[1][0]);
            assert(diff[1], test[1][1]);
        });
    });
})
