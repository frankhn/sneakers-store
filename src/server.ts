import app from './app';

const { PORT = 8000 } = process.env;

// Start server
app.listen(PORT, () =>
  console.log(
    `Server is listening on port http://localhost:${PORT}/api/v1/swagger ...`,
  ),
);

export default app;
