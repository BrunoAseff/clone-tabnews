import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <div
      style={{
        height: "100vh",
        padding: "1rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        color: "#fefae0",
        fontWeight: "400",
      }}
    >
      <h2>Status</h2>
      <UpdatedAt />
    </div>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  const UpdatedAtText = isLoading
    ? "Carregando..."
    : new Date(data.updated_at).toLocaleString("pt-BR");

  const MaxConnectionsText = isLoading
    ? "Carregando..."
    : data.dependencies.database.max_connections;

  const VersionText = isLoading
    ? "Carregando..."
    : data.dependencies.database.version;

  const OpenedConnectionsText = isLoading
    ? "Carregando..."
    : data.dependencies.database.opened_connections;

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <p>Última atualização:</p>
        <span style={{ color: "#B9F5D8" }}>{UpdatedAtText}</span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <p>Máximo de conexões:</p>
        <span style={{ color: "#B9F5D8" }}>{MaxConnectionsText}</span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <p>Versão:</p>
        <span style={{ color: "#B9F5D8" }}>{VersionText}</span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <p>Conexões abertas:</p>
        <span style={{ color: "#B9F5D8" }}>{OpenedConnectionsText}</span>
      </div>
    </>
  );
}
