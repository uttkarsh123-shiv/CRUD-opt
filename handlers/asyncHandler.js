module.exports = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
        .catch((err) => {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: 'Internal Server Error',
            });
        });
}