
## XMLHttpRequest (XHR) Object:
The XMLHttpRequest object is a built-in JavaScript object that allows web browsers to interact with servers. It facilitates the sending and receiving of data asynchronously without refreshing the entire web page, which is a fundamental aspect of AJAX (Asynchronous JavaScript and XML).
## Usage in AJAX
1. **Creating an XMLHttpRequest Object:**
```javascript
let xhr = new XMLHttpRequest();
```
2. **Configuring the Request:** The open method specifies the type of request (e.g., GET or POST), the URL, and whether the request should be asynchronous.
```javascript
xhr.open('GET', 'https://api.example.com/data', true);
```
3. **Sending the Request:** The send method sends the configured request to the server.
```javascript
xhr.send();
```
4. **Handling the Response:** The onreadystatechange event handler monitors the state of the request and processes the response when it is ready.
``` javascript
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        console.log(response);
    }
};
```
In summary, the XMLHttpRequest object enables web applications to communicate with servers in the background and update parts of a web page without reloading the entire page, enhancing the user experience with dynamic content updates.