const express = require('express');
const {PORT} = require('./config/index');
const app = express();
const { appRouter } = require('./routers/index.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());

app.use('/api',appRouter);

app.get('/ping', (req,res)=>{
    return res.json({message: "Server is up and running"});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
