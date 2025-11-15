const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const tbody = document.getElementById("todo-body");
const alerta = document.getElementById("alerta");

let tareas = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = input.value.trim();

  if (!valor) return;

  const id = Date.now();
  tareas.push({ valor, id });
  input.value = "";


   mostrar(tareas);
});

const mostrar = (tareas) => {
      console.log(tareas)


tareas.map((ele, index)=>{
    console.log(ele.valor, index)
})
//   tareas.forEach((ele, index) => {
//     console.log(ele.value, index)
//     // const tr = document.createElement("tr");

//     // tr.innerHTML = `
//     //   <th scope="row">${index + 1}</th>  
//     //   <td>${ele.valor}</td>
//     //   <td><button class="btn btn-danger btn-sm eliminar-btn" data-id="${ele.id}">
//     //       Eliminar
//     //   </button></td>
//     // `;

//     // tbody.appendChild(tr); 
//   });
};


