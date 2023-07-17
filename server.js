const express = require('express')
const path = require('path')
const app = express()
const port = 5500

app.get('/searchword', (req, res) =>{
  console.log (path.join(__dirname, 'public'));
  return res.sendFile('public/index.html',{root: __dirname})
});
app.get('/', (req, res) => {
  res.send('Hello World!')
  let url = 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/?entry=mask';
  const fetch = require('node-fetch');

  console.log(req.params)
  let options = {
    method: 'GET',
    params:{entry:'ridiculous'},
    headers: {
      'X-RapidAPI-Key': '57f76065fbmsh38574de6c6fda3dp128d13jsn36f6adf3c736',
      'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:5500`) 
})