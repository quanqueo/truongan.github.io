// Mảng dữ liệu biển báo
const bienBaoData = [
    {
        id: 1,
        title: 'Biển báo cấm dừng và đỗ',
        meta: 'Kích thước: 70x70cm',
        image: 'assets/images/bienbao/bienbao1.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BB-001',
        description: 'Biển báo cấm dừng và đỗ xe được sử dụng để thông báo đoạn đường cấm dừng, cấm đỗ phương tiện giao thông. Biển được làm từ chất liệu cao cấp, bền bỉ với thời gian và điều kiện thời tiết.',
        specs: {
            'Kích thước': '70 x 70 cm',
            'Chất liệu': 'Tôn sơn phản quang',
            'Độ bền': '5-7 năm',
            'Tiêu chuẩn': 'QCVN 41:2019/BGTVT',
            'Xuất xứ': 'Việt Nam'
        }
    },
    {
        id: 2,
        title: 'Biển báo giới hạn tốc độ',
        meta: 'Kích thước: 60x60cm',
        image: 'assets/images/bienbao/bienbao2.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BB-002',
        description: 'Biển báo giới hạn tốc độ dùng để báo cho người tham gia giao thông biết giới hạn tốc độ tối đa cho phép các phương tiện chạy với tốc độ tối đa không vượt quá trị số ghi trên biển.',
        specs: {
            'Kích thước': '60 x 60 cm',
            'Chất liệu': 'Tôn sơn phản quang',
            'Độ bền': '5-7 năm',
            'Tiêu chuẩn': 'QCVN 41:2019/BGTVT',
            'Xuất xứ': 'Việt Nam'
        }
    },
    {
        id: 3,
        title: 'Biển báo nguy hiểm',
        meta: 'Kích thước: 75x75cm',
        image: 'assets/images/bienbao/bienbao3.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BB-003',
        description: 'Biển báo nguy hiểm là biển báo giao thông báo cho người tham gia giao thông biết trước các nguy hiểm trên đường để chủ động phòng tránh.',
        specs: {
            'Kích thước': '75 x 75 cm',
            'Chất liệu': 'Tôn sơn phản quang',
            'Độ bền': '5-7 năm',
            'Tiêu chuẩn': 'QCVN 41:2019/BGTVT',
            'Xuất xứ': 'Việt Nam'
        }
    },
    {
        id: 4,
        title: 'Biển báo chỉ dẫn',
        meta: 'Kích thước: 80x60cm',
        image: 'assets/images/bienbao/bienbao4.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BB-004',
        description: 'Biển báo chỉ dẫn là biển báo giao thông giúp định hướng và cung cấp thông tin hữu ích cho người tham gia giao thông.',
        specs: {
            'Kích thước': '80 x 60 cm',
            'Chất liệu': 'Tôn sơn phản quang',
            'Độ bền': '5-7 năm',
            'Tiêu chuẩn': 'QCVN 41:2019/BGTVT',
            'Xuất xứ': 'Việt Nam'
        }
    },
    {
        id: 5,
        title: 'Biển báo cấm đi ngược chiều',
        meta: 'Kích thước: 65x65cm',
        image: 'assets/images/bienbao/bienbao5.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BB-005',
        description: 'Biển báo cấm đi ngược chiều được sử dụng để báo đường cấm tất cả các loại phương tiện đi vào theo chiều đặt biển.',
        specs: {
            'Kích thước': '65 x 65 cm',
            'Chất liệu': 'Tôn sơn phản quang',
            'Độ bền': '5-7 năm',
            'Tiêu chuẩn': 'QCVN 41:2019/BGTVT',
            'Xuất xứ': 'Việt Nam'
        }
    },
    {
        id: 6,
        title: 'Biển báo công trường',
        meta: 'Kích thước: 90x70cm',
        image: 'assets/images/bienbao/bienbao6.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BB-006',
        description: 'Biển báo công trường được sử dụng để cảnh báo khu vực đang thi công, yêu cầu người tham gia giao thông chú ý và giảm tốc độ.',
        specs: {
            'Kích thước': '90 x 70 cm',
            'Chất liệu': 'Tôn sơn phản quang',
            'Độ bền': '5-7 năm',
            'Tiêu chuẩn': 'QCVN 41:2019/BGTVT',
            'Xuất xứ': 'Việt Nam'
        }
    },
    {
        id: 7,
        title: 'Biển báo đường giao nhau',
        meta: 'Kích thước: 70x70cm',
        image: 'assets/images/bienbao/bienbao7.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BB-007',
        description: 'Biển báo đường giao nhau được đặt trước khi đến nơi đường giao nhau cùng mức với đường khác.',
        specs: {
            'Kích thước': '70 x 70 cm',
            'Chất liệu': 'Tôn sơn phản quang',
            'Độ bền': '5-7 năm',
            'Tiêu chuẩn': 'QCVN 41:2019/BGTVT',
            'Xuất xứ': 'Việt Nam'
        }
    },
    {
        id: 8,
        title: 'Biển báo đường đôi',
        meta: 'Kích thước: 75x60cm',
        image: 'assets/images/bienbao/bienbao8.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BB-008',
        description: 'Biển báo đường đôi thông báo cho người tham gia giao thông biết bắt đầu đoạn đường có chiều đi và chiều về phân biệt bằng dải phân cách cứng.',
        specs: {
            'Kích thước': '75 x 60 cm',
            'Chất liệu': 'Tôn sơn phản quang',
            'Độ bền': '5-7 năm',
            'Tiêu chuẩn': 'QCVN 41:2019/BGTVT',
            'Xuất xứ': 'Việt Nam'
        }
    }
];

