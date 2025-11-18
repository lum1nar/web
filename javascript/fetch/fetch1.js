document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addPost").addEventListener("click", addPost);

function getText() {
    fetch("sample.txt")
        .then(function (res) {
            return res.text();
        })
        .then(function (data) {
            console.log(data);
        });
    fetch("sample.txt")
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("output").innerHTML = data;
        })
        .catch((err) => console.log(err));
}

// Doesn't have to convert between JSON and object
function getUsers() {
    fetch("users.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let output = "<h2> users </h2>";
            for (let user of data) {
                output += `
                    <div> 
                        <ul>
                            <li>name: ${user.name} </li>
                            <li>email: ${user.email} </li>
                        </ul>
                    </div>
                `;
            }
            document.getElementById("output").innerHTML = output;
        });
}

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            let output = "";
            for (let article of data) {
                output += `
                <article>
                    <h2>Post:${article.id} Title: ${article.title} </h2>
                    <p>By:User ${article.userId}</p>
                    <p>${article.body}</p>
                </article>
                `;
            }
            document.getElementById("output").innerHTML = output;
        });
}

function addPost(e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-type": "application/json",
        },
        body: JSON.stringify({ title: title, body: body }),
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
}
