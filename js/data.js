// data.js
// Dữ liệu tỉnh thành và địa điểm (cập nhật theo quy hoạch 34 tỉnh/thành từ 12/6/2025)
const provincesData = [
  {
    id: 1,
    name: "Hà Nội",
    locations: [
      { id: 101, name: "Hồ Hoàn Kiếm", points: 5 },
      { id: 102, name: "Văn Miếu Quốc Tử Giám", points: 8 },
      { id: 103, name: "Lăng Chủ tịch Hồ Chí Minh", points: 10 },
      { id: 104, name: "Phố cổ Hà Nội", points: 7 },
      { id: 105, name: "Hoàng thành Thăng Long", points: 12 },
      { id: 106, name: "Hồ Tây", points: 6 },
      { id: 107, name: "Công viên Thống Nhất", points: 6 }
    ]
  },
  {
    id: 2,
    name: "TP. Hồ Chí Minh",
    locations: [
      { id: 201, name: "Bưu điện trung tâm", points: 8 },
      { id: 202, name: "Nhà thờ Đức Bà", points: 10 },
      { id: 203, name: "Dinh Độc Lập", points: 12 },
      { id: 204, name: "Chợ Bến Thành", points: 7 },
      { id: 205, name: "Bitexco Financial Tower", points: 10 },
      { id: 206, name: "Công viên Suối Tiên", points: 9 },
      { id: 207, name: "Địa đạo Củ Chi", points: 15 }
    ]
  },
  {
    id: 3,
    name: "Đà Nẵng",
    locations: [
      { id: 301, name: "Cầu Rồng", points: 7 },
      { id: 302, name: "Bà Nà Hills", points: 15 },
      { id: 303, name: "Bán đảo Sơn Trà", points: 12 },
      { id: 304, name: "Săn mây Hòa Bắc", points: 10 },
      { id: 305, name: "Biển Mỹ Khê", points: 6 },
      { id: 306, name: "Cầu Tình Yêu", points: 6 },
      { id: 307, name: "Đèo Hải Vân", points: 10 }
    ]
  },
  {
    id: 4,
    name: "Khánh Hòa (Nha Trang)",
    locations: [
      { id: 401, name: "Vinpearl Land", points: 15 },
      { id: 402, name: "Viện Hải dương học", points: 10 },
      { id: 403, name: "Tháp Bà Ponagar", points: 10 },
      { id: 404, name: "Hòn Chồng", points: 6 },
      { id: 405, name: "Đảo Khỉ", points: 6 },
      { id: 406, name: "Bãi Dài", points: 8 },
      { id: 407, name: "Dốc Lết", points: 6 }
    ]
  },
  {
    id: 5,
    name: "Quảng Nam - Đà Nẵng Mới",
    locations: [
      { id: 501, name: "Phố cổ Hội An", points: 15 },
      { id: 502, name: "Thánh địa Mỹ Sơn", points: 15 },
      { id: 503, name: "Cù Lao Chàm", points: 12 },
      { id: 504, name: "Bãi biển An Bàng", points: 8 },
      { id: 505, name: "Làng rau Trà Quế", points: 7 },
      { id: 506, name: "Làng gốm Thanh Hà", points: 6 },
      { id: 507, name: "Bãi biển Cửa Đại", points: 6 }
    ]
  },
  {
    id: 6,
    name: "Thừa Thiên Huế",
    locations: [
      { id: 601, name: "Đại Nội Huế", points: 15 },
      { id: 602, name: "Lăng Tự Đức", points: 10 },
      { id: 603, name: "Chùa Thiên Mụ", points: 10 },
      { id: 604, name: "Cầu Tràng Tiền", points: 6 },
      { id: 605, name: "Núi Ngự Bình", points: 6 },
      { id: 606, name: "Lăng Khải Định", points: 10 },
      { id: 607, name: "Sông Hương", points: 8 }
    ]
  },
  {
    id: 7,
    name: "Hà Giang - Cao Bằng",
    locations: [
      { id: 701, name: "Cột cờ Lũng Cú", points: 15 },
      { id: 702, name: "Đèo Mã Pí Lèng", points: 20 },
      { id: 703, name: "Thác Bản Giốc", points: 15 },
      { id: 704, name: "Hang Pác Bó", points: 10 },
      { id: 705, name: "Phố cổ Đồng Văn", points: 10 },
      { id: 706, name: "Dinh Vua Mèo", points: 15 },
      { id: 707, name: "Hẻm Tu Sản", points: 12 }
    ]
  },
  {
    id: 8,
    name: "Lào Cai - Yên Bái",
    locations: [
      { id: 801, name: "Fansipan", points: 20 },
      { id: 802, name: "Mù Cang Chải – Săn mây", points: 15 },
      { id: 803, name: "Đèo Khau Phạ", points: 12 },
      { id: 804, name: "Sapa – Bản Cát Cát", points: 10 },
      { id: 805, name: "Y Tý – Săn mây", points: 15 },
      { id: 806, name: "Đèo Ô Quy Hồ", points: 12 },
      { id: 807, name: "Thác Bạc", points: 8 }
    ]
  },
  {
    id: 9,
    name: "Sơn La - Điện Biên",
    locations: [
      { id: 901, name: "Tà Xùa – Săn mây", points: 15 },
      { id: 902, name: "Mộc Châu – Đồi chè", points: 10 },
      { id: 903, name: "Đỉnh Pha Luông", points: 12 },
      { id: 904, name: "Thác Dải Yếm", points: 8 },
      { id: 905, name: "Rừng thông Bản Áng", points: 10 },
      { id: 906, name: "Hang Dơi Mộc Châu", points: 6 },
      { id: 907, name: "Điện Biên Phủ", points: 15 }
    ]
  },
  {
    id: 10,
    name: "Lâm Đồng - Đắk Nông",
    locations: [
      { id: 1001, name: "Đà Lạt – Đỉnh Langbiang", points: 15 },
      { id: 1002, name: "Đồi chè Cầu Đất", points: 10 },
      { id: 1003, name: "Thung lũng Tình Yêu", points: 10 },
      { id: 1004, name: "Hồ Xuân Hương", points: 7 },
      { id: 1005, name: "Thác Datanla", points: 8 },
      { id: 1006, name: "Làng Cù Lần", points: 10 },
      { id: 1007, name: "Vườn quốc gia Bidoup - Nui Ba", points: 12 }
    ]
  },
  {
    id: 11,
    name: "Quảng Ninh - Hải Phòng",
    locations: [
      { id: 1101, name: "Vịnh Hạ Long", points: 20 },
      { id: 1102, name: "Đảo Cát Bà", points: 15 },
      { id: 1103, name: "Vịnh Lan Hạ", points: 12 },
      { id: 1104, name: "Đảo Cô Tô", points: 15 },
      { id: 1105, name: "Yên Tử", points: 10 },
      { id: 1106, name: "Bãi Cháy", points: 8 },
      { id: 1107, name: "Đảo Quan Lạn", points: 12 }
    ]
  },
  {
    id: 12,
    name: "Kiên Giang - Phú Quốc",
    locations: [
      { id: 1201, name: "Bãi Sao", points: 10 },
      { id: 1202, name: "Quần đảo Nam Du", points: 15 },
      { id: 1203, name: "Hòn Phụ Tử", points: 10 },
      { id: 1204, name: "Làng chài Hàm Ninh", points: 8 },
      { id: 1205, name: "Suối Tranh", points: 7 },
      { id: 1206, name: "Dinh Cậu", points: 7 },
      { id: 1207, name: "VinWonders Phú Quốc", points: 15 }
    ]
  },
  {
    id: 13,
    name: "Ninh Bình - Nam Định",
    locations: [
      { id: 1301, name: "Tràng An", points: 15 },
      { id: 1302, name: "Tam Cốc – Bích Động", points: 10 },
      { id: 1303, name: "Chùa Bái Đính", points: 10 },
      { id: 1304, name: "Cố đô Hoa Lư", points: 8 },
      { id: 1305, name: "Hang Múa", points: 12 },
      { id: 1306, name: "Phủ Dầy", points: 8 },
      { id: 1307, name: "Chùa Phổ Minh", points: 10 }
    ]
  },
  {
    id: 14,
    name: "Quảng Bình - Quảng Trị",
    locations: [
      { id: 1401, name: "Hang Sơn Đoòng", points: 20 },
      { id: 1402, name: "Vườn quốc gia Phong Nha - Kẻ Bàng", points: 15 },
      { id: 1403, name: "Thành cổ Quảng Trị", points: 12 },
      { id: 1404, name: "Địa đạo Vịnh Mốc", points: 15 },
      { id: 1405, name: "Hang Thiên Đường", points: 12 },
      { id: 1406, name: "Suối Moọc", points: 8 },
      { id: 1407, name: "Cầu Hiền Lương", points: 10 }
    ]
  },
  {
    id: 15,
    name: "Bắc Kạn - Thái Nguyên",
    locations: [
      { id: 1501, name: "Hồ Ba Bể", points: 15 },
      { id: 1502, name: "ATK Định Hóa", points: 12 },
      { id: 1503, name: "Thác Đầu Đẳng", points: 10 },
      { id: 1504, name: "Động Nàng Tiên", points: 8 },
      { id: 1505, name: "Chùa Thạch Long", points: 7 },
      { id: 1506, name: "Bản Pác Ngòi", points: 10 },
      { id: 1507, name: "Suối khoáng nóng Sông Công", points: 8 }
    ]
  },
  {
    id: 16,
    name: "Thanh Hóa - Nghệ An",
    locations: [
      { id: 1601, name: "Pù Luông", points: 15 },
      { id: 1602, name: "Thành nhà Hồ", points: 12 },
      { id: 1603, name: "Bãi biển Sầm Sơn", points: 8 },
      { id: 1604, name: "Suối cá Thần", points: 10 },
      { id: 1605, name: "Cửa Lò", points: 8 },
      { id: 1606, name: "Quê Bác Hồ", points: 15 },
      { id: 1607, name: "Thác Hiêu", points: 8 }
    ]
  },
  {
    id: 17,
    name: "Bình Thuận - Ninh Thuận",
    locations: [
      { id: 1701, name: "Đồi cát Mũi Né", points: 10 },
      { id: 1702, name: "Núi Tà Cú", points: 12 },
      { id: 1703, name: "Tháp Chăm Po Klong Garai", points: 10 },
      { id: 1704, name: "Suối Tiên", points: 8 },
      { id: 1705, name: "Bãi biển Mũi Né", points: 7 },
      { id: 1706, name: "Đồi cát trắng", points: 8 },
      { id: 1707, name: "Vịnh Vĩnh Hy", points: 12 }
    ]
  },
  {
    id: 18,
    name: "Cần Thơ - Hậu Giang",
    locations: [
      { id: 1801, name: "Chợ nổi Cái Răng", points: 15 },
      { id: 1802, name: "Cầu đi bộ Ninh Kiều", points: 7 },
      { id: 1803, name: "Nhà cổ Bình Thủy", points: 10 },
      { id: 1804, name: "Vườn trái cây Cái Răng", points: 8 },
      { id: 1805, name: "Chợ nổi Ngã Bảy", points: 12 },
      { id: 1806, name: "Chùa Ông", points: 6 },
      { id: 1807, name: "Bến Ninh Kiều", points: 5 }
    ]
  },
  {
    id: 19,
    name: "An Giang - Đồng Tháp",
    locations: [
      { id: 1901, name: "Rừng tràm Trà Sư", points: 12 },
      { id: 1902, name: "Miếu Bà Chúa Xứ", points: 15 },
      { id: 1903, name: "Vườn quốc gia Tràm Chim", points: 15 },
      { id: 1904, name: "Núi Cấm", points: 10 },
      { id: 1905, name: "Làng nổi Châu Đốc", points: 8 },
      { id: 1906, name: "Làng hoa Sa Đéc", points: 12 },
      { id: 1907, name: "Sam Mountain", points: 8 }
    ]
  },
  {
    id: 20,
    name: "Đắk Lắk - Gia Lai",
    locations: [
      { id: 2001, name: "Vườn quốc gia Yok Đôn", points: 15 },
      { id: 2002, name: "Thác Dray Nur", points: 10 },
      { id: 2003, name: "Biển Hồ", points: 12 },
      { id: 2004, name: "Làng văn hóa Buôn Đôn", points: 12 },
      { id: 2005, name: "Hồ Lắk", points: 8 },
      { id: 2006, name: "Thác Chín Tầng", points: 8 },
      { id: 2007, name: "Bảo tàng cà phê thế giới", points: 7 }
    ]
  },
  {
    id: 21,
    name: "Bình Định - Quảng Ngãi",
    locations: [
      { id: 2101, name: "Bãi biển Kỳ Co", points: 10 },
      { id: 2102, name: "Ghềnh Ráng Tiên Sa", points: 8 },
      { id: 2103, name: "Eo Gió", points: 7 },
      { id: 2104, name: "Hòn Khô", points: 8 },
      { id: 2105, name: "Bãi Xép", points: 6 },
      { id: 2106, name: "Tháp Chăm Bánh Ít", points: 10 },
      { id: 2107, name: "Lý Sơn", points: 15 }
    ]
  },
  {
    id: 22,
    name: "Đồng Nai - Bình Dương",
    locations: [
      { id: 2201, name: "Vườn quốc gia Cát Tiên", points: 15 },
      { id: 2202, name: "Khu du lịch Bửu Long", points: 10 },
      { id: 2203, name: "Thác Giang Điền", points: 8 },
      { id: 2204, name: "Núi Ba Chồng", points: 7 },
      { id: 2205, name: "Thác Mai", points: 8 },
      { id: 2206, name: "Công viên Suối Mơ", points: 6 },
      { id: 2207, name: "Thành phố mới Bình Dương", points: 10 }
    ]
  },
  {
    id: 23,
    name: "Bà Rịa - Vũng Tàu - Bình Phước",
    locations: [
      { id: 2301, name: "Tượng Chúa Kitô Vua", points: 10 },
      { id: 2302, name: "Bãi biển Vũng Tàu", points: 7 },
      { id: 2303, name: "Đảo Côn Đảo", points: 20 },
      { id: 2304, name: "Rừng quốc gia Bình Châu - Phước Bửu", points: 12 },
      { id: 2305, name: "Bãi biển Hồ Tràm", points: 8 },
      { id: 2306, name: "Chùa Thích Ca Phật Đài", points: 7 },
      { id: 2307, name: "Vườn quốc gia Bù Gia Mập", points: 12 }
    ]
  },
  {
    id: 24,
    name: "Cà Mau - Bạc Liêu",
    locations: [
      { id: 2401, name: "Mũi Cà Mau", points: 15 },
      { id: 2402, name: "Vườn quốc gia U Minh Hạ", points: 12 },
      { id: 2403, name: "Chợ nổi Cà Mau", points: 8 },
      { id: 2404, name: "Khu bảo tồn chim Ngọc Hiển", points: 10 },
      { id: 2405, name: "Nhà thờ Bạc Liêu", points: 8 },
      { id: 2406, name: "Vườn chim Bạc Liêu", points: 10 },
      { id: 2407, name: "Bãi biển Khai Long", points: 6 }
    ]
  },
  {
    id: 25,
    name: "Kon Tum - Quảng Nam Mở Rộng",
    locations: [
      { id: 2501, name: "Nhà thờ gỗ Kon Tum", points: 10 },
      { id: 2502, name: "Vườn quốc gia Chư Mom Ray", points: 15 },
      { id: 2503, name: "Rừng thông Măng Đen", points: 10 },
      { id: 2504, name: "Nhà rông Kon Klor", points: 8 },
      { id: 2505, name: "Thác Pa Sỹ", points: 8 },
      { id: 2506, name: "Sông Đắk Bla", points: 7 },
      { id: 2507, name: "Làng Kon K'Tu", points: 7 }
    ]
  },
  {
    id: 26,
    name: "Bắc Giang - Bắc Ninh",
    locations: [
      { id: 2601, name: "Chùa Vĩnh Nghiêm", points: 10 },
      { id: 2602, name: "Làng nghề gốm Thổ Hà", points: 8 },
      { id: 2603, name: "Chùa Bái Đính Mở Rộng", points: 12 },
      { id: 2604, name: "Khu di tích Đền Đô", points: 10 },
      { id: 2605, name: "Làng tranh Đông Hồ", points: 7 },
      { id: 2606, name: "Vườn quốc gia Ba Vì", points: 12 },
      { id: 2607, name: "Chùa Dâu", points: 8 }
    ]
  },
  {
    id: 27,
    name: "Hà Tĩnh - Quảng Bình Mới",
    locations: [
      { id: 2701, name: "Ngã ba Đồng Lộc", points: 12 },
      { id: 2702, name: "Biển Thiên Cầm", points: 8 },
      { id: 2703, name: "Vườn quốc gia Pù Mát", points: 15 },
      { id: 2704, name: "Hang Thiên Đường", points: 12 },
      { id: 2705, name: "Suối Moọc", points: 8 },
      { id: 2706, name: "Bãi biển Nhật Lệ", points: 6 },
      { id: 2707, name: "Hang Tối", points: 10 }
    ]
  },
  {
    id: 28,
    name: "Tây Ninh - Long An",
    locations: [
      { id: 2801, name: "Núi Bà Đen", points: 15 },
      { id: 2802, name: "Tòa thánh Cao Đài", points: 12 },
      { id: 2803, name: "Hồ Dầu Tiếng", points: 10 },
      { id: 2804, name: "Làng nổi Tân Lập", points: 8 },
      { id: 2805, name: "Chùa Gò Kén", points: 7 },
      { id: 2806, name: "Thác Trà Cổ", points: 8 },
      { id: 2807, name: "Căn cứ Trung ương Cục", points: 10 }
    ]
  },
  {
    id: 29,
    name: "Bến Tre - Tiền Giang",
    locations: [
      { id: 2901, name: "Cồn Phụng", points: 10 },
      { id: 2902, name: "Chợ nổi Ngã Năm", points: 12 },
      { id: 2903, name: "Nhà cổ Bình Thủy Mở Rộng", points: 10 },
      { id: 2904, name: "Vườn trái cây Vĩnh Kim", points: 8 },
      { id: 2905, name: "Chùa Vạn Phước", points: 7 },
      { id: 2906, name: "Đường sinh thái Láng Sen", points: 8 },
      { id: 2907, name: "Cù lao Thới Sơn", points: 10 }
    ]
  },
  {
    id: 30,
    name: "Vĩnh Long - Trà Vinh",
    locations: [
      { id: 3001, name: "Chợ nổi Trà Vinh", points: 12 },
      { id: 3002, name: "Nhà cổ Bình Thủy", points: 10 },
      { id: 3003, name: "Vườn quốc gia Trà Sư Mở Rộng", points: 15 },
      { id: 3004, name: "Chùa Ông", points: 6 },
      { id: 3005, name: "Bến Ninh Kiều", points: 5 },
      { id: 3006, name: "Làng nghề làm hủ tiếu", points: 7 },
      { id: 3007, name: "Ao Bà Om", points: 8 }
    ]
  },
  {
    id: 31,
    name: "Sóc Trăng - Bạc Liêu Mới",
    locations: [
      { id: 3101, name: "Chùa Dơi", points: 10 },
      { id: 3102, name: "Nhà thờ Bạc Liêu", points: 8 },
      { id: 3103, name: "Vườn chim Bạc Liêu", points: 10 },
      { id: 3104, name: "Chợ nổi Cà Mau Mở Rộng", points: 8 },
      { id: 3105, name: "Khu bảo tồn chim Ngọc Hiển", points: 10 },
      { id: 3106, name: "Rừng ngập mặn Nam Căn", points: 7 },
      { id: 3107, name: "Bãi biển Khai Long", points: 6 }
    ]
  },
  {
    id: 32,
    name: "Lạng Sơn - Quảng Ninh Mở Rộng",
    locations: [
      { id: 3201, name: "Động Tam Thanh", points: 10 },
      { id: 3202, name: "Chợ Đông Kinh", points: 7 },
      { id: 3203, name: "Núi Tô Thị", points: 8 },
      { id: 3204, name: "Đèo Mã Phục", points: 12 },
      { id: 3205, name: "Chùa Tân Thanh", points: 7 },
      { id: 3206, name: "Hồ Bắc Lầm", points: 6 },
      { id: 3207, name: "Vịnh Hạ Long Mở Rộng", points: 20 }
    ]
  },
  {
    id: 33,
    name: "Hưng Yên - Hải Dương",
    locations: [
      { id: 3301, name: "Chùa Chuông", points: 8 },
      { id: 3302, name: "Phố Hiến", points: 10 },
      { id: 3303, name: "Kênh Vĩnh Tế", points: 7 },
      { id: 3304, name: "Chùa Mã Yên", points: 8 },
      { id: 3305, name: "Vườn quốc gia Xuân Sơn", points: 12 },
      { id: 3306, name: "Bãi biển Cát Cô", points: 6 },
      { id: 3307, name: "Nhà thờ Chính Tòa", points: 10 }
    ]
  },
  {
    id: 34,
    name: "Phú Yên - Khánh Hòa Mới",
    locations: [
      { id: 3401, name: "Gành Đá Đĩa", points: 12 },
      { id: 3402, name: "Bãi Xép", points: 6 },
      { id: 3403, name: "Đại Lãnh Beach", points: 8 },
      { id: 3404, name: "Tháp Nhạn", points: 10 },
      { id: 3405, name: "Vịnh Vũng Rô", points: 12 },
      { id: 3406, name: "Hòn Yến", points: 7 },
      { id: 3407, name: "Đảo Hòn Chùa", points: 10 }
    ]
  }
];

