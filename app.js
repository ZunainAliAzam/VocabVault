function Search(entry) {
    const url= 'https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=' + entry
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '57f76065fbmsh38574de6c6fda3dp128d13jsn36f6adf3c736',
            'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
        }
    };
    
    fetch(url, options)
        .then(response => response.json())
        .then((response,assoc_word) => {
            console.log(response);
            console.log(assoc_word)
            entryheading.innerHTML = response.entry;
            noun.innerHTML = response.meaning.noun;
            verb.innerHTML = response.meaning.verb;
        })
        .catch( (error) => {
        console.error(error);
        })
}

search.addEventListener('click', (e) => {
    e.preventDefault();
    Search(searchinput.value)
});