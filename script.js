// Select Element by ID
const uniqueElement = document.getElementById("uniqueElement");
uniqueElement.style.backgroundColor = "purple";
uniqueElement.style.fontSize = "30px";
uniqueElement.style.color = "red";

// Select Elements by Class Name
const classElements = document.getElementsByClassName("example-class");
for (let element of classElements) {
  element.style.color = "green";
}

// Select Elements by Tag Name
const paragraphElements = document.getElementsByTagName("p");
for (let paragraph of paragraphElements) {
  paragraph.style.border = "3px solid yellow";
  paragraph.style.textAlign = "center";
  paragraph.style.color = "blue";
}

// Select Element by Query Selector
const nestedSpan = document.querySelector(".nested");
nestedSpan.style.fontStyle = "italic";
nestedSpan.style.fontSize = "20px";
nestedSpan.style.textAlign = "center";
// Select Elements by Query Selector All
let items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.style.margin = "5px";
  item.style.color = "purple";
  item.style.fontWeight = "bold";
  // .item.style.textAlign='center'
});

// Change Styles of Selected Elements
const favoriteQuote = document.getElementById("favoriteQuote");
favoriteQuote.style.color = "darkblue";
favoriteQuote.style.fontSize = "24px";
// favoriteQuote.style.fontWeight = 'bold'
favoriteQuote.style.textAlign = "center";
