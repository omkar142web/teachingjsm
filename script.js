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
// 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻
cSections.forEach((sections) => {
  // console.log(cSections);

  const div = document.createElement("div");
  div.className = "lesson";
  div.textContent = sections.title;
  div.setAttribute("title", sections.title);
  div.setAttribute("data-id", `lesson-${id++}`);

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

    //! STORAGE: Save the text content (the "name" of the lesson)
    localStorage.setItem("currentLesson", e.getAttribute("data-id"));
  });
});

//! On Load 🔄️: Check if a lesson was saved before
let savedLessonId = localStorage.getItem("currentLesson");
if (savedLessonId) {
  //! Find the lesson that matches the saved text
  allLessons.forEach((el) => {
    if (el.getAttribute("data-id") === savedLessonId) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
} else if (firstLesson) firstLesson.classList.add("active");
