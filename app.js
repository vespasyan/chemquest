// ===============================================
// SORU BANKASI - Konular ve Zorluk Seviyelerine Göre
// ===============================================

const questionBank = {
    karisimlar: {
        kolay: [
            {
                type: 'multiple',
                dialogue: 'Karışımlar konusunda ustalaşmak için hazır mısın? İşte ilk sorum!',
                question: 'Homojen karışımlara ne denir?',
                options: ['A) Çözelti', 'B) Süspansiyon', 'C) Koloit', 'D) Emülsiyon'],
                correct: 'A',
                explanation: 'Homojen karışımlara çözelti denir. Çözeltilerde bileşenler gözle ayırt edilemez.'
            },
            {
                type: 'text',
                dialogue: 'Hmm, tuzlu suyla ilgili düşünelim... Bakalım biliyor musun?',
                question: 'Tuzlu suda çözünen maddeye ne ad verilir?',
                correct: ['çözünen', 'cozunen'],
                explanation: 'Tuz çözünen, su ise çözücüdür. Çözünen, çözücü içinde dağılan maddedir.'
            },
            {
                type: 'multiple',
                dialogue: 'Süt hakkında konuşalım! İlginç bir karışımdır aslında...',
                question: 'Süt hangi karışım türüdür?',
                options: ['A) Çözelti', 'B) Koloit', 'C) Heterojen', 'D) Bileşik'],
                correct: 'B',
                explanation: 'Süt bir koloit karışımıdır. Yağ damlacıkları su içinde asılı kalır.'
            },
            {
                type: 'text',
                dialogue: 'Filtre kağıdıyla ilgili basit bir soru soruyorum...',
                question: 'Karışımları ayırma yöntemlerinden biri olan süzme işleminde kullanılan araç nedir?',
                correct: ['filtre kağıdı', 'filtre kagidi', 'filtre', 'süzgeç', 'suzgec'],
                explanation: 'Filtre kağıdı veya süzgeç kullanarak karışımları süzebiliriz.'
            },
            {
                type: 'multiple',
                dialogue: 'Su ve yağı bir düşünelim... Karışır mı sence?',
                question: 'Su ve yağ karışımı nasıl bir karışımdır?',
                options: ['A) Homojen', 'B) Heterojen', 'C) Çözelti', 'D) Element'],
                correct: 'B',
                explanation: 'Su ve yağ heterojen karışımdır çünkü iki ayrı faz oluşturur.'
            }
        ],
        orta: [
            {
                type: 'multiple',
                dialogue: 'Biraz daha zorlaştıralım! Damıtma konusunu bilmen gerekiyor...',
                question: 'Kaynama noktaları farklı sıvıların ayrılması için kullanılan yöntem nedir?',
                options: ['A) Süzme', 'B) Kristallendirme', 'C) Damıtma', 'D) Mıknatıslama'],
                correct: 'C',
                explanation: 'Damıtma yönteminde sıvılar kaynama noktası farkından yararlanılarak ayrılır.'
            },
            {
                type: 'text',
                dialogue: 'Denizden tuz elde etmek için... Hangi yöntem kullanılır acaba?',
                question: 'Tuzlu sudan tuz elde etmek için kullanılan ayırma yöntemi nedir?',
                correct: ['kristallendirme', 'kristallestirme', 'kristallendirme', 'buharlaştırma', 'buharlaştirma', 'buharlaştirma'],
                explanation: 'Kristallendirme (buharlaştırma) yöntemiyle çözeltideki su buharlaştırılır ve katı madde elde edilir.'
            },
            {
                type: 'multiple',
                dialogue: 'Tyndall etkisi duymuş muydun? İlginç bir fiziksel olaydır!',
                question: 'Tyndall etkisi hangi karışım türünde gözlenir?',
                options: ['A) Çözeltilerde', 'B) Koloit karışımlarda', 'C) Heterojen karışımlarda', 'D) Elementlerde'],
                correct: 'B',
                explanation: 'Tyndall etkisi koloit karışımlarda görülür. Işık kolloidal taneciklere çarparak saçılır.'
            },
            {
                type: 'text',
                dialogue: 'Demir ve kükürt tozu... Bir düşün bakalım...',
                question: 'Demir tozu ve kükürt tozu karıştırıldığında oluşan madde türü nedir? (karışım/bileşik)',
                correct: ['karışım', 'karisim'],
                explanation: 'Bu bir karışımdır çünkü kimyasal tepkime olmamıştır. Bileşenlerin özellikleri korunur.'
            },
            {
                type: 'multiple',
                dialogue: 'Ayırma yöntemlerinin mantığını anlamışsın umarım!',
                question: 'Demir tozu ve kükürt tozu karışımını ayırmak için hangi yöntem kullanılır?',
                options: ['A) Süzme', 'B) Damıtma', 'C) Mıknatıslama', 'D) Kristallendirme'],
                correct: 'C',
                explanation: 'Demir manyetik özelliğe sahip olduğu için mıknatıs yardımıyla kükürttan ayrılabilir.'
            }
        ],
        zor: [
            {
                type: 'multiple',
                dialogue: 'Tamam, şimdi işler ciddileşti! Konsantrasyondan bahsedelim...',
                question: '100 gram suda 20 gram tuz çözüldüğünde çözeltinin derişimi (kütle/kütle) yüzdesi nedir?',
                options: ['A) %16,7', 'B) %20', 'C) %25', 'D) %18'],
                correct: 'A',
                explanation: 'Derişim = (çözünen kütlesi / çözelti kütlesi) × 100 = (20/120) × 100 = %16,7'
            },
            {
                type: 'text',
                dialogue: 'Çözünürlük eğrisi kavramını bilmen lazım profesyonel olmak için!',
                question: 'Sıcaklığın artmasıyla genellikle hangi tür maddelerin çözünürlüğü artar? (katı/sıvı/gaz)',
                correct: ['katı', 'kati'],
                explanation: 'Katı maddelerin çözünürlüğü genellikle sıcaklıkla artar. Gazların çözünürlüğü ise azalır.'
            },
            {
                type: 'multiple',
                dialogue: 'Emülsiyon ve süspansiyon arasındaki fark... Basit ama önemli!',
                question: 'Hangisi bir emülsiyon örneğidir?',
                options: ['A) Tuz-su', 'B) Kum-su', 'C) Mayonez', 'D) Hava'],
                correct: 'C',
                explanation: 'Mayonez, sıvı-sıvı heterojen karışımı olan bir emülsiyondur.'
            },
            {
                type: 'multiple',
                dialogue: 'Kromatografi... Bilim insanlarının favorisi!',
                question: 'Kromatografi yöntemiyle hangi özelliğe göre ayırma yapılır?',
                options: ['A) Yoğunluk', 'B) Manyetik özellik', 'C) Çözünürlük ve hareket hızı', 'D) Kaynama noktası'],
                correct: 'C',
                explanation: 'Kromatografide maddeler çözücüdeki çözünürlük ve hareket hızlarına göre ayrılır.'
            },
            {
                type: 'text',
                dialogue: 'Son bir soru daha! Doygun çözelti kavramı çok önemli...',
                question: 'Belirli sıcaklıkta bir çözücüde daha fazla çözünen alamayan çözeltiye ne ad verilir?',
                correct: ['doygun çözelti', 'doygun cozelti', 'doygun', 'doymuş çözelti', 'doymus cozelti'],
                explanation: 'Doygun çözelti, o sıcaklıkta maksimum miktarda çözünen içeren çözeltidir.'
            }
        ]
    },

    atom: {
        kolay: [
            {
                type: 'multiple',
                dialogue: 'Atomun yapı taşları hakkında konuşalım! Temel bilgilerden başlayalım...',
                question: 'Atomun çekirdeğinde hangi tanecikler bulunur?',
                options: ['A) Proton ve elektron', 'B) Proton ve nötron', 'C) Nötron ve elektron', 'D) Sadece proton'],
                correct: 'B',
                explanation: 'Atomun çekirdeğinde proton (+) ve nötron (yüksüz) bulunur. Elektronlar çekirdek etrafında döner.'
            },
            {
                type: 'text',
                dialogue: 'Negatif yüklü tanecik hangisiydi? Kolay bir soru!',
                question: 'Atomda negatif yüke sahip olan altatomik tanecik hangisidir?',
                correct: ['elektron'],
                explanation: 'Elektron (-) negatif yüklüdür ve çekirdek etrafındaki orbitallerde bulunur.'
            },
            {
                type: 'multiple',
                dialogue: 'Atom numarası çok önemli! Bunu iyi bilmelisin...',
                question: 'Atom numarası neyi gösterir?',
                options: ['A) Nötron sayısı', 'B) Proton sayısı', 'C) Elektron sayısı', 'D) Kütle'],
                correct: 'B',
                explanation: 'Atom numarası (Z), atomun çekirdeğindeki proton sayısını gösterir.'
            },
            {
                type: 'text',
                dialogue: 'Nötr atomlarda proton ve elektron... Ne dersin?',
                question: 'Nötr bir atomda proton sayısı ile elektron sayısı birbirine eşit mi? (evet/hayır)',
                correct: ['evet'],
                explanation: 'Nötr atomlarda proton sayısı = elektron sayısıdır, bu yüzden atom yüksüzdür.'
            },
            {
                type: 'multiple',
                dialogue: 'İzotoplar konusuna bakalım! Basit bir soru...',
                question: 'İzotoplar hangi özellikleriyle farklılık gösterir?',
                options: ['A) Proton sayısı', 'B) Elektron sayısı', 'C) Nötron sayısı', 'D) Atom numarası'],
                correct: 'C',
                explanation: 'İzotoplar, aynı proton sayısına sahip ancak farklı nötron sayısına sahip atomlardır.'
            }
        ],
        orta: [
            {
                type: 'multiple',
                dialogue: 'Kütle numarası hesaplamaları yapabilmek önemli!',
                question: 'Kütle numarası nasıl hesaplanır?',
                options: ['A) Proton + Elektron', 'B) Proton + Nötron', 'C) Nötron + Elektron', 'D) Proton - Nötron'],
                correct: 'B',
                explanation: 'Kütle numarası (A) = Proton sayısı + Nötron sayısı'
            },
            {
                type: 'text',
                dialogue: 'Atom numarası 6, kütle numarası 12 olan atom... Kim acaba?',
                question: 'Atom numarası 6 olan element hangisidir?',
                correct: ['karbon', 'c'],
                explanation: 'Atom numarası 6 olan element karbondur (C). Periyodik tabloda 6. sıradadır.'
            },
            {
                type: 'multiple',
                dialogue: 'İyon kavramını anlamışsın umarım!',
                question: 'Bir atom elektron kazanırsa ne olur?',
                options: ['A) Pozitif iyon olur', 'B) Negatif iyon olur', 'C) Nötr kalır', 'D) İzotop olur'],
                correct: 'B',
                explanation: 'Elektron kazanan atom negatif iyon (anyon) olur çünkü (-) yük fazlalaşır.'
            },
            {
                type: 'text',
                dialogue: 'Rutherford\'un deneyi atom modelimizi değiştirdi! Biliyor musun?',
                question: 'Atomun çekirdek modeli hangi bilim insanı tarafından önerilmiştir?',
                correct: ['rutherford'],
                explanation: 'Ernest Rutherford, altın folyo deneyi ile atomun çekirdek modelini önermiştir.'
            },
            {
                type: 'multiple',
                dialogue: 'Elektron dizilimi konusu biraz teknik ama yapabilirsin!',
                question: 'İlk enerji kabuğu (K kabuğu) en fazla kaç elektron alabilir?',
                options: ['A) 2', 'B) 8', 'C) 18', 'D) 32'],
                correct: 'A',
                explanation: 'K kabuğu en fazla 2 elektron alabilir. Formül: 2n² (n=1 için 2×1² = 2)'
            }
        ],
        zor: [
            {
                type: 'multiple',
                dialogue: 'Atom kütlesi ortalaması hesabı... Gerçek bir kimyager gibi düşün!',
                question: 'Bir elementin %75\'i kütle numarası 35, %25\'i kütle numarası 37 olan izotoplardan oluşuyor. Ortalama atom kütlesi kaçtır?',
                options: ['A) 35', 'B) 35,5', 'C) 36', 'D) 36,5'],
                correct: 'B',
                explanation: 'Ortalama kütle = (35×0.75) + (37×0.25) = 26.25 + 9.25 = 35.5'
            },
            {
                type: 'text',
                dialogue: 'Bohr atom modeli kuantum fiziğinin başlangıcıydı!',
                question: 'Bohr atom modelinde elektronlar nerelerde bulunur? (tek kelime)',
                correct: ['yörünge', 'yörüngeler', 'yorunge', 'yorungeler', 'enerji seviyeleri', 'kabuk', 'kabuklar'],
                explanation: 'Bohr modeline göre elektronlar belirli enerji seviyelerindeki yörüngelerde bulunur.'
            },
            {
                type: 'multiple',
                dialogue: 'İyon oluşumu ve elektron sayısı... Dikkatli hesapla!',
                question: 'X elementi 2 elektron vererek iyon oluşturdu. Nötr atomun elektron sayısı 12 ise, iyonun elektron sayısı kaçtır?',
                options: ['A) 10', 'B) 12', 'C) 14', 'D) 8'],
                correct: 'A',
                explanation: 'Elektron verme: 12 - 2 = 10 elektron. X²⁺ iyonu oluşur.'
            },
            {
                type: 'multiple',
                dialogue: 'Kuantum mekaniği atomun modern görünümüdür!',
                question: 'Modern atom teorisine göre elektronların kesin konumu yerine ne belirlenir?',
                options: ['A) Yörünge yarıçapı', 'B) Bulunma olasılığı', 'C) Dönme hızı', 'D) Enerjisi'],
                correct: 'B',
                explanation: 'Heisenberg\'in belirsizlik ilkesine göre elektronların sadece bulunma olasılığı belirlenebilir.'
            },
            {
                type: 'text',
                dialogue: 'Değerlik elektronu kimyasal tepkimelerin anahtarıdır!',
                question: 'En dış kabukta bulunan elektronlara ne ad verilir?',
                correct: ['değerlik elektronu', 'degerlik elektronu', 'değerlik elektronları', 'degerlik elektronlari', 'valanş elektronu'],
                explanation: 'En dış kabukta bulunan elektronlar değerlik elektronlarıdır ve kimyasal tepkimelerde rol oynar.'
            }
        ]
    },

    periyodik: {
        kolay: [
            {
                type: 'multiple',
                dialogue: 'Periyodik tablo kimyanın haritasıdır! Başlayalım...',
                question: 'Periyodik tabloda yatay sıralara ne ad verilir?',
                options: ['A) Grup', 'B) Periyot', 'C) Aile', 'D) Blok'],
                correct: 'B',
                explanation: 'Yatay sıralar periyot, dikey sütunlar grup olarak adlandırılır.'
            },
            {
                type: 'text',
                dialogue: 'Hidrojen en basit element! Sembölünü bilmelisin...',
                question: 'Hidrojen elementinin sembolü nedir?',
                correct: ['h'],
                explanation: 'Hidrojen elementi H sembolü ile gösterilir.'
            },
            {
                type: 'multiple',
                dialogue: 'Soy gazlar çok özel bir grup! Neden özel olduklarını bilir misin?',
                question: 'Soy gazlar hangi grup numarasındadır?',
                options: ['A) 1. Grup', 'B) 7. Grup', 'C) 8. Grup (18.Grup)', 'D) 2. Grup'],
                correct: 'C',
                explanation: 'Soy gazlar 8. grup (IUPAC: 18. grup) elementleridir ve kimyasal olarak inerttir.'
            },
            {
                type: 'text',
                dialogue: 'Oksijen hayatın temeli! Sembolünü bilmelisin tabii ki...',
                question: 'Oksijen elementinin sembolü nedir?',
                correct: ['o'],
                explanation: 'Oksijen elementi O sembolü ile gösterilir.'
            },
            {
                type: 'multiple',
                dialogue: 'Alkali metaller oldukça reaktiftir!',
                question: 'Hangi grup alkali metaller olarak bilinir?',
                options: ['A) 1. Grup', 'B) 2. Grup', 'C) 7. Grup', 'D) 8. Grup'],
                correct: 'A',
                explanation: '1. grup elementleri (H hariç) alkali metaller olarak bilinir: Li, Na, K, Rb, Cs, Fr'
            }
        ],
        orta: [
            {
                type: 'multiple',
                dialogue: 'Atom yarıçapı trendi önemli! Düşün bakalım...',
                question: 'Periyodik tabloda soldan sağa gidildikçe atom yarıçapı nasıl değişir?',
                options: ['A) Artar', 'B) Azalır', 'C) Değişmez', 'D) Önce artar sonra azalır'],
                correct: 'B',
                explanation: 'Soldan sağa gidildikçe proton sayısı artar, elektronlar daha güçlü çekilir, yarıçap azalır.'
            },
            {
                type: 'text',
                dialogue: 'Metal olmayan elementler de önemli! En çok reaktif olanı hangisi?',
                question: 'En reaktif (aktif) ametal hangisidir?',
                correct: ['flor', 'f'],
                explanation: 'Flor (F) periyodik tablodaki en reaktif ametaldir ve güçlü oksitleyicidir.'
            },
            {
                type: 'multiple',
                dialogue: 'Halojenler ilginç bir grup! Özellikleri birbirine benzer...',
                question: 'Halojenler hangi grup elementleridir?',
                options: ['A) 1. Grup', 'B) 7. Grup', 'C) 8. Grup', 'D) 2. Grup'],
                correct: 'B',
                explanation: 'Halojenler 7. grup (IUPAC: 17. grup) elementleridir: F, Cl, Br, I, At'
            },
            {
                type: 'text',
                dialogue: 'Toprak alkali metaller de kimyada önemli rol oynar!',
                question: '2. grup elementlerine ne ad verilir? (iki kelime)',
                correct: ['toprak alkali metaller', 'toprak alkali', 'alkali toprak metaller'],
                explanation: '2. grup elementleri toprak alkali metaller olarak bilinir: Be, Mg, Ca, Sr, Ba, Ra'
            },
            {
                type: 'multiple',
                dialogue: 'İyonlaşma enerjisi de periyodik özelliklerden biri!',
                question: 'Bir atomdan elektron koparmak için gereken enerjiye ne ad verilir?',
                options: ['A) Bağ enerjisi', 'B) Aktivasyon enerjisi', 'C) İyonlaşma enerjisi', 'D) Elektron ilgisi'],
                correct: 'C',
                explanation: 'İyonlaşma enerjisi, bir elektronun atomdan koparılması için gereken enerjidir.'
            }
        ],
        zor: [
            {
                type: 'multiple',
                dialogue: 'Elektronegativite kimyasal bağları anlamak için çok önemli!',
                question: 'Periyodik tabloda en yüksek elektronegatifliğe sahip element hangisidir?',
                options: ['A) Oksijen', 'B) Flor', 'C) Klor', 'D) Azot'],
                correct: 'B',
                explanation: 'Flor (F) 4.0 değeri ile en yüksek elektronegatifliğe sahip elementtir.'
            },
            {
                type: 'text',
                dialogue: 'Elektron ilgisi ve iyonlaşma enerjisi farklı kavramlar!',
                question: 'Bir atomun elektron alırken açığa çıkardığı enerjiye ne ad verilir?',
                correct: ['elektron ilgisi', 'elektron ilgi', 'elektron afinitesi'],
                explanation: 'Elektron ilgisi (elektron afinitesi), bir atomun elektron alırken açığa çıkardığı enerjidir.'
            },
            {
                type: 'multiple',
                dialogue: 'Periyodik özelliklerin trenlerini iyi bilmelisin!',
                question: 'Periyodik tabloda yukarıdan aşağıya gidildikçe metalik özellik nasıl değişir?',
                options: ['A) Artar', 'B) Azalır', 'C) Değişmez', 'D) Önce azalır sonra artar'],
                correct: 'A',
                explanation: 'Yukarıdan aşağıya gidildikçe metalik özellik artar çünkü değerlik elektronları daha uzakta ve kolay verilir.'
            },
            {
                type: 'multiple',
                dialogue: 'Geçiş metalleri periyodik tablonun ortasındaki özel gruptur!',
                question: 'Geçiş metalleri periyodik tablonun hangi bölgesinde bulunur?',
                options: ['A) 1-2. gruplar', 'B) 13-18. gruplar', 'C) 3-12. gruplar', 'D) Sadece 8. grup'],
                correct: 'C',
                explanation: 'Geçiş metalleri 3-12. grup (d bloğu) elementleridir ve renkli bileşikler oluşturabilir.'
            },
            {
                type: 'text',
                dialogue: 'Periyodik tablonun tarihini de bilmek güzel! İlk düzenleyen kimdi?',
                question: 'Modern periyodik tabloyu ilk düzenleyen bilim insanının soyadı nedir?',
                correct: ['mendeleev', 'mendeleyev'],
                explanation: 'Dmitri Mendeleev, 1869\'da elementleri atom kütlelerine göre düzenleyerek modern periyodik tabloyu oluşturdu.'
            }
        ]
    },

    'asit-baz': {
        kolay: [
            {
                type: 'multiple',
                dialogue: 'Asitler ve bazlar günlük hayatımızda her yerde! Başlayalım...',
                question: 'Limon suyu hangi özelliğe sahiptir?',
                options: ['A) Asidik', 'B) Bazik', 'C) Nötr', 'D) Amfoter'],
                correct: 'A',
                explanation: 'Limon suyu sitrik asit içerdiği için asidik özellik gösterir.'
            },
            {
                type: 'text',
                dialogue: 'pH kavramı çok önemli! Nötr çözeltinin pH\'ını bilmelisin...',
                question: 'Nötr bir çözeltinin pH değeri kaçtır?',
                correct: ['7'],
                explanation: 'Nötr çözeltilerin pH değeri 7\'dir. pH < 7 asit, pH > 7 baz.'
            },
            {
                type: 'multiple',
                dialogue: 'Turnusol kağıdı basit ama etkili bir göstergedir!',
                question: 'Asit bir çözeltiye mavi turnusol kağıdı atılırsa ne olur?',
                options: ['A) Kırmızıya döner', 'B) Mavi kalır', 'C) Yeşile döner', 'D) Renksiz olur'],
                correct: 'A',
                explanation: 'Asitler mavi turnusol kağıdını kırmızıya döndürür.'
            },
            {
                type: 'text',
                dialogue: 'Sabun evde kullandığımız bir baz! Tadı nasıldır?',
                question: 'Bazların tadı nasıldır? (acı/ekşi/tatlı)',
                correct: ['acı', 'aci'],
                explanation: 'Bazlar acı tada sahiptir ve kaygan hissedilir. (Tatmak tehlikelidir!)'
            },
            {
                type: 'multiple',
                dialogue: 'Asitler metallerle tepkime verir! Bu önemli bir özellik...',
                question: 'Asitler metallerle tepkime verdiğinde hangi gaz açığa çıkar?',
                options: ['A) Oksijen', 'B) Hidrojen', 'C) Azot', 'D) Karbon dioksit'],
                correct: 'B',
                explanation: 'Asitler aktif metallerle tepkime vererek hidrojen (H₂) gazı açığa çıkarır.'
            }
        ],
        orta: [
            {
                type: 'multiple',
                dialogue: 'pH skalası 0-14 arasında değişir! Bunu iyi anlamalısın...',
                question: 'pH değeri 3 olan bir çözelti için hangisi doğrudur?',
                options: ['A) Güçlü baz', 'B) Zayıf baz', 'C) Güçlü asit', 'D) Zayıf asit'],
                correct: 'C',
                explanation: 'pH < 3 güçlü asit, pH 3-7 zayıf asit sayılır.'
            },
            {
                type: 'text',
                dialogue: 'Asit-baz tepkimesi sonucu ne oluşur? Basit ama önemli!',
                question: 'Asit + Baz tepkimesine ne ad verilir?',
                correct: ['nötralleşme', 'notrallestirme', 'nötrleşme', 'notrlesme', 'nötralizasyon'],
                explanation: 'Asit + Baz → Tuz + Su tepkimesine nötralleşme (nötralizasyon) denir.'
            },
            {
                type: 'multiple',
                dialogue: 'Güçlü asitler tehlikelidir! Laboratuvarda dikkatli olmalıyız...',
                question: 'Hangisi güçlü bir asittir?',
                options: ['A) Sirke asidi', 'B) Karbonik asit', 'C) Sülfürik asit', 'D) Borik asit'],
                correct: 'C',
                explanation: 'Sülfürik asit (H₂SO₄) güçlü bir asittir ve suda tamamen iyonlaşır.'
            },
            {
                type: 'text',
                dialogue: 'Mide asidi sindirimi yardımcı olur! Hangi asittir bu?',
                question: 'Midede bulunan asidin adı nedir?',
                correct: ['hidroklorik asit', 'klorhidrik asit', 'hcl', 'klorhidrik'],
                explanation: 'Mide asidi hidroklorik asit (HCl) olup, sindirimi kolaylaştırır ve mikropları öldürür.'
            },
            {
                type: 'multiple',
                dialogue: 'İndikatörler asit-baz ayrımında çok kullanışlı!',
                question: 'Fenolftalein indikatörü bazik ortamda hangi renge döner?',
                options: ['A) Kırmızı', 'B) Mavi', 'C) Pembe-Mor', 'D) Yeşil'],
                correct: 'C',
                explanation: 'Fenolftalein asidik ortamda renksiz, bazik ortamda pembe-mor renktedir.'
            }
        ],
        zor: [
            {
                type: 'multiple',
                dialogue: 'Arrhenius tanımı en temel asit-baz teorisidir!',
                question: 'Arrhenius teorisine göre bazlar suda ne verir?',
                options: ['A) H⁺ iyonu', 'B) OH⁻ iyonu', 'C) H₃O⁺ iyonu', 'D) O²⁻ iyonu'],
                correct: 'B',
                explanation: 'Arrhenius teorisine göre bazlar suda OH⁻ (hidroksit) iyonu veren maddelerdir.'
            },
            {
                type: 'text',
                dialogue: 'Amfoter maddeler hem asit hem baz gibi davranabilir!',
                question: 'Hem asit hem baz özelliği gösteren maddelere ne ad verilir?',
                correct: ['amfoter', 'amfoterik'],
                explanation: 'Amfoter maddeler hem asit hem baz olarak davranabilir. Örnek: Su (H₂O), Al(OH)₃'
            },
            {
                type: 'multiple',
                dialogue: 'Güçlü asit ve güçlü baz kavramları önemli!',
                question: '0.1 M HCl çözeltisinin pH değeri yaklaşık kaçtır?',
                options: ['A) 0', 'B) 1', 'C) 7', 'D) 13'],
                correct: 'B',
                explanation: 'pH = -log[H⁺] = -log(0.1) = 1. Güçlü asitler tamamen iyonlaşır.'
            },
            {
                type: 'multiple',
                dialogue: 'Tampon çözeltiler pH\'ı stabil tutar! Biyolojide çok önemli...',
                question: 'Tampon çözeltilerinin özelliği nedir?',
                options: ['A) pH\'ı sabitler', 'B) Renk değiştirir', 'C) İletken değildir', 'D) Buharlaşmaz'],
                correct: 'A',
                explanation: 'Tampon çözeltiler pH değişimlerine karşı direnç gösterir ve pH\'ı stabil tutar.'
            },
            {
                type: 'text',
                dialogue: 'Asit yağmuru çevre sorunudur! Neden oluşur?',
                question: 'Asit yağmurunun oluşumunda rol oynayan ana atmosferik kirletici gazlar hangileridir? (iki gaz, kısaca)',
                correct: ['so2 ve nox', 'so2 ve no2', 'kükürt dioksit ve azot oksitler', 'so2 nox', 'sülfür dioksit azot oksitler'],
                explanation: 'SO₂ (kükürt dioksit) ve NOₓ (azot oksitler) atmosferde suyla tepkime vererek asit yağmuru oluşturur.'
            }
        ]
    }
};

