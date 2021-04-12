function* helloWorldGenerator(){
    yield 'hello';
    yield 'word';
    return 'ending'
}
var hw = helloWorldGenerator();
console.log(hw)