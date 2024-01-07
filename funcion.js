let reportJokes = [];

function votar(calificacion)
{
    let chiste = document.getElementById('chiste').innerHTML;
    let fecha = new Date();
    let pos = -1;

    let objeto = {
        joke: chiste,
        score: calificacion,
        date: fecha
    };

    for(let i = 0; i < reportJokes.length; i++)
    {
        if(reportJokes[i].joke == objeto.joke)
        {
            pos = i;
        }
    }

    if(pos != -1)  
    {
        reportJokes[pos].score = calificacion;
    }
    else  
    {
        reportJokes.push(objeto);
    }

    console.log(reportJokes);
}

function siguiente()
{
    let valor = Math.floor(Math.random() * 11);   

    if(valor <= 5)
    {
        fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let joke = data.joke;
            let titulo = document.getElementById('chiste');
            titulo.innerHTML = joke;
        })
        .catch(error => {
            console.log(error);
        });
    }
    else
    {
        fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-RapidAPI-Key': '88d452dbe5mshdcb82f130092061p1da93fjsnfb1891520b01',
                'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let joke = data.value;
            let titulo = document.getElementById('chiste');
            titulo.innerHTML = joke;
        })
        .catch(error => {
            console.log(error);
        });
    }
}

function clima()
{
    fetch('https://my.meteoblue.com/packages/current?apikey=cqoCmjxwSGB8DQbi&lat=41.389&lon=2.159&asl=887&format=json', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let temp = document.getElementById('temperatura');
        temp.innerHTML = data.data_current.temperature + ' °C';
    })
    .catch(error => {
        console.log(error);
    });
}

clima();
siguiente();