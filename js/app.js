const today = new Date();
const days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const btnAdd = document.querySelector('#btnAdd');
const lista = document.querySelector('#lista');
lista.addEventListener('click', function (){btnDone(event)})


const daysObj = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

const monthsObj = {
    1: 'Enero',
    2: 'Febrero',
    3: 'Marzo',
    4: 'Abril',
    5: 'Mayo',
    6: 'Junio',
    7: 'Julio',
    8: 'Agosto',
    9: 'Septiembre',
    10: 'Octubre',
    11: 'Noviembre',
    12: 'Diciembre',
}
const monthDay = today.getDay(); /* Retorna dìa */
const month = today.getMonth()+1; /* Retorna mes */
const year = today.getFullYear();/* Retorna año */
const nameDay = daysObj[monthDay];/* Retorna nombre del dìa */
const nameMonth = monthsObj[month];/* Retorna nombre del mes */


const fecha = document.querySelector('#fecha');
fecha.innerHTML= `${nameDay}  ${monthDay} de ${nameMonth} del ${year}`;

function btnDone(event){
    alert(event.target);
}

btnAdd.addEventListener('click', (e)=>{
    let valueInput = document.querySelector('#inputToDo');
    if(valueInput === ''){
        window.alert('Ingresa algo en el input');
    }else{
        let html = `
                    <li class="flex justify-between items-center">
                        <p style="font-size: 20px;">${valueInput.value}</p>
                        <div class="flex" >
                            <i onclick="btnDone" class="bg-yellow-300 p-3 rounded mr-3 hover:bg-yellow-400 transition-all hover:cursor-pointer">
                                <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                            </i>
                            <i onclick="btnDelete" class="bg-yellow-300 p-3 rounded hover:bg-yellow-400 transition-all hover:cursor-pointer">
                                <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/></svg>
                            </i>
                        </div>
                    </li>
                    `
    const element = document.createElement('li');
    element.innerHTML = html;
    lista.appendChild(element);
    
    valueInput.value = '';
    }
});

function btnDone(e){
    let paragraph = e.target.parentNode.parentNode.parentNode.parentNode.firstElementChild;
    let item = e.target.parentNode.parentNode;
    console.log(item);
    paragraph.classList.toggle('line-through')
    
}




