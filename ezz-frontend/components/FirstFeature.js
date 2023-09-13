import Image from "next/image";
import React from "react";

const FirstFeature = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex items-center">
      {/* Photo */}
      <Image
        src="/public/assets/firstfeature.jpg"
        alt="صورة الميزة"
        className="w-1/2 rounded-md border-4 border-blue-500 object-cover shadow-md"
        width={500}
        height={500}
      />

      {/* Text Content */}
      <div className="mt-3 ml-4">
        <h4 className="text-2xl font-bold mb-3">ليه تشترك في المنصة؟</h4>
        <div className="text-right">
          <p className="mb-2">
            <span className="float-right mr-2">✨</span>
            هي منصة تفاعلية تهدف إلي تدريس والطلاب تأهيلهم لإتقان اللغة
            الألمانية واجتياز الامتحان بكل سهولة ويسر
          </p>
          <p className="mb-2">
            <span className="float-right mr-2">✨</span>
            يتميز الموقع بالعديد من المميزات الفعالة التي تجعله وجهة مثالية
            للطلاب الذين يبحثون عن تجربة تعليمية شاملة وممتعة.
          </p>
          <p className="mb-2">
            <span className="float-right mr-2">✨</span>
            الموقع يحتوي علي العديد من التمارين التفاعلية علي كل حصة ويتم
            تصحيحها بشكل تلقائي عبر المنصة ولكن الإيميل او القطعة يتم تصحيحها عن
            طريق هير عز ويتم إرسال التصحيح للطالب عبر الإيميل المسجل لدي المنصة
          </p>
          <p className="mb-2">
            <span className="float-right mr-2">✨</span>
            يمكن للطلبة تحميل المحتوي الخاص بكل حصة بصيغة بي دي اف لكي يتكمن
            الطالب من طباعتها او الاحتفاظ بها
          </p>
          <p className="mb-2">
            <span className="float-right mr-2">✨</span>
            يمكنك الحصول علي كاش باك 💵 في حالة دعوة أصدقائك للاشتراك في المنصة
          </p>
          <p className="mb-2">
            <span className="float-right mr-2">✨</span>
            يمكنك التواصل مع هير عز في أي وقت عن طريق جروب الواتساب الخاص بكل
            مرحلة
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstFeature;
