function ServiceObject() {

    // do we have an existing instance?
    if (typeof ServiceObject.instance === "object") {
        return ServiceObject.instance;
    }

    // proceed as normal
    this.count = 0;

    this.add = function (n) {
        this.count += n;
    }

    this.sub = function (n) {
        this.count -= n;
    }

    // cache
    ServiceObject.instance = this;

    // implicit return:
    // return this;
}


function logCounters() {
    console.log({ a: singletonModuleObj1.count, b: singletonModuleObj2.count });
}

const singletonModuleObj1 = new ServiceObject();
const singletonModuleObj2 = new ServiceObject();
logCounters();

// add to the obj1
singletonModuleObj1.add(1);
logCounters();

// sub to the obj2
singletonModuleObj2.sub(2);
logCounters();

console.log(singletonModuleObj1 === singletonModuleObj2);