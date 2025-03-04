import Image from "next/image";
import NavMenuItem from "./components/NavMenuItem";
import FAQ from "./components/FQA";
import { LiaKissBeam } from "react-icons/lia";
import SliderComponent from "./components/Slider";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Snowfall from "./components/Snowfall";
import SliderCutomer from "./components/SliderCutomer";

const menuItems = [
  {
    title: "Loa BitSound",
    href: "section1",
    keyhash: "1",
    type: 1,
    active: true,
  },
  {
    title: "Cách hoạt động",
    href: "section2",
    keyhash: "2",
    type: 1,
    active: false,
  },
  {
    title: "Ưu điểm",
    href: "section3",
    keyhash: "3",
    type: 1,
    active: false,
  },
  {
    title: "Giải pháp",
    href: "section4",
    keyhash: "4",
    type: 1,
    active: false,
  },
  {
    title: "Khách hàng",
    href: "section5",
    keyhash: "5",
    type: 1,
    active: false,
  },
  {
    title: "FAQ",
    href: "section6",
    keyhash: "6",
    type: 1,
    active: false,
  },
  {
    title: "Nhận tư vấn",
    href: "section7",
    keyhash: "7",
    type: 2,
    active: false,
  },
];

export default function Home() {
  return (
    <div className="content flex flex-col">
      <div className="absolute top-0 left-0 w-full h-full -z-1">
        <Snowfall />
      </div>
      {/* navbar */}
      <div className="border-b-0 border-[#e6e8e9] py-2 fixed top-0 w-full z-[9999999] bg-white/96">
        <div className="flex flex-row justify-between items-center container mx-auto">
          <a className="cursor-pointer" href="/">
            <Image src="/img/logo.svg" alt="logo" width={168} height={61} />
          </a>
          <NavMenuItem items={menuItems} />
        </div>
      </div>
      {/* hero */}
      <div className="container mx-auto" id="section1">
        {/* chia làm 2 */}
        <div className="grid grid-cols-12 gap-2 pb-20 pt-40">
          <div className="col-span-12 order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Loa báo kết quả thanh toán QR Code cho chủ cửa hàng
            </h1>
            <p className="text-base mt-4">
              Loa TingTing là thiết bị phát âm thanh bằng giọng nói, thông báo
              kết quả thanh toán qua mã QR. Khi giao dịch thành công, loa sẽ tự
              động đọc chính xác số tiền khách hàng đã chuyển khoản, giúp người
              bán nhận tiền nhanh chóng và an toàn.
            </p>
            <div className="mt-4">
              <button className="font-bold text-lg bg-[#3face1] text-white px-6 py-3 rounded-4xl cursor-pointer">
                Nhận tư vấn
              </button>
            </div>
          </div>
          <div className="col-span-12 order-1 lg:order-2 lg:col-span-7 flex items-center justify-center items-center">
            <Image src="/img/image1.png" alt="loa" width={641} height={600} />
          </div>
        </div>
      </div>
      {/* Cách hoạt động */}
      <div className="container mx-auto" id="section2">
        <div className="py-20 relative">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">
            4 Bước nhận tiền qua BitSound
          </h2>
          <div className="grid grid-cols-4 gap-5 mt-6">
            <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col items-center z-10">
              <div className="bg-gray-100 rounded-full w-32 h-32 mb-3 relative">
                <span className="absolute w-7 h-7 bg-amber-300 rounded-full text-white font-bold flex justify-center items-center top-0 start-0">
                  1
                </span>
              </div>
              <p className="text-center font-semibold w-60">
                Khách hàng quét mã QR trên thiết bị Loa BitSound để chuyển khoản
              </p>
            </div>
            <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col items-center z-10">
              <div className="bg-gray-100 rounded-full w-32 h-32 mb-3 relative">
                <span className="absolute w-7 h-7 bg-amber-300 rounded-full text-white font-bold flex justify-center items-center top-0 start-0">
                  2
                </span>
              </div>
              <p className="text-center font-semibold w-60">
                Loa BitSound xác nhận số tiền giao dịch
              </p>
            </div>
            <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col items-center z-10">
              <div className="bg-gray-100 relative rounded-full w-32 h-32 mb-3">
                <span className="absolute w-7 h-7 bg-amber-300 rounded-full text-white font-bold flex justify-center items-center top-0 start-0">
                  3
                </span>
              </div>
              <p className="text-center font-semibold w-60">
                Thu ngân nghe loa báo và xác nhận cho khách hàng
              </p>
            </div>
            <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col items-center z-10">
              <div className="bg-gray-100 rounded-full w-32 h-32 mb-3 relative">
                <span className="absolute w-7 h-7 bg-amber-300 rounded-full text-white font-bold flex justify-center items-center top-0 start-0">
                  4
                </span>
              </div>
              <p className="text-center font-semibold w-60">
                Chủ cửa hàng và thu ngân theo dõi tiền về qua app Loa BitSound
              </p>
            </div>
          </div>
          <div className="absolute top-35 start-[10%] w-[80%] h-1 mt-28 z-0 hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 933 2"
              fill="none"
            >
              <path
                d="M0 1H933"
                stroke="#A7A7A7"
                strokeWidth="2"
                strokeDasharray="2 6"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* Ưu điểm */}
      <div className="container mx-auto" id="section3">
        <div className="py-20">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">
            Tại sao chọn BitSound
          </h2>
          <div className="grid grid-cols-3 grid-rows-2 gap-5 mt-6">
            <div className="col-span-12 h-86 md:col-span-1 md:row-span-2 md:h-auto p-6 bg-gray-100 rounded-2xl relative">
              <h5 className="font-bold text-xl mb-3">
                Tăng hiệu suất vận hành
              </h5>
              <p>
                Nhân viên không cần chụp màn hình để gửi cho chủ cửa hàng, không
                cần chờ chủ cửa hàng xác nhận tiền về
              </p>
              <Image
                className="absolute start-0 bottom-0 rounded-bl-2xl"
                src="/img/image2.png"
                alt="image-why-2"
                width={500}
                height={200}
              />
            </div>
            <div className="col-span-12 h-86 md:col-span-1 p-6 bg-gray-100 rounded-2xl relative">
              <h5 className="font-bold text-xl mb-3">
                Phòng chống gian lận, giả mạo
              </h5>
              <p>
                Tránh kẻ gian dán đè QRCode, chỉ thông báo giao dịch thành công
                nếu chủ cửa hàng đã nhận tiền
              </p>
              <Image
                className="absolute start-0 bottom-0 rounded-bl-2xl"
                src="/img/image3.png"
                alt="image-why-2"
                width={300}
                height={200}
              />
            </div>
            <div className="col-span-12 h-86 md:col-span-1 p-6 bg-gray-100 rounded-2xl relative">
              <h5 className="font-bold text-xl mb-3">
                Nhận tiền và thông báo tức thời
              </h5>
              <p>
                Thông báo tức thời bằng giọng nói qua Loa TingTing khi quét QR
                và thực hiện giao dịch thành công
              </p>
              <Image
                className="absolute end-0 bottom-0 rounded-br-2xl"
                src="/img/image.png"
                alt="image-why-2"
                width={300}
                height={200}
              />
            </div>
            <div className="col-span-12 h-86 md:col-span-2 p-6 bg-gray-100 rounded-2xl relative">
              <h5 className="font-bold text-xl mb-3">
                Theo dõi và quản lý tiền về qua ứng dụng BitSound
              </h5>
              <ul>
                <li>- Theo dõi chi tiết lịch sử nhận tiền trên ứng dụng</li>
                <li>- Tổng kết doanh thu cuối ngày.</li>
                <li>- Quản lý hiệu quả kinh doanh của cửa hàng</li>
              </ul>
              <Image
                className="absolute end-0 bottom-0 rounded-br-2xl"
                src="/img/image3.png"
                alt="image-why-2"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Giải pháp */}
      <div className="container mx-auto" id="section4">
        <div className="py-20">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10 max-w-4xl mx-auto">
            BitSound - Giải pháp thanh toán toàn diện cho mọi nhà bán hàng
          </h2>
          <div className="grid grid-cols-12 gap-5 mt-6">
            <div className="col-span-12 md:col-span-6 bg-gray-100 rounded-2xl relative flex flex-col justify-between">
              <div className="p-6">
                <h5 className="font-bold text-xl mb-3">
                  Bộ sản phẩm Loa BitSound
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  <p className="col-span-1 flex items-center">
                    <RiVerifiedBadgeFill className="mr-2 text-[#00bb2a] text-xl" />{" "}
                    Loa báo kết quả giao dịch
                  </p>
                  <p className="col-span-1 flex items-center">
                    <RiVerifiedBadgeFill className="mr-2 text-[#00bb2a] text-xl" />{" "}
                    Bảng QR Code in sẵn
                  </p>
                  <p className="col-span-1 flex items-center">
                    <RiVerifiedBadgeFill className="mr-2 text-[#00bb2a] text-xl" />{" "}
                    Hướng dẫn sử dụng
                  </p>
                  <p className="col-span-1 flex items-center">
                    <RiVerifiedBadgeFill className="mr-2 text-[#00bb2a] text-xl" />{" "}
                    Dây sạc type C
                  </p>
                </div>
              </div>
              <Image
                src="/img/image copy.png"
                alt="image-why-2"
                width={427}
                height={200}
                className="mx-auto"
              />
            </div>
            <div className="col-span-12 md:col-span-6 bg-gray-100 rounded-2xl relative flex flex-col justify-between">
              <div className="p-6">
                <h5 className="font-bold text-xl mb-5">
                  Ứng dụng quản lý và báo cáo tiền về
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  <p className="col-span-2 flex items-center">
                    <RiVerifiedBadgeFill className="mr-2 text-[#00bb2a] text-xl" />{" "}
                    Loa báo Theo dõi biến động số dư trong thời gian thực
                  </p>
                  <p className="col-span-2 flex items-center">
                    <RiVerifiedBadgeFill className="mr-2 text-[#00bb2a] text-xl" />{" "}
                    Chủ cửa hàng có thể phân quyền cho nhân viên xem tiền về
                  </p>
                </div>
              </div>
              <Image
                 src="/img/image copy 2.png"
                alt="image-why-2"
                width={468}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Khách hàng */}
      <div className="container mx-auto" id="section5">
        <div className="py-20">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">
            BitSound phù hợp với đa dạng loại hình kinh doanh
          </h2>
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center">
                <LiaKissBeam className="text-[#3face1] text-4xl" />
              </div>
              <p className="font-semibold mt-2">Nhà thuốc</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center">
                <LiaKissBeam className="text-[#3face1] text-4xl" />
              </div>
              <p className="font-semibold mt-2">Dịch vụ làm đẹp</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center">
                <LiaKissBeam className="text-[#3face1] text-4xl" />
              </div>
              <p className="font-semibold mt-2">Nhà hàng</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center">
                <LiaKissBeam className="text-[#3face1] text-4xl" />
              </div>
              <p className="font-semibold mt-2">Nhà hàng</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center">
                <LiaKissBeam className="text-[#3face1] text-4xl" />
              </div>
              <p className="font-semibold mt-2">Nhà hàng</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center">
                <LiaKissBeam className="text-[#3face1] text-4xl" />
              </div>
              <p className="font-semibold mt-2">Nhà hàng</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center">
                <LiaKissBeam className="text-[#3face1] text-4xl" />
              </div>
              <p className="font-semibold mt-2">Nhà hàng</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center">
                <LiaKissBeam className="text-[#3face1] text-4xl" />
              </div>
              <p className="font-semibold mt-2">Nhà hàng</p>
            </div>
          </div>
        </div>
      </div>
      <SliderComponent />
      <div className="container mx-auto relative mb-11 h-40">
        <div className="bg-white z-50  rounded-2xl shadow-lg absolute -top-25 w-[calc(100%-2rem)] mx-auto ">
          <SliderCutomer />
        </div>
      </div>
      {/* Hỏi đáp FAQ */}
      <div className="container mx-auto" id="section6">
        <div className="py-20">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">
            Hỏi và đáp về BitSound
          </h2>
          <FAQ />
        </div>
      </div>
      {/* Tư vấn */}
      <div className="container mx-auto" id="section7">
        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl grid grid-cols-12 mb-12">
          <div className="col-span-12 lg:col-span-6 p-6">
            <h2 className="font-bold text-2xl">Vị trí cửa hàng</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3724.9123080507293!2d105.794058!3d20.996152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba618a64759%3A0xb779260989429f0a!2sLoa%20TingTing!5e0!3m2!1sen!2sus!4v1737256966461!5m2!1sen!2sus"
              loading="lazy"
              width="100%"
              height="400"
              className="rounded-2xl mt-3"
            ></iframe>
          </div>
          <div className="col-span-12 lg:col-span-6 bg-[#032c3f] h-[500px] rounded-bl-3xl rounded-br-3xl lg:rounded-bl-none lg:rounded-tr-3xl lg:rounded-br-3xl p-10">
            <h2 className="font-bold text-white text-2xl mb-5">
              Kết nối với BitSound ngay!
            </h2>
            <div className="mb-3">
              <label htmlFor="name" className="font-semibold text-white">
                <span className="text-red-500">*</span> Họ và Tên:
              </label>
              <input
                className="border-o w-full bg-white px-4 py-3 rounded-2xl mt-1.5"
                placeholder="Họ và Tên"
                id="name"
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="font-semibold text-white">
                <span className="text-red-500">*</span> Số điện thoại:
              </label>
              <input
                className="border-o w-full bg-white px-4 py-3 rounded-2xl mt-1.5"
                placeholder="Số điện thoại"
                id="phone"
              ></input>
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="font-semibold text-white">
                Lời nhắn:
              </label>
              <textarea
                className="border-o w-full bg-white px-4 py-3 rounded-2xl mt-1.5"
                placeholder="Lời nhắn"
                id="message"
              ></textarea>
            </div>
            <button className="font-bold text-lg bg-[#3face1] text-white px-6 py-3 rounded-4xl cursor-pointer mx-auto">
              Nhận tư vấn ngay
            </button>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="bg-[#032c3f] py-12 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-5">
              <Image
                src="/img/logow.png"
                alt="logo"
                width={130}
                height={61}
                className="mb-3"
              />
              <h5 className="text-white font-bold text-lg mb-3">
                MỘT SẢN PHẨM CỦA BITPOS
              </h5>
              <p className="text-white text-sm">
                Địa chỉ: Số 34 Nguyễn Khánh Toàn, Hà Nội, VN
              </p>
              <p className="text-white text-sm">
                Giấy phép cung ứng dịch vụ TGTT: Số 60/GP-NHNN
              </p>
              <p className="text-white text-sm">MST: 0108425897</p>
            </div>
            <div className="col-span-7">
              <h2 className="text-xl font-semibold text-white">
                Quét mã và tải về ứng dụng BitSound ngay
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
