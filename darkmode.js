//unsure what I have missed, but can not get it to function
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    document.body.classList.add("dark");
};

const removeDarkMode = () => {
    document.body.classList.remove("dark");
};

darkModeToggle.addEventListner('click', () => {
console.log('test');
//if(dark !== 'enable'){
    //enableDarkMode();
//}
});
