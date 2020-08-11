//metodos: index, show, update, store, destroy

import User from '../models/User'

class SessionController{
    async store(req, res){

        const { email } = req.body;

        let user = await User.findOne({ email });

        !user ? user = await User.create({ email }) : user = `Usuario já cadastrado ${user}` //operador ternario


        return res.json(user);
    }
}

export default new SessionController();