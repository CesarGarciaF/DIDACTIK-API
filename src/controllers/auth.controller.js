const User = require("../models/user.model");
const { createAccessToken, verifyToken } = require("../libs/jwt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

exports.signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const usernameFound = await User.findOne({ username });
    const emailFound = await User.findOne({ email });

    if (usernameFound)
      return res.status(400).json(["El usuario ya esta en uso"]);
    if (emailFound) return res.status(400).json(["El email ya esta en uso"]);

    const passwordHashed = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHashed,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({
      id: userSaved._id,
      user: userSaved.username,
    });

    res.cookie("token", token, {
      // domain: ".onrender.com",
      domain: "localhost",
      path: "/",
      // secure: true,
      secure: false,
      httpOnly: true,
      // sameSite: "none",
      sameSite: "lax",
    });
    // res.cookie("token", token);

    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    // const hash = await bcrypt.hash(password, 10);
    // console.log(hash);
    // console.log(user.password);

    // if (user && bcrypt.compare(password, user.password))
    //     res.json({message: 'Inicio de sesión exitoso'});
    // else
    //     res.status(401).json({ message: 'Credenciales inválidas'});

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json(["Credenciales inválidas"]);
    }

    const token = await createAccessToken({
      id: user._id,
      email: user.email,
      name: user.name,
      name: user.firstName,
      photo: user.photo,
    });
    // res.cookie("token", token);

    res.cookie("token", token, {
      // domain: ".onrender.com",
      domain: "localhost",
      path: "/",
      // secure: true,
      secure: false,
      httpOnly: true,
      // sameSite: "none",
      sameSite: "lax",
    });
    res.json({ message: "Login successfully" });
  } catch (error) {
    res.status(500).json([error.message]);
  }
};

exports.logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  return res.sendStatus(200);
};

exports.profile = async (req, res) => {
  const userFound = await User.findById(req.user);

  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado" });

  return res.json({
    id: userFound._id,
    email: userFound.email,
    name: userFound.name,
    firstName: userFound.firstName,
    avatar: userFound.avatar,
  });
};

exports.verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "No autoizado" });

  jwt.verify(token, config.secret, async (error, user) => {
    if (error) return res.status(401).json({ message: "No autorizado" });

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
