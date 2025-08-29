const errorMiddleWare = (err,req,res,next) =>{
const status = err.status || 502;
const message = err.message || "backend error";

return res.status(status).json({
    message
});

}

module.exports = errorMiddleWare;