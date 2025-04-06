export type actionFunction = (
  prevState: any, // คือ state ล่าสุด ที่ส่งมาจาก useActionState
  formData: FormData // คือข้อมูลที่ได้จาก <form> ตอน submit
) => Promise<{ message: string }>; // ฟังก์ชันนี้เป็น async function return object ที่มี key ชื่อว่า message ซึ่งเป็น string (ข้อความแจ้งเตือน)


