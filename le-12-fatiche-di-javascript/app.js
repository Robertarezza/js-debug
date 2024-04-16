const input = document.querySelector('.form-control');
const array = []; //null 1

input.addEventListener('keypress', function(event) {
//mancano = 2
    if (event.code !== 'Enter') return;
    if (input.value === '')     return;

    array.push(input.value); //array.add(input.value); 3 

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = input.value;  //li.Text 5
    document.querySelector('ul').appendChild(li); //push 4

    let counter = ""; //"" 
    let max     = 0;//1
    let item  ;// array[0]
    const elems = [];

    for (let i = 0; i < array.length; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) { //i++ 6
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) {
                    max  = counter;
                    item = array[i];
                }
            }
        }
       counter = 0;
    }

    const alert = document.getElementsByClassName('alert')[0]; //[0] 7

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');
    
    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    

    console.log(`${item} trovato ${max} volte`);
});