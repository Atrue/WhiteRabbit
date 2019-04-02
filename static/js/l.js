(function() {
    console.log('%cThe matrix has you.', 'color: lime; font-size: 20px;');
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList && e.target.classList.contains('white-rabbit')) {
            if (e.target.innerText === 'XFK') {
                location.pathname = e.target.innerText.toLowerCase();
            } else {
                alert('So smart?');
            }
        }
    });
})();