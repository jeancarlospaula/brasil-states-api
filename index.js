const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const routes = require('./Routes/routes')

app.use('/',routes)

app.use(function(req, res) {
    res.status(404).json({
        'Atenção':'Essa rota não existe. Verifique a URL'
    });
});

app.listen(port, ()=>{console.log('Server Active')})