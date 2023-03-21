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
        // console.log(data.englishName)
        const {name, englishName} = data;
        const div = document.createElement('div');
        div.classList = "card w-96 bg-base-100 shadow-xl";
        div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title">${englishName}</h3>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
        cardsContainer.appendChild(div);
    })
}

loadQuran();