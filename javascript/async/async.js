document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addPost").addEventListener("click", addPost);

async function getPosts() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

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
    } catch (error) {
        console.error("If the promise throws an error, it will be caught here");
    }
}

async function addPost(e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-type": "application/json",
            },
            body: JSON.stringify({ title: title, body: body }),
        });
        const data = res.json();
        console.log(data);
    } catch (error) {
        console.error("If the promise throws an error, it will be caught here");
    }
}
