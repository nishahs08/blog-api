
module.exports = {
     error(err){
        return {
            err : err,
            success : true,
            message : "Something suicidal happened"
        }
    }
}