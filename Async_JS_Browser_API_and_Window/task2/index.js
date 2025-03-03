const list = document.getElementById('ka');
const btn = document.getElementById('btn');
document.addEventListener('click', lul);

async function lul() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await response.json();
    data.forEach((el) => {
        const li = document.createElement('li');
        li.textContent = el.name;
        list.appendChild(li);
      
        
})
    

}