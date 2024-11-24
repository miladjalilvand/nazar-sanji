"use client"
import { useState } from "react";
import Image from "next/image";
import CardQ from "./components/cardq";

// دیتا سوالات
const questionsData = [
  
  {
    id: 0,
    question: "نظرتان درباره خدمات ما چیست؟",
    type: "تشریحی",
    options: null,
  },
  {
    id: 1,
    question: "کدام ویژگی از محصول ما را بیشتر می‌پسندید؟",
    type: "چند گزینه‌ای",
    options: ["کیفیت بالا", "قیمت مناسب", "پشتیبانی", "طراحی زیبا"],
  },
  {
    id: 2,
    question: "خدمات ما را از 1 تا 5 امتیاز دهید.",
    type: "امتیازدهی",
    options: null,
  },
];

export default function HomeCom() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // وضعیت سوال فعلی

  // هندلر دکمه "بعدی"
  const handleNext = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // هندلر دکمه "قبلی"
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <div className="overflow-auto  flex flex-col items-center bg-gradient-to-b from-foreground to-background ">
      <h1 className="">title</h1>
    

      {/* سوال فعلی */}
      <div className=" flex flex-col items-center  gap-4">
        <CardQ
          question={currentQuestion.question}
          type={currentQuestion.type}
          options={currentQuestion.options}
          ind={currentQuestion.id}
        />

<div className="flex gap-4 my-4">
{currentQuestionIndex > 0 && (        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50
          "
        >
          قبلی
        </button>)}
       {currentQuestionIndex === questionsData.length - 1 ? ( <button
          // onClick={handleNext}
          // disabled={currentQuestionIndex === questionsData.length - 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50
         "
        >
          تمام
        </button>) : ( <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questionsData.length - 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 "
        >
          بعدی
        </button>)}
      </div>
      </div>

      {/* دکمه‌های تایم‌لاین */}
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
}