// ===============================================
// OYUN DEĞİŞKENLERİ
// ===============================================

let selectedTopic = null;
let selectedDifficulty = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let correctAnswers = 0;
let wrongAnswers = 0;

// ===============================================
// YARDIMCI FONKSİYONLAR
// ===============================================

// Türkçe karakter normalizasyonu
function normalizeTurkish(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/ı/g, 'i')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c');
}

// Dizi karıştırma (Fisher-Yates algoritması)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Typewriter efekti
function typeWriter(element, text, speed = 30) {
    element.textContent = '';
    element.classList.add('typing');
    let i = 0;
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            element.classList.remove('typing');
        }
    }, speed);
    
    return timer;
}

// Ekran geçişi
function switchScreen(hideScreen, showScreen) {
    document.getElementById(hideScreen).classList.remove('active');
    document.getElementById(showScreen).classList.add('active');
}

// ===============================================
// BAŞLANGIÇ EKRANI - OLAY DİNLEYİCİLERİ
// ===============================================

// Konu seçimi
document.querySelectorAll('.topic-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        selectedTopic = this.dataset.topic;
        checkStartButton();
    });
});

// Zorluk seçimi
document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        selectedDifficulty = this.dataset.difficulty;
        checkStartButton();
    });
});

// Başla butonu aktifleştirme
function checkStartButton() {
    const startBtn = document.getElementById('start-game-btn');
    if (selectedTopic && selectedDifficulty) {
        startBtn.disabled = false;
    }
}

