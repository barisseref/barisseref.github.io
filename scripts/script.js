// script.js
const qaPairs = {
    "şehir": "istanbul",
    "ilçe": "Sultanbeyli",
    "kendini tanıtır mısın": "Yarıtıcı, Dakik, Detaylara Önem veren gibi kısaca sıralayabilirim, daha kapsamlısı için hakkımda kısımına bakabilirsiniz",
    "kendini tanıt": "Yarıtıcı, Dakik, Detaylara Önem veren gibi kısaca sıralayabilirim, daha kapsamlısı için hakkımda kısımına bakabilirsiniz",
    "mesai hakkında": "İş bitirme odaklıyım, gerekirse; kalırım.",
    "en sevdiğin film": "Matrix",
    "en sevdiğin renk": "Spesifik bir renk söyleyemem",
    "en sevdiğin sayı": "7,8",
    "5 yıl içinde kendini nerede görüyorsun": "Zor bir soru, mevcut durumlar en iyi kararı o için vermem gerekecek",
    "beş yıl içinde kendini nerede görüyorsun": "Zor bir soru, mevcut durumlar en iyi kararı o için vermem gerekecek",
    "neden bu iş için seni seçmeliyiz": "İş arayışım yok",
    "zayıf yönlerin nelerdir": "Bazen fazla odaklanırım",
    "zayıf yönlerin": "Bazen fazla odaklanırım",
    "tecrübelerinden bahseder misin": "Detaylı kısım hakkımda bölümünde",
    "bize tecrübelerinden bahseder misin": "Detaylı kısım hakkımda bölümünde",
    "kendinden bahseder misin": "Detaylı kısım hakkımda bölümünde",
    "bize kendinden bahseder misin": "Detaylı kısım hakkımda bölümünde",
    "disiplinli misin": "Evet",
    "en sevdiğin sanatçı": "Feridün Düzağaç",
    "hobilerin nelerdir": "yürüyüş, satranç, konsol oyunları, openscore yazılım keşfi",
    "hobilerin": "yürüyüş, satranç, konsol oyunları, openscore yazılım keşfi",
    "hobiler": "yürüyüş, satranç, konsol oyunları, openscore yazılım keşfi",
    "boş vaktinde neler yaparsın": "yürüyüş, satranç, konsol oyunları, openscore yazılım keşfi",
    "boş vakitlerini nasıl değerlendirirsin": "yürüyüş, satranç, konsol oyunları, openscore yazılım keşfi",
    "boş vaktinde ne yaparsın": "yürüyüş, satranç, konsol oyunları, openscore yazılım keşfi",
    "boş vakitlerinde neler yaparsın": "yürüyüş, satranç, konsol oyunları, openscore yazılım keşfi",
    "kendini nasıl tanımlarsın": "detaylı kısım hakkımda bölümünde",
    "kendini tanıt": "detaylı kısım hakkımda bölümünde",
    "nerelerde çalıştın": "detaylı kısım hakkımda bölümünde",
    "en güçlü yönlerin nelerdir": "Yaratıcı, disiplinli, dakik ve detaylara önem vermem diyebilirim",
    "karşılaştığın en büyük zorluk neydi": "verilen işin, teknik detaylarının bilinmeden verilmesi ",
    "seni ne motive eder": "Motive olmam için bazı şeylere kendimi bağlamam, genelde kendi kendime yeten ve motive olan bir insanım",
    "mesai": "İş bitirme odaklıyım, gerekirse; kalırım.",
    "mesaiye kalır mısın": "İş bitirme odaklıyım, gerekirse; kalırım.",
    "şehir dışına çıkar mısın": "Evet",
    "bugün çalışıyor musun": "Hayır, bugün çalışmıyorum.",
    "kaç yıldır çalışıyorsun": "10 yıldır.",
    "maaş beklentin nedir": "Enflasyona göre değişir :).",
    "seni neden işe alalım": "İş arayışım yok zaten",
    "keyfin nasıl": "Her zaman iyi",
    "nasılsın": "Her zaman iyi",
    "sen kimsin": "Barış Şeref , hakkımda kısmından daha detaylı görebilirsiniz",
    "bu siteyi nasıl yaptın": "css, html,js",
    "iş bakıyor musun": "iş arayışım yok",
    "neredesin": "şuan burada genel de istanbulda",
    "memleketin neresi": "Samsun",
    "ne kadar maaş alıyorsun": "Şirket sırrı :)",
    "nerelisin": "Samsun",
    "css": "Evet",
    "css biliyor musun": "Evet",
    "html biliyor musun": "Evet",
    "html": "Evet",
    "en sevdiğin şey nedir": "bir şeyleri başarmak",
    "memleket": "Samsun",
    "burcun": "Aslan",
    "after effect biliyor musun": "Evet",
    "hangi programları biliyorsun": "After Effect, Blender, Iclone, Css ( Tam hali sitenin içerisinde )",
    "burcun nedir": "Aslan",
    "hangi takımlısın": "Beşiktaş",
    "hangi takımı tutuyorsun": "Beşiktaş",
    "tuttuğun takım": "Beşiktaş",
    "iş arıyor  musun": "iş arayışım yok",
    "iş ister misin": "iş arayışım yok",
    "iş teklif ediyorum": "iş arayışım yok",
    "iş": "iş arayışım yok",
    "işinden memnun musun": "Evet, memnunum",
    "nerede çalışıyorsun": "Yurtiçi Kargo",
    "ne kadar maaş veriyorlar": "Şirket sırrı :)",
    "nasıl bir insansın": "İyi derler genelde",
    "hangi okuldan mezun oldun": "Ankara Üni.",
    "nerede yaşıyorsun": "istanbul",
    "telefon": "önce mail atın: baris.seref@gmail.com",
    "sana nasıl ulaşabilirim": "baris.seref@gmail.com",
    "telefon numaran": "önce mail atın: baris.seref@gmail.com",
    "telefon numaran nedir": "önce mail atın: baris.seref@gmail.com",
    "telefon numaranı verir misin": "önce mail atın: baris.seref@gmail.com",
    "üniversite mezuniyeti": "Ankara Üniversitesi Radyo Televizyon ve Sinema",
    "Üniversite mezuniyetin nedir": "Ankara Üniversitesi Radyo Televizyon ve Sinema",
    "aktif iş arayışı durumu": "Hayır, aktif iş arayışım yok",
    "iş arayor musun": "Hayır, aktif iş arayışım yok",
    "iş teklifi etsem kabul eder misin": "Hayır, aktif iş arayışım yok",
    "çalışma süresi": "10 yıl çalışma deneyimim var",
    "bildiğiniz programlar": "After Effect, Blender, Iclone, Css ( Tam hali sitenin içerisinde )",
    "freelance iş durumu": "Freelance iş durumu projelere bağlı olarak değişebilir",
    "freelance": "Freelance iş durumu projelere bağlı olarak değişebilir",
    "serbest çalışır mısın": "Freelance iş durumu projelere bağlı olarak değişebilir",
    "telefon numarası": "Telefon numaram için lütfen önce e-posta ile iletişime geçin",
    "yurtdışında çalışır mısın": "Yurt dışında çalışma olasılığını değerlendirebilirim",
    "mezun olduğunuz üniversite ve bölüm": "Ankara Üniversitesi Radyo Televizyon ve Sinema",
    "çalışma deneyiminiz hakkında detaylar": "10 yıldır medya sektöründe çeşitli projelerde çalıştım.",
    "hangi programlama dillerini biliyorsunuz": "CSS, HTML, JavaScript",
    "neden freelance çalışıyorsunuz": "Genelde freelance çalışmıyorum",
    "hangi ülkelerde çalışmayı düşünebilirsiniz": "Yurt dışında çalışma olasılığını değerlendirebilirim",
    "iş dışındaki hobileriniz nelerdir": "Fotoğrafçılık, seyahat etmek, satranç",
    "en son hangi projede çalıştınız": "Son projem bir reklam kampanyasıydı.",
    "referanslarınız hakkında bilgi verebilir misiniz": "Referanslarımı talep etmeniz durumunda iletebilirim.",
    "referanslarınız kimdir": "Referanslarımı talep etmeniz durumunda iletebilirim.",
    "en iyi beceriniz nedir": "Animasyon ve video prodüksiyonu",
    "kendinizi 3 kelimeyle nasıl tanımlarsınız": "Yaratıcı, disiplinli, öğrenmeye açık",
    "gelecekteki kariyer hedefiniz nedir": "Yönetmenlik yapmak istiyorum",
    "hangi projelerde çalışmayı seversiniz": "Sinema projeleri beni en çok heyecanlandırıyor.",
    "neden bu sektörü seçtiniz": "Çocukluğumdan beri medya ve sanatla ilgileniyorum.",
    "en zorlu proje deneyiminiz nedir": "Bir belgesel projesinin düşük bütçesi nedeniyle zorlu bir deneyim yaşadım.",
    "takım çalışmasında ne kadar etkili olduğunuzu düşünüyorsunuz": "Takım çalışmasında uyumlu ve işbirlikçiyim.",
    "en sevdiğiniz projeniz hangisi": "Her projemi severim",
    "yaratıcılığınızı nasıl beslersiniz": "Yeni teknolojileri ve sanat akımlarını takip ederek beslerim.",
    "en son hangi eğitimi aldınız": "Python üzerineydi",
    "çalışma saatleriniz hakkında nasıl bir tercihiniz var": "Esnek çalışma saatlerini tercih ederim.",
    "başkalarıyla iletişim kurarken ne kadar etkili olduğunuzu düşünüyorsunuz": "İyi bir iletişimci olduğumu düşünüyorum.",
    "bir proje yöneticisi olarak deneyiminiz nedir": "Birçok projeyi başarıyla yönettim.",
    "kreatif bir problem çözme örneği verebilir misiniz": "Bu soru cevap kısmı, sorunuzu yanıtlamıştır diye düşünüyorum",
    "yeni beceriler öğrenmeye ne kadar açıksınız": "Yeni beceriler öğrenmeye her zaman açığım.",
 
    
    // Diğer soru-cevap çiftlerini buraya ekleyebilirsiniz
};


const chatArea = document.getElementById("chatArea");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", () => {
    const userQuestion = userInput.value.trim().toLowerCase();
    if (userQuestion !== "") {
        addMessage(userQuestion, "user");
        generateBotResponse(userQuestion);
        userInput.value = "";
    }
});

function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add("message", sender);
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function generateBotResponse(question) {
    const botResponse = qaPairs[question] || "Üzgünüm, bu sorunun cevabını bilmiyorum.";
    addMessage(botResponse, "bot");
}
