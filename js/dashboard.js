let books = JSON.parse(localStorage.getItem("Books"))  //Calling the items from local storage
  ? JSON.parse(localStorage.getItem("Books"))
  : [
    
    ];

// READ BOOKS
function readBooks(items) {
  document.querySelector("#products").innerHTML = "";
  items.forEach((book, position) => {
    document.querySelector("#products").innerHTML +=`
        
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">${book.title}</h4>
            <h7> ${book.description}</h7>
            <p> ${book.date}</p>
            <div d-flex-nowrap>
            
     
            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#editBook${position}" ><i class='fas fa-edit'></i>
             <p class="write"> Edit</p>
            </button>
     
            <button type="button" class="btn btn-dark" onclick="deleteBook(${position})" ><i class='fas fa-trash-alt'></i>
            <p class="write">Delete</p>
            </button>
            </div>
     
            <!-- Modal Class -->
            <div
            class="modal fade"
            id="editBook${position}"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Edit ${book.title}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
             
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="editTitle${position}" class="form-label">Title</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editTitle${position}"
                      id="editTitle${position}"
                      value="${book.title}"
                    />
                  </div>
           
                  <div class="mb-3">
                    <label for="editAuthor${position}" class="form-label">Description</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editAuthor${position}"
                      id="editDescription${position}"
                      value="${book.description}"
                    />
                  </div>
            
                <div class="mb-3">
                    <label for="editAuthor${position}" class="form-label">Date</label>
                    <input
                      class="form-control"
                      type="date"
                      name="editAuthor${position}"
                      id="editDate${position}"
                      value="${book.date}"
                    />
         
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style="color: white;font-family: sans-serif;color: #ffffff;border-radius: 8px; border-color:white ; margin-right: 5px;background-color:#353935;padding: 10px;"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style="color: white;font-family: sans-serif;color: #ffffff;border-radius: 8px; border-color:white ; margin-right: 5px;background-color:#353935;padding: 10px;"
                    data-bs-dismiss="modal"
                    onclick="updateBook(${position})"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
  `;
  });
}

readBooks(books);

// CREATE a BOOK     //This is where user inputs the details of the book they adding
function createBook() {
  let title = document.querySelector("#addTitle").value;
  let description = document.querySelector("#addDescription").value;
  let date = document.querySelector("#addDate").value;

  try {           
    if (!title || !description || !date) //if these items are not filled 
      throw new Error("Please fill in all fields");  //this error mssg appears
    books.push({         //After clicking "add item" this function will take the items and store them in local storage
      title,
      description,
      date,
    });
    localStorage.setItem("Books", JSON.stringify(books));
    readBooks(books);
  } catch (err) {
    alert(err);
    console.log(err);
  }
}
// UPDATE A BOOK        //after clicking edit icon this function happens ,displaying your stored info for you to edit it
function updateBook(position) {
  let title = document.querySelector(`#editTitle${position}`).value;
  let description = document.querySelector(`#editDescription${position}`).value;
  let date = document.querySelector(`#editDate${position}`).value;

  try {
    if (!title || !description || !date) //if these items are not filled 
      throw new Error("Please fill in all fields"); //this error mssg appears
    books[position] = {
      title,
      description,
      date,
    };
    localStorage.setItem("Books", JSON.stringify(books));
    readBooks(books);
  } catch (err) {
    alert(err);
  }
}

// DELETE A BOOK
function deleteBook(position) {     //delete a book function
  let confirmation = confirm(          //confrim the delete
    `Are you sure you want to remove ${books[position].title.toUpperCase()} from the list?` //are you sure you wanna delete
  );

  if (confirmation) {   //if you confirm the delete then this function deletes the book
    books.splice(position, 1);
    localStorage.setItem("Books", JSON.stringify(books));
    readBooks(books);
  }
}

function editTask(e){
   
  let task = e.parentElement.parentElement
  title.value = task.children[0].innerHTML
  description.value = task.children[1].innerHTML
  date.value = task.children[2].innerHTML

  deleteBook(position)
}


// SORT BY NAME

function sortName() {
  let direction = document.querySelector("#sortTitle").value;

  let sortedBooks = books.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedBooks.reverse();
  console.log(sortedBooks);
  readBooks(books);
}

