import { Box, Card, CardContent, Typography } from "@mui/material";

const FirstFeature = () => {
  return (
    <Card variant="outlined" sx={{ display: "flex", alignItems: "center" }}>
      {/* Photo */}
      <Box
        component="img"
        src="../../public/assets/firstfeature.jpg"
        alt="صورة الميزة"
        sx={{
          width: "50%",
          objectFit: "cover",
          borderRadius: "8px", // Add border radius to create rounded corners
          border: "4px solid #01579B", // Add border style and color
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
        }}
      />

      {/* Text Content */}
      <CardContent mt={3}>
        <Typography variant="h4" mb={3}>
          ليه تشترك في المنصة؟
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "right" }}>
          <p>
            <span style={{ float: "right", marginRight: "10px" }}>✨</span>هي
            منصة تفاعلية تهدف إلي تدريس والطلاب تأهيلهم لإتقان اللغة الألمانية
            واجتياز الامتحان بكل سهولة ويسر
          </p>
          <p>
            <span style={{ float: "right", marginRight: "10px" }}>✨</span>يتميز
            الموقع بالعديد من المميزات الفعالة التي تجعلة وجهة مثالية للطلاب
            الذين يبحثون عن تجربة تعليمية شاملة وممتعة.
          </p>
          <p>
            <span style={{ float: "right", marginRight: "10px" }}>✨</span>
            الموقع يحتوي علي العديد من التمارين التفاعلية علي كل حصة ويتم
            تصحيحها بشكل تلقائي عبر المنصة ولكن الإيميل او القطعة يتم تصحيحها عن
            طريق هير عز ويتم إرسال التصحيح للطالب عبر الإيميل المسجل لدي المنصة
          </p>
          <p>
            <span style={{ float: "right", marginRight: "10px" }}>✨</span>يمكن
            للطلبة تحميل المحتوي الخاص بكل حصة بصيغة بي دي اف لكي يتكمن الطالب
            من طباعتها او الاحتفاظ بها
          </p>
          <p>
            <span style={{ float: "right", marginRight: "10px" }}>✨</span>يمكنك
            الحصول علي كاش باك 💵 في حالة دعوة اصدقائك للاشتراك في المنصة
          </p>
          <p>
            <span style={{ float: "right", marginRight: "10px" }}>✨</span>يمكنك
            التواصل مع هير عز في أي وقت عن طريق جروب الواتساب الخاص بكل مرحلة
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FirstFeature;
