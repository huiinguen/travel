// Quản lý điểm và rank
function updatePointsDisplay() {
    document.querySelector('.points').textContent = `${totalPoints} điểm`;
    
    // Cập nhật progress bar (giả sử mỗi rank cách nhau 100 điểm)
    const nextRankIndex = ranks.findIndex(rank => rank.minPoints > totalPoints);
    const currentRankIndex = nextRankIndex > 0 ? nextRankIndex - 1 : 0;
    const nextRankPoints = nextRankIndex >= 0 ? ranks[nextRankIndex].minPoints : ranks[ranks.length - 1].minPoints + 100;
    const currentRankPoints = currentRankIndex > 0 ? ranks[currentRankIndex].minPoints : 0;
    
    const progressPercentage = ((totalPoints - currentRankPoints) / (nextRankPoints - currentRankPoints)) * 100;
    document.querySelector('.progress').style.width = `${Math.min(progressPercentage, 100)}%`;
    
    // Cập nhật rank
    userRank = ranks[currentRankIndex].name;
    document.querySelector('.rank').innerHTML = `${userRank} <i class="fas ${ranks[currentRankIndex].icon}"></i>`;
    
    // Lưu vào localStorage
    localStorage.setItem('totalPoints', totalPoints);
    localStorage.setItem('userRank', userRank);
}

function addPoints(points) {
    totalPoints += points;
    updatePointsDisplay();
}

function subtractPoints(points) {
    totalPoints = Math.max(0, totalPoints - points);
    updatePointsDisplay();
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
}