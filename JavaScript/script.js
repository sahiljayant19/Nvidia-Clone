import { subNavLiOption, productOptionBox, gamesOptionBox, optionBoxes, searchButton, searchItems, searchBox, navUl, nav, menuButton, subMenuButton, subNavUl, subNav, heading } from "./var.js";

function setArrowProperty(li, border, borderWidth, display, padding) { // This sets property of down arrow which is present on the side of product and games word.
    const arrow = li.nextElementSibling.firstElementChild.style;
    arrow.border = border;
    arrow.borderWidth = borderWidth;
    arrow.display = display;
    arrow.padding = padding;
}

Array.from(subNavLiOption).forEach((li) => { // This event show the option-box
    li.addEventListener("mouseover", () => {
        if (li.innerHTML == "Products") {
            productOptionBox.style.display = 'block';
            gamesOptionBox.style.display = 'none';
        }
        else if (li.innerHTML == "Games &amp; Tech") {
            gamesOptionBox.style.display = 'block';
            productOptionBox.style.display = 'none';
        }
        setArrowProperty(li, "solid white", "0 3px 3px 0", "inline-block", "3px");
    })
    li.addEventListener("mouseleave", () => {
        setArrowProperty(li, "solid rgba(255, 255, 255, 0.488)", "0 3px 3px 0", "inline-block", "3px");
    })
})

Array.from(optionBoxes).forEach((optionBox) => { // This event hide the option-box if user leave the mouse from the option box
    optionBox.addEventListener("mouseleave", () => {
        optionBox.style.display = 'none';
    })
})

searchButton.addEventListener("click", (event) => { // show the search-box if user clicks search-icon
    event.stopPropagation();
    Array.from(searchItems).forEach((item) => {
        item.style.display = 'block';
    })
})

document.addEventListener("click", (event) => { // hide the search-box if user clicks anywhere in the dom apart from the search-box
    if (event.target !== searchBox) {
        Array.from(searchItems).forEach((item) => {
            item.style.display = 'none';
            searchBox.value = '';
        })
    }
})

function setMobileNavProperty(nav, color, padding, ul, top, left, line_height, marginTop) { // This function set the nav property when user clicked the menu button.
    nav.transition = "0.5s ease-out";
    nav.paddingBottom = padding;
    nav.background = color;
    ul.flexDirection = "column";
    ul.position = "absolute";
    ul.top = top;
    ul.left = left;
    ul.lineHeight = line_height;
    ul.marginTop = marginTop;
    setTimeout(() => {
        ul.display = "flex"; // wait 200 miliseconds so that my transition has almost completed.
    }, 200);
}

function setNavElseProperty(nav, ul, color) {
    nav.paddingBottom = "0";
    nav.background = color;
    ul.display = "none";
}

function setMenuIcon(element, source) {
    const img = element.firstElementChild;
    img.src = source;
}

menuButton.addEventListener("click", () => { // dark menu-icon EventListener...
    const ul = navUl.style;
    if (ul.display == "none" || ul.display == '') {
        setMenuIcon(menuButton, "../img/close.png");
        setMobileNavProperty(nav.style, "white", "120px", navUl.style, "15vw", "-8vw", "30px", "auto");
    }
    else {
        setMenuIcon(menuButton, "../img/menu.png");
        setNavElseProperty(nav.style, navUl.style, "white");
    }
})

subMenuButton.addEventListener("click", () => { // light menu-icon EventListener...
    const ul = subNavUl.style;
    if (ul.display == "none" || ul.display == '') {
        setMenuIcon(subMenuButton, "../img/white-close.png");
        setMobileNavProperty(subNav.style, "rgb(15, 15, 15)", "180px", subNavUl.style, "50px", "auto", "50px", "20px");
    }
    else {
        setMenuIcon(subMenuButton, "../img/white-menu.png");
        setNavElseProperty(subNav.style, subNavUl.style, "black");
    }
})

function setNavProperty(nav, ul, color, position) { // This function set default nav and sub-nav properties
    heading.style.marginTop = "85px";
    nav.transition = "0.5s ease-out";
    nav.paddingBottom = "0";
    nav.background = color;
    ul.display = "flex";
    ul.flexDirection = "row";
    ul.position = position;
}

function setDefaultMenuIcon() { // set default menu button img if widht more than 600px
    const darkMenu = menuButton.firstElementChild;
    darkMenu.src = "../img/menu.png"; // dark menu-icon
    subMenuButton.firstElementChild.src = "../img/white-menu.png"; // white menu-icon
}

window.addEventListener("resize", () => { // resize window...
    if (window.innerWidth > 600) {
        setDefaultMenuIcon();
        setNavProperty(subNav.style, subNavUl.style, "black", "sticky"); // set default nav property if the width more than 600px 
        setNavProperty(nav.style, navUl.style, "white", "static");
    }
    else if (window.innerWidth < 600) {
        navUl.style.display = "none";
        subNavUl.style.display = "none";
    }
})