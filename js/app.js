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

    let progressPercentage = 100;
    let progressText = "Bạn đã đạt thứ hạng cao nhất! 🎉";
    let pointsNeeded = 0;

    if (nextRank) {
        const pointsForCurrentRank = currentRank.minPoints;
        const pointsForNextRank = nextRank.minPoints;
        const totalPointsNeeded = pointsForNextRank - pointsForCurrentRank;
        const pointsEarnedInRank = totalPoints - pointsForCurrentRank;

        progressPercentage = (pointsEarnedInRank / totalPointsNeeded) * 100;
        pointsNeeded = pointsForNextRank - totalPoints;
        
        // Loại bỏ dòng chữ này
        // progressText = `Còn ${pointsNeeded} điểm để tới ${nextRank.name}`;
        
        // Hoặc có thể đặt lại giá trị rỗng nếu muốn bỏ hoàn toàn
        progressText = ''; 
    }

    const roundedPercentage = Math.round(progressPercentage);

    // Cập nhật thanh tiến trình (chiều rộng)
    const progressBar = document.querySelector('#achievement-progress .progress-bar');
    if (progressBar) {
        progressBar.style.width = `${Math.min(roundedPercentage, 100)}%`;
    }

    // Cập nhật text phần trăm (trên thanh)
    document.getElementById('progress-percentage').textContent = `${roundedPercentage}%`;

    // Cập nhật text tiến trình (dưới thanh)
    document.getElementById('progress-text').textContent = progressText;
}