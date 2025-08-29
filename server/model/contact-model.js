const {Schema,model} = require("mongoose");

const contactSchema = new Schema ({
    username:{
        type: String,
        required: true
    },

    phone : {
        type : Number,
        required : true
    },
    
    message:{
        type: String,
        required : true
    }

});

const contact = new model("contact",contactSchema)

module.exports = contact;