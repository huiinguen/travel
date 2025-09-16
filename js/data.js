// Dữ liệu tỉnh thành và địa điểm
const provincesData = [
    {
        id: 1,
        name: "Hà Nội",
        locations: [
            { id: 101, name: "Hồ Hoàn Kiếm", points: 1 },
            { id: 102, name: "Văn Miếu Quốc Tử Giám", points: 2 },
            { id: 103, name: "Lăng Chủ tịch Hồ Chí Minh", points: 3 },
            { id: 104, name: "Phố cổ Hà Nội", points: 3 },
            { id: 105, name: "Hoàng thành Thăng Long", points: 15 },
            { id: 106, name: "Hồ Tây", points: 3 },
            { id: 107, name: "Công viên Thống Nhất", points: 8 }
        ]
    },
    {
        id: 2,
        name: "TP. Hồ Chí Minh",
        locations: [
            { id: 201, name: "Bưu điện trung tâm", points: 3 },
            { id: 202, name: "Nhà thờ Đức Bà", points: 15 },
            { id: 203, name: "Dinh Độc Lập", points: 20 },
            { id: 204, name: "Chợ Bến Thành", points: 3 },
            { id: 205, name: "Bitexco Financial Tower", points: 15 },
            { id: 206, name: "Công viên Suối Tiên", points: 12 },
            { id: 207, name: "Địa đạo Củ Chi", points: 18 }
        ]
    },
    {
        id: 3,
        name: "Đà Nẵng",
        locations: [
            { id: 301, name: "Cầu Rồng", points: 3 },
            { id: 302, name: "Bà Nà Hills", points: 20 },
            { id: 303, name: "Bán đảo Sơn Trà", points: 15 },
            { id: 304, name: "Ngũ Hành Sơn", points: 15 },
            { id: 305, name: "Biển Mỹ Khê", points: 3 },
            { id: 306, name: "Cầu Tình Yêu", points: 8 },
            { id: 307, name: "Đèo Hải Vân", points: 12 }
        ]
    },
    {
        id: 4,
        name: "Nha Trang",
        locations: [
            { id: 401, name: "Vinpearl Land", points: 20 },
            { id: 402, name: "Viện Hải dương học", points: 15 },
            { id: 403, name: "Tháp Bà Ponagar", points: 15 },
            { id: 404, name: "Hòn Chồng", points: 3 },
            { id: 405, name: "Đảo Khỉ", points: 3 },
            { id: 406, name: "Bãi Dài", points: 12 },
            { id: 407, name: "Dốc Lết", points: 3 }
        ]
    },
{
        id: 5,
        name: "Quảng Nam - Đà Nẵng",
        locations: [
            { id: 501, name: "Phố cổ Hội An", points: 20 },
            { id: 502, name: "Cầu Rồng", points: 3 },
            { id: 503, name: "Bà Nà Hills", points: 20 },
            { id: 504, name: "Chùa Cầu", points: 15 },
            { id: 505, name: "Biển Mỹ Khê", points: 3 },
            { id: 506, name: "Ngũ Hành Sơn", points: 15 }
        ]
    },
    {
        id: 6,
        name: "Huế",
        locations: [
            { id: 601, name: "Đại Nội Huế", points: 20 },
            { id: 602, name: "Lăng Tự Đức", points: 15 },
            { id: 603, name: "Chùa Thiên Mụ", points: 15 },
            { id: 604, name: "Cầu Tràng Tiền", points: 3 },
            { id: 605, name: "Núi Ngự Bình", points: 3 },
            { id: 606, name: "Lăng Khải Định", points: 15 },
            { id: 607, name: "Sông Hương", points: 12 }
        ]
    },
    {
        id: 7,
        name: "Hà Giang",
        locations: [
            { id: 701, name: "Cột cờ Lũng Cú", points: 20 },
            { id: 702, name: "Đèo Mã Pí Lèng", points: 25 },
            { id: 703, name: "Phố cổ Đồng Văn", points: 15 },
            { id: 704, name: "Dinh Vua Mèo", points: 20 },
            { id: 705, name: "Hẻm Tu Sản", points: 18 },
            { id: 706, name: "Sông Nho Quế", points: 20 },
            { id: 707, name: "Làng văn hóa Lũng Cẩm", points: 15 }
        ]
    },
    {
        id: 8,
        name: "Lào Cai",
        locations: [
            { id: 801, name: "Fansipan", points: 25 },
            { id: 802, name: "Sapa – Bản Cát Cát", points: 15 },
            { id: 803, name: "Y Tý – Săn mây", points: 20 },
            { id: 804, name: "Đèo Ô Quy Hồ", points: 18 },
            { id: 805, name: "Thác Bạc", points: 12 },
            { id: 806, name: "Chợ đêm Sapa", points: 3 },
            { id: 807, name: "Hàm Rồng", points: 15 }
        ]
    },
    {
        id: 9,
        name: "Sơn La",
        locations: [
            { id: 901, name: "Tà Xùa – Săn mây", points: 20 },
            { id: 902, name: "Mộc Châu – Đồi chè", points: 15 },
            { id: 903, name: "Thác Dải Yếm", points: 12 },
            { id: 904, name: "Hang Dơi Mộc Châu", points: 3 },
            { id: 905, name: "Rừng thông Bản Áng", points: 15 },
            { id: 906, name: "Đỉnh Pha Luông", points: 18 }
        ]
    },
    {
        id: 10,
        name: "Lâm Đồng",
        locations: [
            { id: 1001, name: "Đà Lạt – Đỉnh Langbiang", points: 20 },
            { id: 1002, name: "Đồi chè Cầu Đất", points: 15 },
            { id: 1003, name: "Đỉnh Pinhatt", points: 12 },
            { id: 1004, name: "Thung lũng Tình Yêu", points: 15 },
            { id: 1005, name: "Hồ Xuân Hương", points: 10 },
            { id: 1006, name: "Thác Datanla", points: 12 },
            { id: 1007, name: "Làng Cù Lần", points: 15 }
        ]
    },
    {
        id: 11,
        name: "Cao Bằng",
        locations: [
            { id: 1101, name: "Thác Bản Giốc", points: 20 },
            { id: 1102, name: "Hang Pác Bó", points: 15 },
            { id: 1103, name: "Động Ngườm Ngao", points: 12 },
            { id: 1104, name: "Hồ Thang Hen", points: 15 },
            { id: 1105, name: "Đèo Mã Phục", points: 18 }
        ]
    },
    {
        id: 12,
        name: "Quảng Ninh",
        locations: [
            { id: 1201, name: "Vịnh Hạ Long", points: 25 },
            { id: 1202, name: "Đảo Cô Tô", points: 20 },
            { id: 1203, name: "Yên Tử", points: 15 },
            { id: 1204, name: "Bãi Cháy", points: 12 },
            { id: 1205, name: "Đảo Quan Lạn", points: 18 }
        ]
    },
    {
        id: 13,
        name: "Phú Quốc",
        locations: [
            { id: 1301, name: "Bãi Sao", points: 15 },
            { id: 1302, name: "Làng chài Hàm Ninh", points: 12 },
            { id: 1303, name: "Suối Tranh", points: 10 },
            { id: 1304, name: "Dinh Cậu", points: 10 },
            { id: 1305, name: "VinWonders Phú Quốc", points: 20 }
        ]
    },
    {
        id: 14,
        name: "Yên Bái",
        locations: [
            { id: 1401, name: "Mù Cang Chải – Săn mây", points: 20 },
            { id: 1402, name: "Đèo Khau Phạ", points: 18 },
            { id: 1403, name: "Suối khoáng nóng Trạm Tấu", points: 12 },
            { id: 1404, name: "Hồ Thác Bà", points: 15 },
            { id: 1405, name: "Bản Lìm Mông", points: 18 }
        ]
    },
    {
        id: 15,
        name: "Ninh Bình",
        locations: [
            { id: 1501, name: "Tràng An", points: 20 },
            { id: 1502, name: "Tam Cốc – Bích Động", points: 15 },
            { id: 1503, name: "Chùa Bái Đính", points: 15 },
            { id: 1504, name: "Cố đô Hoa Lư", points: 12 },
            { id: 1505, name: "Hang Múa", points: 18 }
        ]
    },
    {
        id: 17,
        name: "Bắc Kạn",
        locations: [
            { id: 1701, name: "Hồ Ba Bể", points: 20 },
            { id: 1702, name: "Thác Đầu Đẳng", points: 15 },
            { id: 1703, name: "Động Nàng Tiên", points: 12 },
            { id: 1704, name: "Chùa Thạch Long", points: 10 },
            { id: 1705, name: "Bản Pác Ngòi", points: 15 }
        ]
    },
];

