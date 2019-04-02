(function() {
    console.log('%cThe matrix has you.', 'color: lime; font-size: 20px;');
    document.addEventListener('DOMContentLoaded', function(){
        var input = document.querySelector('input[name=goal]');
        input.oninput = function() {
            if (input.value === 'white rabbit') {
                location.pathname = 'goal';
            }
        }
    });
})();