# Key Differences Between JavaScript and HTML

## HTML (HyperText Markup Language)
- **Purpose:** HTML is a markup language used for creating the structure and content of web pages. It defines elements like headings, paragraphs, links, images, and more.
- **Syntax:** Uses tags to define different elements. For example, `<h1>` for a heading, `<p>` for a paragraph, and `<a>` for a link.
- **Static Content:** HTML is used for displaying static content, which doesn't change dynamically on user interaction.
- **Usage Example:** You would use HTML to structure the content of your webpage. For instance, creating a blog post, an article, or a basic webpage layout.

## JavaScript
- **Purpose:** JavaScript is a programming language that allows you to add interactivity and dynamic features to web pages. It enables functions like form validation, interactive maps, animations, and more.
- **Syntax:** JavaScript uses a different syntax from HTML, involving variables, functions, and control structures like loops and conditionals.
- **Dynamic Content:** JavaScript is used to make web pages dynamic and interactive. It can change the content of a web page without reloading it.
- **Usage Example:** You would use JavaScript to add interactivity to your webpage. For example, creating a form that validates user input in real-time, a dropdown menu that expands when clicked, or an image carousel that automatically changes images.

## Example Code
Here’s a simple example to illustrate the differences:

**HTML :**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p>This is a paragraph of text.</p>
    <button id="myButton">Click Me!</button>
</body>
</html>
```

**javaScript :**
```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");

```
**In this Example**

- HTML is used to define the structure and content of the web page (e.g., headings, paragraphs, and a button).
- JavaScript is used to add interactivity by making the button display an alert message when clicked.