"use client";
import { useState } from "react";
import Link from "next/link";

// คุณสามารถเรียกใช้คอมโพเนนต์นี้ใน Navbar ของคุณแทนที่ Link เดิม
// <EventDropdown />
export default function EventDropdown() {
  // State เพื่อจัดการว่า Dropdown เปิด (true) หรือ ปิด (false)
  const [isOpen, setIsOpen] = useState(false);

  // รายการอีเวนต์สำหรับแสดงใน Dropdown
  const events = [
    { year: "2024", href: "/event/2024" },
    { year: "2023", href: "/event/2023" },
    { year: "2020", href: "/event/2020" },
    { year: "2019", href: "/event/2019" },
    { year: "2018", href: "/event/2018" },
  ];

  // สมมติว่าปีปัจจุบันคือ 2025 (ตามภาพที่ไฮไลต์สีแดง)
  const currentYear = "2025";

  return (
    // ---- 1. เพิ่ม onMouseLeave ที่นี่ ----
    // เมื่อเมาส์ออกจากพื้นที่ทั้งหมด (ปุ่ม + เมนู) ให้ปิดเมนู
    <div
      className="relative"
      onMouseEnter={(e) => {
        const el = e.currentTarget as any;
        // cancel pending close
        if (el._closeTimer) {
          clearTimeout(el._closeTimer);
          el._closeTimer = undefined;
        }
        // schedule open after 250ms
        if (!el._openTimer) {
          el._openTimer = window.setTimeout(() => {
            setIsOpen(true);
            el._openTimer = undefined;
          }, 250);
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as any;
        // cancel pending open
        if (el._openTimer) {
          clearTimeout(el._openTimer);
          el._openTimer = undefined;
        }
        // schedule close after 200ms
        if (!el._closeTimer) {
          el._closeTimer = window.setTimeout(() => {
            setIsOpen(false);
            el._closeTimer = undefined;
          }, 100);
        }
      }}
    >
      {/* ปุ่ม "Events" ที่ใช้เปิด/ปิด Dropdown */}
      <button
        // onMouseEnter removed — container handles delayed open
        // ---- 3. คง onClick ไว้ (แต่ clear timers on click) ----
        onClick={(e) => {
          const btn = e.currentTarget as HTMLElement;
          const container = btn.closest(".relative") as any;
          if (container?._openTimer) {
            clearTimeout(container._openTimer);
            container._openTimer = undefined;
          }
          if (container?._closeTimer) {
            clearTimeout(container._closeTimer);
            container._closeTimer = undefined;
          }
          setIsOpen((s) => !s);
        }}
        className="flex items-center rounded-md px-4 py-2 font-medium text-black hover:bg-red-700 hover:text-white focus:outline-none duration-500 ease-in-out"
      >
        <span>Events</span>
        {/* SVG Icon ลูกศรชี้ลง */}
        <svg
          className={`ml-2 h-5 w-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* ตัว Dropdown Menu
        - จะแสดงผลก็ต่อเมื่อ isOpen เป็น true
      */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg">
          {events.map((event) => (
            <Link
              key={event.year}
              href={event.href}
              // เมื่อคลิกที่ลิงก์ ให้ปิด Dropdown (ยังคงไว้เหมือนเดิม)
              onClick={(e) => {
                const link = e.currentTarget as HTMLElement;
                const container = link.closest(".relative") as any;
                if (container?._openTimer) {
                  clearTimeout(container._openTimer);
                  container._openTimer = undefined;
                }
                if (container?._closeTimer) {
                  clearTimeout(container._closeTimer);
                  container._closeTimer = undefined;
                }
                setIsOpen(false);
              }}
              className={`
                block px-4 py-2 text-sm text-white
                ${
                  event.year === currentYear
                    ? "bg-red-600" // สไตล์สำหรับ Active Item (ตามภาพ)
                    : "hover:bg-gray-700" // สไตล์สำหรับ Item อื่นๆ
                }
              `}
            >
              TEDxBangkok {event.year}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
