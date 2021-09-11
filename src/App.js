import React from "react";
import "./App.css";
import { useState } from "react";



export default function App() {

  const latestPhone = {
  iPhone: [
    { name: "iphone 12", 
      rating: "4.5/5" ,
      description:"15.49 cm (6.1 inch) Super Retina XDR Display ,A14 Bionic Chip with Next Generation Neural Engine Processor"
   },
    { name: "iphone 12 Pro", 
    rating: "4/5" ,
    description:"6.1-inch (15.5 cm diagonal) Super Retina XDR display ,A14 Bionic chip, the fastest chip ever in a smartphone"},
    { name: "iphone 12 Max", 
    rating: "5/5",
    description:"6.7-inch (17 cm diagonal) Super Retina XDR display ,A14 Bionic chip, the fastest chip ever in a smartphone"
   }
  ],

  oneplus: [
    {
      name: "Oneplus 9 Pro",
      rating: "4.5/5",
      description:"6.7 Inches Fluid AMOLED Display with 120Hz refresh rate with ,Qualcomm Snapdragon 888 Processor with Adreno 660 GPU"
    },
    {
      name: "Oneplus 9",
      rating: "4/5",
      description:"6.55 Inches Fluid AMOLED Display with 120Hz refresh rate ,Qualcomm Snapdragon 888 Processor with Adreno 660 GPU"
    },
    {
      name: "Oneplus 9R ",
      rating: "4.5/5",
      description:"6.55 Inches Fluid AMOLED display with 120 Hz of Refresh rate ,Qualcomm Snapdragon 870 5G with upgraded Qualcomm Kryo 585 CPU"
    }
  ],
  samsung: [
    {
      name: "Galaxy Z Fold3",
      rating: "3.5/5",
      description:" 15.82cm (6.2”) dynamic AMOLED 2X  with Adaptive Refresh Rate 60/120Hz,5G Ready powered by Qualcomm Snapdragon 888 Octa-Core processor."
    },
    {
      name: "Galaxy S21 Ultra",
      rating: "4.5/5",
      description:" (6.8-inch) dynamic AMOLED 2X  with Adaptive Refresh Rate 60/120Hz,Android Pie v10.0 operating system with Snapdragon 888 processor."
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
              <p>{phone.description}</p>
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