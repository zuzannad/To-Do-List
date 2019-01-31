class Task {
    constructor() {


    }
    addTask(e, list, li, input) { // po kliknięciu na przycisk, doda się wpisany w input.value element 
        e.preventDefault();
        list.appendChild(li);
        li.innerHTML = `<i class="fas fa-asterisk"></i> ${input.value}<i class="fas fa-check"></i><i class="far fa-trash-alt"></i>`;
    }

    removeTask(e) {
        e.target.parentNode.remove();
    }
}