import userService from "../../../../lib/User/index.js";

const updateUser = async (req, res, next) => {
    const id = req.params.id;

    try {

        const user = await userService.updateUser(id, req.body);
        user.link = req.path;

        res.status(200).json({
            code: 200,
            message: "Update a user Successfully",
            data: user
        }
        )

    } catch (error) {
        next(error)
    }
}

export default updateUser;