// Oyunu başlat
document.getElementById('start-game-btn').addEventListener('click', startGame);

// ===============================================
// OYUN BAŞLATMA VE ANA MANTIK
// ===============================================

function startGame() {
    // Değişkenleri sıfırla
    score = 0;
    lives = 3;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    
    // Soruları hazırla (karıştır)
    const questions = questionBank[selectedTopic][selectedDifficulty];
    currentQuestions = shuffleArray(questions);
    
    // Ekrana geç
    switchScreen('start-screen', 'game-screen');
    
    // İlk soruyu göster
    updateGameUI();
    showQuestion();
}

// Oyun UI güncelleme
function updateGameUI() {
    // Can gösterimi
    const hearts = '♥'.repeat(lives) + '♡'.repeat(3 - lives);
    document.getElementById('lives').textContent = hearts;
    
    // Soru numarası
    document.getElementById('question-number').textContent = 
        `${currentQuestionIndex + 1}/${currentQuestions.length}`;
    
    // Skor
    document.getElementById('score').textContent = score;
}

// Soru gösterme
function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length || lives <= 0) {
        endGame();
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    
    // Soru kutusunu gizle
    document.getElementById('question-box').style.display = 'none';
    document.getElementById('feedback-box').style.display = 'none';
    
    // Diyalog göster (Typewriter efekti)
    const dialogueElement = document.getElementById('dialogue-text');
    typeWriter(dialogueElement, question.dialogue);
    
    // 2 saniye sonra soruyu göster
    setTimeout(() => {
        showQuestionBox(question);
    }, question.dialogue.length * 30 + 500);
}

