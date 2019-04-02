(function() {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList && e.target.classList.contains('white-rabbit')) {
            location.pathname = 'hello';
        }
    });
})();