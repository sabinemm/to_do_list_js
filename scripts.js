const clear = document.querySelector(".clear") //selecting clear button 

const dateElement = document.getElementById("date")

const list = document.getElementById("list")

function addToDo(toDo) {
    const text = <li class="item">
        <i class="far fa-circle" job="complete"></i>
        <p class="text "> ${toDo} </p>
        <i class="far fa-trash-alt" job="delete"></i>
    </li>

    const position = "beforeend"

    list.insertAdjacentHTML(position, text);
}

document.addEventListener("keyup", function (event)) {
    if (event.keycode == 13) {
        const toDo = input.value;
        if (toDo) {
            addToDo(toDo);
        }
        input.value = ""
    }
}

let LIST = [{}, {}, ...];

let id = 0;

LIST[0] ->

{
    name: "Drink Coffee",
    id: 0,
    done: false,
    trash: false
}

LIST[0] ->

{
    name: "Workout",
    id: 1,
    done: true,
    trash: false
}
