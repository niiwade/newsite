function toggleMobileNavigation() {
    var element = document.getElementById("mobile-navi");

    if (element.classList.contains("mobile-navi_open")) {
        element.classList.remove("mobile-navi_open");
    } else {
        element.classList.add("mobile-navi_open");
    }
}