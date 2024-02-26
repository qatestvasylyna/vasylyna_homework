//дз1
var str = "Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)";
// або - ||
//var str = "Регулярний, який допоможе, і не містяти літери";

var re = /^(?!.*[Аа]).{6,}$/;

console.log(re.test(str));


//дз2
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var acceptableEmails = arr.filter(function(obj) {
    return /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:yahoo\.com|gmail\.com)$/.test(obj.email);
}); //

console.log(acceptableEmails);

