
module.exports = {
    successCreated(data){
        return {
            data : data,
            success : true,
            message : "created successfully"
        }
    },

    successUpdated(data){
        return {
            data : data,
            success : true,
            message : "updated successfully"
        }
    },

    successDeleted(data){
        return {
            data : data,
            success : true,
            message : "deleted successfully"
        }
    },

    successRead(data){
        return {
            data : data,
            success : true,
            message : "fetched successfully"
        }
    },

     error(err){
        return {
            err : err.errors,
            success : false,
            message : "Something bad happened"
        }
    }
}