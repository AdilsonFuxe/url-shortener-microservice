import env from './main/config/env';
import { MongoHelper } from './infra/db/mongoose/helper';

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./main/config/app')).default;
    app.listen(env.port, () => {
      console.log(`server running at http://localhost:${env.port}`);
    });
  })
  .catch(console.error);
