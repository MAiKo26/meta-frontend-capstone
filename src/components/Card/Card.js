import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="cardcontainer">
      <div className="cardh">
        <img src="/assets/dish1.png"></img>
        <div>
          <h3>Brushetta</h3>
          <p>
            Our Bruschetta is made from homemade grilled bread that has been
            smeared with garlic and seasoned with salt and olive oil. Topped
            with fresh vegetables.
          </p>
        </div>
      </div>
      <div className="cardh">
        <img src="/assets/dish2.png"></img>
        <div>
          <h3>Greek Salad</h3>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
        </div>
      </div>
      <div className="cardh">
        <img src="/assets/dish3.png"></img>
        <div>
          <h3>Grilled Fish</h3>
          <p>
            Experience the grilled fish, a culinary masterpiece. Savor the
            perfect blend of crispy lettuce, peppers, olives, and our
            Chicago-style feta cheese, complemented by garlic and rosemary
            croutons in our renowned Greek salad.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
