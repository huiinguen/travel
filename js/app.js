// app.js - Thêm xử lý sự kiện cho nút thành tựu
document.addEventListener('DOMContentLoaded', function() {
    updatePointsDisplay();
    updateStats();
    renderProvinces();
    setupModal();
    setupSearch();
    setupAchievementModal(); // Thêm dòng này
});

// Thêm hàm thiết lập modal thành tựu
function setupAchievementModal() {
    const achievementBtn = document.getElementById('achievement-btn');
    const achievementModal = document.getElementById('achievement-modal');
    const closeBtn = achievementModal.querySelector('.close');
    
    // Mở modal khi nhấn nút thành tựu
    achievementBtn.addEventListener('click', function() {
        updateAchievementModal();
        achievementModal.style.display = 'block';
    });
    
    // Đóng modal
    closeBtn.addEventListener('click', function() {
        achievementModal.style.display = 'none';
    });
    
    // Đóng modal khi click bên ngoài
    window.addEventListener('click', function(event) {
        if (event.target === achievementModal) {
            achievementModal.style.display = 'none';
        }
    });
}

// Cập nhật nội dung modal thành tựu
function updateAchievementModal() {
    const nextRankIndex = ranks.findIndex(rank => rank.minPoints > totalPoints);
    const currentRankIndex = nextRankIndex > 0 ? nextRankIndex - 1 : 0;
    const currentRank = ranks[currentRankIndex];
    const nextRank = nextRankIndex >= 0 ? ranks[nextRankIndex] : null;
    
    // Cập nhật icon
    document.getElementById('achievement-icon').className = `fas ${currentRank.icon}`;
    
    // Cập nhật rank
    document.getElementById('achievement-rank').textContent = currentRank.name;
    
    // Cập nhật điểm
    document.getElementById('achievement-points').textContent = `${totalPoints} điểm`;
    
    // Cập nhật progress bar
    let progressPercentage = 100;
    let progressText = "Bạn đã đạt rank cao nhất!";
    
    if (nextRank) {
        const currentRankPoints = currentRankIndex > 0 ? currentRank.minPoints : 0;
        progressPercentage = ((totalPoints - currentRankPoints) / (nextRank.minPoints - currentRankPoints)) * 100;
        progressText = `${Math.round(progressPercentage)}% đến ${nextRank.name}`;
    }
    
    document.getElementById('achievement-progress').style.width = `${Math.min(progressPercentage, 100)}%`;
    document.getElementById('progress-text').textContent = progressText;
}