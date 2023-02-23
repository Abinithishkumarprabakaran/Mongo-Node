import { client } from "../index.js";

export async function updateMoviesById(id, data) {
    return await client
        .db("newMongo")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}
export async function deleteMoviesbyId(id) {
    return await client
        .db("newMongo")
        .collection("movies")
        .deleteOne({ id: id });
}
export async function createMovies(data) {
    return await client
        .db("newMongo")
        .collection("movies")
        .insertMany(data);
}
export async function getMoviesbyId(id) {
    return await client
        .db("newMongo")
        .collection("movies")
        .findOne({ id: id });
}
export async function getAllMovies() {
    return await client
        .db("newMongo")
        .collection("movies")
        .find({})
        .toArray();
}
