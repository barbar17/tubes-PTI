import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import multer from 'multer'

//import Route
import PegawaiRoute from "./routes/PegawaiRoute.js"
import LoginRoute from "./routes/LoginRoute.js"
import SuratCutiRoute from "./routes/SuratCutiRoute.js"
import AdminRoute from "./routes/AdminRoute.js"

const app = express();

app.listen(5000, () => console.log('server running....'));

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));

//end point
app.use(PegawaiRoute);
app.use(LoginRoute);
app.use(SuratCutiRoute);
app.use(AdminRoute);