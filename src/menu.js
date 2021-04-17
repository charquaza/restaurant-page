function createMenuPage() {
    var heading = document.createElement("h2");
    heading.textContent = "Menu";

    var picture = document.createElement("img");
    // picture.setAttribute("src", ""); //add file path here

    var description = document.createElement("p");
    description.textContent = "Blueberry juice: blueberries";

    var menuContainer = document.createElement("div");
    menuContainer.replaceChildren(heading, picture, description);

    return menuContainer;
}

export {createMenuPage};