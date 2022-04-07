'use strict';

/*
Вам нужно написать реализацию функции padString, которая принимает 4 аргумента:

строку
число, которое является длинной строки, которую мы хотим получить в результате выполнения функции
символ (строка длинной 1 символ) — которым дополнится строка, если это будет необходимо
параметр булеан (true или false), который определяет, добавлять символы слева или справа (по умолчанию справа)


Обязательно при написании функции необходимо проверить аргументы, которые мы передали, и если
каких-то аргументов нет, то вернуть из функции строку с ошибкой (return ‘some error’).
Сообщение с ошибкой должно быть разное в зависимости от того условия, по которому не прошла проверка.

Результат вызова функции нужно вывести в консоль — после завершения функции.

Например:
Вызов padString(‘hello’, 8, ‘*’) вернет строку hello***

А вызов padString(‘hello’, 6, ‘*’, false) вернет строку *hello

Вызов padString(‘hello’, 2) вернет ‘he’ — если число меньше, чем размер введенной строки,
 нужно строку обрезать при помощи метода substr


*/

let string = 'hello' ;
let number = 8;
let symbol = '*';
let boolType;
let result = null;


function padString(string,number,symbol,boolType = true){

    if (string ==='' ){
       return console.log('String value error - empty string') ;
    }

    if ( typeof string === 'number' ){
        return console.log('String value error - entered number') ;
    }

    if (string === undefined){
        return console.log('String value error - value can`t be undefined') ;
    }

    if ( typeof number !== 'number'){
        return console.log('Number value error - value must be a number') ;
    }

    if (isNaN(number)){
        return console.log('Number value error - value can`t be a NaN') ;
    }

    if (symbol ===''){
        return console.log('Symbol value error - empty string') ;
    }

    if (typeof symbol !== 'string'){
        return console.log('Symbol value error - type of variable must be a string') ;
    }

    if (typeof boolType !== 'boolean'){
        return console.log('BoolType value error - value must be a true/false only') ;
    }



    if (number < string.length){
        result = string.substr(0,number);
        return console.log(result);
    } else {

        let kolvoSymbolov = number - string.length;
        //3 (number of symbols)

        symbol = symbol.repeat(kolvoSymbolov);

        if (boolType === true){
            result = `${string}`+`${symbol}`;
            return console.log(result);
        } else {
            result = `${symbol}`+`${string}`;
            return console.log(result);
        }

    }

}

padString(string,number,symbol,boolType);