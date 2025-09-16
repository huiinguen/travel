// points.js - Cập nhật hàm quản lý điểm
// Quản lý điểm và rank
// points.js - Cập nhật hàm quản lý điểm
// Quản lý điểm và rank
function updatePointsDisplay() {
    // Cập nhật điểm trong phần stats
    document.querySelector('.points-stat .points').textContent = totalPoints;
    
    // Cập nhật rank trong header
    const nextRankIndex = ranks.findIndex(rank => rank.minPoints > totalPoints);
    const currentRankIndex = nextRankIndex > 0 ? nextRankIndex - 1 : 0;
    
    userRank = ranks[currentRankIndex].name;
    document.querySelector('.rank').innerHTML = `${userRank} <i class="fas ${ranks[currentRankIndex].icon}"></i>`;
    
    // Chỉ lưu vào localStorage khi không có user
    if (!currentUser) {
        localStorage.setItem('totalPoints', totalPoints);
        localStorage.setItem('userRank', userRank);
    }
    
    // Cập nhật modal thành tựu nếu đang mở
    if (document.getElementById('achievement-modal').style.display === 'block') {
        updateAchievementModal();
    }
}

function addPoints(points) {
    totalPoints += points;
    updatePointsDisplay();
    updateVisitedLocations();
}

function subtractPoints(points) {
    totalPoints = Math.max(0, totalPoints - points);
    updatePointsDisplay();
    updateVisitedLocations();
}

function calculateProvinceCompletion(provinceId) {
    const province = provincesData.find(p => p.id === provinceId);
    if (!province) return 0;
    
    const visitedCount = province.locations.filter(loc => visitedLocations[loc.id]).length;
    return (visitedCount / province.locations.length) * 100;
}

function updateStats() {
    const visitedProvinces = provincesData.filter(province => 
        province.locations.some(loc => visitedLocations[loc.id])
    ).length;
    
    const visitedLocationsCount = Object.keys(visitedLocations).length;
    
    document.querySelectorAll('.stat-item')[0].querySelector('.stat-value').textContent = visitedProvinces;
    document.querySelectorAll('.stat-item')[1].querySelector('.stat-value').textContent = visitedLocationsCount;
    
    // Cập nhật điểm
    updatePointsDisplay();
}

// Cập nhật hàm để chỉ lưu trạng thái visitedLocations
function updateVisitedLocations() {
    if (currentUser) {
        // Lưu lên Firestore nếu đã đăng nhập
        saveUserData();
    } else {
        // Lưu vào localStorage nếu chưa đăng nhập
        localStorage.setItem('visitedLocations', JSON.stringify(visitedLocations));
        localStorage.setItem('totalPoints', totalPoints);
        localStorage.setItem('userRank', userRank);
    }
}

// Hàm đồng bộ dữ liệu từ Firestore về local
function syncUserDataToLocal(userData) {
    if (userData) {
        visitedLocations = userData.visitedLocations || {};
        totalPoints = userData.totalPoints || 0;
        userRank = userData.userRank || 'Bắt đầu';
        
        // Cập nhật UI
        updatePointsDisplay();
        updateStats();
        renderProvinces();
    }
}