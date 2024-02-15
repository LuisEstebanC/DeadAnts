
function DeadAnts(ants){
    if( ants === ''){
        throw new Error('The input cant be empty');
    }
    if(typeof ants === 'undefined' || ants === null){
        throw new Error('The input cant be null or undefined');
    }
    if(typeof ants !== 'string'){
        throw new Error('You must provide a string');
    }
return 'hello';
}
DeadAnts('3');
module.exports = DeadAnts;