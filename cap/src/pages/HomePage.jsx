// src/pages/HomePage.jsx
export default function HomePage() {
  return (
    <div className="centered">
      <h1>Welcome to the Crewmate Creator!</h1>
      <p>Create your very own set of crewmates before sending them off into space!</p>
      <img
        src="/cat.webp"
        alt="Cute Cartoon Cat"
        style={{
          width: '300px',
          marginTop: '20px',
          borderRadius: '12px'
        }}
      />
    </div>
  );
}
