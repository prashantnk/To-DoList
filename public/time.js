function time() {
    let today = new Date();
    document.querySelector('h1').textContent = today.getSeconds();
    setTimeout(time, 1000);
}
time();