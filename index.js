const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    req.io = io;
    next();
})
const auth = require('./routes/authRoutes');
const camera = require('./routes/cameraRoutes');
const controls = require('./routes/controlRoutes');
const match = require('./routes/matchRoutes');
app.use('/api/auth', auth);
app.use('/api/camera', camera);
app.use('/api/controls', controls);
app.use('/api/match', match);
http.listen(process.env.PORT || 3100);
