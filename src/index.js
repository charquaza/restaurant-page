import {createHomePage} from "./home.js";
import {createMenuPage} from "./menu.js";
import {createContactPage} from "./contact.js";

var contentContainer = document.querySelector("div#content");

var header = document.createElement("header");
var restaurantName = document.createElement("h1");
restaurantName.textContent = "Berry Cafe";
var nav = document.createElement("nav");

var tabList = document.createElement("ul");
var homeTab = document.createElement("li");
homeTab.textContent = "Home";
var menuTab = document.createElement("li");
menuTab.textContent = "Menu";
var contactTab = document.createElement("li");
contactTab.textContent = "Contact Us"
tabList.addEventListener("click", switchTabs);

var main = document.createElement("main");
main.appendChild(createHomePage());

var currTabName = "Home";
contentContainer.replaceChildren(header, main);
header.replaceChildren(restaurantName, nav);
nav.appendChild(tabList);
tabList.replaceChildren(homeTab, menuTab, contactTab);


function switchTabs(click) {
    var tabName = click.target.textContent;

    if (tabName === currTabName) {
        return;
    }

    switch (tabName) {
        case "Home": 
            main.replaceChildren(createHomePage());
            break;
        case "Menu": 
            main.replaceChildren(createMenuPage());
            break;
        case "Contact Us": 
            main.replaceChildren(createContactPage());
            break;
        default:
            return;
    }

    currTabName = tabName;
    styleTabs(currTabName);
}

function styleTabs(tabName) {
    tabList.childNodes.forEach(function applyStyle(tab) {
        if (tab.textContent === tabName) {
            tab.classList.add("selected");
        } else {
            tab.classList.remove("selected");
        }
    });
}

styleTabs(currTabName);
