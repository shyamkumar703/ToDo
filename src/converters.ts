import * as admin from "firebase-admin";
import { ToDo } from "./types";

export const toDoConverter: admin.firestore.FirestoreDataConverter<ToDo> = {
  toFirestore(data) {
    return data;
  },
  fromFirestore(snapshot: admin.firestore.QueryDocumentSnapshot<ToDo>) {
    const data = snapshot.data();
    return data;
  },
};
