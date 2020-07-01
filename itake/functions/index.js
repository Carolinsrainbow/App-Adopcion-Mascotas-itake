const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const express = require("express");
const cors = require("cors");
const router = express();
router.use(cors({
  origin: true
}));

// router.get("/personas/:persona", async (req, res) => {
//   const persona = await admin
//     .firestore()
//     .collection("personas")
//     .doc(req.params.persona)
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         console.log("Document data:", doc.data());
//         return doc.data();
//       } else {
//         console.log("No such document!");
//         return {};
//       }
//     });
//   res.send(persona);
// });
router.get("/personas", async (req, res) => {
  const personas = await admin
    .firestore()
    .collection("personas")
    .get();
  var lista = [];
  personas.docs.forEach((doc) => {
    lista.push({
      id: doc.id,
      data: doc.data()
    });
  });
  res.send(lista);
});
router.post("/persona", async (req, res) => {
  const persona = await admin
    .firestore()
    .collection("personas")
    .doc(req.body.email)
    .set(req.body.perritos)
    .then(() => {
      console.log('todo bien')
    });
  res.send(persona);
});
router.put("/persona/:id", async (req, res) => {
  const persona = await admin
    .firestore()
    .collection("personas")
    .doc(req.params.id)
    .update(req.body)
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        console.log("No such document!");
        return {};
      }
    });
  res.send(persona);
});
router.delete("/persona/:id", async (req, res) => {
  const persona = await admin
    .firestore()
    .collection("personas")
    .doc(req.params.id)
    .delete();
  res.send(persona);
});
exports.personas = functions.https.onRequest(router);