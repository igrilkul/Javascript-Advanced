(function result() {
    let counter = 0;

    class Extensible {
        constructor() {
            this.id = counter;
            counter++;
        }

        extend(template) {
            for (let key in template) {
                if (template.hasOwnProperty(key)) {
                    let element = template[key];
                    if (typeof element === "function") {
                        Object.getPrototypeOf(this)[key] = template[key];
                    } else {
                        this[key] = template[key];
                    }
                }
            }
        }
    }
    return Extensible;
})();