const container = document.getElementById('mainContainer');
const leftSplit = document.querySelector('.split.left');
const rightSplit = document.querySelector('.split.right');

// --- AKIŞKAN ANİMASYON TETİKLEYİCİSİ ---
window.addEventListener('load', () => {
    // Sadece index sayfasında animasyon çalışsın
    if (!document.body.id || document.body.id !== 'index-page') {
        return; // Diğer sayfalarda hiçbir şey yapma
    }
    // 1. Aşama: İlk 2 saniye renkler karışık yüzer (Ebru hali)
    
    // 2. Aşama: 2. saniyede renkler ayrışmaya başlar ve Ditetra yukarı kayar
    setTimeout(() => {
        document.body.classList.add('separated');
    }, 500);
});

// --- MEVCUT İŞLEVLER ---
function expand(side) {
    if (side === 'left') {
        container.classList.add('show-left');
        container.classList.remove('show-right');
    } else if (side === 'right') {
        container.classList.add('show-right');
        container.classList.remove('show-left');
    }
}

function resetView() {
    container.classList.remove('show-left');
    container.classList.remove('show-right');
}

leftSplit.addEventListener('click', () => {
    if (container.classList.contains('show-right')) expand('left');
});

rightSplit.addEventListener('click', () => {
    if (container.classList.contains('show-left')) expand('right');
});