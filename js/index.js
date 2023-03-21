const loadQuran = async() => {
    const URL = './completeQuran.json';
    const res = await fetch(URL);
    const data = await res.json();
    displayQuran(data.data.surahs)
}

const displayQuran = (datas) => {
    // console.log(datas)
    const cardsContainer = document.getElementById('cards-container');
    datas.slice(0,15).map(data => {
        console.log(data.number)
        const {name, englishName, ayahs, number} = data;
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card h-[17rem] w-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-2xl text-blue-700 justify-end">${name}</h2>
                    <h3 class="card-title">${englishName}</h3>
                    <p class="text-right">${ayahs[0].text.slice(0, 40)} ${ayahs[1].text.slice(0, 80)}</p>
                   
                    <div class="card-actions justify-end">
                      <label for="my-modal" onclick="loadModal('${number}')" class="btn btn-primary tracking-wide">Tap to Read</label>
                    </div>
                </div>
            </div>
        `
        cardsContainer.appendChild(div);
    })
}

const loadModal = async(number) => {
    const URL = `https://api.alquran.cloud/v1/surah/${number}`;
    const res = await fetch(URL);
    const data = await res.json();
    displayModal(data.data)
}

const displayModal = datas => {
    const {name, englishName, ayahs, number} = datas;
    document.getElementById('modal-arabic-title').innerText = name;
    document.getElementById('modal-english-title').innerText = englishName;
    const span = document.createElement('span');
    
    const eachSurah = ayahs.map(ayah => {
        return ayah.text + " " + ayah.number; 
    })
    document.getElementById('ayahs-are').innerHTML = eachSurah;
}

loadQuran();