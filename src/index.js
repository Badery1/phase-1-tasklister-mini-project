document.addEventListener("DOMContentLoaded", () => {

  const createBoongusForm = document.getElementById("createBoongusForm");
  const listContainer = document.getElementById("boongus")
  
  let x = 1;
  
  function renderBoongus(boongus) {
    const li = document.createElement("li");
    li.className = ("List"+ x);
    
    x++;

    const h3 = document.createElement("h3");
    h3.textContent = boongus.description;
    li.append(h3.textContent);
    listContainer.append(li);

  }
  
  createBoongusForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newBoongus = {
      description: e.target.newBoongusDescription.value
    };

    renderBoongus(newBoongus);
    createBoongusForm.reset();

  });

})



