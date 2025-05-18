document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("#year"),n=document.querySelector("#lastModify"),t=new Date,a=document.lastModified;e.innerHTML=`&copy; ${t.getFullYear()} | Josselyn Juleidy Martinez | Ecuador |`,n.innerHTML=`<span>Last Modification: ${a}</span>`});

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
  courseList.innerHTML = "";
  const filtered = filter === "All" ? courses : courses.filter(c => c.type === filter);
  filtered.forEach(course => {
    const btn = document.createElement("button");
    btn.textContent = course.name;
    btn.className = course.type.toLowerCase();
    btn.dataset.credits = course.credits;
    if (course.completed) {
      btn.style.border = "3px solid limegreen";
    }
    btn.addEventListener("click", () => {
      btn.classList.toggle("selected");
      updateCredits();
    });
    courseList.appendChild(btn);
  });
  updateCredits();
}

function updateCredits() {
  const selectedButtons = document.querySelectorAll("#course-list button.selected");
  const total = Array.from(selectedButtons).reduce((sum, btn) => {
    return sum + parseInt(btn.dataset.credits);
  }, 0);

  totalCreditsSpan.textContent = total;
}

document.querySelectorAll(".filter-buttons button").forEach(button => {
  button.addEventListener("click", () => {
    renderCourses(button.dataset.filter);
  });
});
renderCourses();

