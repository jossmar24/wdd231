document.addEventListener("DOMContentLoaded", () => {

  const yearEl = document.querySelector("#year");
  const lastModifyEl = document.querySelector("#lastModify");
  const currentDate = new Date();
  const lastModified = document.lastModified;

  if (yearEl) {
    yearEl.innerHTML = `&copy; ${currentDate.getFullYear()} | Josselyn Juleidy Martinez | Ecuador |`;
  }

  if (lastModifyEl) {
    lastModifyEl.innerHTML = `<span>Last Modification: ${lastModified}</span>`;
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (toggle && nav) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Toggle navigation menu");

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("active");
      toggle.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });
  }

  const courses = [ 
    { name: "CSE 110", type: "CSE", credits: 3, completed: true },
    { name: "CSE 111", type: "CSE", credits: 4, completed: true },
    { name: "WDD 130", type: "WDD", credits: 3, completed: false },
    { name: "WDD 131", type: "WDD", credits: 2, completed: true },
    { name: "CSE 210", type: "CSE", credits: 4, completed: false },
    { name: "WDD 231", type: "WDD", credits: 3, completed: false }
  ];

  const courseList = document.getElementById("course-list");
  const totalCreditsSpan = document.getElementById("total-credits");

  function renderCourses(filter = "All") {
    if (!courseList) return;
    courseList.innerHTML = "";

    const filtered = filter === "All" ? courses : courses.filter(c => c.type === filter);

    filtered.forEach(course => {
      const btn = document.createElement("button");
      btn.textContent = course.name;
      btn.className = course.type.toLowerCase();
      btn.dataset.credits = course.credits;
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("aria-label", `Toggle selection for ${course.name}`);

      if (course.completed) {
        btn.style.border = "3px solid limegreen";
      }

      btn.addEventListener("click", () => {
        btn.classList.toggle("selected");
        const selected = btn.classList.contains("selected");
        btn.setAttribute("aria-pressed", selected.toString());
        updateCredits();
      });

      courseList.appendChild(btn);
    });

    updateCredits();
  }

  function updateCredits() {
    const selectedButtons = document.querySelectorAll("#course-list button.selected");
    const total = Array.from(selectedButtons).reduce((sum, btn) => {
      return sum + parseInt(btn.dataset.credits || "0");
    }, 0);

    if (totalCreditsSpan) {
      totalCreditsSpan.textContent = total;
    }
  }

  document.querySelectorAll(".filter-buttons button").forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "All";
      renderCourses(filter);
    });
  });

  renderCourses();
});





