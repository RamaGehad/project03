let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
function updateDisplay()
 {
  countDisplay.textContent = count;
  countDisplay.classList.remove('positive', 'negative');
  if (count > 0) 
   {
    countDisplay.classList.add('positive');
   } 
  else if (count < 0) 
   {
    countDisplay.classList.add('negative');
   }
 }
function increment() {
  count = count + 1;
  updateDisplay();
}
function decrement()
 {
  count = count - 1;
  updateDisplay();
}
function reset()
 {
  count = 0;
  updateDisplay();
}
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);


