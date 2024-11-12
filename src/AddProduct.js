import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const handleAddProduct = async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "products"), {
      name: productName,
      price: parseFloat(price),
    });
    setProductName("");
    setPrice("");
    alert("Product added successfully!");
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};