// Soru kutusunu göster
function showQuestionBox(question) {
    const questionBox = document.getElementById('question-box');
    const questionText = document.getElementById('question-text');
    const multipleChoice = document.getElementById('multiple-choice');
    const textAnswer = document.getElementById('text-answer');
    
    questionBox.style.display = 'block';
    questionText.textContent = question.question;
    
    if (question.type === 'multiple') {
        // Çoktan seçmeli
        multipleChoice.style.display = 'grid';
        textAnswer.style.display = 'none';
        
        const optionBtns = document.querySelectorAll('.option-btn');
        question.options.forEach((option, index) => {
            optionBtns[index].textContent = option;
            optionBtns[index].onclick = () => checkAnswer(optionBtns[index].dataset.answer, question);
            optionBtns[index].disabled = false;
            optionBtns[index].classList.remove('correct', 'wrong');
        });
        
    } else {
        // Yazmalı
        multipleChoice.style.display = 'none';
        textAnswer.style.display = 'flex';
        
        const answerInput = document.getElementById('answer-input');
        answerInput.value = '';
        answerInput.focus();
        
        const submitBtn = document.getElementById('submit-answer-btn');
        submitBtn.onclick = () => {
            const userAnswer = answerInput.value.trim();
            if (userAnswer) {
                checkAnswer(userAnswer, question);
            }
        };
        
        // Enter tuşu ile gönderme
        answerInput.onkeypress = (e) => {
            if (e.key === 'Enter') {
                submitBtn.click();
            }
        };
    }
}

