let popupVar = document.getElementById("popup");

// this function will be called whenever the submit buttin is clicked
openPopup = () => {
popupVar.classList.add("open__popup");
}

// this function will be called when the okay button is clicked
closePopup = () => {
    popupVar.classList.remove("open__popup");
}


