// All necessary variables
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const submitBtn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

// Add book button function
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (title.value == "" && author.value == "" && year == "") {
    alert("Please write first than you click add button");
  } else {
    const newRow = document.createElement("tr");

    // Creating Title
    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating Author
    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // Creating Year
    const newYear = document.createElement("th");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow);
  }
});
