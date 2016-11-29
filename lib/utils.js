export default {
    noop: () => {},

    /**
     * Returns diff of two arrays in the following format:
     * [<keys needed to remove>, <keys needed to add>]
     * @param  {Array.<String>} prev
     * @param  {Array.<String>} next
     * @return {Array.<Array>}
     */
    getDiff: (prev, next) => {
        if (prev && next) {
            if (prev.join() === next.join()) {
                return [null, next];
            }
            return [
                prev.filter((key) => next.indexOf(key) === -1),
                next
            ];
        }
        return [prev, next];
    }
}
