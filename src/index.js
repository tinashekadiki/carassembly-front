const express = require("express");
const path = __dirname + '/../dist/';
const app = express();
app.use(express.static(path));

app.get('/', function (req, res) {
    console.log(path + "index.html");
    res.sendFile(path + "index.html");
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});