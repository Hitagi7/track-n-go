import { useState } from 'react'
import './Footer.css'

function Footer() {

  return (
    <div className="Footer">
      <img src="/src/assets/TNG Logo V2.png" alt="Logo Text" class="logo"/>
      <p>
        Gov. M. Cuenco Ave., Talamban, Talamban,
        <br />
        Cebu City 6000, Cebu, Philippines |
        <br />
        www.tngexpress.ph
      </p>
      <p>
        (+63) 322 300 100 204
        <br />
        (+63) 322 547 742
        <br />
        Fax (+63) 322 547 742
      </p>
      <p>
        <a href="#">Privacy Policy</a>
        <br />
        ©️2024 TNG Express All Rights Reserved
      </p>
    </div>
  );
}

export default Footer