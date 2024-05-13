import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {}

  return (
    <>
      <h1>My HomePage</h1>
      <p>
        Go to <Link to="products">the list of products</Link>
      </p>
      <p>
        <button>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
