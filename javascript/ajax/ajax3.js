document.getElementById("button1").addEventListener("click", loadUser);

function loadUser() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users", true);

    xhr.onload = function () {
        if (this.status == 200) {
            console.log(xhr.responseText);

            let users = JSON.parse(xhr.responseText);
            output = "";
            for (let user of users) {
                output += `
                <div class="user">
                    <img src="${user.avatar_url}" width = 70 height = 70>
                    <ul>
                    <li>ID: ${user.id}</li>
                    <li>Login: ${user.login}</li>
                    </ul>
                </div>
                `;
            }
            document.getElementById("users").innerHTML = output;
        }
    };

    xhr.send();
}
