const loadQuran = async(dataLimitFrom, dataLimitTo) => {
    const URL = './js/completeQuran.json';
    const res = await fetch(URL);
    const data = await res.json();
    displayQuran(data.data.surahs, dataLimitFrom, dataLimitTo)
}

const displayQuran = (datas, dataLimitFrom, dataLimitTo) => {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.textContent = "";
    // if(dataLimitFrom){

        datas.slice(dataLimitFrom, dataLimitTo).map(data => {
            const {name, englishName, ayahs, number} = data;
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="card h-[17rem] w-auto bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-2xl text-blue-700 justify-end">${name}</h2>
                        <h3 class="card-title">${englishName}</h3>
                        <p class="text-right">${ayahs[0].text.slice(0, 40)} ${ayahs[1].text.slice(0, 80)}</p>
                        <div class="card-actions justify-center">
                            <div class="flex align-items-center gap-4">
                                <audio src="" class="w-48" controls></audio>
                                <label for="my-modal" onclick="loadModal('${number}')" class="btn btn-primary tracking-wide">Tap to Read</label>
                            </div>
                        </div>
                    </div>
                </div>
            `
            cardsContainer.appendChild(div);
        })

    // }
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

const pageActive = (activePage) => {
    const pageId = document.getElementById(activePage);
    pageId.classList = ('btn btn-active');
}

document.getElementById('page-1').addEventListener('click', function(){
    loadQuran(0, 15);
    pageActive('page-1');
})
document.getElementById('page-2').addEventListener('click', function(){
    loadQuran(15, 30);
    pageActive('page-2');
})
document.getElementById('page-3').addEventListener('click', function(){
    loadQuran(30, 45);
    pageActive('page-3');
})
document.getElementById('page-4').addEventListener('click', function(){
    loadQuran(45, 60);
    pageActive('page-4');
})
document.getElementById('page-5').addEventListener('click', function(){
    loadQuran(60, 75);
    pageActive('page-5');
})
document.getElementById('page-6').addEventListener('click', function(){
    loadQuran(75, 90);
    pageActive('page-6');
})
document.getElementById('page-7').addEventListener('click', function(){
    loadQuran(90, 114);
    pageActive('page-7');
})


window.addEventListener('load', function(){
    loadQuran(0, 15);
})