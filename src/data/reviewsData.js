export const allReviews  = [
    {
        name: "Fatma Yılmaz",
        text: "4 ustanın bulamadığı arızayı arkadaşlar buldu sağolsun profesyonel işçilik gerçekten eğitimli ve güleryüzlü kişiler herkese tavsiye ederim",
        stars: 5
    },
    {
        name: "Uğur yücel Aksu",
        text: "Kombim arızalanmıştı 4 kere ayrı servisler geldi çözemedi uraz teknikten mert bey saolsun arızayı bulup tamir etti ilginiz için teşekkür ederim🙏 …",
        stars: 5
    },
    {
        name: "Serhat Çam",
        text: "Kaliteli ve güvenilir işçilik servisin su gider borusu dışarıya gitmez dediği için evimin içinde kovaya yada pet şişeye akan suyu 5 dakika da hallettiler herkese tavsiye ederim",
        stars: 5
    },
    {
        name: "yaşar sefa akakça",
        text: "uraz teknik firmasını aradım yarım saat bile geçmeden hizmet aldım arkadaşlar yeni firma açtıklarını bu yüzden fiyatların uygun olduğunu söylediler gerçekten de fiyatları çok uygun",
        stars: 5
    },
    {
        name: "Nurcan Yılmaz",
        text: "Aldığım hizmetten çok memnun kaldım kısa sürede gelip kombimin sorununu çözdüler",
        stars: 5
    },
    {
        name: "Eren Mırık",
        text: "Başarılı bir servis herkese tavsiye ediyorum",
        stars: 5
    },
    {
        name: "Samet Ocak",
        text: "Samsun da kaliteli ve temiz iş yapan uygun fiyatlı arayın memnun kalacaksınız",
        stars: 5
    },
    {
        name: "Tuncay Dübüş",
        text: "Uraz Teknik Isıtma ve Soğutma Sistemleri olarak Mert bey ve ekibi Klima montajımızı istediğimiz gibi gerçekleştirdi.Eline emeğine sağlık. Randevu saatinde gelen işinin sahibi güleryüzlü ve güvenilir.Ben çok memnun kaldım. Herkese tavsiye ederim. Kısacası Klimacı arayanlara Mert, NET...",
        stars: 5
    },
    {
        name: "ibrahim şerefli",
        text: "İş yerimde elimde bulan bir klimanın kurulumunu için bir kaç kişi ile görüştüm. Uraz Teknikten Mert beyle görüştükten sonra hizmetlerinin uygun olması ve sitelerinde yaptıkları işlerin fotoğraflarını gördükten sonra kendisi ile çalışmaya karar verdim. İşini seven ve tecrübeli birisi. Mert Beye teşekkür ederim.",
        stars: 5
    }
];

/**
 * Bir diziyi yerinde karıştırmak için Fisher-Yates (aka Knuth) Shuffle algoritması.
 * @param {Array} array Karıştırılacak dizi.
 */
function shuffleArray(array) {
    // Orijinal diziyi bozmamak için bir kopyasını oluşturuyoruz
    const newArray = [...array]; 
    for (let i = newArray.length - 1; i > 0; i--) {
      // Rastgele bir dizin seç
      const j = Math.floor(Math.random() * (i + 1));
      // Elemanları yer değiştir
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  
  // Ana sayfada gösterilecek yorumları dinamik olarak oluştur
  // Önce tüm yorumları karıştır, sonra ilk üçünü al
  export const mainPageReviews = shuffleArray(allReviews).slice(0, 3);
  
  // Yorumlar sayfasında tüm yorumları göstermek için (sıralı)
  export const allReviewsData = allReviews;