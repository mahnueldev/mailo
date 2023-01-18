const corsOptions = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:5000', 'http://localhost:5000'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204 
    allowedHeaders: ['Content-Type', 'Authorization']
}

module.exports = corsOptions;
