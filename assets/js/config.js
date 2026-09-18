// ==========================================
// LINE QR Connect - Global Configuration
// ==========================================

// กุญแจสาธารณะ (Publishable Key) สำหรับฝั่ง Frontend ปลอดภัยที่จะเปิดเผย
const SUPABASE_URL = 'https://zxkwkyujrekwvieocawm.supabase.co'; // เปลี่ยนเป็น URL ของคุณ
const SUPABASE_KEY = 'sb_publishable_IuqevzRo0vu0Ky33F_DBHg_oAErQsvm'; // เปลี่ยนเป็น Key ของคุณ

// สร้างตัวเชื่อมต่อ Database ให้ทุกหน้าจอสามารถเรียกใช้งานได้
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
