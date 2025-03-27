const fs = require('fs');
const http = require('http');
const os = require('os');

const osType = os.type();

const htmlContent = `
<!DOCTYPE html>
<html>
    <h3>Hello, World! Your OS type is ${osType}. v2</h3>
</html>
`

const server = http.createServer((req, res) => {
    console.log("First, create index2.html file with contents from htmlContent.");
    fs.writeFileSync('./index2.html', htmlContent); // σύγχρονη μέθοδος, η εκτέλεση κώδικα δεν προχωράει αν δεν ολοκληρωθεί αυτή η μέθοδος
    console.log("Then, read the created index2.html file.");
    let readFile = fs.readFileSync('index2.html', 'utf8');
    if (readFile) {
        console.log("Finally, send its contents back as a response.")
        res.setHeader('Content-Type', 'text-html');
        res.end(readFile)
    }
})

server.listen(3000, () => {
    console.log("Server listening on port 3000.");
})