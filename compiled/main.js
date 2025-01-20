"use strict";
// UYGA VAZIFA
// 1-topshiriq
// Promises va Promise Metodlari
// function fetchData(error) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (error) {
//                 reject("Ma'lumotni olishda xatolik yuz berdi");
//             } else {
//                 resolve("Ma'lumot muvaffaqiyatli olindi");
//             }
//         }, 2000);
//     });
// }

// // Funksiyani chaqirish
// fetchData(false)
//     .then((message) => console.log(message))
//     .catch((err) => console.error(err));

// fetchData(true)
//     .then((message) => console.log(message))
//     .catch((err) => console.error(err));

// 2-topshiriq
// const promise1 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise 1"), 1000);
// });

// const promise2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise 2"), 3000);
// });

// const promise3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise 3"), 2000);
// });

// Promise.all([promise1, promise2, promise3])
//     .then((results) => console.log(results))
//     .catch((err) => console.error(err));

// 3-topshiriq

// function getUserData() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Foydalanuvchi ma'lumotlari yuklandi"), 2000);
//     });
// }

// async function main() {
//     const data = await getUserData();
//     console.log(data);
// }

// main();

// 4-topshiriq
// function fetchAPI(success) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (success) {
//                 resolve("API muvaffaqiyatli bajarildi");
//             } else {
//                 reject("API chaqiruvida xatolik");
//             }
//         }, 2000);
//     });
// }
// async function callAPI() {
//     try {
//         const result = await fetchAPI(true);
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
    
//     try {
//         const result = await fetchAPI(false);
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// callAPI();




// 1-masala calculateArea nomli funksiya yarating.Funksiya ikkita parametr qabul qiladi:width (son turida)height (son turida) Ushbu funksiya to'g'ri to'rtburchakning yuzasini hisoblab qaytarishi kerak. Funksiyani chaqirib, natijani konsolga chiqaring.
// function test(width:number , height: number,) {
//     let res: number = width * height
//     return res
// }
// let javob = test(15,7)
// console.log(javob);
// 2-masala greet nomli funksiya yarating. Funksiya ikkita parametr qabul qiladi: name (matn turida) greeting (matn turida, default qiymati "Hello") Funksiya greeting va name ni birlashtirib xabarni qaytarishi kerak. Default qiymatni ishlatgan va ishlatmagan holda funksiyani chaqirib, natijani konsolga chiqaring.
// function great(name:string, greeting: string = "Hello") {
//     let res : string = name + greeting
//     return res;
// }
// let javob = great("Hoji ")
// let javob2 = great("Hoji " , "hayr")
// console.log(javob);
// console.log(javob2);
// 3-topshiriq 3. Overloading Yaratish combine nomli funksiya yarating. Funksiya ikkita parametr qabul qiladi: Agar ikkala parametr matn bo'lsa, ularni birlashtirib qaytaradi. Agar ikkala parametr son bo'lsa, ularning yig'indisini qaytaradi. Funksiya uchun overload aniqlang va har ikkala holatda funksiyani chaqirib natijalarni konsolga chiqaring.
// function combie(a: number, b: number): number;
// function combie(a: string, b: string): string;
// function combie(a: string | number , b: string | number) {
//     if ( typeof a === "string" && typeof b === "string" ) {
//         return  a + b
//     }else if (typeof a === "number" && typeof b === "number") {
//         return  a + b
//     }
//     throw new Error("Argumentlar turi mos emas");
// }
// console.log(combie(10, 20)); 
// console.log(combie("Hello, ", "World!"));
//  4-topshiriq wrapInArray nomli generic funksiya yarating.Funksiya bitta parametr qabul qiladi va uni massiv ichida qaytaradi. Turli turdagi qiymatlarni (string, number, va hokazo) massiv ichida qaytaradigan holatda funksiyani chaqiring va natijalarni konsolga chiqaring.
// function wrapInArray<T>(value: T): T[] {
//     return [value];
// }
// const number = wrapInArray(42);
// const string = wrapInArray("Hello");
// const boolean = wrapInArray(true);
// const object = wrapInArray({ name: "Alice", age: 25 });
// const array = wrapInArray([1, 2, 3]);
// console.log(number);  
// console.log(string);  
// console.log(boolean); 
// console.log(object);  
// console.log(array);   
