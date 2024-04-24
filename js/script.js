function toggleContactInfo() {
    var info = document.getElementById("contact-info");
    if (info.classList.contains("visible")) {
        info.classList.remove("visible");
    } else {
        info.classList.add("visible");
    }
}