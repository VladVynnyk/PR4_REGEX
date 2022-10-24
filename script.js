document.write("<h2>Приклад 1<h2/>")
document.write('<br/>')
function testCellPhoneNumber(str)
{
    if(!str.length)
    document.write("Номер мобільного телефону задано некоректно");
    var cellPhoneTemplate = new RegExp("8?((063)|(093))[0-9]{7}");
    str = str.replace(cellPhoneTemplate,"");
    if(str != "")
    document.write("Номер мобільного телефону задано некоректно");
}
testCellPhoneNumber('063234234234')


document.write('<br/>')
document.write('<h2>Приклад 2<h2/>')

function testPhoneNumber(str)
{
    if(!str.length)
    document.write("Номер телефону задано некоректно");
    var phoneTemplate = new RegExp("2?[0-9]{6}");
    str = str.replace(phoneTemplate,"");
    if(str != "")
    document.write("Номер телефону задано некоректно");
}
testPhoneNumber('23 44444')

document.write('<br/>')
document.write('<h2>Приклад 3<h2/>')

function removeRedundantSpaces(text_for_Editing)
{
    var extraSpaces = new RegExp("[ ]{2,}","g");
    return text_for_Editing.replace(extraSpaces," ");
}
document.write(removeRedundantSpaces('some string     with    spaces'))


document.write('<br/>')
document.write('<h2>Приклад 4<h2/>')

function clearTextFromHTMLTags(textForEditing)
{
    var tagTemplate = new RegExp("</?[a-zA-Z]{1,}/?>","g");
    return textForEditing.replace(tagTemplate,"");
}

document.write(clearTextFromHTMLTags('<h1>Text with tags<h1/>'))

document.write('<br/>')
document.write('<h2>Приклад 5<h2/>')

function checkWholePositiveNumber(str) {
    if(!str.length) document.write("This is not valid whole positive number!");
    var re = new RegExp("[^0-9]", "g");
    /*оголошуємо об'єкт RegExp. Шаблоном є будь-який символ,
    відмінний від цифри. Шаблон шукатиметься по всьому рядку, оскільки він
    оголошений із прапорцем "g"*/
    str = str.replace(re,"a");
    /*шукаємо заданий шаблон по всьому рядку str і заміняємо його на
    символ "a". Тобто, усі символи в рядку, що не є цифрами, ми замінимо
    на символ "а" */
    
    if(str.indexOf("a") != -1)
    // якщо у рядку є символ "а", то рядок явно не є представленням натурального числа
    document.write("This is not valid whole positive number!");
    // тому видаємо повідомлення про те, що число задано некоректно
}

checkWholePositiveNumber('text 123 isdf ')


document.write('<br/>')
document.write('<h2>Приклад 6<h2/>')

function checkEmail(str) {
    if(!str.length)
    document.write("Incorrect e-mail!");
    /* Якщо рядок пустий, то він не є електронною адресою */
    
    var re = new RegExp("[a-zA-Z_.]+@{1}[a-zA-Z_.]+[\.]{1}[a-zA-Z_]+");
    
    str = str.replace(re, "");
    // замінимо знайдений перший екземпляр шаблону пустим рядком
    if(!str.length)
    /* якщо після заміни в рядку не лишиться символів, то записана
    коректна адреса, про що ми і повідомимо: */
    document.write('OK');
    else
    // інакше адреса неправильна
    document.write("Incorrect e-mail!");
}

checkEmail('some_email@email.com')


document.write('<h1>Індивідуальні завдання<h1/>')

function checkPhoneNumber(str){
    if(!str.length)
        document.write("Некоректний номер");
    var cellPhoneTemplate = new RegExp("8?((063)|(093)|(097)|(098)|(099)|(095)|(067)|(068)|(050))[0-9]{7}");
    str = str.replace(cellPhoneTemplate,"");
    if(str == "")
        document.write("Коректний номер");
    else
        document.write("Невідомий оператор");
}

document.write('<h2>Завдання 1<h2/>')
checkPhoneNumber('0974345234')

function checkIndex(str){
    if(!str.length || str.length != 5)
        document.write("Коректний індекс");
    var postIndexTemplate = new RegExp("(79)[0-9]{3}");
    str = str.replace(postIndexTemplate,"");
    if(str == "")
        document.write("Коректний індекс");
    else
        document.write("Некоректний індекс");
}

document.write('<h2>Завдання 2<h2/>')
checkIndex('79004')

function checkPhone(str){
    if(!str.length)
        document.write("Телефон некоректний");
    var cellPhoneTemplate = new RegExp("(032)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}");
    str = str.replace(cellPhoneTemplate,"");
    if(str != "")
        document.write("Телефон некоректний");
    else
        document.write("Телефон коректний");
}

document.write('<h2>Завдання 3<h2/>')
checkPhone('2977777')

function removeSpace(strWithSpace){
    document.write(strWithSpace.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
}

document.write('<h2>Завдання 6<h2/>')
removeSpace('      text with spaces   ')

function checkYear(str){
    str = str.toString();
    if(!str.length)
        document.write("Рік задано некоректно");
    if(/(19|20)\d{2}/.test(str))
        document.write("Рік в межах 1900 - 2099");
    else
        document.write("Рік не в межах 1900 - 2099");
}

document.write('<h2>Завдання 7<h2/>')
checkYear('2013')