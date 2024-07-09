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

      <div className="flex justify-center items-center z-10 fixed">
        <Image
          src="/img/ysym_logo.webp"
          alt="yourskyyourmind logo"
          width={1080}
          height={1920}
          className="h-auto w-screen overflow-hidden"
        />
      </div>

      <Link href="/1-2">
        <div className="flex justify-center fixed bottom-32 w-screen">
          <button className="bg-white text-black z-20">ถัดไป</button>
        </div>
      </Link>
    </div>
  );
}
