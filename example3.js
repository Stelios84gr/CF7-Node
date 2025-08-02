const fs = require('fs');
const http = require('http');
const os = require('os');

const osType = os.type();
console.log(osType);

const htmlContent = `
<!DOCTYPE html>
<html>
    <h3>Hello, World! Your OS type is ${osType}.</h3>
</html>
`

const server = http.createServer((req, res) => {
    console.log("First, create index.html file with contents from htmlContent.");
    // argument1: file path to be created, argument2: file data, argument3: callback function in case of error
    fs.writeFile('./index.html', htmlContent, err => {
        if (err) {
            console.log("Error in writing file.")
        } else {
            console.log("Read file and send it back as a response.");
            // argument1: file path of file to be red, argument2: encoding, argument3: callback function in case of error
            fs.readFile('index.html', 'utf8', (err, content) => {
                if (err) {
                    console.log("Error reading the file.", err)
                }
                res.setHeader('Content-Type', 'text/html');
                res.end(content);
            })
        }
    })     

});

server.listen(3000, () => {
    console.log("Server is listening on port 3000.");
})