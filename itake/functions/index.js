const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase); 

const express = require("express");
const cors = require("cors");
const router = express();
router.use(cors({ origin: true }));

router.get("/perros/:perro", async (req, res) => {
  const perro = await admin
    .firestore()
    .collection("perros")
    .doc(req.params.perro)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        console.log("No such document!");
        return {};
      }
    });
  res.send(perro);
});
router.get("/perros", async (req, res) => {
  const perros = await admin
    .firestore()
    .collection("perros")
    .get();
  var lista = [];
  perros.docs.forEach((doc) => {
    lista.push({ id: doc.id, data: doc.data() });
  });
  res.send(lista);
});
router.post("/perro", async (req, res) => {
  const perro = await admin
    .firestore()
    .collection("perros")
    .add(req.body)
    .then((docRef) => {
      return docRef.id;
    });
  res.send(perro);
});
router.put("/perro/:id", async (req, res) => {
  const perro = await admin
    .firestore()
    .collection("perros")
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
  res.send(perro);
});
router.delete("/perro/:id", async (req, res) => {
  const perro = await admin
    .firestore()
    .collection("perros")
    .doc(req.params.id)
    .delete();
  res.send(perro);
});
exports.perros = functions.https.onRequest(router);
​