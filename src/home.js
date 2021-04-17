function createHomePage() {
    var heading = document.createElement("h2");
    heading.textContent = "About Us";

    var picture = document.createElement("img");
    // picture.setAttribute("src", ""); //add file path here

    var description = document.createElement("p");
    description.textContent = "We offer berry juice!";

    var homeContainer = document.createElement("div");
    homeContainer.replaceChildren(heading, picture, description);

    return homeContainer;
}

export {createHomePage};


