const express = require('express');
const app = express();
const port = 3002;


// 01. Route parameter
app.get('/child/:id', (req, res) => {
    const childId = req.params.id
    res.send(`Child ID: ${childId}`);
});

// 02. Query parameter
app.get('/child', (req, res) => {
    const childId = req.query.id
    res.send(`Child ID: ${childId}`);
});

// Query parameter for search
// http://localhost:3002/search?query=Oh God&page=500
app.get('/search', (req, res) => {
    const {query, page } = req.query;
    res.send(`Query: ${query}, Page: ${page}`);
});

// 03. Route parameter with query parameter
// http://localhost:3002/child/700/details?type=Goodie
// Child ID: 700, Detail Type: Goodie
app.get('/child/:id/details', (req, res) => {
    const childId = req.params.id;
    const detailType = req.query.type;
    res.send(`Child ID: ${childId}, Detail Type: ${detailType}`);
});

// 04. Multiple route parameter
// http://localhost:3002/child/700/parent/500
// Child ID: 700, Parent ID: 500
app.get('/child/:childId/parent/:parentId', (req, res) => {
    const { childId, parentId } = req.params;
    res.send(`Child ID: ${childId}, Parent ID: ${parentId}`);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})