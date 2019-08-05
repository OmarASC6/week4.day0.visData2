// fetch data from URL

const url = "https://randomuser.me/api";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const data = myJson.results[0];

    const first = list[0];
    const main = document.querySelector("main");

    const createCard = (obj, indx) => {
      const newCard = document.createElement("div");
      newCard.className = "card";
      newCard.id = indx;

      const face = document.createElement("img");
      face.src = obj.picture.large;
      face.alt = "Portrait";

      const text = document.createElement("div");
      const title = document.createElement("p");
      title.className = "personName";
      title.innerText =
        " " + obj.name.title + " " + obj.name.first + " " + obj.name.last;

      const gender = document.createElement("p");
      gender.className = "personName";
      gender.innerText = obj.gender;

      newCard.appendChild(gender);
      newCard.appendChild(title);
      newCard.appendChild(face);
      main.appendChild(newCard);
    };

    // createCard(first);
    const loopCreate = arr => {
      for (let i = 0; i < arr.length; i++) createCard(arr[i], i);
    };

    loopCreate(list);

    // ESCAPE FROM ALCATRAZ !
    anyFunctionThatDoesALotOfStuff(data);
  });

const submitbutton = document.querySelector("#submitButton");

submitbutton.addEventListener("click", clickListener);

function clickListener(event) {
  event.preventDefault();
  const inputElement = document.querySelector("#form_container");
  console.log(inputElement);
  const userInput = inputElement.value;
  alert(userInput);

  const filterGender = obj.gender
  console.log(filterGender);
  
}
