const switchInput = document.getElementById('switch');
const styles = document.documentElement.style;

const lightTheme = {
  '--gray': '#5f616d',
  '--cardGray': '#f0f3fa',
  '--lightGray': '#f8f9fe',
  '--cardTitle': '#6f717e',
  '--baseBackground': '#f0ffff',
  '--baseColor': '#1d2029',
  '--switchSpinner': '#f0ffff',
  '--switch': '#5f616d',
};

const darkTheme = {
  '--cardGray': '#252b43',
  '--baseBackground': '#1d2029',
  '--baseColor': '#f0ffff',
  '--gray': '#8088ad',
  '--lightGray': '#1d2029',
  '--cardTitle': '#8088ad',
  '--switchSpinner': '#282943',
  '--switch': 'linear-gradient(to right, #4796d2 0%, #37ce8f 100%)',
};

const changeTheme = (theme) => {
  const customStyles = Object.keys(theme);
  for (const style of customStyles) {
    styles.setProperty(style, theme[style]);
  }
};

switchInput.addEventListener('click', (event) => {
  event.target.previousElementSibling.checked
    ? changeTheme(lightTheme)
    : changeTheme(darkTheme);
});
