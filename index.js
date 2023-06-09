//construcor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}
//displa constructore
function Display() {}

//add method to display prototype
Display.prototype.add = function (book) {
  tableBody = document.getElementById("tableBody");
  let uiString = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    </tr>`;
  tableBody.innerHTML += uiString;
};

//implimenet the clear function
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

//implimenet the validate function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message :</strong>${displayMessage}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>`;
                        setTimeout(()=>{
                                message.innerHTML = '';
                        }, 2000);
};

//add submit event listener to librayForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", librabyFormsubmit);
function librabyFormsubmit(e) {
  console.log("you submited");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show('Success', ' Your book has been successfully added');
  } else {
    //show error to the user
    display.show('denger', 'Sorry you can add this book');
  }

  e.preventDefault();
}


//to-dos
// 1. store all the data to the localStorage
// 2. give anothe colunmmn as an option to delete the book
// 3. add a scroll bar to the view