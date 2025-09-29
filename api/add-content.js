let savedData = []; // in-memory storage (temporary, resets on server restart)

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    savedData.push(message);
    res.status(200).json({ success: true, message });
  } else if (req.method === 'GET') {
    res.status(200).json(savedData);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
