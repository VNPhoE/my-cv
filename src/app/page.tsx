import { DownloadButton } from "@/components/DownloadButton"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { Calendar } from "lucide-react"
import { ContactInfo } from "@/components/ContactInfo"
import Image from "next/image";

export default function CV() {
  return (
    <div className="min-h-screen bg-muted print:bg-white">
      <main className="container mx-auto p-4 md:p-8 max-w-4xl bg-background print:bg-white rounded-lg my-8 shadow-lg print:shadow-none">
        {/* Header / Thông tin cá nhân */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-muted">
            <Image src="/images/avt.jpg" alt="Mo ta" width={500} height={300} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold">Phan Hoàng Đông</h1>
                <p className="text-xl text-muted-foreground mt-1">Thực Tập Sinh Phát Triển Phần Mềm</p>
              </div>
              <DownloadButton />
            </div>
            <ContactInfo
              phone="0769460265"
              email="cv.hoangdong@gmail.com"
              location="Quận Ninh Kiều, TP. Cần Thơ"
              github="https://github.com/VNPhoE"
            />
          </div>
        </div>

        {/* Mục tiêu nghề nghiệp */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b pb-2 mb-4">Mục Tiêu Nghề Nghiệp</h2>
          <p className="text-muted-foreground">
            Mong muốn học hỏi và phát triển các kỹ năng trong lĩnh vực IT, đặc biệt là trong mảng quản lý hệ thống, phát triển phần mềm và an ninh mạng. Tôi hy vọng có cơ hội đóng góp và phát triển bản thân thông qua vị trí thực tập sinh IT tại công ty.
          </p>
        </section>

        {/* Kinh nghiệm làm việc */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b pb-2 mb-4">Kinh Nghiệm Làm Việc</h2>
          <div className="grid gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-bold">Hỗ trợ quản lý hệ thống server game</h3>
                    <p className="text-muted-foreground">3/2024 - 8/2024</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Cấu hình và bảo trì server game, đảm bảo tính ổn định và hiệu suất cao.</li>
                  <li>Theo dõi và xử lý các sự cố về hệ thống, giải quyết các vấn đề phát sinh nhanh chóng.</li>
                  <li>Cập nhật và bảo mật server để ngăn chặn các nguy cơ tấn công từ bên ngoài.</li>
                  <li>Tối ưu hóa hệ thống để phục vụ nhiều người dùng cùng lúc, nâng cao trải nghiệm người chơi.</li>
                </ul>
                <p className="mt-4 font-semibold">Kỹ năng đạt được:</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Bảo mật hệ thống: Nắm vững các biện pháp bảo mật để bảo vệ server khỏi tấn công và xâm nhập trái phép.</li>
                  <li>Hiểu biết về cơ sở dữ liệu: Kinh nghiệm quản lý, bảo trì và tối ưu hóa cơ sở dữ liệu của trò chơi.</li>
                  <li>Kỹ năng giải quyết vấn đề và xử lý sự cố hệ thống.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Kỹ năng */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b pb-2 mb-4">Kỹ Năng</h2>
          <div className="grid gap-4">
            <div>
              <h3 className="font-semibold mb-2">Kỹ năng chuyên môn</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Quản lý hệ thống</Badge>
                <Badge>Lập trình</Badge>
                <Badge>Java</Badge>
                <Badge>C#</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Kỹ năng mềm</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Làm việc nhóm</Badge>
                <Badge variant="outline">Giao tiếp</Badge>
                <Badge variant="outline">Quản lý thời gian</Badge>
                <Badge variant="outline">Giải quyết vấn đề</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Hoạt động */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b pb-2 mb-4">Hoạt Động</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-bold">Hành trình Bước Chân Tuổi Trẻ</h3>
                  <p className="text-muted-foreground">9/2024</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Tình nguyện viên hỗ trợ các ban trong hoạt động giúp đỡ trẻ em ở vùng khó khăn.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Sở thích */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b pb-2 mb-4">Sở Thích</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Bóng đá</Badge>
            <Badge>Nghe nhạc</Badge>
            <Badge>Du lịch</Badge>
          </div>
        </section>

        {/* Học vấn */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b pb-2 mb-4">Học Vấn</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-bold">Trường Cao Đẳng FPT Polytechnic Cần Thơ</h3>
                  <p className="text-muted-foreground">2023 - hiện nay</p>
                </div>
              </div>
              <p className="text-muted-foreground">Phát triển phần mềm</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

