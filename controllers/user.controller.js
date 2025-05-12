const user = require("../models/user.model.js");
const asyncHandler = require("../handlers/asyncHandler.js")
const cloudinary = require("../config/cloudinary.js")
const {successResponse, errorResponse} = require("../utils/apiResponse.js")
const {USER_CREATED, USER_NOT_FOUND} = require("../constants/index.js")

exports.createUser = asyncHandler(async(req,res) => {
    const {name} = req.body;

    if(!req.file) return errorResponse(res, "image is required", 400);

    const result = await cloudinary.uploader.upload_stream(
        {folder:'users'},
        async (error, result) => {
            if(error) return errorResponse(res, error.message, 500);

            const user = await user.create({
                name,
                image:{
                    public_id: result.public_id,
                    url: result.secure_url
                }
            })

            return successResponse(res, USER_CREATED, user);
        }
    )

    result.end(req.file.buffer);

});