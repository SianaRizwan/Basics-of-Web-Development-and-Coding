console.log("Hello World")
var fn = () => 'response';
var a: number;
a=10;
var b: boolean;
b= true;
var myArr : number[];
myArr = [];
myArr = [1,2,3];
//ERROR -> myArr = ['Boom']/1;
myArr.push(5);
a = myArr.pop();

//concept of ts tuple -> create something like an array with multiple types
var myArr1 : [number, boolean];
myArr1 = [6,true];