let tareaS = document.querySelector("#works");
let addBtn = document.querySelector("#addBtn");
let span1 = document.querySelector("#span1");
let span2 = document.querySelector("#span2");

const tareas = [
    { codigo: 689, job: "Limpiar la casa" },
    { codigo: 777, job: "Lavar la loza" },
    { codigo: 565, job: "Pasear al perro" }
];

function mostarTarea(tarea) {
    let html = `
    <div class="Tareas" id="works">
    <ul>
        <p>${tarea.codigo}</p>
        <p>${tarea.job}</p>
        <p><input type="checkbox" class = "check"  onchange = "check()" name="" id=""></p>
        <p><input type="button" onclick="borrar(${tarea.codigo})" value="x"></p>
    </ul>
    </div>`;
    tareaS.innerHTML += html;
}

tareaS.innerHTML = " ";

let contador0 = 0;
for (let tarea of tareas) {
    mostarTarea(tarea);
    contador0++;
}
span1.innerHTML = contador0;

function borrar(codigo) {
    const index = tareas.findIndex((ele) => ele.codigo == codigo)
    tareas.splice(index, 1)
    tareaS.innerHTML = " ";
    contador0 = 0
    for (let tarea of tareas) {
        mostarTarea(tarea);
        contador0++;
    }
    span1.innerHTML = contador0;
}



addBtn.addEventListener("click", () => {
    const nuevaTarea = newJob.value
    tareas.push({ codigo: Date.now() + 1, job: nuevaTarea })
    newJob.value = ""
    let contador = 0;
    tareaS.innerHTML = "";

    for (let tarea of tareas) {
        mostarTarea(tarea);
        contador++;
    }
    span1.innerHTML = contador;

})

function check() {
    let contador1 = 0;
    contador1 = document.querySelectorAll(".check:checked").length;
    span2.innerHTML = contador1;
}





