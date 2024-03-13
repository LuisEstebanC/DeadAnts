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

.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));

    let output = "";
    let outputBody = "";
    output += "|     Method      |       Runtime |     N |       Mean |     Error |    StdDev | Ratio |\n";
    output += "|-----------------|---------------|-------|------------|-----------|-----------|-------|\n";
    this.forEach(result => {
    
        outputBody += `| ${result.name} | ${result.hz} | ${result.count} | ${(result.stats.mean * 1000).toFixed(3) } us | ${result.stats.rme.toFixed(4)} us | ${result.stats.deviation.toFixed(4)} us | ${(result.stats.mean / this[0].stats.mean).toFixed(2)} |\n`;
    });
    console.log(output + outputBody);
})

.run({ 'async': true });