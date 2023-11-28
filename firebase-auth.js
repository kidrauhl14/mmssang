import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";

// 사용자 정보를 Firestore에 저장
const saveUserInfoToFirestore = async (uid, email, displayName, photoURL) => {
  const userRef = collection(db, "users");

  try {
    const docRef = await addDoc(userRef, {
      uid: uid,
      email: email,
      displayName: displayName,
      photoURL: photoURL,
    });

    console.log("사용자 정보 저장 성공:", docRef.id);
  } catch (err) {
    console.error("사용자 정보 저장 실패:", err.message);
  }
};

export { saveUserInfoToFirestore };
