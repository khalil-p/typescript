"use strict";
// type userName = string | number;
// type funct = (n:number, m:number) => number;
// let d:userName = "khalil";
// let e:userName = 30;
// const a:number = 24;
// console.log(a)
// const b:string = "pathan";
// console.log(b);
// let c:string | number ; 
// c=134;
// console.log("c : ",c);
// const func:funct = (m,n)=>{
//     console.log("n : ",n);
//     console.log("m : ",m);
//     return m+n;
// }
// type Obj = {
//     height:number,
//     weight:number,
//     gender?:boolean
// }
// const obj1:Obj = {
//     height:123,
//     weight:123,
//     gender:true
// }
// const obj2:Obj = {
//     height : 456,
//     weight: 527,
// }
// interface Obj {
//     height: number,
//     weight: number,
//     gender?: boolean
// }
// type functype = (n:number,m:number) =>void;
// interface newObj extends Obj {
//     scholar : string
//     func : functype
// }
// const gigi:newObj = {
//     height:168,
//     weight: 69,
//     scholar: "Yes",
//     func: (n,m) => {
//         console.log(n*m);
//     }
// }
// gigi.func(20,10);
// Functions...AbortController[Symbol]...............AbortController[Symbol].
// type FuncType = (n:number, m:number, l?:number) => number | string;
// const func:FuncType =(n,m,l) =>{
//     if(typeof l === "undefined") return "l is not defined";
//     return (n*m*l);
// }
// func(25,23)
// type FuncType = (n:number, m:number, l?:number) => number;
// const func:FuncType =(n,m,l) =>{
//     if(typeof l === "undefined") return n*m;
//     return (n*m*l);
// }
// func(25,23)
// ...AbortController...AbortController[Symbol]...AbortController[Symbol].........
// default paramenter
// type FuncType = (n:number, m:number, l?:number) => number;
// const func:FuncType =(n,m,l=20) =>{
//     return (n*m*l);
// }
// func(25,23)
// ...AbortController.....................
// if we write in same line then we do not need to  make it optional
// const func =(n:number, m:number, l:number = 20):number =>{
//     return (n*m*l);
// }
// func(25,23)
// // REST OPERATOR
// type FuncType = (...n:number[]) => number[]
// const func:FuncType =(...n) => {
//     return n;
// } 
// func(32,33,34,35,36,37)
// Function with function keyword 
// type FuncType = (...n:number[]) => number;
// const lol:FuncType = function lol (n:number) {
// return n;
// }
