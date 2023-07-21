function Search(entry) {
    const urlDefinition =
        "https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=" +
        entry;
    const urlAssociatedWords =
        "https://twinword-word-graph-dictionary.p.rapidapi.com/association/?entry=" +
        entry;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "57f76065fbmsh38574de6c6fda3dp128d13jsn36f6adf3c736",
            "X-RapidAPI-Host": "twinword-word-graph-dictionary.p.rapidapi.com",
        },
    };

    fetch(urlDefinition, options)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            entryheading.innerHTML = response.entry;
            noun.innerHTML = response.meaning.noun;
            verb.innerHTML = response.meaning.verb;
        })
        .catch((error) => {
            console.error(error);
        });
    fetch(urlAssociatedWords, options)
        .then((response) => response.json())
        .then((response) => {
            // console.log(response);
            console.log(response);
            assoc_word.innerHTML = response.assoc_word;
        })
        .catch((error) => {
            console.error(error);
        });
}

search.addEventListener("click", (e) => {
    e.preventDefault();
    Search(searchinput.value);
});
