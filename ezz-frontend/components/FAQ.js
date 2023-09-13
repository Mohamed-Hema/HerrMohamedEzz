"use client";
import { useState } from "react";

const faqs = [
  {
    title: "ازاي اشترك في المنصة",
    text: "ممكن تشترك بكل سهولة عن طريق تسجيل الدخول عن طريق جوجل",
  },
  {
    title: "ما هي وسائل الدفع؟",
    text: "يمكنك تحويل الفلوس عن طريق انستا باي أو فودافون كاش",
  },
  {
    title: "ماذا افعل بعد تحويل المبلغ",
    text: "يوجد لينك فورم يمكنك ملئها بعد الدفع وسيتم فتح المحتوي لديك خلال 24 ساعة",
  },
  {
    title: "هل يمكنني استعادة المبلغ؟",
    text: "يمكن استرداد الاشتراك السنوي أو النصف سنوي خلال أسبوع من تاريخ الشراء عن طريق ملئ فورم أرجاع",
  },
];

const FAQ = () => {
  return (
    <div>
      <h1>عندك اسئلة؟</h1>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          title={faq.title}
          text={faq.text}
          num={index}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title" style={{ direction: "rtl" }}>
        {title}
      </p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && (
        <div className="content-box" style={{ direction: "rtl" }}>
          {text}
        </div>
      )}
    </div>
  );
};

export default FAQ;
