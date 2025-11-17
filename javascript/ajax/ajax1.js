document.getElementById("button").addEventListener("click", loadText);

function loadText() {
    // console.log("button clicked");

    // Create XHR Object
    let xhr = new XMLHttpRequest();

    // OPEN - type, url/file, async
    xhr.open("GET", "sample.txt", true);

    console.log("readyState:", xhr.readyState);
    console.log("This state means open()");

    // readyState values
    // 0: UNSENT 	Client has been created. open() not called yet.
    // 1: OPENED 	open() has been called.
    // 2: HEADERS_RECEIVED 	send() has been called, and headers and status are available.
    // 3: LOADING 	Downloading; responseText holds partial data.
    // 4: DONE 	The operation is complete.

    // OPTIONAL
    // onreadyStateChnage will be executed
    // during state 1 - 4, which is after send()
    // console.log("This is part of the fetching procedure");
    // xhr.onreadystatechange = function () {
    //     console.log("readyState:", xhr.readyState);
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);
    //     }
    // };

    // OPTIONAL
    // This only happens in Loading, state 3
    // Can set up some config for the loader
    xhr.onprogress = function () {
        console.log("readyState:", xhr.readyState);
        console.log("This means the file is being loaded");
    };

    // onload will only be executed when the ready state is 4
    xhr.onload = function () {
        console.log("readyState:", xhr.readyState);
        console.log("This means fetching is done");
        if (this.status == 200) {
            console.log(this.responseText);
        }
        const lorum = document.createElement("p");
        lorum.innerHTML = this.responseText;
        document.querySelector("#text").appendChild(lorum);
    };

    // OPTIONAL
    // Error Handling
    xhr.onerror = function () {
        console.log("request error");
    };

    // Sends request
    xhr.send();

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}
