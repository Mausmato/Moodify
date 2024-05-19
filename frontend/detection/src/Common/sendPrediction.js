const sendPrediction = (prediction) => {
    const data = prediction
    const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    fetch('http://localhost:4000/mood',options)
  
      .then(response => {
        if (!response.ok) {
            throw new Error('FAT Response');
        }
        return response.json();
      })
      .then(responseData => {
          console.log('Response:', responseData);
    })
};

export default sendPrediction;