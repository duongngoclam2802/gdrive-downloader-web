"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowDownToLine,
  BookOpenText,
  Check,
  ChevronRight,
  Cookie,
  Download,
  Files,
  FolderOpen,
  Gauge,
  Layers3,
  Link2,
  LockKeyhole,
  Menu,
  MonitorDown,
  Play,
  ShieldCheck,
  Sparkles,
  X,
  Zap
} from "lucide-react";
import { useState } from "react";

const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number];
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const downloadPath = `${basePath}/downloads/GDriveAdvancedDownloaderSetup.exe`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "G-Drive Advanced Downloader",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows 10, Windows 11",
  description:
    'Công cụ hỗ trợ tải file/folder trên Google Drive bị chặn quyền tải xuống "View only" cho dữ liệu bạn sở hữu hoặc được cấp quyền truy cập hợp lệ.',
  keywords:
    'tải file google drive view only, tải folder google drive view only, tải file google drive bị chặn tải xuống, tải folder google drive bị chặn tải xuống',
  featureList: [
    "Hỗ trợ link file và folder Google Drive",
    'Nhận diện trạng thái "View only"',
    "Tải đa luồng",
    "Tải hàng loạt",
    "Tự chọn thư mục lưu"
  ]
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase }
  }
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: smoothEase }
  }
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.9, rotateX: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.66, ease: smoothEase }
  }
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const features = [
  {
    icon: LockKeyhole,
    title: 'Hỗ trợ link "View only"',
    detail:
      "Xử lý các link Google Drive bị tắt nút tải xuống khi bạn có quyền xem hợp lệ hoặc được chủ sở hữu cho phép sao lưu."
  },
  {
    icon: FolderOpen,
    title: "Tải cả file và folder",
    detail:
      "Dán link file lẻ hoặc thư mục Drive, công cụ sẽ đưa vào hàng chờ để tải về máy theo cấu trúc dễ quản lý."
  },
  {
    icon: Zap,
    title: "Tải đa luồng nhanh hơn",
    detail:
      "Chia dữ liệu thành nhiều luồng tải song song để tốc độ ổn định hơn với file lớn hoặc thư mục nhiều mục."
  },
  {
    icon: Files,
    title: "Tải hàng loạt",
    detail:
      "Thêm nhiều link Google Drive cùng lúc, theo dõi từng tiến trình và hạn chế thao tác thủ công lặp lại."
  },
  {
    icon: MonitorDown,
    title: "Kiểm tra trước khi tải",
    detail:
      "Xem loại link, trạng thái quyền tải, kích thước dự kiến và thư mục lưu trước khi bắt đầu phiên tải."
  },
  {
    icon: Gauge,
    title: "Theo dõi realtime",
    detail:
      "Hiển thị tốc độ, số luồng, phần trăm hoàn tất và trạng thái xác thực ngay trong màn hình tải."
  }
];

const steps = [
  {
    icon: Cookie,
    title: "Xác thực phiên xem",
    text: "Nhập cookie từ phiên Google Drive hợp lệ để công cụ nhận đúng quyền truy cập của tài khoản bạn."
  },
  {
    icon: Link2,
    title: "Dán link file/folder",
    text: 'Thêm link Google Drive đang ở chế độ "View only" hoặc bị chặn quyền tải xuống vào hàng chờ.'
  },
  {
    icon: Download,
    title: "Chọn nơi lưu và tải",
    text: "Chọn thư mục lưu, kiểm tra thông tin link rồi để trình tải đa luồng xử lý phần còn lại."
  }
];

