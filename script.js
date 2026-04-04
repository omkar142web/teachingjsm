const courseData = [
  {
    part: "Part 1",
    title: "The JavaScript Language",
    sections: [
      {
        title: "An Introduction !",
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
          "Nullish coalescing",
          "Loops",
          "Switch",
          "Functions",
          "Arrow functions",
        ],
      },
      {
        title: "Objects",
        lessons: [
          "Objects",
          "Object references",
          "Garbage collection",
          "Object methods",
          "Constructor",
          "Optional chaining",
          "Symbol type",
        ],
      },
    ],
  },

  {
    part: "Part 2",
    title: "Browser",
    sections: [
      {
        title: "Document",
        lessons: [
          "DOM tree",
          "Searching DOM",
          "Node properties",
          "Attributes",
          "Modifying document",
        ],
      },
      {
        title: "Events",
        lessons: [
          "Introduction to events",
          "Bubbling and capturing",
          "Event delegation",
          "Mouse events",
          "Keyboard events",
        ],
      },
    ],
  },

  {
    part: "Part 3",
    title: "Advanced Topics",
    sections: [
      {
        title: "Async JavaScript",
        lessons: ["Callbacks", "Promises", "Async/Await"],
      },
      {
        title: "Networking",
        lessons: ["Fetch API", "WebSocket", "XMLHttpRequest"],
      },
    ],
  },
];

const container = document.querySelector(".sidebar-lesson-listing");
const h3 = document.querySelector(".sidebar-title");

courseData[0].sections[1].lessons.forEach((lesson) => {
  h3.textContent = courseData[0].sections[1].title;
  const div = document.createElement("div");
  div.className = "lesson";
  div.textContent = lesson;
  container.append(div);
});

// -----------------------------------
let lesson = document.querySelectorAll(".lesson");

lesson.forEach((el) => {
  // 1. Create the element
  let span = document.createElement("span");
  span.className = "lesson-arrow-sp";

  // 2. Set the internal HTML (Corrected the FA class if needed)
  span.innerHTML = `<i class="fa-solid fa-angle-right"></i>`;

  // 3. Append the VARIABLE, not the string "span"
  el.append(span);
});

// -----------------------------------


// -----------------------------------
