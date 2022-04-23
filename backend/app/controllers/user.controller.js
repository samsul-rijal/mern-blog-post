const {User} = require('../models')
// const User = db.users

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.findAll = (req, res) => {
    User.find()
        .then((result) => {
            res.send(result)

        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error while retrieving post"
            })
        });
}

exports.register = async (req, res) => {

    try {




        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const userExist = await User.findOne({email: req.body.email})

        if(userExist){
            return res.status(400).send({message: 'Email already registered'})
        }

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY)

        res.status(201).send({
            status: "success...",
            data: {
                name: user.name,
                email: user.email,
                token
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Registration failed",
        });
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        if (!user) {
            return res.status(400).send({
                status: 'failed',
                message: 'Email or password not match'
            })
        }

        const isValid = await bcrypt.compare(req.body.password, user.password)

        if (!isValid) {
            return res.status(400).send({
                status: 'failed',
                message: "Email or password not match"
            })
        }

        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY)

        res.status(200).send({
            status: "success...",
            data: {
                name: user.name,
                email: user.email,
                token
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Login failed",
        });
    }
}

exports.deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      await User.findByIdAndRemove(id)
  
      res.send({
        status: "success",
        message: `Delete user id: ${id} success`,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
  };