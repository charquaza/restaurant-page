function createContactPage() {
    var heading = document.createElement("h2");
    heading.textContent = "Contact Us";

    var picture = document.createElement("img");
    // picture.setAttribute("src", ""); //add file path here

    var description = document.createElement("p");
    description.textContent = "Phone: (xxx) xxx-xxxx";

    var contactContainer = document.createElement("div");
    contactContainer.replaceChildren(heading, picture, description);

    return contactContainer;
}

export {createContactPage};