// Hiển thị danh sách tỉnh thành (chỉ tên tỉnh)
function renderProvinces() {
    const provincesList = document.getElementById('provinces-list');
    provincesList.innerHTML = '';

    provincesData.forEach(province => {
        const completion = calculateProvinceCompletion(province.id);
        const isProvinceCompleted = completion === 100;

        const provinceElement = document.createElement('div');
        provinceElement.className = 'glass-card province-item';
        provinceElement.innerHTML = `
            <div class="province-header">
                <h3 class="province-name">${province.name}</h3>
                <div class="province-check ${isProvinceCompleted ? 'checked' : ''}">
                    <i class="fas fa-check"></i>
                </div>
            </div>
        `;

        // Thêm sự kiện click để hiển thị modal
        provinceElement.addEventListener('click', function () {
            showLocationsModal(province);
        });

        provincesList.appendChild(provinceElement);
    });
}

// Hàm mới để hiển thị modal chứa danh sách địa điểm con
function showLocationsModal(province) {
    const modal = document.getElementById('location-modal');
    const modalTitle = document.getElementById('modal-title');
    const locationDetails = document.getElementById('location-details');
    
    // Cập nhật tiêu đề modal
    modalTitle.textContent = province.name;
    
    // Xóa nội dung cũ
    locationDetails.innerHTML = '';

    // Tạo danh sách các địa điểm
    province.locations.forEach(location => {
        const isVisited = visitedLocations[location.id];
        const locationItem = document.createElement('div');
        locationItem.className = `location-item ${isVisited ? 'visited' : ''}`;
        locationItem.dataset.id = location.id;
        locationItem.innerHTML = `
            <span class="location-name">${location.name}</span>
            <div style="display: flex; align-items: center;">
                <span class="location-points">${location.points} điểm</span>
                <div class="location-check ${isVisited ? 'checked' : ''}">
                    <i class="fas fa-check"></i>
                </div>
            </div>
        `;

        // Thêm sự kiện click cho từng địa điểm trong modal
        locationItem.addEventListener('click', function (e) {
            e.stopPropagation();

            const locationId = parseInt(this.dataset.id);
            const wasVisited = visitedLocations[locationId];

            if (wasVisited) {
                delete visitedLocations[locationId];
                subtractPoints(location.points);
                this.classList.remove('visited');
                this.querySelector('.location-check').classList.remove('checked');
            } else {
                visitedLocations[locationId] = true;
                addPoints(location.points);
                this.classList.add('visited');
                const checkElement = this.querySelector('.location-check');
                checkElement.classList.add('checked');
                checkElement.classList.add('check-animation');

                setTimeout(() => {
                    checkElement.classList.remove('check-animation');
                }, 300);
            }

            // Cập nhật thống kê và trạng thái hoàn thành tỉnh
            updateStats();
            updateProvinceCompletion(province.id);
        });
        
        locationDetails.appendChild(locationItem);
    });

    // Hiển thị modal
    modal.style.display = 'block';
}

// Hàm cập nhật trạng thái hoàn thành của một tỉnh cụ thể
function updateProvinceCompletion(provinceId) {
    const provinceElement = document.querySelector(`.province-item .province-check`);
    const completion = calculateProvinceCompletion(provinceId);
    
    if (completion === 100) {
        provinceElement.classList.add('checked');
    } else {
        provinceElement.classList.remove('checked');
    }
}


// Xử lý modal (giữ nguyên)
function setupModal() {
    const modal = document.getElementById('location-modal');
    const closeBtn = document.querySelector('#location-modal .close'); // Đảm bảo chọn đúng nút close

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Tìm kiếm (giữ nguyên)
function setupSearch() {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();

        document.querySelectorAll('.province-item').forEach(provinceElement => {
            const provinceName = provinceElement.querySelector('.province-name').textContent.toLowerCase();
            
            // Tìm kiếm chỉ dựa trên tên tỉnh
            const hasMatch = provinceName.includes(searchTerm);
            
            provinceElement.style.display = hasMatch ? 'block' : 'none';
        });
    });
}

// Hàm cập nhật modal thành tích (giữ nguyên)
function updateAchievementModal() {
    const nextRankIndex = ranks.findIndex(rank => rank.minPoints > totalPoints);
    const currentRankIndex = nextRankIndex === -1 ? ranks.length - 1 : (nextRankIndex > 0 ? nextRankIndex - 1 : 0);
    const currentRank = ranks[currentRankIndex];
    const nextRank = nextRankIndex !== -1 ? ranks[nextRankIndex] : null;

    document.getElementById('achievement-icon').className = `fas ${currentRank.icon}`;
    document.getElementById('achievement-rank').textContent = currentRank.name;
    document.getElementById('achievement-points').textContent = `${totalPoints} điểm`;
    
    let progressPercentage = 100;
    let progressText = "Bạn đã đạt thứ hạng cao nhất! 🎉";
    
    if (nextRank) {
        const pointsForCurrentRank = currentRank.minPoints;
        const pointsForNextRank = nextRank.minPoints;
        const pointsNeeded = pointsForNextRank - pointsForCurrentRank;
        const pointsEarned = totalPoints - pointsForCurrentRank;
        
        progressPercentage = (pointsEarned / pointsNeeded) * 100;
        progressText = `Còn ${pointsForNextRank - totalPoints} điểm để tới ${nextRank.name}`;
    }
    
    const roundedPercentage = Math.round(progressPercentage);

    document.getElementById('achievement-progress').style.width = `${Math.min(roundedPercentage, 100)}%`;
    document.getElementById('progress-percentage').textContent = `${roundedPercentage}%`;
    document.getElementById('progress-text').textContent = progressText;
}