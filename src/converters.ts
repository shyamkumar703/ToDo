import * as admin from "firebase-admin";
import { ToDo } from "./types";

/*
We use converters to specify the type of object Firestore expects,
or the type of object we expect from Firestore. When we read from
the database, a response comes back in JSON format (which is
essentially just a dictionary of type [string: any]). We want to
convert that to a type we can easily interact with in our code (a ToDo).
When we add .withConverter(toDoConverter) to a document reference, the
Firebase SDK automatically attempts to convert the dictionary it receives
into a ToDo.
*/

export const toDoConverter: admin.firestore.FirestoreDataConverter<ToDo> = {
  toFirestore(data) {
    return data;
  },
  fromFirestore(snapshot: admin.firestore.QueryDocumentSnapshot<ToDo>) {
    const data = snapshot.data();
    return data;
  },
};
