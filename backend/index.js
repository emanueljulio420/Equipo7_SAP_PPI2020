const express = require('express');
const app = express();
const routes = require('./routes/routes');
const niveles = require('./routes/niveles');
const profesor = require('./routes/profesor');
const rendimineto = require('./routes/rendimiento');

app.set('port', 4001);

app.use(express.json());

//rutas
app.use('/api',routes);
app.use('/api/niveles',niveles);
app.use('/api/profesor',profesor);


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

