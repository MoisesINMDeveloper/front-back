import express from 'express';
import cors from "cors";

const app = express();
const PORT:string | 8080 = process.env.PORT || 8080;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.get('/api/home', (req, res) => {
  res.json({message: `Hello world, server is started on port ${PORT}`});
});

app.listen(PORT, ():void => {
  console.log(`Server is running on port ${PORT}`);
});

