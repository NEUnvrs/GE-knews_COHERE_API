// consulting co:here API documentation, it seems node.js code doesn't work so I took CURL version 

const url = 'https://api.cohere.ai/generate';

const fetchAI = async (prompt) => {
    let result = ''

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Cohere-Version': '2022-12-06',
            'content-type': 'application/json',
            authorization: 'Bearer ejR0MXB70WSeGBgQOTacUY597rdNtQSvRE6i9c7L'
        },
        body: JSON.stringify({
            prompt: `${prompt}`,
            max_tokens: 300,
            return_likelihoods: 'NONE',
            truncate: 'END',
            model: "command-xlarge-nightly",
            temperature: 0.9,
            k: 0,
            p: 0.75,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop_sequences: []
            
        })


    };

    await fetch(url, options)
        .then(res => res.json())
        .then(json => result = json.generations[0].text)
        .catch(err => console.error('error:' + err));
        console.log(result)
        return result
}
export default fetchAI