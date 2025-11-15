const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const tbody = document.getElementById("todo-body");
const alerta = document.getElementById("alerta");

let tareas = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = input.value.trim();

  if (!valor) return;

  const id = tareas.length + 1
  tareas.push({ valor, id });
  input.value = "";
  alerta.innerHTML = `
    <div class="alert alert-success" role="alert">
      Agregada exitosamente
    </div>
  `;

  mostrar();
});

const mostrar = () => {
  tbody.innerHTML = "";

  tareas.forEach((ele, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <th scope="row">${index + 1}</th>  
      <td>${ele.valor}</td>
      <td><button class="btn btn-danger btn-sm eliminar-btn" data-id="${ele.id}">
          Eliminar
      </button></td>
    `;

    tbody.appendChild(tr); 
  });
};


tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar-btn")) {
    const id = Number(e.target.dataset.id);
    eliminar(id);
  }
});

const eliminar = (id) => {
  tareas = tareas.filter((t) => t.id !== id);

  alerta.innerHTML = `
    <div class="alert alert-warning" role="alert">
      Tarea eliminada
    </div>
  `;

  setTimeout(() => {
    alerta.innerHTML = "";
  }, 2000);

  mostrar();
};
