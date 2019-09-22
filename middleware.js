const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server is running on port 3000'));

/**
 * cho đường dẫn: http://localhost:3000/login/:username/:password
 *
 * Yêu cầu:
 * - neu username = admin va password = 123456 => duoc phep di tiep
 * - Nếu sai => Error!
 */