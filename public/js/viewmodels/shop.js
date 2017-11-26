var CurrentPage = 1;
var RecordPerPage = 10;
var totalPage = 0;

function Dashboad() {
    var self = this;

    self.Hitechs = ko.observableArray([]);
    self.Fashions = ko.observableArray([]);

    $(function () {
        //init temp data when code the project need get it from server site
        self.Hitechs.push(new Product(16000, 'iPhone X 256GB', 'Màn hình: 5.8", "Super Retina HĐH: iOS 11<br>CPU: Apple A11 Bionic 6 nhân\nRAM: 3 GB, ROM: 256 GB\nCamera: 2 camera 12 MP, Selfie: 7 MP\nPIN: Đang cập nhật',
            '/public/img/product/iphone-x-256gb-1-300x300.jpg'));
        self.Hitechs.push(new Product(6900, 'Samsung Galaxy J7 Pro', 'Màn hình: 5.5", Full HD\nHĐH: Android 7.0\nCPU: Exynos, 8 nhân\nRAM: 3 GB, ROM: 32 GB\nCamera: 13 MP, Selfie: 13 MP\nPIN: 3600mAh',
            '/public/img/product/samsung-galaxy-j7-pro-vang-dong1-300x300.png'));
        self.Hitechs.push(new Product(16000, 'Laptop Apple Macbook Air MMGG2ZP', 'Apple Macbook Air 2015 i5 5250/8 GB/256 GB với thiết kế gần như hoàn hảo, hiệu năng mượt mà, phiên bản Macbook Air 2015 13.3 inch',
        '/public/img/product/apple-macbook-pro-15-mlh32sa-h-450x300.jpg'));
        self.Hitechs.push(new Product(19000, 'Máy tính bảng Samsung Galaxy Book 10.6 inch', 'Samsung Galaxy Book 10.6 inch là mẫu tablet 2 trong 1 chạy trên nền tảng Windows 10 nhưng vẫn sở hữu cho mình cây bút Spen thần thánh.',
            '/public/img/product/samsung-galaxy-book-106-inch-300-300x300.jpg'));
        self.Fashions.push(new Product(16000, 'Áo công sở nữ', 'Màn hình: 5.5", Full HD\nHĐH: Android 7.0\nCPU: Exynos, 8 nhân\nRAM: 3 GB, ROM: 32 GB\nCamera: 13 MP, Selfie: 13 MP\nPIN: 3600mAh',
            '/public/img/product/TQRFte_simg_63a662_340x340_maxb.png'));
        self.Fashions.push(new Product(16000, 'Đồng phục yêu cho cả gia đình', 'Màn hình: 5.5", Full HD\nHĐH: Android 7.0\nCPU: Exynos, 8 nhân\nRAM: 3 GB, ROM: 32 GB\nCamera: 13 MP, Selfie: 13 MP\nPIN: 3600mAh',
            '/public/img/product/vA513l_simg_63a662_340x340_maxb.png'));
        self.Fashions.push(new Product(16000, 'Thùng đựng đồ gấp gọn hình thú đa năng', '- Sọt đựng đồ đa năng gấp gọn có trọng lượng nhẹ, chất liệu vải chống thấm dày, khung sắt linh hoạt, dễ mở ra và có thể gấp nhỏ lại khi không dùng đến.',
            '/public/img/product/thung-dung-do-gap-gon-hinh-thu-da-nang-1m4G3-PHn6FM_simg_d0daf0_800x1200_max.jpg'));
        self.Fashions.push(new Product(190, 'Áo 2 dây - q000', 'áo 2 dây mát mẻ cho mùa hè nóng nực 19k thun cotton mặc mátfree size - màu như hình:: ảnh chụp thật - hàng bao đẹp:: sản xuất tại vietnam',
            '/public/img/product/9VvuRx_simg_e641cf_768-768-0-0_cropf_simg_ab1f47_350x350_maxb.jpg'));
    });
}

var modelView = new Dashboad();

ko.applyBindings(modelView, $('.page-content')[0]);

function Product(price, name, summary, img) {
    this.Price = price;
    this.Summary = summary;
    this.Name = name;
    this.Img = img;
}