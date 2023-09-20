import * as userServices from "../services/users.services.mjs";

export const getUsers = (req, res) => {
    userServices.getUsersService().then((result) => res.status(200).json({
        message: "200",
        data: result[0]
    })).catch(err => res.status(500).send(err));
}

export const getSingleUser = (req, res) => {
    const { id } = req.params;
    userServices.getSingleUserService(id).then((result) => res.status(200).json({
        message: "200",
        data: result[0]
    })).catch(err => res.status(500).send(err));
}

export const updateUser = (req, res) => {
    const user = req.body;
    const { id } = req.params;
    userServices.updateUserService(id, user).then(() => res.status(200).json({
        message: "200",
        data: user
    })).catch(err => res.status(500).send(err));
}


export const deleteUser = (req, res) => {
    const { id } = req.params;
    userServices.deleteUserService(id).then(() => res.status(200).json({
        message: "200"
    })).catch(err => res.status(500).send(err))
}

export const createUser = (req, res) => {
    const user = req.body;
    user.createUser(user).then(() => res.status(200).json({
        message: "200",
        data: user
    })).catch(err => res.status(500).send(err));
}