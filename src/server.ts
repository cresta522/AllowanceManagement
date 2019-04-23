import * as Express from 'express';
import auth from './routes/auth';
import user from './routes/user';

const app = Express();

app.use('/auth', auth);
app.use('/user', user);


app.listen(5000, () => {
  console.log('Listen on port 5000.');
});

export default app;