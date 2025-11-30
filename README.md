# CV/Resume - Interactive Portfolio

მოდერნიზებული, ინტერაქტიული CV/Resume ვებ-გვერდი dark mode, რესპონსიული დიზაინით და ფოტოს ატვირთვის ფუნქციონალით.

## ✨ ფუნქციები

- 🌓 **Dark/Light Mode** - თემის გადართვა toggle ღილაკით
- 📱 **სრულად რესპონსიული** - მუშაობს ყველა მოწყობილობაზე (მობილური, tablet, desktop)
- 📸 **ფოტოს ატვირთვა** - პროფილის ფოტოს ატვირთვა და localStorage-ში შენახვა
- 🎨 **ანიმირებული წრეები** - პროგრეს ბარები ანიმაციით
- 🎯 **Hover ეფექტები** - ინტერაქტიული ელემენტები timeline-სა და წრეებზე
- 💾 **LocalStorage** - მონაცემების შენახვა (theme და ფოტო)

## 🚀 დაწყება

### ინსტალაცია

1. რეპოზიტორიის კლონირება:
```bash
git clone https://github.com/nukriotarashvili/davaleba1-CV.git
cd davaleba1-CV
```

2. ფაილების გახსნა:
   - გახსენით `index.html` ბრაუზერში
   - ან გამოიყენეთ local server (მაგ. `python -m http.server` ან `npx serve`)

### გამოყენება

1. **ფოტოს ატვირთვა**: დააკლიკეთ პროფილის სურათზე ან კამერის იკონაზე
2. **Theme გადართვა**: დააკლიკეთ მთავარი toggle ღილაკს (მარჯვენა ზედა კუთხე)
3. **მონაცემების რედაქტირება**: შეცვალეთ `main.js` ფაილში `cvData` ობიექტი

## 📁 პროექტის სტრუქტურა

```
davaleba1-CV/
│
├── index.html          # მთავარი HTML ფაილი
├── styles.css          # CSS სტილები
├── main.js             # JavaScript ლოგიკა
├── README.md           # დოკუმენტაცია
│
└── template/           # ტემპლეიტის სურათები
    ├── CV Dark.jpg
    └── CV Light.jpg
```

## 🛠️ ტექნოლოგიები

- **HTML5** - სემანტიკური მარკაპი
- **CSS3** - მოდერნული სტილები, CSS Variables, Flexbox, Grid
- **JavaScript (Vanilla)** - DOM მანიპულაცია, LocalStorage API, FileReader API

## 🎨 მთავარი კომპონენტები

### Dark/Light Mode
- CSS Variables-ის გამოყენება თემის მართვისთვის
- LocalStorage-ში შენახვა მომხმარებლის პრეფერენსებისთვის
- Smooth transitions

### რესპონსიული დიზაინი
- **Desktop**: 1000px სიგანე
- **Tablet**: 1024px-მდე
- **Mobile**: 768px-მდე
- **Small Mobile**: 480px-მდე

### ანიმირებული წრეები
- Conic gradient-ის გამოყენება
- RequestAnimationFrame-ით smooth ანიმაცია
- Hover ეფექტები ფერის შეცვლით

### Timeline
- ისრის ფორმის year badges
- Hover ეფექტები
- ვერტიკალური ხაზი

## 📝 მონაცემების რედაქტირება

შეცვალეთ `main.js` ფაილში `cvData` ობიექტი:

```javascript
const cvData = {
    personal: [
        { label: "Name", value: "თქვენი სახელი" },
        { label: "Birthday", value: "თქვენი დაბადების თარიღი" },
        // ...
    ],
    contact: [
        { label: "Email", value: "თქვენი email", link: "mailto:..." },
        // ...
    ],
    software: [
        { name: "ტექნოლოგია", percent: 90 },
        // ...
    ],
    work: [
        { year: "2022", title: "თანამდებობა", place: "კომპანია, ქვეყანა" },
        // ...
    ],
    education: [
        { year: "2022", title: "განათლება", place: "ინსტიტუტი" },
        // ...
    ]
};
```

## 🌐 ბრაუზერის მხარდაჭერა

- Chrome (ბოლო ვერსია)
- Firefox (ბოლო ვერსია)
- Safari (ბოლო ვერსია)
- Edge (ბოლო ვერსია)

## 📄 ლიცენზია

ეს პროექტი ღია კოდია და თავისუფლად შეიძლება გამოყენება.

## 👤 ავტორი

**Nukri Otarashvili**
- GitHub: [@nukriotarashvili](https://github.com/nukriotarashvili)
- Email: nukriotarashvili@gmail.com

## 🙏 მადლობა

გმადლობთ პროექტის გამოყენებისთვის!

---

⭐ თუ მოგეწონათ ეს პროექტი, გთხოვთ დატოვოთ star ⭐

