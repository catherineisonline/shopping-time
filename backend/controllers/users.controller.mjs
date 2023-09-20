import * as userServices from "../services/users.services.mjs";

export const getUsers = (req, res) => {
    userServices.getUsersService().then((result) => res.status(200).json({
        message: "200",
        data: result[0]
    })).catch(err => res.status(500).send(err));
}