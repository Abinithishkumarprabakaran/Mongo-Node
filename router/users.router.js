import express from "express";
import { createUser, getUserByName } from "../service/users.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

async function generateHashedPassword( password ) {
  const NO_OF_ROUNDS = 10;
  const  salt = await bcrypt.genSalt( NO_OF_ROUNDS );
  const hashedPassword = await bcrypt.hash(password, salt);
  // console.log(salt);
  // console.log(hashedPassword)
  return hashedPassword;
}

router.post("/signup", async function (request, response) {
  const { username, password } = request.body;

  const userFromDB = await getUserByName(username);
  // console.log(userFromDB)

  if( userFromDB ) {
    response.status(404).send({message: "Username Already Exists"})
  }
  else if( password.length < 8) {
    response.status(404).send({message: "Password length should be more than 8 characters"})
  }
  else {
    const hashedPassword = await generateHashedPassword(password)
    const result = await createUser({
      username: username,
      password: hashedPassword
    })
    response.send(result);
  }
})

router.post("/login", async function (request, response) {
  const { username, password } = request.body;

  const userFromDB = await getUserByName(username);
  // console.log(userFromDB)

  if( !userFromDB ) {
    response.status(404).send({message: "Invalid Credentials"})
  }
  else {
    const storedDBPassword = userFromDB.password;
    const isPasswordCheck = await bcrypt.compare(password, storedDBPassword)
    // console.log(isPasswordCheck)
    if( isPasswordCheck ) {
      const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY)
      // console.log(token)
      response.send({ message: 'Login successful', token: token })
    }
    else {
      response.status(400).send({ message: 'Invalid Credentials' })
    }
  }
})

export default router

