"use client";

import { useState } from "react";

export default function CardQ({ question, type, options, ind }) {
  const [answers, setAnswer] = useState([]);

  // تابع به‌روزرسانی جواب‌ها
  const setAnswersInput = (val, ind) => {
    // اضافه کردن یا به‌روزرسانی مقدار جدید در آرایه
    const newAnswers = [...answers];  // ایجاد یک نسخه جدید از آرایه
    newAnswers[ind] = { value: val, index: ind };  // بروزرسانی یا افزودن پاسخ
    setAnswer(newAnswers);  // به‌روزرسانی وضعیت
    console.log(newAnswers[ind]);  // نمایش مقدار به‌روزرسانی شده
  };

  // برای گزینه‌های چندگانه، انتخاب گزینه را ذخیره می‌کنیم
  const handleOptionChange = (val, ind) => {
    const newAnswers = [...answers];
    newAnswers[ind] = { value: val, index: ind };
    setAnswer(newAnswers);
    console.log(newAnswers[ind]);
  };

  return (
    <div className="flex flex-col items-center justify-around bg-slate-500 h-full w-full p-4 rounded-lg">
      {/* نمایش متن سوال */}
      <div className="text-white text-xl mb-4">{question}</div>

      {/* نمایش سوال تشریحی */}
      {type === "تشریحی" && (
        <textarea
          className="w-full p-2 rounded-lg border-2 border-gray-300"
          placeholder={answers[ind]?.value ?? "پاسخ خود را بنویسید..."}

          onChange={(e) => setAnswersInput(e.target.value, ind)}
        ></textarea>
      )}

      {/* نمایش سوال چند گزینه‌ای */}
      {type === "چند گزینه‌ای" && options && (
        <div className="flex flex-col gap-2">
          {options.map((option, index) => (
            <label key={index} className="text-white">
              <input
              
                type="radio"
                name={`options-${ind}`}  // هر سوال باید نام متفاوتی داشته باشد
                className="mr-2"
                value={option}
                checked={answers[ind]?.value === option} 
                onChange={() => handleOptionChange(option, ind)}  // ذخیره گزینه انتخابی
              />
              {option}
            </label>
          ))}
        </div>
      )}

      {/* نمایش سوال امتیازدهی */}
      {type === "امتیازدهی" && (
        <div className="flex gap-2">
          {Array.from({ length: 5 }, (_, i) => (
            <button
              key={i}
              className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400"
              onClick={() => handleOptionChange(i + 1, ind)}  // ذخیره امتیاز انتخابی
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
