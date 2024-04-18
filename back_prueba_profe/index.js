const express = require('express');
const app = express();

app.use(express.json());

let notes = [
    {
      id: 1,
      content: "HTML is easy and complex at the same time",
      important: true,
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false,
    },
    {
      id: 3,
      content: "GET and POST are  methods of HTTP protocol",
      important: true,
    },
  ];

//root
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
})

//api all notes
app.get("/api/notes", (request, response) => {
    response.json(notes);
  });

const PORT= 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});