const fak = noop = new Proxy(function() {}, {
    get() {
        return noop;
    },
    apply() {
        return noop;
    },
    construct() {
        return noop;
    }
});

export default fak;