// Cevap kontrolü
function checkAnswer(userAnswer, question) {
    let isCorrect = false;
    
    if (question.type === 'multiple') {
        isCorrect = userAnswer === question.correct;
        
        // Butonları devre dışı bırak
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.answer === question.correct) {
                btn.classList.add('correct');
            } else if (btn.dataset.answer === userAnswer && !isCorrect) {
                btn.classList.add('wrong');
            }
        });
        
    } else {
        // Yazmalı cevap kontrolü (Türkçe karakter ve büyük-küçük harf tolere)
        const normalizedAnswer = normalizeTurkish(userAnswer);
        isCorrect = question.correct.some(ans => 
            normalizeTurkish(ans) === normalizedAnswer
        );
    }
    
    // Skor ve can güncelleme
    if (isCorrect) {
        correctAnswers++;
        const points = selectedDifficulty === 'kolay' ? 10 : 
                       selectedDifficulty === 'orta' ? 20 : 30;
        score += points;
    } else {
        wrongAnswers++;
        lives--;
    }
    
    updateGameUI();
    
    // Geri bildirim göster
    setTimeout(() => {
        showFeedback(isCorrect, question.explanation);
    }, 1000);
}

// Geri bildirim gösterme
function showFeedback(isCorrect, explanation) {
    const feedbackBox = document.getElementById('feedback-box');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackText = document.getElementById('feedback-text');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    
    feedbackBox.style.display = 'block';
    feedbackBox.className = 'feedback-box ' + (isCorrect ? 'correct' : 'wrong');
    
    if (isCorrect) {
        feedbackIcon.textContent = '✓';
        feedbackText.textContent = 'Doğru Cevap! 🎉';
    } else {
        feedbackIcon.textContent = '✗';
        feedbackText.textContent = 'Yanlış Cevap! 💔';
    }
    
    feedbackExplanation.textContent = explanation;
    
    // Sonraki soru butonu
    document.getElementById('next-question-btn').onclick = () => {
        currentQuestionIndex++;
        feedbackBox.style.display = 'none';
        showQuestion();
    };
}

