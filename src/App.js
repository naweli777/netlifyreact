import "./App.css";

function App() {
  return (
    <div className="App" style={{ width: "100%", position: "relative" }}>
      <img
        src="https://images.unsplash.com/photo-1665149368357-864968813478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="background"
        style={{ width: "100%" }}
      />
      <h1
        style={{
          position: "absolute",
          top: "100px",
          right: "230px",
          fontSize: "5rem",
        }}
      >
        Netlify Session without using CLI
      </h1>
      <p  style={{
          position: "absolute",
          top: "300px",
          right: "230px",
          fontSize: "2rem",
        }}>Let's change something</p>
    </div>
  );
}

export default App;
