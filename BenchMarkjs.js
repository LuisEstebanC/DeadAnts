var Benchmark = require('benchmark');


const suite = new Benchmark.Suite;
const DeadAnts = require('./DeadAntsOldApp');
const DeadAntsNew = require('./DeadAntsNewApp');


suite.add('DeadAntsOldApp', () => {
    const input = "antantantaantant".repeat(10000);
    DeadAnts(input);
})


suite.add('DeadAntsNewApp', () => {
    const input = "antantantaantant".repeat(10000);
    DeadAntsNew(input);
})

