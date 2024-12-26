# React Authentication Project / React Avtorizatsiya Loyihasi

This project is a React-based authentication application that allows users to register, log in, and access protected routes. The application uses React Router for navigation, Ant Design for UI components, and communicates with a backend API for authentication.

Ushbu loyiha foydalanuvchilarga ro'yxatdan o'tish, tizimga kirish va himoyalangan sahifalarga kirish imkonini beruvchi React asosidagi autentifikatsiya dasturidir. Dastur navigatsiya uchun React Router, UI komponentlari uchun Ant Design va autentifikatsiya uchun backend API bilan ishlaydi.

---

## Features / Xususiyatlar

- **User Registration**: New users can register with an email and password.
- **Foydalanuvchi Ro‘yxatdan O‘tishi**: Yangi foydalanuvchilar email va parol bilan ro‘yxatdan o‘tishlari mumkin.

- **User Login**: Existing users can log in to access protected routes.
- **Foydalanuvchi Tizimga Kirishi**: Mavjud foydalanuvchilar himoyalangan sahifalarga kirishlari mumkin.

- **Logout Functionality**: Users can log out, which clears the session token.
- **Tizimdan Chiqish Funktsiyasi**: Foydalanuvchilar tizimdan chiqishlari va sessiya tokenini o‘chirishlari mumkin.

- **Protected Routes**: Certain pages are only accessible to logged-in users.
- **Himoyalangan Sahifalar**: Ba‘zi sahifalarga faqat tizimga kirgan foydalanuvchilar kirishi mumkin.

---

## Installation and Setup / O'rnatish va Sozlash

### 1. Clone the Repository / Repositoriyani Klonlash

Clone the project to your local machine:
Loyihani mahalliy kompyuteringizga klonlang:

```bash
git clone https://github.com/izzatullohdev/auth.git
```

### 2. Install Dependencies / Bog'liqliklarni O'rnatish

Navigate to the project directory and install the required dependencies:
Loyiha papkasiga o‘ting va kerakli bog‘liqliklarni o‘rnating:

```bash
cd react-auth-app
npm install
```

### 3. Start the Development Server / Dastur Serverini Ishga Tushirish

Run the application in development mode:
Dasturdan rivojlantirish rejimida foydalaning:

```bash
npm run dev
```
---

## Backend API Configuration / Backend API Sozlash

### 1. Backend API Setup / Backend API-ni Sozlash

Ensure you have a running backend API that supports user authentication (login, register, and logout endpoints).
Foydalanuvchi autentifikatsiyasini qo'llab-quvvatlaydigan backend API ishlayotganiga ishonch hosil qiling (kirish, ro'yxatdan o'tish va tizimdan chiqish endpointlari).

### 2. Configure API URL / API URL-ni Sozlash

Update the `src/context/api.js` file with your backend API URL:
`src/context/api.js` faylida backend API URL-ni yangilang:

```javascript
export const serverApi = async (endpoint, method = "GET", data) => {
  const response = await fetch(`https://authnode-llkl.onrender.com/${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
```

---

## Usage Instructions / Foydalanish Ko'rsatmalari

### Registration / Ro'yxatdan O'tish

1. Navigate to `/register`.
   `/register` sahifasiga o'ting.
2. Fill in the required fields (email and password).
   Kerakli maydonlarni to'ldiring (email va parol).
3. Submit the form to create a new account.
   Yangi akkaunt yaratish uchun shaklni yuboring.

### Login / Tizimga Kirish

1. Navigate to `/login`.
   `/login` sahifasiga o'ting.
2. Enter your email and password.
   Email va parolingizni kiriting.
3. Submit the form to log in. You will be redirected to `/home` upon success.
   Tizimga kirish uchun shaklni yuboring. Muvaffaqiyatli kirganingizdan so'ng `/home` sahifasiga yo'naltirilasiz.

### Logout / Tizimdan Chiqish

1. Click the "Logout" button in the navigation bar.
   Navigatsiya panelida "Logout" tugmasini bosing.
2. You will be redirected to `/login` and your session will be cleared.
   Siz `/login` sahifasiga yo'naltirilasiz va sessiyangiz tozalanadi.

### Accessing Protected Routes / Himoyalangan Sahifalarga Kirish

1. Only logged-in users can access routes like `/home`.
   Faqat tizimga kirgan foydalanuvchilar `/home` kabi sahifalarga kira oladilar.
2. If you attempt to access a protected route without logging in, you will be redirected to `/login`.
   Agar tizimga kirmagan holda himoyalangan sahifaga kirishga harakat qilsangiz, siz `/login` sahifasiga yo'naltirilasiz.

---

## Troubleshooting / Muammolarni Hal Qilish

### Common Issues / Umumiy Muammolar

#### 1. API Not Responding / API Javob Bermayapti

- Ensure your backend API is running and accessible.
  Backend API ishlayotganiga va kirish mumkinligiga ishonch hosil qiling.
- Verify the API URL in `api.js` is correct.
  `api.js` faylidagi API URL to'g'ri ekanligini tekshiring.

#### 2. Token Not Found / Token Topilmadi

- Make sure the login response includes a valid token.
  Kirish javobi to'g'ri tokenni o'z ichiga olganligiga ishonch hosil qiling.
- Verify that the token is being stored in `localStorage`.
  Token `localStorage`da saqlanayotganligini tekshiring.

#### 3. Styles Not Loading / Stil Yuklanmayapti

- Check if all dependencies are installed with:
  Barcha bog'liqliklar o'rnatilganligini tekshiring:
  ```bash
  npm install
  ```

#### 4. Browser Console Errors / Brauzer Konsoli Xatolari

- Check the browser console for detailed error messages.
  Batafsil xato xabarlari uchun brauzer konsolini tekshiring.
- Ensure that you are using the latest version of the dependencies.
  Bog'liqliklarning eng so'nggi versiyalaridan foydalanayotganingizga ishonch hosil qiling.

---

## Technologies Used / Foydalanilgan Texnologiyalar

- **React.js**: Frontend library / Frontend kutubxonasi
- **React Router**: Navigation and routing / Navigatsiya va marshrutlash
- **Ant Design**: UI components / UI komponentlari
- **AXIOS**: For communicating with the backend / Backend bilan aloqa qilish uchun

---

## Contribution / Hissa Qo'shish

Contributions are welcome! Feel free to fork this repository and submit pull requests.
Hissa qo'shish uchun xush kelibsiz! Ushbu repozitoriyani fork qiling va pull request yuboring.

---

## License / Litsenziya

This project is open-source and available under the [MIT License](LICENSE).
Ushbu loyiha ochiq manbali bo'lib, [MIT License](LICENSE) ostida mavjud.

---

## Contact / Aloqa

For questions or feedback, please contact the repository owner at [izzatbekmadaminov7141@gmail.com](izzatbekmadaminov7141@gmail.com).
Savollar yoki fikr-mulohazalar uchun repozitoriya egasiga [izzatbekmadaminov7141@gmail.com](izzatbekmadaminov7141@gmail.com) manzili orqali murojaat qiling.