// ===============================================
// OYUN SONU
// ===============================================

function endGame() {
    const endTitle = document.getElementById('end-title');
    const endMessage = document.getElementById('end-message');
    
    // Final skorları
    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('wrong-answers').textContent = wrongAnswers;
    
    // Başarı mesajı
    let message = '';
    const percentage = (correctAnswers / currentQuestions.length) * 100;
    
    if (lives > 0) {
        endTitle.textContent = '🎉 Tebrikler!';
        if (percentage >= 80) {
            message = 'Harika bir performans! Kimya konusunda gerçekten yeteneklisin! 🌟';
        } else if (percentage >= 60) {
            message = 'İyi bir iş çıkardın! Biraz daha çalışmayla mükemmel olacaksın! 💪';
        } else {
            message = 'Fena değil! Konuyu tekrar gözden geçirmen faydalı olabilir. 📚';
        }
    } else {
        endTitle.textContent = '😢 Oyun Bitti!';
        message = 'Canların bitti ama pes etme! Tekrar denersen başarabilirsin! 🔄';
    }
    
    endMessage.textContent = message;
    
    // Ekrana geç
    switchScreen('game-screen', 'end-screen');
}

// Tekrar oyna
document.getElementById('restart-btn').addEventListener('click', () => {
    // Seçimleri sıfırla
    document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById('start-game-btn').disabled = true;
    selectedTopic = null;
    selectedDifficulty = null;
    
    // Başlangıç ekranına dön
    switchScreen('end-screen', 'start-screen');
});

// ===============================================
// KOD SONU - İyi Oyunlar! 🎮
// ===============================================
