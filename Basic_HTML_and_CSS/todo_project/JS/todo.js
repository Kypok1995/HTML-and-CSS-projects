function getTodo(){  //function to create a todo
    var todos = new Array; //create array of todo items
    var todos_str = localStorage.getItem('todo');// save a task in browser memory
    if (todos_str !==null){ //checks if input is not empty
        todos=JSON.parse(todos_str) // converts JSON into JS string
    }
    return todos
};

function add(){
    var task = document.getElementById('task').value; //creates a variable from input task
    var todos = getTodo();
    todos.push(task) //end a new task to the end of array
    localStorage.setItem('todo', JSON.stringify(todos)); //to convert a task into JSON string
    document.getElementById('task').value = "";
    show();

    return false
}

function show(){ // function to show tasks pernamentely at display
    var todos = getTodo();//set a task as variable
    var html = '<ul>'// sets every task into unordered list

    for (var i=0; i<todos.length; i++){
        // display a task in list and create an X button
        html += '<li>' + todos[i] + '<button class="remove" id=""' + i + '">x</button></li>';
    };
    html+='</ul>'//end a list
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');//to access button element
    for (var i =0; i < buttons.length; i++){
        buttons[i].addEventListener('click', remove);
    }
}

function remove () {
    var id = this.getAttribute('id'); //to find ID of current task and store at variable
    var todos = getTodo();
    todos.splice(id, 1); //to remove 1 item on the id position from array
    localStorage.setItem('todo', JSON.stringify(todos)); //to set item to local storage in form of JSON object
    show();

    return false;
}

// This displays inputed task than Add button is clicked
document.getElementById('add').addEventListener('click', add);

show(); //to keep open tasks pernametely at screen