// Lưu trữ trạng thái đã đến
let visitedLocations = JSON.parse(localStorage.getItem('visitedLocations')) || {};
let totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;
let userRank = localStorage.getItem('userRank') || 'Lãng Tử Bụi Đường';

// Các rank theo điểm
const ranks = [
    { name: 'Lãng Tử Bụi Đường', minPoints: 0, icon: 'fa-seedling' },
    { name: 'Kẻ Lữ Hành Dưới Ánh Trăng', minPoints: 50, icon: 'fa-backpack' },
    { name: 'Tay Đua Gió Bão', minPoints: 150, icon: 'fa-compass' },
    { name: 'Hiệp Khách Giang Hồ', minPoints: 300, icon: 'fa-map-marked-alt' },
    { name: 'Sói Hoang Đỉnh Núi', minPoints: 500, icon: 'fa-mountain' },
    { name: 'Huyền Thoại Phiêu Lưu', minPoints: 800, icon: 'fa-crown' },
    { name: 'Bá Vương Xuyên Sơn', minPoints: 1200, icon: 'fa-globe' },
    { name: 'Độc Cô Cửu Kiếm', minPoints: 1800, icon: 'fa-trophy' },
    { name: 'Thần Du Hành Vạn Dặm', minPoints: 2500, icon: 'fa-star' },
    { name: 'Vô Thượng Thiên Hạ Lữ Nhân', minPoints: 3500, icon: 'fa-rocket' }
];