document.getElementById("button1").addEventListener("click", loadUser);
document.getElementById("button2").addEventListener("click", loadUsers);

function loadUser() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "./user.json", true);

    xhr.onload = function () {
        if (this.status == 200) {
            let user = JSON.parse(xhr.responseText);

            let output = "";
            output +=
                "<ul>" +
                "<li>ID:" +
                user.id +
                "</li>" +
                "<li>NAME:" +
                user.name +
                "</li>" +
                "<li>EMAIL:" +
                user.email +
                "</li>" +
                "</ul>";
            document.getElementById("user").innerHTML = output;
        }
    };

    xhr.send();
}

function loadUsers() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "./users.json", true);

    xhr.onload = function () {
        if (this.status == 200) {
            let users = JSON.parse(xhr.responseText);

            let output = "";

            for (let user of users)
                output +=
                    "<ul>" +
                    "<li>ID:" +
                    user.id +
                    "</li>" +
                    "<li>NAME:" +
                    user.name +
                    "</li>" +
                    "<li>EMAIL:" +
                    user.email +
                    "</li>" +
                    "</ul>";
            document.getElementById("users").innerHTML = output;
        }
    };

    xhr.send();
}
