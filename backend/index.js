import express from 'express';
import cors from 'cors';

//import Route
import PegawaiRoute from "./routes/PegawaiRoute.js"
import LoginRoute from "./routes/LoginRoute.js"

const app = express();

app.listen(5000, () => console.log('server running....'));

app.use(cors());
app.use(express.json());

//end point
app.use(PegawaiRoute);
app.use(LoginRoute);