"use client" 
import { useState } from "react";
import { motion } from "framer-motion";
import { Button,Progress } from "@nextui-org/react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { Rating , ThinStar  } from '@smastrom/react-rating'
import { Checkbox } from "@nextui-org/react";

import '@smastrom/react-rating/style.css'
// داده‌های سوالات
const questionsData = [
  {
    id: 0,
    question: "نظرتان درباره خدمات ما چیست؟",
    type: "t1", // نوع سوال
    options: null, // گزینه‌ها
  },
  {
    id: 1,
    question: "کدام ویژگی از محصول ما را بیشتر می‌پسندید؟",
    type: "t3", // سوال چندگزینه‌ای
    options: ["کیفیت بالا", "قیمت مناسب", "پشتیبانی", "طراحی زیبا"], // گزینه‌ها
  },
  {
    id: 2,
    question: "خدمات ما را از 1 تا 5 امتیاز دهید.",
    type: "t2", // سوال امتیازی
    options: null,
  },
  {
    id: 3,
    question: "آیا خدمات ما را به دیگران پیشنهاد می‌کنید؟",
    type: "t3", // سوال چندگزینه‌ای
    options: ["بله", "خیر", "شاید"], // گزینه‌ها
  },
  // {
  //   id: 4,
  //   question: "چقدر با سرعت پاسخگویی ما راضی بودید؟",
  //   type: "t2", // سوال امتیازی
  //   options: null,
  // },
  // {
  //   id: 5,
  //   question: "آیا به نظرتان قیمت محصولات ما مناسب است؟",
  //   type: "t3", // سوال چندگزینه‌ای
  //   options: ["بله", "خیر", "نه خیلی"], // گزینه‌ها
  // },
  // {
  //   id: 6,
  //   question: "چه ویژگی‌ای به نظر شما می‌تواند بهبود یابد؟",
  //   type: "t1", // سوال نوع 1
  //   options: null, // گزینه‌ها
  // },
  // {
  //   id: 7,
  //   question: "آیا قصد دارید دوباره از خدمات ما استفاده کنید؟",
  //   type: "t3", // سوال چندگزینه‌ای
  //   options: ["بله", "خیر", "شاید"], // گزینه‌ها
  // },
  // {
  //   id: 8,
  //   question: "چه عواملی شما را به خرید از ما ترغیب کرد؟",
  //   type: "t1", // سوال نوع 1
  //   options: null, // گزینه‌ها
  // },
];


