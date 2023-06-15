import React, { useEffect, useState } from 'react';

function HelloWorld() {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/fileContent')
      .then(response => response.json())
      .then(data => setFileContent(data.content))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="content-box">
      <pre>{fileContent}</pre>
    </div>
  );
}

export default HelloWorld;
