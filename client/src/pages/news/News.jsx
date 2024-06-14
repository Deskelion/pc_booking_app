import BookingButton from "../../components/bookingButton/BookingButton";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./news.css";
import { useState } from "react";

const News = () => {
  const [showForm, setShowForm] = useState(false); // Добавлено состояние для управления видимостью формы

  const bookingHandler = () => {
    setShowForm(true); // Показываем форму при нажатии на кнопку
  };
 
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <div className="holder">
          <div className="plug">
            News
          </div>          
        </div>
        {!showForm && <BookingButton onClick={bookingHandler}/>}
        {showForm && 
        <div className="formContainer">
          <Form setShowForm={setShowForm}/>
        </div>}
        <Footer/>
      </div>
    </div>
  );
};

export default News;
