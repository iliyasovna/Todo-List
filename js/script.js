    const form = document.querySelector(".form");
    const input = document.querySelector("#input-todo");
    const btn = document.querySelector(".btn-submit");
    const todoList = document.querySelector("#todo-output");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
    })
    input.addEventListener("focus", function(e) {
    input.placeholder = "";
    });

    input.addEventListener("blur", function(e) {
    input.placeholder = input.placeholder;
    })

    btn.addEventListener ("click", function() {
        const myTodo = document.createElement("div");
        myTodo.classList.add ("todo-item");
        todoList.append(myTodo);
        myTodo.innerHTML = input.value;
        // console.log(input.value);
        input.value = "";
        myTodo.addEventListener("click", function(){
        myTodo.remove();
    });
});
