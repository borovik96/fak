const fak = new Proxy(function() {}, {
    get(target, prop) {
        if (prop === Symbol.toPrimitive) return () => '__fak-mock__';
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