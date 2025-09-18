// camera.js - phiên bản hoàn chỉnh với các tính năng: logo, ngày tháng và UI cải tiến

document.addEventListener('DOMContentLoaded', function () {
    initializeCamera();
});

function initializeCamera() {
    const cameraBtn = document.getElementById('camera-btn');
    const cameraModal = document.getElementById('camera-modal');
    const closeBtn = cameraModal.querySelector('.close');
    const video = document.getElementById('camera-video');
    const canvas = document.getElementById('camera-canvas');
    const captureBtn = document.getElementById('capture-btn');
    const retakeBtn = document.getElementById('retake-btn');
    const downloadBtn = document.getElementById('download-btn');
    const previewContainer = document.getElementById('preview-container');
    const captureControls = document.getElementById('capture-controls');
    const photoPreview = document.getElementById('photo-preview');
    const photoCaptionInput = document.getElementById('photo-caption');
    const cameraContainer = document.getElementById('camera-container');
    const flipBtn = document.getElementById('flip-camera-btn');

    // NÂNG CẤP 2: Loại bỏ chữ "Tỉ lệ" và hiển thị trực tiếp
    const ratioBtn = document.createElement('button');
    ratioBtn.className = 'camera-btn secondary';
    ratioBtn.textContent = '4:3';
    captureControls.appendChild(ratioBtn);

    let stream = null;
    let currentPhotoDataUrl = null;
    let aspectRatio = '4:3';
    let lastFrame = null;
    let facingMode = 'environment';

    // Tải logo
    const logo = new Image();
    logo.crossOrigin = "Anonymous";
    logo.src = 'https://i.imgur.com/gq72l66.png'; // Thay đổi logo tại đây nếu cần

    // ========== SỰ KIỆN ==========
    cameraBtn.addEventListener('click', function () {
        cameraModal.style.display = 'block';
        document.body.classList.add('no-scroll');
        startCamera();
    });

    closeBtn.addEventListener('click', function () {
        stopCamera();
        cameraModal.style.display = 'none';
        document.body.classList.remove('no-scroll');
        resetCameraUI();
    });

    window.addEventListener('click', function (event) {
        if (event.target === cameraModal) {
            stopCamera();
            cameraModal.style.display = 'none';
            document.body.classList.remove('no-scroll');
            resetCameraUI();
        }
    });

    captureBtn.addEventListener('click', function () {
        capturePhoto();
    });

    retakeBtn.addEventListener('click', function () {
        resetCameraUI();
        startCamera();
    });

    downloadBtn.addEventListener('click', function () {
        downloadPhoto();
    });

    flipBtn.addEventListener('click', function() {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        if (isMobile) {
            facingMode = (facingMode === 'environment') ? 'user' : 'environment';
            startCamera();
        } else {
            video.classList.toggle('mirrored');
        }
    });

    ratioBtn.addEventListener('click', function () {
        if (aspectRatio === '4:3') {
            aspectRatio = '9:16';
            ratioBtn.textContent = '9:16';
        } else if (aspectRatio === '9:16') {
            aspectRatio = '16:9';
            ratioBtn.textContent = '16:9';
        } else {
            aspectRatio = '4:3';
            ratioBtn.textContent = '4:3';
        }
    });

    // ========== CAMERA ==========
    async function startCamera() {
        try {
            if (stream) stopCamera();
            stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: facingMode },
                audio: false
            });
            video.srcObject = stream;
            await video.play();
            video.style.display = 'block';
            previewContainer.style.display = 'none';
            captureControls.style.display = 'flex';
        } catch (err) {
            alert('Không truy cập được camera. Vui lòng kiểm tra quyền truy cập.');
            console.error(err);
        }
    }

    function stopCamera() {
        if (stream) {
            stream.getTracks().forEach(t => t.stop());
            stream = null;
        }
    }

    // ========== VẼ ẢNH ==========
    function renderFinalImage(rawImage) {
        const ctx = canvas.getContext('2d');

        let targetW, targetH;
        if (aspectRatio === '9:16') {
            targetH = rawImage.height;
            targetW = Math.floor(rawImage.height * 9 / 16);
        } else if (aspectRatio === '16:9') {
            targetW = rawImage.width;
            targetH = Math.floor(rawImage.width * 9 / 16);
        } else { // 4:3
            targetW = rawImage.width;
            targetH = Math.floor(rawImage.width * 3 / 4);
        }

        const startX = Math.floor((rawImage.width - targetW) / 2);
        const startY = Math.floor((rawImage.height - targetH) / 2);

        const footerHeight = Math.floor(targetH * 0.2);
        canvas.width = targetW;
        canvas.height = targetH + footerHeight;

        ctx.drawImage(rawImage, startX, startY, targetW, targetH, 0, 0, targetW, targetH);

        ctx.fillStyle = 'white';
        ctx.fillRect(0, targetH, targetW, footerHeight);
        
        // Thêm logo
        if (logo.complete && logo.naturalWidth > 0) {
            const logoMargin = canvas.width * 0.03;
            const logoSize = canvas.width * 0.1;
            ctx.globalAlpha = 0.6;
            ctx.drawImage(logo, logoMargin, logoMargin, logoSize, logoSize);
            ctx.globalAlpha = 1.0;
        }

        // Thêm tiêu đề (nếu có)
        const caption = photoCaptionInput.value.trim();
        if (caption) {
            ctx.fillStyle = 'black';
            ctx.font = `${Math.floor(canvas.width * 0.06)}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(caption, targetW / 2, targetH + footerHeight / 2 - 20);
        }
        
        // === THÊM DÒNG CHỮ KỶ NIỆM VÀ NGÀY THÁNG ===
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const dateString = `${day}/${month}/${year}`;
        
        const finalCaption = `Kỷ niệm 💖 ${dateString}`;

        ctx.font = `bold ${Math.floor(targetW * 0.05)}px 'Arial', sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';
        ctx.textBaseline = 'middle';
        ctx.fillText(finalCaption, targetW / 2, targetH + footerHeight / 2);
        
        return canvas.toDataURL('image/png');
    }

    // ========== CHỤP ==========
    function capturePhoto() {
        if (!video || video.readyState < 2) return;
        const ctx = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        if (video.classList.contains('mirrored')) {
            ctx.save();
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            ctx.restore();
        } else {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        }
        
        lastFrame = new Image();
        lastFrame.src = canvas.toDataURL('image/png');
        lastFrame.onload = () => {
            currentPhotoDataUrl = renderFinalImage(lastFrame);
            photoPreview.src = currentPhotoDataUrl;
            video.style.display = 'none';
            previewContainer.style.display = 'flex';
            captureControls.style.display = 'none';
            stopCamera();
        };
    }

    // ========== TẢI ==========
    function downloadPhoto() {
        if (!lastFrame) return;
        currentPhotoDataUrl = renderFinalImage(lastFrame);
        const link = document.createElement('a');
        link.href = currentPhotoDataUrl;
        link.download = `ky-niem_${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function resetCameraUI() {
        video.style.display = 'block';
        previewContainer.style.display = 'none';
        captureControls.style.display = 'flex';
        photoCaptionInput.value = '';
        photoPreview.src = '';
        currentPhotoDataUrl = null;
        lastFrame = null;
        video.classList.remove('mirrored');
    }
}