const temaButonu = document.getElementById('change-theme-btn');

// checking the local storage
const prefTheme = localStorage.getItem('theme');

// if theme is saved by dark, apply it
if (prefTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

// button event
temaButonu.addEventListener('click', () => {
  const mevcutTema = document.documentElement.getAttribute('data-theme');

  if (mevcutTema === 'dark') {
    // changing the theme light and saving it
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('tema', 'light'); 
  } else {
    // changing the theme dark and saving it
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('tema', 'dark'); 
  }
});
