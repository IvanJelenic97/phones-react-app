import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { PhoneCard } from "./components/card/PhoneCard";
import { TitleContainer } from "./components/container/TitleContainer";
import { Header } from "./components/header/Header";
import { PhoneNavbar } from "./components/navbar/PhoneNavbar";
import { firestore } from "./firebase/config";
import { PhoneModal } from "./components/modal/PhoneModal";
import { ViewPhoneModal } from "./components/modal/ViewPhoneModal";

function App() {
  const [phones, setPhones] = useState([]);

  const [viewPhone, setViewPhone] = useState({});

  const fetchPhones = async () => {
    const req = await firestore
      .collection("phones")
      .orderBy("postedOn", "desc")
      .get();
    const tempPhones = req.docs.map((phone) => ({
      ...phone.data(),
      id: phone.id,
    }));
    setPhones(tempPhones);
  };

  useEffect(() => {
    fetchPhones();
  }, []);
  const postPhone = async (phoneDetails) => {
    const time = Date.now();
    await firestore.collection("phones").add({
      ...phoneDetails,
      postedOn: new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }).format(time),
    });
    fetchPhones();
  };
  return (
    <Router>
      <PhoneNavbar />
      <Header />
      <TitleContainer />
      {phones.map((phone) => (
        <PhoneCard show={() => setViewPhone(phone)} key={phone.id} {...phone} />
      ))}
      <PhoneModal postPhone={postPhone} />
      <ViewPhoneModal phone={viewPhone} closeModal={() => setViewPhone({})} />
      <Routes></Routes>
    </Router>
  );
}

export default App;
