require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const blogPostRoutes = require('./routes/blogPostRoutes');
const errorsMiddleware = require('./middlewares/errorsMiddleware');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', blogPostRoutes);

app.use(errorsMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
