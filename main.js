/*
Namber:
1
-2
0.1
-0.1
0
-0
Infinity 
NaN

BigInt

bool:
true
false

string:
""
''
``

undefined отсутствие null

Object
 Array
 Object
 function
 

//операторы
== приводит к одному типу
=== строгое равно(используем его)

//Тернарные -условие

true ?  "2" : "3"

//проверка типов данных
typeof

prompt-возвращение
*/



//1задание
/*
let Vm, Vkm, vibor;
vibor=prompt("Если хотите перевести из км/ч в м/с-введите 0, если из м/с в км/ч-1");
if (vibor==0){
    Vkm = prompt("Введите число в километрах в час")
    Vm = Vkm*1000/3600;
    console.log(Vm + 'м/с);
}
else if(vibor==1){
    Vm = prompt("Введите число в метрах в секунду")
    Vkm= Vm*3.6;
    console.log(Vkm+ 'км/ч');
}
*/

//2 задание
// let a,b,c,S,P,sum,pl;
// a=2;
// b=5;
// c=6;
// if (a+b>c && a+c>b && c+b>a) {
//     console.log('треугольник существует');
//     P=a+b+c;
//     pl=P/2;
//     S=Math.sqrt(pl*(pl-a)*(pl-b)*(pl-c))
//     console.log("Периметр="+P);
//     console.log("Площадь="+P);
//     console.log("Соотношение="+P/S);
// }
// else{
//     console.log('треугольник несуществует');
// }



//3 задание
// let i;
// i=prompt("Введите любое число");
// for (p=0; p<i; p++){
//     if (p%2==0) {
//         console.log(p+' buzz');
//     }
//     else if (p%5==0){
//         console.log(p+' fizz buzz');
//     }
//     else{
//         console.log(p+' fizz');
//     }
    
// }



//4задание
// let lain='';
// for (i=0; i<12; i++){
//     lain=lain+"\n";
//     for(j=-1; j<i; j++){
//     if(i%2==0){
//     lain=lain+"*";
//     }
//     else
//     lain=lain+"#";
// }
// }
// console.log(lain+'\n||');



//5задание
// let k;
// k=5;
// p = (prompt("Введите любое число"))
// while(k!=p){
//     if (p>k){
//         console.log("Ваше число больше");
//         p = prompt("Введите любое число");
//     }
//     if(isNaN(p)){
//         console.log("Необходимо ввести число");
//         p = prompt("Введите любое число");
//     }
//     else{
//         console.log("Ваше число меньше");
//         p = prompt("Введите любое число");
//     }
// }
// console.log("Число угадано");


//6задание
// let n, x, y
// n=prompt("Введите любое n");
// x=prompt("Введите любое x");
// y=prompt("Введите любое y");
// if(n%x!=0 && n%y!=0){
//     console.log("n= " + n + "," + "x= " + x + "," + "y= " + y + "," + " => false");
// }
// else{
//     console.log("n= " + n + "," + "x= " + x + "," + "y= " + y + "," + " => true");
// }


//7задание
// let k;
// k=prompt("Напишите номер месяца");
// switch(true) {
//     case(k > 0 && k<4):   
//     console.log('Месяц'+' k' + '=> 1 квартал')
//      break;
//      case(k > 3 && k<7):   
//      console.log('Месяц'+' k' + '=> 2 квартал')
//       break;
//       case(k > 6 && k<10):   
//     console.log('Месяц'+' k' + '=> 3 квартал')
//      break;case(k > 9 && k<13):   
//      console.log('Месяц'+' k' + '=> 4 квартал')
//       break;
// }











