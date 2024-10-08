import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <Image
        width={300}
        height={300}
        src="/images/MENU.png"
        alt="Imagem de construção"
      />
      <h1 style={{ marginTop: "15px" }}>Em construção...</h1>
      <p style={{ marginTop: "20px", marginBottom: "50px" }}>
        Menuscore - 2024
      </p>
    </div>
  );
}

export default Home;
