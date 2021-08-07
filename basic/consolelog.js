// Following along with Fireship
// https://youtu.be/Mus_vwhTCq0

const foo = { name: 'tom', age: 30, nervous: false }
const bar = { name: 'dick', age: 40, nervous: false }
const baz = { name: 'harry', age: 50, nervous: true }

// not so great
// console.log(foo);
// console.log(bar);
// console.log(baz);

// better
console.log('%c My friends', 'color: orange; font-weight: bold;');
console.log({ foo, bar, baz });


// --- Console Time ---
console.time('looper')

let i = 0;
while(i < 1000000) { i++ }

console.timeEnd('looper')


// --- Stack trace logs ---

const deleteMe = () => console.trace('bye bye database')

deleteMe()
deleteMe()
