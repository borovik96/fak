const fak = new Proxy(function() {}, {
    get() {
        return fak;
    },
    apply() {
        return fak;
    },
    construct() {
        return fak;
    }
});

export default fak;