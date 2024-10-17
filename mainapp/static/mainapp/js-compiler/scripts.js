document.getElementById('menu-toggle').addEventListener('click', function() {
    var submenu = document.getElementById('submenu');
    submenu.classList.toggle('active');
});

document.getElementById('close-menu').addEventListener('click', function() {
    var submenu = document.getElementById('submenu');
    submenu.classList.remove('active');
});
