

const userDrink = prompt('Виберіть напій: \n1 - Чай \n2- Кава \n3 - Сік \n4 - Вода \n5 - Лимонад');
debugger;

switch (userDrink) {
    case '1':
        console.log('Чай');
        break;
    case '2':
        console.log('Кава');
        break;
    case '3':
        console.log('Сік');
        break;
    case '4':
        console.log('Вода');
        break;
    case '5':
        console.log('Лимонад');
        break;
    default:
        console.log('Неизвестно');
}