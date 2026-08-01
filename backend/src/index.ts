import 'dotenv/config';
import app from './app';
import config from './config';

const port = config.PORT || 4000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend running on http://localhost:${port}`);
});
