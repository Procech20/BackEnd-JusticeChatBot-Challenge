//@desc     middleware to log request to the console
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`.dim);
    next();
};

export default logger;