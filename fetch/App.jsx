import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }

        const responseData = await response.json();

        if (responseData.length > 0) {
          setData(responseData.map(post => post.title));
        } else {
          throw new Error("No posts found");
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {data.length > 0 && (
        <div>
          <h1 style={{ color: 'blue' }}>Titles of Posts:</h1>
          <ul>
            {data.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
