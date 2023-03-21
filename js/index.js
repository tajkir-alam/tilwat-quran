const loadQuran = async() => {
    const URL = "http://api.alquran.cloud/v1/quran/quran-uthmani";
    const res = await fetch(URL);
    const data = await res.json();
    // displayQuran(data);
    displayQuran(data.data.surahs)
}

const displayQuran = (datas) => {
    const cardsContainer = document.getElementById('cards-container');
    datas.slice(0,15).map(data => {
        console.log(data.ayahs[0].text.slice(40))
        const {name, englishName, ayahs} = data;
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card h-64 w-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-2xl text-blue-700 justify-end">${name}</h2>
                    <h3 class="card-title justify-">${englishName}</h3>
                    <p class="text-right">${ayahs[0].text} ${ayahs[1].text}</p>
                    <div class="card-actions justify-end">
                      <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        `
        cardsContainer.appendChild(div);
    })
}

loadQuran();