// Mảng dữ liệu máy bơm
const mayBomData = [
    {
        id: 1,
        title: 'Máy bơm công nghiệp HSL',
        meta: 'Công suất: 750W - 1.5KW',
        image: 'assets/images/maybom/bom1.jpg',
        price: 'Liên hệ để báo giá',
        code: 'HSL-750',
        description: 'Máy bơm công nghiệp HSL là dòng máy bơm chất lượng cao, được thiết kế đặc biệt cho các ứng dụng công nghiệp, đảm bảo hiệu suất cao và độ bền vượt trội. Sản phẩm được nhập khẩu chính hãng với đầy đủ giấy tờ CO, CQ.',
        specs: {
            'Công suất': '750W - 1.5KW',
            'Lưu lượng': '12-30 m³/h',
            'Cột áp': '15-32m',
            'Đường kính ống hút': '40mm (1.5")',
            'Đường kính ống đẩy': '40mm (1.5")',
            'Điện áp': '220V/380V - 50Hz',
            'Vật liệu thân máy': 'Gang đúc',
            'Vật liệu cánh bơm': 'Thép không gỉ',
            'Xuất xứ': 'Đài Loan',
            'Bảo hành': '12 tháng'
        }
    },
    {
        id: 2,
        title: 'Máy bơm nước thải HCP',
        meta: 'Công suất: 0.75HP - 5HP',
        image: 'assets/images/maybom/bom2.jpg',
        price: 'Liên hệ để báo giá',
        code: 'HCP-075',
        description: 'Máy bơm nước thải HCP được thiết kế chuyên dụng để bơm nước thải, nước bẩn có lẫn cặn. Máy có khả năng bơm được nước thải có lẫn cặn bẩn với kích thước hạt lên đến 35mm.',
        specs: {
            'Công suất': '0.75HP - 5HP',
            'Lưu lượng': '15-40 m³/h',
            'Cột áp': '8-25m',
            'Đường kính ống': '50mm (2")',
            'Điện áp': '220V/380V - 50Hz',
            'Vật liệu thân máy': 'Gang đúc',
            'Vật liệu cánh bơm': 'Thép không gỉ',
            'Xuất xứ': 'Đài Loan',
            'Bảo hành': '12 tháng'
        }
    },
    {
        id: 3,
        title: 'Máy bơm ly tâm trục ngang',
        meta: 'Công suất: 2.2KW - 7.5KW',
        image: 'assets/images/maybom/bom3.jpg',
        price: 'Liên hệ để báo giá',
        code: 'LTTN-22',
        description: 'Máy bơm ly tâm trục ngang có công suất lớn, thích hợp cho các hệ thống cấp nước quy mô lớn, nhà máy công nghiệp và hệ thống tưới tiêu nông nghiệp.',
        specs: {
            'Công suất': '2.2KW - 7.5KW',
            'Lưu lượng': '25-80 m³/h',
            'Cột áp': '30-65m',
            'Đường kính ống hút': '65mm (2.5")',
            'Đường kính ống đẩy': '50mm (2")',
            'Điện áp': '380V - 50Hz',
            'Vật liệu thân máy': 'Gang đúc',
            'Vật liệu cánh bơm': 'Đồng hoặc thép không gỉ',
            'Xuất xứ': 'Việt Nam',
            'Bảo hành': '12 tháng'
        }
    },
    {
        id: 4,
        title: 'Máy bơm chìm nước thải',
        meta: 'Công suất: 1.5KW - 11KW',
        image: 'assets/images/maybom/bom4.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BCNT-15',
        description: 'Máy bơm chìm nước thải có khả năng bơm nước thải có lẫn cặn bẩn, rác thải và chất rắn. Thiết kế chìm hoàn toàn giúp tiết kiệm không gian và tăng hiệu quả làm việc.',
        specs: {
            'Công suất': '1.5KW - 11KW',
            'Lưu lượng': '15-120 m³/h',
            'Cột áp': '8-30m',
            'Đường kính ống': '50-100mm',
            'Điện áp': '380V - 50Hz',
            'Vật liệu thân máy': 'Gang đúc',
            'Vật liệu cánh bơm': 'Thép không gỉ',
            'Kích thước hạt rắn tối đa': '35-50mm',
            'Xuất xứ': 'Đài Loan',
            'Bảo hành': '12 tháng'
        }
    },
    {
        id: 5,
        title: 'Máy bơm tăng áp',
        meta: 'Công suất: 0.37KW - 0.75KW',
        image: 'assets/images/maybom/bom5.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BTA-037',
        description: 'Máy bơm tăng áp được thiết kế để tăng áp lực nước trong hệ thống cấp nước sinh hoạt, đặc biệt phù hợp cho chung cư, khách sạn và các công trình cao tầng.',
        specs: {
            'Công suất': '0.37KW - 0.75KW',
            'Lưu lượng': '5-15 m³/h',
            'Cột áp': '12-35m',
            'Đường kính ống': '25mm (1")',
            'Điện áp': '220V - 50Hz',
            'Vật liệu thân máy': 'Thép không gỉ',
            'Vật liệu cánh bơm': 'Thép không gỉ',
            'Xuất xứ': 'Đài Loan',
            'Bảo hành': '12 tháng'
        }
    },
    {
        id: 6,
        title: 'Máy bơm nước cao cấp',
        meta: 'Công suất: 1.1KW - 3.7KW',
        image: 'assets/images/maybom/bom6.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BNCC-11',
        description: 'Máy bơm nước cao cấp với hiệu suất cao, tiết kiệm điện năng, phù hợp cho các hệ thống cấp nước dân dụng và công nghiệp.',
        specs: {
            'Công suất': '1.1KW - 3.7KW',
            'Lưu lượng': '15-60 m³/h',
            'Cột áp': '20-45m',
            'Đường kính ống': '40-50mm',
            'Điện áp': '220V/380V - 50Hz',
            'Vật liệu thân máy': 'Gang đúc',
            'Vật liệu cánh bơm': 'Thép không gỉ',
            'Xuất xứ': 'Nhật Bản',
            'Bảo hành': '24 tháng'
        }
    },
    {
        id: 7,
        title: 'Máy bơm hút sâu',
        meta: 'Công suất: 1HP - 3HP',
        image: 'assets/images/maybom/bom7.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BHS-10',
        description: 'Máy bơm hút sâu được thiết kế để bơm nước từ giếng sâu, có khả năng hút nước ở độ sâu lên đến 8m và đẩy cao đến 50m.',
        specs: {
            'Công suất': '1HP - 3HP (0.75KW - 2.2KW)',
            'Lưu lượng': '5-30 m³/h',
            'Cột áp': '25-50m',
            'Độ sâu hút': 'Tối đa 8m',
            'Đường kính ống': '25-40mm',
            'Điện áp': '220V - 50Hz',
            'Vật liệu thân máy': 'Gang đúc',
            'Vật liệu cánh bơm': 'Đồng hoặc thép không gỉ',
            'Xuất xứ': 'Ý',
            'Bảo hành': '12 tháng'
        }
    },
    {
        id: 8,
        title: 'Máy bơm nước bể cá',
        meta: 'Công suất: 25W - 100W',
        image: 'assets/images/maybom/bom8.jpg',
        price: 'Liên hệ để báo giá',
        code: 'BBC-025',
        description: 'Máy bơm nước bể cá với thiết kế nhỏ gọn, hoạt động êm ái, phù hợp cho các bể cá cảnh, bể thủy sinh và hồ cá nhỏ.',
        specs: {
            'Công suất': '25W - 100W',
            'Lưu lượng': '1-5 m³/h',
            'Cột áp': '1.5-3m',
            'Đường kính ống': '13-20mm',
            'Điện áp': '220V - 50Hz',
            'Vật liệu thân máy': 'Nhựa ABS',
            'Vật liệu cánh bơm': 'Nhựa hoặc gốm',
            'Xuất xứ': 'Trung Quốc',
            'Bảo hành': '6 tháng'
        }
    }
];

// Lấy danh sách sản phẩm theo loại (type)
function getProductsByType(type) {
    if (type === 'bien-bao') {
        return bienBaoData;
    } else if (type === 'may-bom') {
        return mayBomData;
    }
    return [];
}

// Lấy thông tin sản phẩm theo ID và loại
function getProductByTypeAndId(type, id) {
    const products = getProductsByType(type);
    return products.find(product => product.id === parseInt(id));
}

// Lấy các sản phẩm liên quan (cùng loại, trừ sản phẩm hiện tại)
function getRelatedProducts(type, currentId, limit = 4) {
    const products = getProductsByType(type);
    return products
        .filter(product => product.id !== parseInt(currentId))
        .slice(0, limit);
}
