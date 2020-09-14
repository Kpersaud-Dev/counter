let number = document.getElementById('number'),
  lowerCountBtn = document.getElementById('lower-count'),
  addCountBtn = document.getElementById('add-count');


let counter = 0;


// Lower Counter
lowerCountBtn.addEventListener('click', function () {
  counter--;
  number.innerHTML = counter;
});

// Add Counter
addCountBtn.addEventListener('click', function () {
  counter++;
  number.innerHTML = counter;
})


// function lowerCount() {
//   counter--;
//   console.log('clicked');
// }