(function() {
    console.log('%cThe matrix has you.', 'color: lime; font-size: 20px;');
    document.addEventListener('input', function(e) {
        if (e.target && e.target.name === 'goal') {
            history.replaceState({}, '', location.pathname + e.data);
            e.target.value = '';
        }
    })
    // document.addEventListener('keydown', function(e) {
    //     console.log(e);
    //     e.preventDefault();
    // }, false);
    // document.addEventListener('DOMContentLoaded', function(){
    //     var input = document.querySelector('input[name=goal]');
    //     input.oninput = function(e) {
    //         history.replaceState({}, '', location.pathname + e.data);
    //         input.value = '';
    //         console.log(e.data);
    //     }
    // });
})();