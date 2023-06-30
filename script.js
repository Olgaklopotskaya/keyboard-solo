const words = ["стекло", "чашка", "вино", "река", "окно", "вагон", "ночь", "улица", "фонарь", "лицо", "рука", "нога", "машина", "ребенок", "овощи", "фрукты"]

let wordForPeople = words[Math.floor(Math.random() * words.length)];

let wordContainer = document.querySelector(".word");

let markup = wordForPeople.split("").map(item => `<span>${item}</span>`).join('');
wordContainer.innerHTML = markup;

// Ищи спаны внутри word, чтобы случайно не захватить ненужные
const elements = document.querySelectorAll('.word span');
let i = 0;
document.addEventListener("keydown", function(event) {
    if (event.key === wordForPeople[i]) {
        // Лучше в данном случае использовать className, чтобы стереть предыдущий класс, если пользователь уже провобовал вводить эту букву
        elements[i].className = "c"; //green
        i++
    } else if (event.key != wordForPeople[i]) {
        elements[i].className = "w"; //red
    }

});