// Lưu trữ trạng thái đã đến
let visitedLocations = JSON.parse(localStorage.getItem('visitedLocations')) || {};
let totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;
let userRank = localStorage.getItem('userRank') || 'Lãng Tử Bụi Đường';

// Các rank theo điểm (cân chỉnh với tổng điểm tối đa ~2850)
const ranks = [
  { name: 'Lãng Tử Bụi Đường', minPoints: 0, icon: 'fa-seedling' },
  { name: 'Kẻ Lữ Hành Dưới Ánh Trăng', minPoints: 57, icon: 'fa-backpack' },
  { name: 'Tay Đua Gió Bão', minPoints: 171, icon: 'fa-compass' },
  { name: 'Hiệp Khách Giang Hồ', minPoints: 342, icon: 'fa-map-marked-alt' },
  { name: 'Sói Hoang Đỉnh Núi', minPoints: 570, icon: 'fa-mountain' },
  { name: 'Huyền Thoại Phiêu Lưu', minPoints: 912, icon: 'fa-crown' },
  { name: 'Bá Vương Xuyên Sơn', minPoints: 1368, icon: 'fa-globe' },
  { name: 'Độc Cô Cửu Kiếm', minPoints: 2052, icon: 'fa-trophy' },
  { name: 'Thần Du Hành Vạn Dặm', minPoints: 2500, icon: 'fa-star' },
  { name: 'Vô Thượng Thiên Hạ Lữ Nhân', minPoints: 2850, icon: 'fa-rocket' }
];