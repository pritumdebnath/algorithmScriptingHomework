//19
const addTogether = (arg1, arg2) =>
    typeof arg1 !== 'number'
    ? undefined
    : arg2 === undefined
    ? num => typeof num !== 'number'
        ? undefined
        : arg1 + num
    : typeof arg2 !== 'number'
    ? undefined
    : arg1 + arg2;

//20
var Person = function(firstAndLast){
    let firstVar = firstAndLast.split(' ')[0];
    let lastVar = firstAndLast.split(' ')[1];

    this.getFullName = function(){
        return `${firstVar} ${lastVar}`;
    };

    this.getFirstName = function(){
        return firstVar;
    };

    this.getLastName = function(){
        return lastVar;
    };

    this.setFirstName = function(first){
        firstVar = first;
    };

    this.setLastName = function(last){
        lastVar = last;
    };

    this.setFullName = function(firstAndLast){
        firstVar = firstAndLast.split(' ')[0];
        lastVar = firstAndLast.split(' ')[1];
    }
};

var bob = new Person('Bob Ross');

//21
const GM = 398600.4418;
const eartRadius = 6367.4447;

const orbitalPeriod = arr => arr
    .map(obj => ({
        name: obj.name,
        orbitalPeriod: Math.round(
            2 * Math.PI * Math.sqrt(
                Math.pow(eartRadius + obj.avgAlt, 3) / GM
            )
        )
    }
    ));