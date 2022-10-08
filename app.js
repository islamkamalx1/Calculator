let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');

buttons.forEach(btn => btn.addEventListener('click', displayNum));

equal.addEventListener('click', equalHandler);

clear.addEventListener('click', clearScreen);

function displayNum(e) {
  let value = e.target.dataset.num;
  screen.value += value;
}

function equalHandler(e) {
  if (screen.value === '') {
    screen.value = '';
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
}

function clearScreen(e) {
  screen.value = '';
}