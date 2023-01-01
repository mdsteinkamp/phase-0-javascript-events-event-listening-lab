function addingEventListener() {
    const input = document.getElementById('button');
    function clickAlert() {
        alert('I Was Clicked!');
    }
    input.addEventListener('click', clickAlert);
}

