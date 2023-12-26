'use strict';
/*Задача 3. Ширина елемента
ВИКОНУЙ ЦЕ ЗАВДАННЯ У ФАЙЛІ task-3.js
Оголоси функцію getElementWidth,
 яка очікує три параметри,
  значення яких будуть задаватися під час її виклику:
   • content— перший параметр, ширина контенту
   • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін
   • border — третій параметр, значення товщини бордера для кожної зі сторін
Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.

Доповни код функції так, щоб вона повертала число —загальну ширину елемента. При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

Залиш цей код для перевірки ментором.
*/
function getElementWidth(content, padding, border) {
    content = Number.parseInt(content);
    padding = Number.parseInt(padding);
    border = Number.parseFloat(border);
    return content + padding * 2 + border * 2;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
