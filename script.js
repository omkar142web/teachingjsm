import { lessonsContent } from "./data.js";

const courseData = {
  title: "The JavaScript Language",
  description:
    "Learn JavaScript from scratch to advanced concepts like OOP, async programming, and browser APIs.",

  sections: [
    {
      title: "Introduction",
      lessons: [
        "An Introduction to JavaScript",
        "Manuals and specifications",
        "Code editors",
        "Developer console",
      ],
    },

    {
      title: "JavaScript Fundamentals",
      lessons: [
        "Hello, world!",
        "Code structure",
        "use strict",
        "Variables",
        "Data types",
        "Alert, prompt, confirm",
        "Type Conversions",
        "Operators",
        "Comparisons",
        "Conditionals",
        "Logical operators",
        "Nullish coalescing (??)",
        "Loops",
        "Switch",
        "Functions",
        "Function expressions",
        "Arrow functions",
      ],
    },

    {
      title: "Code Quality & Debugging",
      lessons: [
        "Code quality",
        "Debugging in browser",
        "Coding style",
        "Comments",
        "Ninja code",
        "Testing with Mocha",
        "Polyfills & transpilers",
      ],
    },

    {
      title: "Objects & Data Types",
      lessons: [
        "Objects",
        "Object references & copying",
        "Garbage collection",
        "Object methods",
        "Constructor (new)",
        "Optional chaining",
        "Symbol type",
        "Object to primitive",
      ],
    },

    {
      title: "Advanced Data Types",
      lessons: [
        "Methods of primitives",
        "Numbers",
        "Strings",
        "Arrays",
        "Array methods",
        "Map & Set",
        "WeakMap & WeakSet",
        "Object.keys, values, entries",
        "Destructuring",
        "Date & Time",
        "JSON methods",
      ],
    },

    {
      title: "Advanced Functions",
      lessons: [
        "Recursion & stack",
        "Rest & spread",
        "Closures",
        "var keyword",
        "Global object",
        "Function object",
        "new Function",
        "setTimeout / setInterval",
        "call/apply",
        "bind",
        "Arrow functions revisited",
      ],
    },

    {
      title: "OOP & Prototypes",
      lessons: [
        "Property flags",
        "Getters & setters",
        "Prototypal inheritance",
        "F.prototype",
        "Native prototypes",
        "Classes",
        "Class inheritance",
        "Static methods",
        "Private properties",
        "instanceof",
        "Mixins",
      ],
    },

    {
      title: "Error Handling",
      lessons: ["try...catch", "Custom errors"],
    },

    {
      title: "Async JavaScript",
      lessons: [
        "Callbacks",
        "Promises",
        "Promise chaining",
        "Error handling in promises",
        "Promise API",
        "Async/Await",
        "Microtasks",
      ],
    },

    {
      title: "Advanced Concepts",
      lessons: [
        "Generators",
        "Async iteration",
        "Modules",
        "Dynamic imports",
        "Proxy & Reflect",
        "Currying",
        "BigInt",
      ],
    },

    {
      title: "DOM & Browser",
      lessons: [
        "DOM tree",
        "Searching DOM",
        "Node properties",
        "Attributes & properties",
        "Modifying document",
        "Styles & classes",
        "Element size & scrolling",
      ],
    },

    {
      title: "Events",
      lessons: [
        "Introduction to events",
        "Bubbling & capturing",
        "Event delegation",
        "Mouse events",
        "Keyboard events",
        "Forms & input events",
      ],
    },

    {
      title: "Networking",
      lessons: [
        "Fetch API",
        "XMLHttpRequest",
        "WebSocket",
        "Server Sent Events",
      ],
    },

    {
      title: "Storage & Browser APIs",
      lessons: ["Cookies", "LocalStorage", "SessionStorage", "IndexedDB"],
    },

    {
      title: "Advanced Topics",
      lessons: [
        "Web Components",
        "Shadow DOM",
        "Animation",
        "Regular Expressions",
      ],
    },
  ],
};

