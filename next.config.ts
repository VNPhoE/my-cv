/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Bắt buộc để Next.js tạo thư mục "out"
  images: {
    unoptimized: true, // Vô hiệu hóa tính năng tối ưu hóa hình ảnh
  },
};

module.exports = nextConfig;
