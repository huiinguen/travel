// Hiển thị danh sách tỉnh thành
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
            <div class="location-list">
                ${province.locations.map(location => {
                    const isVisited = visitedLocations[location.id];
                    return `
                    <div class="location-item ${isVisited ? 'visited' : ''}" data-id="${location.id}">
                        <span class="location-name">${location.name}</span>
                        <div style="display: flex; align-items: center;">
                            <span class="location-points">${location.points} điểm</span>
                            <div class="location-check ${isVisited ? 'checked' : ''}">
                                <i class="fas fa-check"></i>
                            </div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        `;
        
        provincesList.appendChild(provinceElement);
        
        // Thêm sự kiện click cho toàn bộ hàng địa điểm
        provinceElement.querySelectorAll('.location-item').forEach(item => {
            item.addEventListener('click', function(e) {
                // Ngăn sự kiện click lan ra các phần tử cha
                e.stopPropagation();
                
                const locationId = parseInt(this.dataset.id);
                const location = province.locations.find(loc => loc.id === locationId);
                const wasVisited = visitedLocations[locationId];
                
                if (wasVisited) {
                    // Nếu đã tích rồi thì bỏ tích
                    delete visitedLocations[locationId];
                    subtractPoints(location.points);
                    this.classList.remove('visited');
                    this.querySelector('.location-check').classList.remove('checked');
                } else {
                    // Nếu chưa tích thì tích và thêm hiệu ứng
                    visitedLocations[locationId] = true;
                    addPoints(location.points);
                    this.classList.add('visited');
                    const checkElement = this.querySelector('.location-check');
                    checkElement.classList.add('checked');
                    checkElement.classList.add('check-animation');
                    
                    // Xóa class animation sau khi hoàn thành
                    setTimeout(() => {
                        checkElement.classList.remove('check-animation');
                    }, 300);
                }
                
                // Lưu vào localStorage
                updateVisitedLocations();
                
                // Cập nhật UI
                updateStats();
                
                // Kiểm tra xem tỉnh đã hoàn thành chưa
                const provinceCompletion = calculateProvinceCompletion(province.id);
                const provinceCheck = provinceElement.querySelector('.province-check');
                if (provinceCompletion === 100) {
                    provinceCheck.classList.add('checked');
                } else {
                    provinceCheck.classList.remove('checked');
                }
            });
        });
    });
}

// Xử lý modal
function setupModal() {
    const modal = document.getElementById('location-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Tìm kiếm
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        document.querySelectorAll('.province-item').forEach(provinceElement => {
            const provinceName = provinceElement.querySelector('.province-name').textContent.toLowerCase();
            const locationItems = provinceElement.querySelectorAll('.location-item');
            
            let hasMatch = provinceName.includes(searchTerm);
            
            locationItems.forEach(item => {
                const locationName = item.querySelector('.location-name').textContent.toLowerCase();
                const matches = locationName.includes(searchTerm);
                
                item.style.display = matches || hasMatch ? 'flex' : 'none';
                
                if (matches) hasMatch = true;
            });
            
            provinceElement.style.display = hasMatch ? 'block' : 'none';
        });
    });
}