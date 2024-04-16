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
    let max     = 1;//c'era 0 //10
    let item = array[0] ;// era vuota //11
    const elems = [];

    for (let i = 0; i < array.length; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }
            //cera j = i; 9
        for (let j = 0; j < array.length; j++) { //i++ 6
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
    console.log(alert);
//manca qualcosa qui ma non riesco a capire cosa

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;


  

    console.log(`${item} trovato ${max} volte`);
});