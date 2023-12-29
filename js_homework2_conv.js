let number = 5; 
let metrics = 'km'; //km, hours, kg.

switch (metrics) {
  case 'km':
    meters = number * 1000;
    console.log(number+' km -> '+meters+' m.');
    break;
  case 'hours':
    minutes = number * 60;
    console.log(number+' hours -> '+minutes+' min.');
    break;
  case 'kg':
    grams = number * 1000;
    console.log(number+' kg -> '+grams+' gr.');
    break;
  default:
    console.log('Not valid data '+metrics+'.');
}