let age = prompt("Скільки тобі років?", "100");

if (!isNaN(age)) {
  let word;

  if (age % 10 === 1 && age % 100 !== 11) {
    word = 'рiк';
  } else if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)){
    word = 'роки';
  } else {
    word = 'рокiв';
  }

  console.log(age + ' ' + word);
} else {
  console.log('Введені значення не коректні');
}