

// alert( null || 2 || undefined ); // 2
// alert( alert(1) || 2 || alert(3) ); // 1 2
// alert( 1 && null && 2 ); // 2
// alert( alert(1) && alert(2) ); // alert 2
// alert( null || 2 && 3 || 4 ); // 4




// let age = prompt ('Сколько вам лет')
// if (age >= 14) {
   // console.log ('разрешено');
// } 
// else if (age < 14) {
    //console.log ('нужно подрасти');
// } else {
    // console.log ('запрещено'); 
// }

 // if (age <= 90) {
    // console.log ('разрешено');
// } else if (age > 90) {
    // console.log ('уже поздно');
// } else {
    // console.log ('запрещено'); 
// }




// Первый оператор if выполнится, потому что значение -1 является истинным. Алерт выведет 'первый'.

// Второй оператор if не выполнится, потому что -1 истинно, а 0 ложно. Условие -1 && 0 будет равно 0, что является ложным.

// Третий оператор if выполнится, потому что значение null является ложным, а -1 && 1 равно 1, что является истинным. Условие null || 1 будет равно 1, что также является истинным. Алерт выведет 'третий'.




let user = prompt("Введите логин", ""); '', null
if (!user) {
    alert("Отменено");
}   if (user ! == 'Admin') {
    if (!password) {
        alert("Отменено");
    } else if (password === "Я главный") {
        alert ('Здравствуйте')
    } else {
        alert("Неверный пароль");  
    }
    
}    else {
    alert ("Я вас не знаю")
}

