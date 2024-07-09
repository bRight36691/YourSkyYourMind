"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function page() {
  return (
    <div className="overflow-hidden object-none">
      <motion.div
        animate={{
          x: [-5, -800, -5],
          transition: {
            duration: 80,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
        className="h-screen w-[300%] fixed"
      >
        <Image
          src="/img/scene1_sky.webp"
          alt="SKY"
          width={3000}
          height={2000}
          className="h-screen w-[150%]"
        />
      </motion.div>

      <div className="flex flex-col w-screen top-40 items-center z-10 fixed gap-6 text-center text-black">
        <p className="font-bold">คำเตือน</p>
        <div>
          <p>เว็บนี้มีเนื้อหาเกี่ยวกับความรู้สึก</p>
          <p>และการย้อนนึกถึงเรื่องราวต่าง ๆ ในอดีต</p>
          <p>หากคุณมีสภาวะจิตใจที่ไม่มั่นคง</p>
          <p>ยังรับมือกับสภาวะทางอารมณ์ลบ ของตนเองได้ไม่ดี</p>
          <p>หรือมีความทรงจำเกี่ยวกับการเติบโต</p>
          <p>หรือเผชิญหน้ากับเรื่องราวหนัก ๆ มา</p>
        </div>
        <div>
          <p>หากคุณรู้สึกไม่สบายใจระหว่างการเล่น</p>
          <p>สามารถหยุดเล่นได้</p>
          <p>การดูแลใจตัวเองสำคัญกว่าอะไรทั้งสิ้น</p>
        </div>
        <div>
          <p>เว็บนี้สำหรับสำรวจจิตใจของตนเอง และภาวะหมดไฟ</p>
          <p>ในนิสิตนักศึกษาแพทย์และนักเรียนแพทย์ทหาร</p>
          <p>และบุคคลที่สนใจ</p>
        </div>
      </div>

      <Link href="/1-3">
        <div className="flex justify-center fixed bottom-32 w-screen">
          <button className="bg-white text-black z-20">ถัดไป</button>
        </div>
      </Link>
    </div>
  );
}
