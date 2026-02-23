import app from './app.js';
import { connectDB } from './config/db.js';
import { env, validateEnv } from './config/env.js';

const startServer = async () => {
  validateEnv();
  await connectDB();

  app.listen(env.port, () => {
    console.log(`API running on http://localhost:${env.port}/api/v1`);
  });
};

startServer().catch((error) => {
  console.error('Failed to start backend:', error.message);
  process.exit(1);
});