// -----------------------------------
const container = document.querySelector(".sidebar-lesson-listing");
const sidebarTitle = document.querySelector(".sidebar-title");
const cSections = courseData.sections;

// -----------------------------------
sidebarTitle.textContent = courseData.title;
sidebarTitle.setAttribute("title", courseData.description);

// -----------------------------------

let id = 1;
// start from here 🔻 🔻 🔻 🔻 🔻 🔻 🔻
cSections.forEach((sections) => {
  // console.log(cSections);

  const div = document.createElement("div");
  div.className = "lesson";
  div.textContent = sections.title;
  div.setAttribute("title", sections.title);
  div.setAttribute("id", `js-lesson-${id++}`);

  container.append(div);
  // console.log(div);

  // -----------------------------------
  let span = document.createElement("span");
  span.className = "lesson-arrow-sp";
  span.innerHTML = `<i class="fa-solid fa-angle-right"></i>`;

  // -----------------------------------
  div.append(span);
});

// 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻
const allLessons = document.querySelectorAll(".lesson");
let firstLesson = document.querySelector(".lesson");

allLessons.forEach((e) => {
  //! Adding and removing 'active' class
  e.addEventListener("click", () => {
    allLessons.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    renderLesson(e.getAttribute("id"));

    //! STORAGE: Save the text content (the "name" of the lesson)
    localStorage.setItem("currentLesson", e.getAttribute("id"));
  });
});

//! On Load 🔄️: Check if a lesson was saved before
let savedLessonId = localStorage.getItem("currentLesson");

if (savedLessonId) {
  const activeElement = document.getElementById(savedLessonId);

  renderLesson(savedLessonId);

  if (activeElement) {
    //! 1. Set active state
    allLessons.forEach((el) => el.classList.remove("active"));
    activeElement.classList.add("active");

    //! 2. THE FIX: Scroll ONLY the sidebar container
    // We calculate the distance from the top of the container to the element
    const container = document.querySelector(".sidebar-lesson-listing");

    if (container) {
      setTimeout(() => {
        // Change 1500 to make it even slower (in milliseconds)
        slowScrollTo(activeElement, container, 1500);
      }, 400); // Slightly longer wait to let the sidebar 'aside' transition finish
    }
  }
} else {
  firstLesson.classList.add("active");
  renderLesson(firstLesson.getAttribute("id"));
}

//! scroll fucntion 🔻 🔻 🔻 🔻 🔻 🔻
function slowScrollTo(element, container, duration = 1000) {
  const containerTop = container.offsetTop;
  const elementTop = element.offsetTop;
  const centerOffset = container.clientHeight / 2;

  // The exact pixel we want to reach
  const target = elementTop - containerTop - centerOffset;
  const start = container.scrollTop;
  const change = target - start;
  let startTime = null;

  function animateScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    // Easing Function: Make it start fast and slow down at the end (Out-Cubic)
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);

    container.scrollTop = start + change * ease;

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

