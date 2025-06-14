const express = require('express');
const path = require('path');

const app = express();
const PORT = 8888;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'trash.html'));
});

app.listen(PORT, () => {
    console.log(`Trash server запущено: http://localhost:${PORT}`);
});
