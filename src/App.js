import React from "react";
import "./App.css";
import { useState } from "react";



export default function App() {

  const latestPhone = {
  iPhone: [
    { name: "iphone 12", rating: "4.5/5" },
    { name: "iphone 12 Pro", rating: "4/5" },
    { name: "iphone 12 Max", rating: "5/5" }
  ],

  oneplus: [
    {
      name: "Oneplus 9 Pro",
      rating: "4.5/5"
    },
    {
      name: "Oneplus 9",
      rating: "4/5"
    },
    {
      name: "Oneplus 9R ",
      rating: "4.5/5"
    }
  ],
  samsung: [
    {
      name: "Galaxy Z Fold3",
      rating: "3.5/5"
    },
    {
      name: "Galaxy S21 Ultra",
      rating: "4.5/5"
    }
  ]
};
  const [selectedCompany, setSelectedCompany] = useState("oneplus");
  function genreClickHandler(company) {
    setSelectedCompany(company);
  }

  return (
    <div className="App">
      <div className='heading_container'>
      <h1>Latest 5G phones </h1>

      <p>
        Checkout my favorite phones
      </p>

      </div>
     
      <div className='button_container' >
        {Object.keys(latestPhone).map((company) => (
          <button
            onClick={() => genreClickHandler(company)}
          >
            {company}
          </button>
        ))}
      </div>
      <hr />
      <div className='result_section' >
        <ul >
          {latestPhone[selectedCompany].map((phone) => (
            <li
              key={phone.name}
            >
              <div className='title'> {phone.name} </div>
              <div className='rating'> {phone.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <section class="footer">
        <p>hareshkotkar</p>
        <ul>
            <li><a href="https://github.com/harshkotkar5557" alt="#"><i class="fab fa-github">&nbsp;Github</i></a></li>
            <li><a href="https://twitter.com/KotkarHaresh" alt="#"><i class="fab fa-linkedin">&nbsp;LinkedIn</i></a>
            </li>
            <li><a href="https://www.linkedin.com/in/harsh-kotkar-389a08139/" alt="#"><i
                        class="fab fa-twitter">&nbsp;Twitter</i></a></li>
        </ul>
    </section>
    </div>
  );
}