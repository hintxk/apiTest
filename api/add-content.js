export default function handler(req, res) {
  res.status(200).json({
    message: "New content added dynamically from Vercel API!"
  });
}
