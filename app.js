import express from 'express';

// set up Express to create an app and configure it to parse requests with JSON payloads
const app = express ();
app.use(express.json());

// response.send(status) is now a function that takes the JSON object as the argument.

app.get("/status", (request, response) => {
   const status = {
      "Status": "Running"
   };
   
   response.send(status);
});

app.post("/posted", (request, response) => {
    const posted = {
        "posted": "Posted successfully"
    }
    response.send(posted);
});

app.patch("/make_change", (request, res) => {
    const make_change = {
        "make_change": "Putten in successfully"
    }
    res.send(make_change);
});



const PORT = process.env.PORT || 8080;

app.listen (PORT, function (){
    console.log('Server is listening on port 8080');
});