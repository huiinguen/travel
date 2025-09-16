// Dữ liệu tỉnh thành và địa điểm
const provincesData = [
    {
        id: 1,
        name: "Hà Nội",
        locations: [
            { id: 101, name: "Hồ Hoàn Kiếm", points: 10 },
            { id: 102, name: "Văn Miếu Quốc Tử Giám", points: 15 },
            { id: 103, name: "Lăng Chủ tịch Hồ Chí Minh", points: 20 },
            { id: 104, name: "Phố cổ Hà Nội", points: 10 },
            { id: 105, name: "Hoàng thành Thăng Long", points: 15 }
        ]
    },
    {
        id: 2,
        name: "TP. Hồ Chí Minh",
        locations: [
            { id: 201, name: "Bưu điện trung tâm", points: 10 },
            { id: 202, name: "Nhà thờ Đức Bà", points: 15 },
            { id: 203, name: "Dinh Độc Lập", points: 20 },
            { id: 204, name: "Chợ Bến Thành", points: 10 },
            { id: 205, name: "Bitexco Financial Tower", points: 15 }
        ]
    },
    {
        id: 3,
        name: "Đà Nẵng",
        locations: [
            { id: 301, name: "Cầu Rồng", points: 10 },
            { id: 302, name: "Bà Nà Hills", points: 20 },
            { id: 303, name: "Bán đảo Sơn Trà", points: 15 },
            { id: 304, name: "Ngũ Hành Sơn", points: 15 },
            { id: 305, name: "Biển Mỹ Khê", points: 10 }
        ]
    },
    {
        id: 4,
        name: "Nha Trang",
        locations: [
            { id: 401, name: "Vinpearl Land", points: 20 },
            { id: 402, name: "Viện Hải dương học", points: 15 },
            { id: 403, name: "Tháp Bà Ponagar", points: 15 },
            { id: 404, name: "Hòn Chồng", points: 10 },
            { id: 405, name: "Đảo Khỉ", points: 10 }
        ]
    },
    {
        id: 5,
        name: "Hội An",
        locations: [
            { id: 501, name: "Phố cổ Hội An", points: 20 },
            { id: 502, name: "Chùa Cầu", points: 15 },
            { id: 503, name: "Làng rau Trà Quế", points: 10 },
            { id: 504, name: "Cửa Đại", points: 10 },
            { id: 505, name: "Làng gốm Thanh Hà", points: 10 }
        ]
    },
    {
        id: 6,
        name: "Huế",
        locations: [
            { id: 601, name: "Đại Nội Huế", points: 20 },
            { id: 602, name: "Lăng Tự Đức", points: 15 },
            { id: 603, name: "Chùa Thiên Mụ", points: 15 },
            { id: 604, name: "Cầu Tràng Tiền", points: 10 },
            { id: 605, name: "Núi Ngự Bình", points: 10 }
        ]
    }
];

// Lưu trữ trạng thái đã đến
let visitedLocations = JSON.parse(localStorage.getItem('visitedLocations')) || {};
let totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;
let userRank = localStorage.getItem('userRank') || 'Bắt đầu';

// Các rank theo điểm
const ranks = [
    { name: 'Bắt đầu', minPoints: 0, icon: 'fa-seedling' },
    { name: 'Du khách', minPoints: 50, icon: 'fa-backpack' },
    { name: 'Nhà thám hiểm', minPoints: 150, icon: 'fa-compass' },
    { name: 'Lữ khách', minPoints: 300, icon: 'fa-map-marked-alt' },
    { name: 'Cao thủ', minPoints: 500, icon: 'fa-mountain' },
    { name: 'Huyền thoại', minPoints: 800, icon: 'fa-crown' }
];