/** Module pattern */
const SingletonModule = (function () {
    var instance;

    // this is the "class" all props and methods goes in here.
    function ServiceObject() {
        this.count = 0;

        this.add = function (n) {
            this.count += n;
        }

        this.sub = function (n) {
            this.count -= n;
        }

        return this;
    }

    function createInstance(isSingle = true) {
        if (!instance) {
            instance = new ServiceObject();
        }
        return isSingle ? instance : new ServiceObject();
    }

    return createInstance;
})();

function logCounters() {
    console.log({ a: singletonModuleObj1.count, b: singletonModuleObj2.count });
}

const singletonModuleObj1 = new SingletonModule();
const singletonModuleObj2 = new SingletonModule();
logCounters();

// add to the obj1
singletonModuleObj1.add(1);
logCounters();

// sub to the obj2
singletonModuleObj2.sub(2);
logCounters();

console.log(singletonModuleObj1 === singletonModuleObj2);