document.addEventListener("DOMContentLoaded", () => {
    const year = document.querySelector("#current_date");
    const lastModify = document.querySelector("#lastModified");

    const today = new Date();
    const theLastModify = document.lastModified;

    year.innerHTML = `&copy; ${today.getFullYear()} | Josselyn Juleidy Martinez | Ecuador |`;

    lastModify.innerHTML = `<span>Last Modification: ${theLastModify}</span>`;

});