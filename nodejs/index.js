const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { Client } = require("pg");
const { clear, log } = require("node:console");

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "testdb",
    password: "lum1na0929",
    port: 5432,
});

client.connect();
const server = http.createServer(async (req, res) => {
    // return a html file
    // if (req.url == "/home") {
    //     fs.readFile(path.join(__dirname, "public", "home.html"), (err, data) => {
    //         if (err) throw err;
    //         res.writeHead(200, { "content-type": "text/html" });
    //         res.write(data);
    //         res.end();
    //         console.log("Rendering Home Page ..................");
    //     });
    // }
    // // return a user in json format
    // if (req.url == "/api/user") {
    //     const users = [
    //         { id: 1, name: "lum1na" },
    //         { id: 2, name: "sasa" },
    //     ];
    //     res.writeHead(200, { "content-type": "application/json" });
    //     res.write(JSON.stringify(users));
    //     res.end();
    //     console.log("Sending User Json ....................");
    // }

    //  redirection
    let filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "home.html" : req.url,
    );

    // get extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = "text/html";
    switch (extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    // readfile
    // fs.readFile(filePath, (err, content) => {
    //     if (err) {
    //         console.log("errcode:", err.code);
    //         if (err.code == "ENOENT") {
    //             // Page Not Found
    //             fs.readFile(
    //                 path.join(__dirname, "public", "404.html"),
    //                 (err, content) => {
    //                     res.writeHead(200, { "content-type": "text/html" });
    //                     res.end(content);
    //                 },
    //             );
    //         } else {
    //             // Some Server Error
    //             res.writeHead(500);
    //             res.end(`Server Error: ${err.code}`);
    //         }
    //     } else {
    //         //success
    //         const pgres = await client.query('')
    //         res.writeHead(200, { "content-type": contentType });
    //         res.end(content);
    //     }
    // });
    const pgres = await client.query("SELECT NOW()");
    res.end(JSON.stringify(pgres.rows));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
