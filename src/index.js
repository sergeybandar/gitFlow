// const { getMemory } = require('memory.js');
// console.log(getMemory());

function renderList(data) {
    const list = document.getElementById('list');
    list.innerText = '';
    data.forEach(item => {
        list.insertAdjacentHTML('beforeend', `
            <li>
                <p>${item.title}</p>
                <p>Memory - ${item.memory}</p>
                <p>Price - ${item.price}</p>
                <button>BUY</button>
            </li>
    `)
    });
};

function getXhr(path) {
    const cont = new XMLHttpRequest();
    cont.open('GET', path, true);
    cont.onload = function() {
        const data = JSON.parse(this.responseText);
        console.log(data);
        renderList(data);
    }
    cont.send(null);
}


getXhr('data.json')