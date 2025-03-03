## Same-Origin Policy in AJAX Requests
The **Same-Origin Policy (SOP)** is a security feature in web browsers that restricts how a webpage can make requests to a different domain than the one it originated from. It ensures that scripts can only interact with content from the same origin, defined by the scheme, host, and port.
## Working Around the Same-Origin Policy:
1. **CORS (Cross-Origin Resource Sharing):**
- Allows servers to specify which origins can access their resources using headers like Access-Control-Allow-Origin.

2. **JSONP (JSON with Padding):**
- Allows cross-origin requests by adding a < script > element and using a callback function.
- Limited to GET requests and has security risks.

3. **Proxy Server:**
- Sets up a server-side proxy that forwards requests from the client to the target server and returns the response.

4. **HTML5 PostMessage API:**
- Enables secure cross-origin communication between window objects by exchanging messages and verifying sources.