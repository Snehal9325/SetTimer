
const closeModal = document.querySelector('.close');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


function startTimer(minutes) {
  const modal = document.getElementById('modal');
  const timerElement = document.getElementById('timer');
  modal.classList.add('show');

  let time = minutes * 60;
  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerElement.innerText = `${minutes < 5 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (time <= 0) {
      clearInterval(interval);
      alert('Time is up!');
      closeModal();
    }
    time--;
  }, 1000);
}

function ten(minutes) {
    const modal = document.getElementById('modal');
    const timerElement = document.getElementById('timer');
    modal.classList.add('show');
  
    let time = minutes * 60;
    const interval = setInterval(() => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      timerElement.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      
      if (time <= 0) {
        clearInterval(interval);
        alert('Time is up!');
        closeModal();
      }
      time--;
    }, 1000);
}

function fif(minutes) {
    const modal = document.getElementById('modal');
    const timerElement = document.getElementById('timer');
    modal.classList.add('show');
  
    let time = minutes * 60;
    const interval = setInterval(() => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      timerElement.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      
      if (time <= 0) {
        clearInterval(interval);
        alert('Time is up!');
        closeModal();
      }
      time--;
    }, 1000);
}
/*function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');
}*/
