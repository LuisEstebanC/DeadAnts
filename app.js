
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

    let antParts = ants.split('ant').join('');

    function countAnts(char){
        return antParts.split(char).length -1;
    }
    
    return Math.max(countAnts('a'),countAnts('n'),countAnts('t'));


}
DeadAnts('ant');
module.exports = DeadAnts;