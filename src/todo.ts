import express from "express";
import { v4 as uuidv4 } from "uuid";

export const todoRouter = express.Router();

/*
REST APIs generally have CRUD (Create, Read, Update, Delete) functionality
Try to use the same path for all of these functions, with different HTTP methods,
that's generally better style than what I did with quicksplit

Create - POST
Read - GET
Update - PATCH
Delete - DELETE

Note that hitting the DELETE endpoint should not remove the ToDo from the database.
Whenever a user asks that something be deleted, you generally want to do what's
referred to as a "soft delete", which means just setting the isDeleted property
on the relevant ToDo object to true. However, when the client asks to read
or update a ToDo that has been "deleted", you should provide the impression
that the object is completely gone (throw an error that the ToDo has been deleted).

Document names should be UUIDs (Universally Unique Identifier). You can make a UUID
with uuidv4(), it'll retun a globally unique string. The reason we want to use
UUIDs is so that document names are never repeated, and we can identify each
ToDo uniquely.

It's also important to know that GET requests can't have a request body, so the
id of the ToDo the client is requesting should be passed in the path. I have an example
of this in quicksplit-be in the party.ts file (on line 9). You should probably do the same thing
for the DELETE endpoint. For CREATE and UPDATE, you can probably expect a ToDo object
in the request body.
*/
