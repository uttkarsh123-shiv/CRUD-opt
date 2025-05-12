module.exports = (err,req,res,next) => {
    console.log(err);
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: err.message || 'Something went wrong'
    })
}