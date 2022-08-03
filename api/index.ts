import app from './src/app';
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('Server listening' , 3001);
});
