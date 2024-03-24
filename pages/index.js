import React from "react";
import minhaImagem from "/workspaces/clone-tabnews/MENU.png";

function Home() {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <img
        src={minhaImagem}
        alt="Imagem de construção"
        style={{ width: "200px" }}
      />
      <h1 style={{ marginTop: "20px" }}>Em construção...</h1>
      <p style={{ marginTop: "20px", marginBottom: "50px" }}>
        Menuscore - 2024
      </p>
    </div>
  );
}

export default Home;
