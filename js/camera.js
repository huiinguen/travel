// camera.js - phiên bản cập nhật 17/09
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
    const photoDate = document.getElementById('photo-date');
    const photoCaptionInput = document.getElementById('photo-caption');
    const cameraContainer = document.getElementById('camera-container');

    // nút chọn tỉ lệ
    const ratioBtn = document.createElement('button');
    ratioBtn.className = 'camera-btn secondary';
    ratioBtn.textContent = 'Tỉ lệ 4:3';
    captureControls.appendChild(ratioBtn);

    let stream = null;
    let currentPhotoDataUrl = null;
    let aspectRatio = '4:3'; // mặc định
    let lastFrame = null;    // lưu frame gốc để redraw caption

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

    ratioBtn.addEventListener('click', function () {
        if (aspectRatio === '4:3') {
            aspectRatio = '9:16';
            ratioBtn.textContent = 'Tỉ lệ 9:16';
        } else if (aspectRatio === '9:16') {
            aspectRatio = '16:9';
            ratioBtn.textContent = 'Tỉ lệ 16:9';
        } else {
            aspectRatio = '4:3';
            ratioBtn.textContent = 'Tỉ lệ 4:3';
        }
    });

    // ========== CAMERA ==========
    async function startCamera() {
        try {
            if (stream) stopCamera();
            stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' },
                audio: false
            });
            video.srcObject = stream;
            await video.play();
            video.style.display = 'block';
            previewContainer.style.display = 'none';
            captureControls.style.display = 'block';
        } catch (err) {
            alert('Không truy cập được camera');
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

        // crop theo tỉ lệ
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

        // thêm footer chiếm 20% chiều cao ảnh
        const footerHeight = Math.floor(targetH * 0.2);
        canvas.width = targetW;
        canvas.height = targetH + footerHeight;

        // vẽ ảnh gốc lên trên
        ctx.drawImage(rawImage, startX, startY, targetW, targetH, 0, 0, targetW, targetH);

        // vẽ footer nền trắng
        ctx.fillStyle = 'white';
        ctx.fillRect(0, targetH, targetW, footerHeight);

        // viền tổng thể
        ctx.lineWidth = 6;
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, targetW, targetH + footerHeight);

        // chữ caption
        const caption = photoCaptionInput.value.trim();
        ctx.fillStyle = 'black';
        ctx.font = `${Math.floor(canvas.width * 0.06)}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        if (caption) {
            ctx.fillText(caption, targetW / 2, targetH + footerHeight * 0.35);
        }

        // ngày tháng năm
        const today = new Date().toLocaleDateString('vi-VN');
        ctx.font = `${Math.floor(canvas.width * 0.05)}px Arial`;
        ctx.fillText(today, targetW / 2, targetH + footerHeight * 0.75);

        return canvas.toDataURL('image/png');
    }


    // ========== CHỤP ==========
    function capturePhoto() {
        if (!video || video.readyState < 2) return;
        // lưu frame hiện tại
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        lastFrame = new Image();
        lastFrame.src = canvas.toDataURL('image/png');
        lastFrame.onload = () => {
            currentPhotoDataUrl = renderFinalImage(lastFrame);
            photoPreview.src = currentPhotoDataUrl;
            photoDate.textContent = new Date().toLocaleDateString('vi-VN');
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
        link.download = `photo_${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function resetCameraUI() {
        video.style.display = 'block';
        previewContainer.style.display = 'none';
        captureControls.style.display = 'block';
        photoCaptionInput.value = '';
        photoPreview.src = '';
        photoDate.textContent = '';
        currentPhotoDataUrl = null;
        lastFrame = null;
    }
}
