fetch('https://ipinfo.io/json?token=YOUR_TOKEN') // API token kerak (bepul versiyada ham)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Ma'lumotlarni konsolda ko'rish
    const { ip, city, region, country, loc, org, timezone } = data;
    const [latitude, longitude] = loc.split(',');

    // HTML ga chiroyli formatda chiqarish
    document.body.innerHTML = `
      <h1>Foydalanuvchi joylashuvini aniqlash</h1>
      <p><b>Joylashuvni ko'rsat</b></p>
      <p>Kenglik: ${latitude}</p>
      <p>Uzunlik: ${longitude}</p>
      <p>Mamlakat: ${country}</p>
      <p>Shahar: ${city}</p>
      <p>IP Manzil: ${ip}</p>
      <p>Internet provayder: ${org}</p>
      <hr>
      <p>${loc} — ${city}, ${country}</p>
      <p><a href="https://www.google.com/maps?q=${loc}" target="_blank">View larger map</a></p>
    `;
  })
  .catch(error => console.error('Xatolik:', error));