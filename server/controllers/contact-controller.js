const contact  = require("../model/contact-model");

const contactForm = async (req,res) =>{
try {
    const response = req.body;
    await contact.create(response);
    res.status(200).json({
        message: "message sent successfully"
    })
} catch (error) {
    res.status(400).json({
        message: "not authorized"
    })
}
}
module.exports = contactForm;
