# 📚 Part 0 - Fundamentals of Web Applications

Exercises from part 0 of the [Full Stack Open](https://fullstackopen.com/en/part0) course by the University of Helsinki.

---

## 📋 Course Content

This part introduces the fundamentals of web development, exploring how traditional web applications and single-page applications (SPA) work, as well as the basics of HTTP, AJAX, and DOM manipulation.

It analyzes in depth:
- Communication between browser and server through the HTTP protocol
- Architectural differences between traditional applications and SPAs
- The role of JavaScript in building modern web applications
- The evolution of web development from static pages to dynamic applications

---

## 🎯 Completed Exercises

### 📖 0.1: HTML
HTML tutorial review _(not submitted)_

### 🎨 0.2: CSS
CSS tutorial review _(not submitted)_

### 📝 0.3: HTML Forms
HTML forms tutorial review _(not submitted)_

---

### 🔄 0.4: New note diagram

Sequence diagram representing the complete flow when a user creates a new note in the traditional web application, including form submission and page reload.

**Key aspects of the diagram:**
- Sending data via HTTP POST
- Server response with redirection (302 status code)
- Complete page reload and all its resources
- New request for HTML, CSS, JavaScript, and JSON data

**[📊 View diagram →](exercise-0.4-new-note.md)**

---

### ⚡ 0.5: Single page app diagram

Sequence diagram illustrating the initial loading of the SPA (Single Page Application) version, showing how resources and data are obtained asynchronously.

**Key aspects of the diagram:**
- Loading the application's base HTML
- Downloading static resources (CSS and JavaScript)
- Executing JavaScript code in the browser
- Asynchronous request for data in JSON format
- Dynamic interface rendering

**[📊 View diagram →](exercise-0.5-spa-load.md)**

---

### 🚀 0.6: New note in single page app diagram

Sequence diagram demonstrating how a new note is created in the SPA without reloading the page, using JavaScript and asynchronous requests to the server.

**Key aspects of the diagram:**
- Preventing default form behavior
- Immediate DOM update via JavaScript
- Asynchronous data sending to server in JSON format
- Server response without redirection (201 status code)
- No page reload

**[📊 View diagram →](exercise-0.6-spa-new-note.md)**

---

## 🛠️ Technologies and Concepts Covered

### Protocols and Communication
- **HTTP Protocol** - GET and POST methods, status codes, headers
- **AJAX** - Asynchronous requests and partial DOM updates
- **JSON** - Data interchange format between client and server

### Web Architectures
- **Traditional web applications** - Complete server-side rendering
- **Single Page Applications (SPA)** - Dynamic client-side rendering
- **REST** - Web API design principles

### Development Tools
- **Document Object Model (DOM)** - Programmatic manipulation of HTML elements
- **Developer Console** - Browser debugging tools
- **Network Tab** - HTTP request analysis
- **Sequence diagrams** - Visualization of client-server interactions

---

## 📌 Technical Notes

The sequence diagrams are implemented using **Mermaid** syntax, a text-based diagram generation tool that allows:
- Clear visualization of communication flow between browser and server
- Direct integration into markdown files
- Version control alongside source code
- Automatic rendering on platforms like GitHub

Each diagram follows UML conventions for sequence diagrams, showing:
- The actors involved (browser, server)
- The chronological order of messages
- HTTP requests with their corresponding methods
- Server responses with status codes

---

## 🔗 References

- [Full Stack Open - Part 0](https://fullstackopen.com/en/part0)
- [Example Application - Traditional](https://studies.cs.helsinki.fi/exampleapp/notes)
- [Example Application - SPA](https://studies.cs.helsinki.fi/exampleapp/spa)
- [Mermaid Sequence Diagrams](https://mermaid.js.org/syntax/sequenceDiagram.html)
- [HTTP Protocol - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)
