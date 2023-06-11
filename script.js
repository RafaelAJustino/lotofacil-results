$.get("https://loteriascaixa-api.herokuapp.com/api/lotofacil", function (resultado) {
    const dezenas = resultado.map((a) => {
        return {
            dezenas: a.dezenas,
            concurso: a.concurso
        }
    }).slice(0, 20);

    const numbers = [
        { id: 1, qtd: 0 },
        { id: 2, qtd: 0 },
        { id: 3, qtd: 0 },
        { id: 4, qtd: 0 },
        { id: 5, qtd: 0 },
        { id: 6, qtd: 0 },
        { id: 7, qtd: 0 },
        { id: 8, qtd: 0 },
        { id: 9, qtd: 0 },
        { id: 10, qtd: 0 },
        { id: 11, qtd: 0 },
        { id: 12, qtd: 0 },
        { id: 13, qtd: 0 },
        { id: 14, qtd: 0 },
        { id: 15, qtd: 0 },
        { id: 16, qtd: 0 },
        { id: 17, qtd: 0 },
        { id: 18, qtd: 0 },
        { id: 19, qtd: 0 },
        { id: 20, qtd: 0 },
        { id: 21, qtd: 0 },
        { id: 22, qtd: 0 },
        { id: 23, qtd: 0 },
        { id: 24, qtd: 0 },
        { id: 25, qtd: 0 },
    ]

    for (const x of dezenas) {
        x.dezenas.map((a) => numbers[parseInt(a) - 1].qtd = numbers[parseInt(a) - 1].qtd + 1);
    }

    const ordened = numbers.sort(function (a, b) {
        return a.qtd < b.qtd ? -1 : a.qtd > b.qtd ? 1 : 0;
    });

    const filtered = ordened.slice(0, 15);

    const filteredOrdened = filtered.sort(function (a, b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });

    const div = document.getElementById('div-results');
    const last = document.getElementById('last-results');

    const laoding = document.getElementById('loading');

    filteredOrdened.map((n) => {
        const newP = document.createElement('p');

        const value = n.id.toString();

        newP.innerHTML = value.length == 1 ? `0${value}` : value;

        div.append(newP);
    })

    dezenas.map((n) => {
        const title = document.createElement('p');
        title.innerText = 'Concurso: ' + n.concurso;
        const newHr = document.createElement('hr');
        const newDiv = document.createElement('div');
        newDiv.classList.add('results')

        n.dezenas.map((a) => {
            const newP = document.createElement('p');

            newP.innerHTML = a;

            newDiv.append(newP);
        })

        last.append(title);
        last.append(newDiv);
        last.append(newHr);
    })

    laoding.style.cssText = 'display: none;'
})