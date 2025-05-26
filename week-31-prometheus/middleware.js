export async function middleware(req, res, next) {
  const startTime = Date.now();
  await next();
  const EndTime = Date.now();
  console.log(`Time took  ${EndTime - startTime} ms for method ${req.method} for route ${req.path}`);
}
