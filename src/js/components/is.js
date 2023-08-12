import * as MAIN from '../home-work-11.js';

function winAddListener() {
  window.addEventListener('scroll', throttle(checkPosition, 250));
  window.addEventListener('resize', throttle(checkPosition, 250));
}

function checkPosition() {
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;
  const scrolled = window.scrollY;
  const threshold = height - screenHeight / 3;
  const position = scrolled + screenHeight;
  if (position >= threshold) {
    MAIN.searchData();
  }
}

function throttle(callee, timeout) {
  let timer = null;
  return function perform(...args) {
    if (timer) return;
    timer = setTimeout(() => {
      callee(...args);
      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
}

export { winAddListener, checkPosition };
