const {z} = require("zod");

const signupSchema = z.object({
    username: z.
    string({required_error: "Name is required"})
    .trim()
    .min(3,{message: "name must be at least of 3 chars"}),

    email: z.
    string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"}),

    password:z.
    string({required_error: "password is required"})
    .trim()
    .min(6,{message:"password must be at least 6 character"})

});

module.exports = signupSchema;