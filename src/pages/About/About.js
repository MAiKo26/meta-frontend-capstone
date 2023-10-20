import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
function About() {
  return (
    <div>
      <Navbar />
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex
        leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa.
        Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum
        blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id,
        vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae
        lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit
        consequat. In dictum ligula in elit euismod malesuada. Curabitur varius
        augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh
        scelerisque ut.
      </p>
      <Footer />
    </div>
  );
}

export default About;