// ! data / content realated here
function renderLesson(lessonId) {
  const data = lessonsContent[lessonId];
  const mainContent = document.querySelector(".content");

  if (!data) {
    mainContent.innerHTML = ""; // Clear existing

    const emptyState = document.createElement("div");
    emptyState.className = "coming-soon-card";

    emptyState.innerHTML = `
      <div class="coming-soon-icon">
        <i class="fa-solid fa-screwdriver-wrench"></i>
      </div>
      <h2 class="content-title">Chapter Under Construction</h2>
      <p class="desc">We're currently brewing some fresh JavaScript knowledge for this section. Check back soon!</p>
      <div class="progress-bar-mini">
        <div class="progress-fill"></div>
      </div>
      <button class="btn-primary" onclick="location.reload()">Refresh Page</button>
    `;

    mainContent.appendChild(emptyState);
    return;
  }

  mainContent.innerHTML = "";

  const title = document.createElement("h1");
  title.className = "content-title";
  title.textContent = data.title;
  mainContent.appendChild(title);

  data.blocks.forEach((block) => {
    switch (block.type) {
      case "heading": {
        const h2 = document.createElement("h2");
        h2.className = "section-heading";
        h2.textContent = block.content;
        mainContent.appendChild(h2);
        break;
      }

      case "text": {
        const p = document.createElement("p");
        p.className = "desc";
        p.textContent = block.content;
        mainContent.appendChild(p);
        break;
      }

      case "example": {
        const exampleDiv = document.createElement("div");
        exampleDiv.className = "example-div";

        const tagDiv = document.createElement("div");
        tagDiv.className = "example-div-tag";

        const iconSpan = document.createElement("span");
        iconSpan.className = "example-icon info-icon";
        const icon = document.createElement("i");
        icon.className = "fa-solid fa-code";
        iconSpan.appendChild(icon);

        const titleSpan = document.createElement("span");
        titleSpan.className = "example-title info-text";
        titleSpan.textContent = "Example";

        tagDiv.appendChild(iconSpan);
        tagDiv.appendChild(titleSpan);

        const codeWrapper = document.createElement("div");
        codeWrapper.className = "code-wrapper";

        const langSpan = document.createElement("span");
        langSpan.className = `lang-icon ${block.lang}`;
        langSpan.textContent = block.lang ? block.lang.toUpperCase() : "JS";

        const pre = document.createElement("pre");
        pre.className = `code-block lang-${block.lang || "js"}`;

        const code = document.createElement("code");
        code.textContent = block.code;

        pre.appendChild(code);
        codeWrapper.appendChild(langSpan);
        codeWrapper.appendChild(pre);

        exampleDiv.appendChild(tagDiv);
        exampleDiv.appendChild(codeWrapper);

        mainContent.appendChild(exampleDiv);
        break;
      }

      case "note": {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";

        const noteTag = document.createElement("div");
        noteTag.className = "note-tag";

        const noteIcon = document.createElement("span");
        noteIcon.className = "note-icon info-icon";
        const bulbIcon = document.createElement("i");
        bulbIcon.className = "fa-regular fa-lightbulb";
        noteIcon.appendChild(bulbIcon);

        const strong = document.createElement("strong");
        strong.className = "info-text";
        strong.textContent = block.title || "Tip!";

        noteTag.appendChild(noteIcon);
        noteTag.appendChild(strong);

        const noteP = document.createElement("p");
        noteP.textContent = block.content;

        noteDiv.appendChild(noteTag);
        noteDiv.appendChild(noteP);

        mainContent.appendChild(noteDiv);
        break;
      }

      case "list": {
        const ul = document.createElement("ul");
        ul.className = "desc-list";

        block.items.forEach((itemText) => {
          const li = document.createElement("li");
          li.textContent = itemText;
          ul.appendChild(li);
        });

        mainContent.appendChild(ul);
        break;
      }

      case "image": {
        const figure = document.createElement("figure");
        figure.className = "content-image";

        const img = document.createElement("img");
        img.src = block.src;
        img.alt = block.alt || "";

        if (block.caption) {
          const figcaption = document.createElement("figcaption");
          figcaption.textContent = block.caption;
          figure.appendChild(img);
          figure.appendChild(figcaption);
        } else {
          figure.appendChild(img);
        }

        mainContent.appendChild(figure);
        break;
      }

      case "divider": {
        const hr = document.createElement("hr");
        hr.className = "content-divider";
        mainContent.appendChild(hr);
        break;
      }

      case "table": {
        const table = document.createElement("table");
        table.className = "content-table";

        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        block.headers.forEach((headerText) => {
          const th = document.createElement("th");
          th.textContent = headerText;
          headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        const tbody = document.createElement("tbody");
        block.rows.forEach((rowData) => {
          const tr = document.createElement("tr");
          rowData.forEach((cellText) => {
            const td = document.createElement("td");
            td.textContent = cellText;
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        mainContent.appendChild(table);
        break;
      }
    }
  });
  if (window.Prism) {
  Prism.highlightAllUnder(mainContent);
}
}
//  renderLesson('js-lesson-1');
