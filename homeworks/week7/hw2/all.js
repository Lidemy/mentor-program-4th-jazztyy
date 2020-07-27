const questions = document.querySelector('main ul');

function showDetail(e) {
  if (e.target.nodeName === 'H2') {
    e.target.parentNode.childNodes[3].classList.toggle('none');
    setTimeout(() => {
      e.target.parentNode.childNodes[3].classList.toggle('show');
    }, 500);
  } else if (e.target.nodeName === 'SPAN') {
    e.target.parentNode.parentNode.childNodes[3].classList.toggle('none');
    setTimeout(() => {
      e.target.parentNode.parentNode.childNodes[3].classList.toggle('show');
    }, 500);
  }
}

questions.addEventListener('click', showDetail, true);
