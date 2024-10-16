document.getElementById('envelope').addEventListener('click', function() {
    this.classList.add('open');
    document.getElementById('invitation').classList.add('show');
    document.getElementById('overlay').classList.add('show');
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('envelope').classList.remove('open');
    document.getElementById('invitation').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
});