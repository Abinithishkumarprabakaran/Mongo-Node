import { ObjectId } from "mongodb";
import { client } from "../index.js";

export async function updateMoviesById(id, data) {
    return await client
        .db("newMongo")
        .collection("movies")
        .updateOne({ _id: new ObjectId(id) }, { $set: data });
}
export async function deleteMoviesbyId(id) {
    return await client
        .db("newMongo")
        .collection("movies")
        .deleteOne({ _id: new ObjectId(id) });
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
        .findOne({ _id: new ObjectId(id) });
}
export async function getAllMovies(query) {
    return await client
        .db("newMongo")
        .collection("movies")
        .find(query)
        .toArray();
}
