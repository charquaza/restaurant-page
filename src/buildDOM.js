function buildDOM() {
    var homeTab = document.createElement("li");
    homeTab.textContent = "Home";
    var menuTab = document.createElement("li");
    menuTab.textContent = "Menu";
    var contactTab = document.createElement("li");
    contactTab.textContent = "Contact Us";

    var tabList = document.createElement("ul");
    tabList.replaceChildren(homeTab, menuTab, contactTab);

    var nav = document.createElement("nav");
    nav.appendChild(tabList);

    var restaurantName = document.createElement("h1");
    restaurantName.textContent = "Berry Cafe";

    var header = document.createElement("header");
    header.replaceChildren(restaurantName, nav);
    
    var main = document.createElement("main");

    var contentContainer = document.querySelector("div#content");
    contentContainer.replaceChildren(header, main);
}

export {buildDOM};