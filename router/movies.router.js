import express from "express";
import { auth } from "../middleware/auth.js";
import { getAllMovies, getMoviesbyId, createMovies, deleteMoviesbyId, updateMoviesById } from "../service/movies.service.js";
const router = express.Router();

router.get("/", auth, async function (request, response) {

  // db.movies.find({})
  // Cursor - Pagination

  const res = await getAllMovies()

  response.send(res);
});

router.get("/:id", auth, async function (request, response) {
  const {id} = request.params;
  // console.log(id);

  const movie = await getMoviesbyId(id)

  movie ? response.send(movie) : response.status(404).send({message : "Movie not Found"});
});

// app.get("/movies/:id", function (request, response) {

//   const {id} = request.params;
//   console.log(id);
//   const movie = movies.find((mv) => mv.id === id);
//   movie ? response.send(movie) : response.send({message : "Movie not Found"});
// });

// express.json() -> middleware

// Create
router.post("/", auth, async function (request, response) {
  const data = request.body;
  console.log(data);

  //db.movies.insertMany(data)
  const res = await createMovies(data)

  response.send(res);
})

// Delete
router.delete("/:id", auth, async function (request, response) {
  const {id} = request.params;
  // console.log(id);
  // db.movies.deleteOne({ id: "1000" })

  const result = await deleteMoviesbyId(id)

  // console.log(result)
  result.deletedCount >= 1
   ? response.send({ message : "Movie Deleted Successfully" }) 
   : response.status(404).send({message : "Movie not Found"});
});

// Update
router.put("/:id", auth, async function (request, response) {
  const {id} = request.params;
  const data = request.body;
  // console.log(data);
  // console.log(id);
  // db.movies.updateOne({ id: id }, { $set: data })

  const result = await updateMoviesById(id, data)

  response.send(result);
});

export default router;