// کامپوننت اصلی
export default function QuationBoxTemplate() {
  const [rating, setRating] = useState(0) // Initial value


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // وضعیت سوال فعلی
  const [finish, setFinish] = useState(false); // اتمام فرم
  const [startanimation, setStartAnimation] = useState(false); // شروع انیمیشن
// شروع انیمیشن
const [answers, setAnswer] = useState([]);

// تابع به‌روزرسانی جواب‌ها
const setAnswersInput = (val, ind) => {
  // اضافه کردن یا به‌روزرسانی مقدار جدید در آرایه
  const newAnswers = [...answers];  // ایجاد یک نسخه جدید از آرایه
  newAnswers[ind] = { value: val, index: ind };  // بروزرسانی یا افزودن پاسخ
  setAnswer(newAnswers);  // به‌روزرسانی وضعیت
  console.log(newAnswers[ind].value);  // نمایش مقدار به‌روزرسانی شده
};
  // تابع تعیین نوع سوال
  const typeQuastionSwitch = () => {
    const question = questionsData[currentQuestionIndex];
    switch (question.type) {
      case "t1": // سوال نوع 1
        return (
          <Type1
          currentAnswer={answers}
            quastion={question.question}
            setAnswerInput={setAnswersInput}
            index={currentQuestionIndex}
          />
        );
        case "t2":
          return (
            <Type2
              quastion={question.question}
              answers={answers} // پاس دادن آرایه پاسخ‌ها
              setAnswerInput={setAnswersInput}
              index={currentQuestionIndex}
            />
          );
        
      case "t3": // سوال نوع 3
        return (
          <Type3
          answers={answers}
            options={question.options}
            quastion={question.question}
            setAnswerInput={setAnswersInput}
            index={currentQuestionIndex}
          />
        );
      default:
        return <div>هیچ سوالی موجود نیست</div>;
    }
  };
  
  
  // انیمیشن اتمام فرم
  const startAnimation = () => {
    setStartAnimation(true);
    setTimeout(() => {
      setFinish(true);
     setTimeout(()=>{
      window.location.reload();
     },3000);
    }, 1000);
  };

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

  // نمایش سوال فعلی
  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    finish ? ( // نمایش پیام اتمام
      <div className="h-screen flex flex-col items-center justify-center bg-txl">
<div className="flex flex-col w-2/3 py-6 px-3 bg-txd bg-opacity-80 rounded-md">
<div        
          className="flex self-center text-2xl font-semibold 
            text-txl   rounded-large px-3 *:py-2"
       > مرسی که شرکت کردی</div>

<div        
          className="flex self-center  text-xs font-semibold 
          text-pr rounded-large px-3 *:py-2"
       > در حال بازگشت . . .   </div>
</div>
      </div>
    ) : ( // نمایش سوالات
      <motion.div
     
        initial={{ y: 0 }}
        animate={{ y: startanimation ? "-100%" : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className=" flex flex-col items-center h-screen justify-center  opacity-80
       
        "
      >
        <motion.div
         key={currentQuestionIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-3 md:mx-0 md:w-2/3 flex-col bg-pr rounded-lg shadow-lg flex 
           justify-between p-6 overflow-auto"
        >
          <div className="flex flex-col overflow-auto">
            <div className="pt-1  flex px-3 gap-5 md:flex-row flex-col items-center justify-around">
<span className="text-txd">{currentQuestionIndex+1}/{questionsData.length}</span>
<Progress  
 color="gradient" aria-label="Loading..." value={(100/questionsData.length)*(currentQuestionIndex+1)} />
            {/* <Progress aria-label="Loading..." color="black" value={(100/questionsData.length)*currentQuestionIndex} className="max-w-md"/> */}


            </div>
            {typeQuastionSwitch()}
          </div>
          <div className="flex flex-row w-full justify-between
             bottom-2 pt-2">
            {currentQuestionIndex > 0 ? ( // دکمه قبلی
              <div className="cursor-pointer bg-txd hover:bg-slate-600 rounded-lg p-3" onClick={handlePrevious}>
                <IoArrowForwardCircleOutline color="white" />
              </div>
            ) : (
              <div></div>
            )}
            {currentQuestionIndex < questionsData.length - 1 ? ( // دکمه بعدی
              <div className="cursor-pointer bg-txd hover:bg-slate-600 rounded-lg p-3 " onClick={handleNext}>
                <IoArrowBackCircleOutline color="white" />
              </div>
            ) : (
              <Button variant="flat" className=" h-full bg-txd text-txl " onClick={() => startAnimation()}>
                {/* <div className="">تمام  😊</div> */}
                <div className="">تمام  </div>
                 </Button>
            )}
          </div>
        </motion.div>
      </motion.div>
    )
  );
}

// کامپوننت سوال نوع 1
const Type1 = ({ quastion, setAnswerInput, index , currentAnswer }) => (
  <div className="flex flex-col">
    <div className="text-txd pb-6 pt-3">{quastion}</div>
    <textarea
    maxLength={300}
      className="w-full p-2 rounded-lg border-2  resize-none
      text-txd text-lg focus:outline-none bg-white 
      focus:border-transparent 2xl:text-6xl
      "
      rows={5}
      placeholder={currentAnswer[index] ? currentAnswer[index].value: "جواب شما . . ."}
      onChange={(e) => setAnswerInput(e.target.value, index)}
    ></textarea>
  </div>
);


// کامپوننت سوال نوع 3 (چند گزینه‌ای)
const Type3 = ({ quastion, options, setAnswerInput, index, answers }) => (
  <div className="flex flex-col overflow-hidden text-black">
    <div className="text-txd pb-6 pt-3">{quastion}</div>
    <div>
      {options.map((option, optIndex) => (
        <label key={optIndex} className="flex flex-row px-1 text-lg items-center">
          <Checkbox
            isSelected={answers[index]?.value === option}
            onChange={() => setAnswerInput(option, index)}
            className="mr-2"
          >
            <span className="text-txd text-small xl:text-lg pr-1 pb-2 cursor-pointer 2xl:text-4xl">
              {option}
            </span>
          </Checkbox>
        </label>
      ))}
    </div>
  </div>
);
const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#FFB200',
  inactiveFillColor: '#7a7197'
}
// کامپوننت سوال نوع 2 (امتیازی)
// کامپوننت سوال نوع 2 (امتیازی)
const Type2 = ({ quastion, answers, setAnswerInput, index }) => {
  // مقدار فعلی امتیاز برای این سوال
  const currentRating = answers[index]?.value || 0;

  return (
    <div className="flex flex-col  text-black overflow-hidden">
      <div className="text-txd pb-6 pt-3">{quastion}</div>
      <div className="flex gap-2">
        <Rating
        itemStyles={myStyles}
          style={{ maxWidth: 250 }}
          value={currentRating} // مقدار فعلی
          onChange={(value) => {
            setAnswerInput(value, index); // ذخیره مقدار جدید در پاسخ‌ها
          }}
        />
      </div>
    </div>
  );
};

