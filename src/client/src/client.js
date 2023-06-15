import React, { useEffect, useState } from 'react';

// function HelloWorld() {
//   const [fileContent, setFileContent] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/api/fileContent')
//       .then(response => response.json())
//       .then(data => setFileContent(data.content))
//       .catch(error => console.error('Error:', error));
//   }, []);

//   return (
//     <div className="content-box">
//       <pre>{fileContent}</pre>
//     </div>
//   );
// }

function Client() {
  const [fileContent, setFileContent] = useState('');
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/fileContent')
      .then(response => response.json())
      .then(data => setFileContent(data.content))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <div className="content-box">
        <pre>{fileContent}</pre>
      </div>
      <div>
        <textarea className="full-width" value={userInput} onChange={handleInputChange} />
      </div>
      <div>
        <button onClick={() => alert(userInput)}>
          Submit
        </button>
      </div>
    </div>
  );
}

// export default HelloWorld;
export default Client;
