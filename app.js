var sum; // state

//cache

var elOne = document.getElementById("boxOne");
var elTwo = document.getElementById("boxTwo");
var getSum = document.querySelector("span");

// listen!

document.querySelector('button').addEventListener('click', function() {
    sum += parseInt(elOne.value) + parseInt(elTwo.value);

    elOne.value = elTwo.value = '';
render()
});


// functionsss


function init () {
    sum = 0;
    
    render ();
    
    
}

function render () {
    
    getSum.textContent =  sum;
    getSum.style.color = sum >= 0 ? 'green' : 'red';
    
    
}

init ();







