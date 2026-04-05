export const lessonsContent = {
  "js-lesson-1": {
    title: "An Introduction to JavaScript",
    blocks: [
      {
        type: "text",
        content:
          "JavaScript is a powerful, lightweight, interpreted programming language. It is known as the language of the web. With JavaScript, you can create interactive web pages, server applications, mobile apps, and more.",
      },
      {
        type: "heading",
        content: "What Can JavaScript Do?",
      },
      {
        type: "text",
        content:
          "JavaScript can dynamically modify HTML content, respond to user events, validate forms, create animations, and much more. It's the third pillar of web development alongside HTML and CSS.",
      },
      {
        type: "list",
        items: [
          "Client-side web development",
          "Server-side with Node.js",
          "Mobile app development",
          "Desktop applications",
        ],
      },
      {
        type: "example",
        lang: "js",
        code: "console.log('Hello World!');",
      },
      {
        type: "note",
        title: "Pro Tip!",
        content:
          "Always use 'use strict' at the top of your scripts to catch common coding mistakes and enable stricter parsing.",
      },
    ],
  },

  "js-lesson-2": {
    title: "Hello, World!",
    blocks: [
      {
        type: "text",
        content:
          "The traditional first program in any language is 'Hello, World!'. In JavaScript, this simple script demonstrates how to display output.",
      },
      {
        type: "example",
        lang: "js",
        code: `alert("Hello, World!");`,
      },
      {
        type: "text",
        content:
          "This will display a popup alert box with the message. However, in modern development, console output is more commonly used.",
      },
      {
        type: "example",
        lang: "js",
        code: `console.log("Hello, World!");`,
      },
      {
        type: "note",
        title: "Note",
        content:
          "You can open your browser's developer console (F12) to see console.log output without interrupting your page.",
      },
      {
        type: "divider",
      },
      {
        type: "heading",
        content: "Using document.write()",
      },
      {
        type: "text",
        content:
          "The document.write() method writes directly to the HTML document. It's rarely used in modern JavaScript but worth knowing.",
      },
      {
        type: "example",
        lang: "js",
        code: `document.write("<h1>Hello, World!</h1>");`,
      },
    ],
  },
};
