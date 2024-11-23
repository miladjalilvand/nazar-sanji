export default function CardQ({ question, type, options }) {
    return (
      <div className="flex flex-col items-center justify-around 
      bg-slate-500 h-full
       w-full p-4 rounded-lg">
        {/* نمایش متن سوال */}
        <div className="text-white text-xl mb-4">{question}</div>
        {/* بر اساس نوع سوال، نمایش مناسب */}
        {type === "تشریحی" && (
          <textarea
                        className="w-full p-2 rounded-lg border-2 border-gray-300"
                        placeholder="پاسخ خود را بنویسید..."
                        onChange={(content)=>{console.log(content.target.value)}}
          ></textarea>
        )}
        {type === "چند گزینه‌ای" && options && (
          <div className="flex flex-col gap-2">
            {options.map((option, index) => (
              <label key={index} className="text-white">
                <input type="radio" name="options" className="mr-2" value={option} 
                onChange={(value)=>{console.log(value.target.value)}}
                />
                {option}
              </label>
            ))}
          </div>
        )}
        {type === "امتیازدهی" && (
          <div className="flex gap-2">
            {Array.from({ length: 5 }, (_, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400"
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
  