// Cấu hình Firebase - Thay thế bằng cấu hình của bạn
const firebaseConfig = {
  apiKey: "AIzaSyDgM2_g3IKq0o8hwUInRrXvweoowcuPDgo",
  authDomain: "blogtravel-9c89a.firebaseapp.com",
  databaseURL: "https://blogtravel-9c89a-default-rtdb.firebaseio.com",
  projectId: "blogtravel-9c89a",
  storageBucket: "blogtravel-9c89a.firebasestorage.app",
  messagingSenderId: "247810637582",
  appId: "1:247810637582:web:36ae8df01ebc6e7642215f",
  measurementId: "G-L1RVH76D4Y"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Biến toàn cục
let currentUser = null;

// Theo dõi trạng thái đăng nhập
auth.onAuthStateChanged((user) => {
    if (user) {
        currentUser = user;
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'block';
        document.getElementById('user-name').textContent = user.displayName || user.email;
        
        // Tải dữ liệu người dùng từ Firestore
        loadUserData();
    } else {
        currentUser = null;
        document.getElementById('login-btn').style.display = 'block';
        document.getElementById('logout-btn').style.display = 'none';
        document.getElementById('user-name').textContent = 'Người Dùng';
        
        // Sử dụng dữ liệu cục bộ khi không đăng nhập
        loadLocalData();
    }
});

// Đăng nhập với Google
// Đăng nhập với Google
document.getElementById('google-login').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            closeLoginModal();
            console.log("Đăng nhập thành công:", result.user);
        })
        .catch((error) => {
            console.error("Lỗi đăng nhập Google:", error);
            alert("Đăng nhập thất bại: " + error.message);
            // Hiển thị thông tin lỗi chi tiết trong console
            console.log("Mã lỗi:", error.code);
            console.log("Thông báo lỗi:", error.message);
        });
});

// Đăng nhập với email/mật khẩu
document.getElementById('submit-login').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            closeLoginModal();
        })
        .catch((error) => {
            alert("Đăng nhập thất bại: " + error.message);
        });
});

// Đăng ký với email/mật khẩu
document.getElementById('submit-signup').addEventListener('click', () => {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Cập nhật tên hiển thị
            return userCredential.user.updateProfile({
                displayName: name
            });
        })
        .then(() => {
            closeLoginModal();
        })
        .catch((error) => {
            alert("Đăng ký thất bại: " + error.message);
        });
});

// Đăng xuất
document.getElementById('logout-btn').addEventListener('click', () => {
    auth.signOut();
});

// Mở modal đăng nhập
document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'block';
});

// Chuyển đổi giữa form đăng nhập và đăng ký
document.getElementById('email-login').addEventListener('click', () => {
    document.getElementById('email-login-form').style.display = 'block';
    document.getElementById('email-signup-form').style.display = 'none';
});

document.getElementById('show-signup').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('email-login-form').style.display = 'none';
    document.getElementById('email-signup-form').style.display = 'block';
});

// Đăng xuất
document.getElementById('logout-btn').addEventListener('click', () => {
    // Đảm bảo dữ liệu được lưu trước khi đăng xuất
    if (currentUser) {
        saveUserData();
    }
    
    auth.signOut().then(() => {
        // Reset dữ liệu về trạng thái mặc định khi đăng xuất
        visitedLocations = {};
        totalPoints = 0;
        userRank = 'Bắt đầu';
        
        // Xóa dữ liệu local storage khi đăng xuất
        localStorage.removeItem('visitedLocations');
        localStorage.removeItem('totalPoints');
        localStorage.removeItem('userRank');
        
        // Cập nhật UI
        updatePointsDisplay();
        updateStats();
        renderProvinces();
    });
});

function closeLoginModal() {
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
        loginModal.style.display = 'none';
    }
    
    // Reset form
    document.getElementById('email-login-form').style.display = 'none';
    document.getElementById('email-signup-form').style.display = 'none';
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
}

// firebase-config.js - Cập nhật xử lý đăng nhập/đăng xuất
// Tải dữ liệu từ Firestore
function loadUserData() {
    if (!currentUser) return;
    
    db.collection('users').doc(currentUser.uid).get()
        .then((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                // Đồng bộ dữ liệu từ Firestore về biến local
                syncUserDataToLocal(userData);
                
                // Đảm bảo dữ liệu local được cập nhật
                updateVisitedLocations();
            } else {
                // Tạo tài liệu mới nếu chưa tồn tại
                saveUserData();
            }
        })
        .catch((error) => {
            console.error("Lỗi tải dữ liệu:", error);
        });
}


// Lưu dữ liệu lên Firestore
function saveUserData() {
    if (!currentUser) return;
    
    const userData = {
        uid: currentUser.uid,
        displayName: currentUser.displayName,
        email: currentUser.email,
        visitedLocations: visitedLocations,
        totalPoints: totalPoints,
        userRank: userRank,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    db.collection('users').doc(currentUser.uid).set(userData, { merge: true })
        .then(() => {
            console.log("Dữ liệu đã được lưu lên Firestore");
        })
        .catch((error) => {
            console.error("Lỗi lưu dữ liệu:", error);
        });
}

// Tải dữ liệu cục bộ
function loadLocalData() {
    const storedLocations = localStorage.getItem('visitedLocations');
    const storedPoints = localStorage.getItem('totalPoints');
    const storedRank = localStorage.getItem('userRank');
    
    visitedLocations = storedLocations ? JSON.parse(storedLocations) : {};
    totalPoints = storedPoints ? parseInt(storedPoints) : 0;
    userRank = storedRank || 'Bắt đầu';
    
    updatePointsDisplay();
    updateStats();
    renderProvinces();
}


// Cập nhật hàm addPoints và subtractPoints để lưu dữ liệu
const originalAddPoints = addPoints;
addPoints = function(points) {
    originalAddPoints(points);
    if (currentUser) {
        saveUserData();
    } else {
        localStorage.setItem('totalPoints', totalPoints);
    }
};

const originalSubtractPoints = subtractPoints;
subtractPoints = function(points) {
    originalSubtractPoints(points);
    if (currentUser) {
        saveUserData();
    } else {
        localStorage.setItem('totalPoints', totalPoints);
    }
};
// Trong file firebase-config.js, thêm các hàm sau:

// Đóng modal khi click vào nút close
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

// Đóng modal khi click bên ngoài
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Đóng modal đăng nhập bằng phím ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});