// فایل server.js یا index.js در پوشه backend

const express = require('express');
const sql = require('mssql');
const cors = require('cors'); // برای پشتیبانی از CORS (Cross-Origin Resource Sharing)

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // فعال کردن CORS برای ارتباط با برنامه ReactJS

// اطلاعات اتصال به دیتابیس MSSQL
const config = {
  user: 'sa', // نام کاربری دیتابیس
  password: '@Hossein2021', // رمز عبور دیتابیس
  server: 'localhost\\DESKTOP-NL7MQT0', // آدرس سرور دیتابیس
  database: 'radical', // نام دیتابیس
  options: {
    encrypt: true, // استفاده از رمزگذاری
    enableArithAbort: true // فعال کردن قطع فوری عملیات حسابی
  }
};

// اتصال به دیتابیس
async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Connected to SQL Server');
  } catch (err) {
    console.error('Error connecting to SQL Server', err);
  }
}

connectToDatabase();

// تعریف یک روت API برای اجرای کوئری‌های دیتابیسی
app.get('/api/data', async (req, res) => {
  try {
    const request = new sql.Request();
    const result = await request.query('SELECT * FROM YourTableName'); // جایگزین کردن YourTableName با نام جدول مورد نظر
    res.send(result.recordset); // ارسال نتیجه به برنامه ReactJS
  } catch (err) {
    console.error('Error querying database', err);
    res.status(500).send('Error querying database');
  }
});

// شنیدن پورت
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