const stats = [
  { label: "File/folder", value: "Drive" },
  { label: "Trạng thái", value: "View" },
  { label: "Tăng tốc", value: "5x" }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BackgroundShell />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col justify-center px-5 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            variants={fadeDown}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-4 py-2 text-sm text-cyan-100 shadow-glow backdrop-blur-xl"
            >
              <DriveIcon size={26} />
              Hỗ trợ tải File Google Drive view only
            </motion.div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Tải File Google Drive bị chặn tải xuống "View only"
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              G-Drive Advanced Downloader hỗ trợ tải file hoặc thư mục trên
              Google Drive khi bị tắt nút Download, chặn quyền tải xuống hoặc
              chỉ cho xem. Chỉ sử dụng với dữ liệu bạn sở hữu hoặc được cấp quyền
              truy cập hợp lệ.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <MotionButton href={downloadPath} variant="primary" download>
                <ArrowDownToLine className="h-5 w-5" />
                Tải bản Windows
              </MotionButton>
              <MotionButton href="#how-it-works" variant="secondary">
                <BookOpenText className="h-5 w-5" />
                Xem quy trình tải
              </MotionButton>
            </div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="mt-10 grid max-w-xl grid-cols-3 gap-3"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={popIn}
                  whileHover={{ y: -5 }}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                >
                  <div className="text-2xl font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 36 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: smoothEase, delay: 0.12 }}
            className="relative"
          >
            <ProductPreview />
          </motion.div>
        </div>
      </section>

      <section id="features" className="relative px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-medium uppercase tracking-normal text-cyanGlow">
              Tính năng
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Tối ưu cho file/folder Drive bị khóa quyền tải xuống
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.article
                key={feature.title}
                variants={popIn}
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyanGlow to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-cyanGlow/25 bg-cyanGlow/10 text-cyanGlow shadow-glow transition-colors group-hover:border-violetGlow/40 group-hover:bg-violetGlow/10 group-hover:text-violet-200">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{feature.detail}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative border-y border-white/10 bg-white/[0.03] px-5 py-20 backdrop-blur-sm sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-sm font-medium uppercase tracking-normal text-violetGlow">
              Cách hoạt động
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Ba bước từ link view only đến file trong máy
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-5 md:grid-cols-3"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={popIn}
                whileHover={{ y: -8 }}
                className="relative rounded-lg border border-white/10 bg-midnight/70 p-6 backdrop-blur-xl"
              >
                <div className="mb-8 flex items-center justify-between">
                  <motion.div
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-cyanGlow"
                  >
                    <step.icon className="h-6 w-6" />
                  </motion.div>
                  <span className="text-5xl font-semibold text-white/[0.07]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
                {index < steps.length - 1 ? (
                  <ChevronRight className="absolute -right-5 top-1/2 hidden h-9 w-9 -translate-y-1/2 text-cyanGlow/55 md:block" />
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="download" className="relative px-5 pb-20 pt-20 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-cyanGlow/20 bg-gradient-to-br from-cyanGlow/[0.14] via-white/[0.055] to-violetGlow/[0.14] p-7 text-center shadow-glow backdrop-blur-2xl sm:p-12"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1], rotate: [0, 3, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg border border-cyanGlow/30 bg-cyanGlow/10 text-cyanGlow"
          >
            <DriveIcon size={44} />
          </motion.div>
          <h2 className="mt-6 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
            Tải công cụ hỗ trợ tải File Drive
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Cài ứng dụng Windows, xác thực phiên xem, dán link Google Drive và
            để hàng chờ đa luồng tải file hoặc folder về đúng thư mục bạn chọn.
          </p>
          <motion.a
            href={downloadPath}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-cyanGlow px-8 py-4 text-base font-semibold text-ink shadow-[0_0_42px_rgba(86,217,255,0.45)] transition-colors hover:bg-white"
          >
            <Download className="h-5 w-5" />
            Tải file cài đặt .exe
          </motion.a>
          <div className="mx-auto mt-8 grid max-w-2xl gap-3 text-left text-sm text-slate-300 sm:grid-cols-3">
            {["File/folder Drive", "Link view only", "Tải đa luồng"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-cyanGlow" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

function Navbar({
  isMenuOpen,
  setIsMenuOpen
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/58 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <AnimatedLogo />
          <span className="truncate text-base font-semibold sm:text-lg">
            G-Drive Advanced Downloader
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a className="transition-colors hover:text-white" href="#features">
            Tính năng
          </a>
          <a className="transition-colors hover:text-white" href="#how-it-works">
            Cách dùng
          </a>
        </div>
        <div className="hidden md:block">
          <MotionButton href="#download" variant="compact">
            <Download className="h-4 w-4" />
            Tải ngay
          </MotionButton>
        </div>
        <button
          type="button"
          aria-label="Mở menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 }
        }}
        className="overflow-hidden border-t border-white/10 bg-ink/92 backdrop-blur-2xl md:hidden"
      >
        <div className="space-y-3 px-5 py-5">
          {[
            ["Tính năng", "#features"],
            ["Cách dùng", "#how-it-works"]
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5"
            >
              {label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 rounded-lg bg-cyanGlow px-4 py-3 font-semibold text-ink"
          >
            <Download className="h-4 w-4" />
            Tải ngay
          </a>
        </div>
      </motion.div>
    </header>
  );
}

function MotionButton({
  href,
  variant,
  children,
  download
}: {
  href: string;
  variant: "primary" | "secondary" | "compact";
  children: React.ReactNode;
  download?: boolean;
}) {
  const classes = {
    primary:
      "bg-cyanGlow text-ink shadow-[0_0_34px_rgba(86,217,255,0.38)] hover:bg-white",
    secondary:
      "border border-white/[0.12] bg-white/[0.07] text-white backdrop-blur-xl hover:border-violetGlow/45 hover:bg-violetGlow/10",
    compact:
      "bg-white text-ink shadow-[0_0_26px_rgba(255,255,255,0.22)] hover:bg-cyanGlow"
  };

  return (
    <motion.a
      href={href}
      download={download}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${classes[variant]}`}
    >
      {children}
    </motion.a>
  );
}

function AnimatedLogo() {
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 0 18px rgba(86,217,255,.25)",
          "0 0 34px rgba(167,139,250,.42)",
          "0 0 18px rgba(86,217,255,.25)"
        ]
      }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 backdrop-blur-xl"
    >
      <motion.span
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-1 rounded-lg border border-dashed border-cyanGlow/35"
      />
      <DriveIcon size={30} />
    </motion.div>
  );
}

function DriveIcon({ size }: { size: number }) {
  return (
    <Image
      src={`${basePath}/google-drive-icon.png`}
      alt="Google Drive icon"
      width={size}
      height={size}
      className="relative z-10 object-contain"
      style={{ width: size, height: size }}
      priority={size > 40}
    />
  );
}

function ProductPreview() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute -inset-4 rounded-[2rem] border border-cyanGlow/10 bg-cyanGlow/10 blur-3xl" />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/82 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
      >
        <div className="flex h-12 items-center justify-between border-b border-white/10 bg-white/[0.035] px-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-300" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <DriveIcon size={18} />
            gdrive-advanced.exe
          </div>
        </div>
        <div className="grid gap-0 md:grid-cols-[0.8fr_1.2fr]">
          <aside className="border-b border-white/10 bg-white/[0.025] p-5 md:border-b-0 md:border-r">
            <div className="mb-5 flex items-center justify-between text-xs font-medium uppercase tracking-normal text-slate-500">
              <span>Hàng chờ</span>
              <Sparkles className="h-4 w-4 text-cyanGlow" />
            </div>
            {[
              "Tai-lieu-view-only.pdf",
              "Thu-muc-khoa-hoc/",
              "Dataset-no-download.zip"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.12, ease: smoothEase }}
                className="mb-3 rounded-lg border border-white/[0.08] bg-white/[0.045] p-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="truncate text-sm text-slate-200">{item}</span>
                  <span className="text-xs text-cyanGlow">
                    {index === 0 ? "View only" : index === 1 ? "Folder" : "Chờ"}
                  </span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: "20%" }}
                    animate={{
                      width: index === 0 ? ["42%", "82%", "58%", "82%"] : "18%"
                    }}
                    transition={{
                      duration: index === 0 ? 4 : 0.8,
                      repeat: index === 0 ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                    className="h-full rounded-full bg-cyanGlow"
                  />
                </div>
              </motion.div>
            ))}
          </aside>
          <div className="p-5">
            <div className="mb-5 rounded-lg border border-cyanGlow/20 bg-cyanGlow/10 p-4">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyanGlow text-ink"
                >
                  <Play className="h-5 w-5 fill-current" />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Đã nhận diện link View only
                  </div>
                  <div className="text-xs text-cyan-100">
                    Phiên xem hợp lệ đang hoạt động
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["Loại link", "File + Folder"],
                ["Trạng thái", "View only"],
                ["Lưu tại", "D:/Downloads"],
                ["Tốc độ", "48.2 MB/s"]
              ].map(([label, value]) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.03 }}
                  className="min-h-24 rounded-lg border border-white/[0.08] bg-white/[0.04] p-4"
                >
                  <div className="text-xs text-slate-500">{label}</div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {value}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-violetGlow/20 bg-violetGlow/10 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold">Luồng tải song song</span>
                <span className="text-xs text-violet-200">đang tối ưu</span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 12 }).map((_, index) => (
                  <motion.span
                    key={index}
                    animate={{ opacity: [0.35, 1, 0.35], scaleY: [0.75, 1, 0.75] }}
                    transition={{
                      duration: 1.8,
                      delay: index * 0.08,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="h-8 rounded-md bg-gradient-to-b from-cyanGlow to-violetGlow"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 py-8 text-sm text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>G-Drive Advanced Downloader</div>
        <div>
          Chỉ sử dụng với nội dung bạn sở hữu hoặc được phép tải/sao lưu. Google
          Drive icon by{" "}
          <a
            href="https://icon-icons.com/authors/26-aha-soft"
            target="_blank"
            rel="noreferrer"
            className="text-cyanGlow hover:text-white"
          >
            Aha-Soft / Icon-Icons.com
          </a>
          .
        </div>
      </div>
    </footer>
  );
}

function BackgroundShell() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 bg-radial-grid">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <motion.div
        animate={{ x: ["-20%", "20%", "-20%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-cyanGlow/10 to-transparent"
      />
      <motion.div
        animate={{ backgroundPositionX: ["0px", "160px"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_43%,rgba(86,217,255,0.08)_48%,transparent_54%,transparent_100%)] bg-[length:160px_100%]"
      />
    </div>
  );
}
