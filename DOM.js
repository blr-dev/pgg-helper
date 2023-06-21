let timer;

// OnLaunch
if (isStringInDocument() === 1) {
  timer = setTimeout(timerRefresh, 800 + randomRange(100, 2000));
} else {
  timer = setTimeout(timerCheckAgain, 6000 + randomRange(1, 300));
}

function isStringInDocument() {
  const textContent = document.documentElement.textContent || document.documentElement.innerText;
  if (
    textContent.includes('towar jest sukcesywnie') ||
    textContent.includes('jednoczesnych transakcji zakupu') ||
    textContent.includes('od ----,-- zł') ||
    textContent.includes('pgg.pl<i class=')
  ) {
    return 1;
  }
  return 0;
}

function timerRefresh() {
  clearTimeout(timer);
  window.location.reload();
}

function timerCheckAgain() {
  clearTimeout(timer);
  if (isStringInDocument() === 1) {
    window.location.reload();
  }
}

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
