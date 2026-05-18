// Kutu oluşturucu yardımcı fonksiyonlar
const e = () => ({ type: 'empty' });
const l = (char) => ({ type: 'letter', value: '', answer: char });
const h = (num, dir) => ({ type: 'hint', numbers: [num], arrows: [dir] });

const levelsData = {
   "1": {
     grid: [
       [ e(), h(1, 'down'), e(), e(), e() ],
       [ h(2, 'right'), l('K'), l('E'), l('D'), l('İ') ],
       [ e(), l('U'), e(), e(), e() ],
       [ h(3, 'right'), l('T'), l('O'), l('P'), e() ],
       [ e(), l('U'), e(), e(), e() ]
     ],
     questions: [
       { id: 1, direction: 'Aşağı', text: 'İçine hediye veya eşya konulan karton nesne (4 Harf)' },
       { id: 2, direction: 'Sağa', text: 'Miyavlamasıyla ünlü sevimli evcil hayvan (4 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Ayakla vurularak veya elle atılarak oynanan yuvarlak cisim (3 Harf)' }
     ]
   },

   "2": {
     grid: [
       [ e(), h(1, 'down'), e(), e(), h(4, 'down') ],
       [ h(2, 'right'), l('E'), l('T'), l('E'), l('K') ],
       [ e(), l('L'), e(), e(), l('R') ],
       [ h(3, 'right'), l('M'), l('A'), l('S'), l('A') ],
       [ e(), l('A'), e(), e(), l('L') ]
     ],
     questions: [
       { id: 1, direction: 'Aşağı', text: 'Kırmızı veya yeşil renkte, ağaçta yetişen vitaminli meyve (4 Harf)' },
       { id: 2, direction: 'Sağa', text: 'Genellikle kadınların giydiği bir alt giyim ürünü (4 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Üzerinde yemek yenilen veya çalışılan dört ayaklı mobilya (4 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Tarihte bir ülkeyi yöneten en yetkili erkek hükümdar (4 Harf)' }
     ]
   },

   "3": {
     grid: [
       [ e(), h(1, 'down'), e(), h(4, 'down'), e(), e() ],
       [ h(2, 'right'), l('K'), l('İ'), l('T'), l('A'), l('P') ],
       [ e(), l('A'), e(), l('E'), e(), e() ],
       [ h(3, 'right'), l('L'), l('İ'), l('M'), l('O'), l('N') ],
       [ e(), l('E'), e(), l('E'), e(), e() ],
       [ e(), l('M'), e(), l('L'), e(), e() ]
     ],
     questions: [
       { id: 1, direction: 'Aşağı', text: 'Deftere yazı yazmak veya çizim yapmak için kullanılan araç (5 Harf)' },
       { id: 2, direction: 'Sağa', text: 'İçinde hikayeler veya bilgiler barındıran basılı eser (5 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Sarı renkli, kabuklu ve oldukça ekşi bir narenciye (5 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Bir yapının, düşüncenin veya işin en alt, ana kısmı (5 Harf)' }
     ]
   },

   "4": {
     grid: [
       [ e(), h(1, 'down'), e(), e(), h(3, 'down'), e(), e() ],
       [ h(2, 'right'), l('G'), l('Ö'), l('Z'), l('L'), l('Ü'), l('K') ],
       [ e(), l('Ü'), e(), e(), l('İ'), e(), e() ],
       [ e(), l('N'), e(), e(), l('M'), e(), e() ],
       [ h(4, 'right'), l('E'), l('K'), l('R'), l('A'), l('N'), e() ],
       [ e(), l('Ş'), e(), e(), l('N'), e(), e() ]
     ],
     questions: [
       { id: 1, direction: 'Aşağı', text: 'Gezegenimizi aydınlatan ve ısıtan devasa yıldız (5 Harf)' },
       { id: 2, direction: 'Sağa', text: 'Görme kusurlarını düzeltmek veya güneşten korunmak için takılır (6 Harf)' },
       { id: 3, direction: 'Aşağı', text: 'Gemilerin yük indirmek ve yolcu almak için yanaştığı yer (5 Harf)' },
       { id: 4, direction: 'Sağa', text: 'Telefon, televizyon veya bilgisayarın görüntü veren ön yüzeyi (5 Harf)' }
     ]
   },

   "5": {
     grid: [
       [ e(), e(), h(2, 'down'), e(), h(4, 'down'), e(), e(), e() ],
       [ e(), e(), l('M'), e(), l('M'), e(), e(), e() ],
       [ h(1, 'right'), l('Y'), l('A'), l('Z'), l('I'), l('L'), l('I'), l('M') ],
       [ e(), e(), l('K'), e(), l('S'), e(), e(), e() ],
       [ e(), e(), l('İ'), e(), l('I'), e(), e(), e() ],
       [ h(3, 'right'), l('E'), l('N'), l('E'), l('R'), l('J'), l('İ'), e() ],
       [ e(), e(), l('E'), e(), e(), e(), e(), e() ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Donanıma hayat veren bilgisayar programlarının genel adı (7 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Belli bir işi yapmak için tasarlanmış, hareketli parçaları olan alet (6 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Fizikte iş yapabilme yeteneği; güneş, rüzgar veya elektrik kaynaklı güç (6 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Sinemada patlamış hali sıkça tüketilen sarı taneli bitki (5 Harf)' }
     ]
   },

   "6": {
     grid: [
       [ e(), e(), e(), h(2, 'down'), e(), e(), e(), e(), e() ],
       [ e(), e(), e(), l('P'), e(), e(), e(), e(), h(4, 'down') ],
       [ e(), h(1, 'right'), l('T'), l('İ'), l('Y'), l('A'), l('T'), l('R'), l('O') ],
       [ e(), e(), e(), l('R'), e(), e(), e(), e(), l('R') ],
       [ e(), e(), e(), l('A'), e(), e(), e(), e(), l('M') ],
       [ h(3, 'right'), l('K'), l('A'), l('M'), l('P'), l('A'), l('N'), l('Y'), l('A') ],
       [ e(), e(), e(), l('İ'), e(), e(), e(), e(), l('N') ],
       [ e(), e(), e(), l('T'), e(), e(), e(), e(), e() ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Sahnede oyuncuların canlı performans sergilediği sanat dalı (7 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Antik Mısır\'da firavunlar için inşa edilmiş devasa anıtsal mezar (7 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Belli bir amaca ulaşmak için başlatılan kapsamlı eylem dizisi (8 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Ağaçların geniş alanları kapladığı, vahşi yaşamın merkezi olan doğal alan (5 Harf)' }
     ]
   },

   "7": {
     grid: [
       [ e(), e(), e(), e(), e(), e(), e(), e(), e() ],
       [ e(), e(), h(2, 'down'), e(), e(), e(), e(), h(4, 'down'), e() ],
       [ e(), h(1, 'right'), l('G'), l('A'), l('L'), l('A'), l('K'), l('S'), l('İ') ],
       [ e(), e(), l('R'), e(), e(), e(), e(), l('İ'), e() ],
       [ e(), e(), l('A'), e(), e(), e(), e(), l('S'), e() ],
       [ h(3, 'right'), l('E'), l('V'), l('R'), l('İ'), l('M'), e(), l('T'), e() ],
       [ e(), e(), l('İ'), e(), e(), e(), e(), l('E'), e() ],
       [ e(), e(), l('T'), e(), e(), e(), e(), l('M'), e() ],
       [ e(), e(), l('E'), e(), e(), e(), e(), e(), e() ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Milyarlarca yıldız, gaz ve toz bulutundan oluşan dev uzay adası (7 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Cisimleri birbirine ve yere doğru çeken fiziksel kütleçekim kuvveti (7 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Canlı türlerinin nesiller boyunca değişime uğrayarak gelişmesi süreci (5 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Birbiriyle etkileşim içinde olan ve bir bütün oluşturan yapılar topluluğu (6 Harf)' }
     ]
   },

   "8": {
     grid: [
       [ e(), e(), e(), e(), e(), e(), e(), e(), e() ],
       [ e(), e(), e(), h(2, 'down'), e(), e(), e(), h(4, 'down'), e() ],
       [ e(), h(1, 'right'), l('O'), l('K'), l('S'), l('İ'), l('J'), l('E'), l('N') ],
       [ e(), e(), e(), l('O'), e(), e(), e(), l('K'), e() ],
       [ e(), e(), h(3, 'right'), l('Z'), l('E'), l('H'), l('İ'), l('R'), e() ],
       [ e(), e(), e(), l('M'), e(), e(), e(), l('A'), e() ],
       [ e(), e(), e(), l('İ'), e(), e(), e(), l('N'), e() ],
       [ e(), e(), e(), l('K'), e(), e(), e(), e(), e() ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Soluduğumuz havada bulunan, yaşam için temel olan renksiz gaz (7 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Evrenle ve uzay boşluğuyla ilgili olan, galaktik (6 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Vücuda girdiğinde sağlığı bozan veya yaşamı tehdit eden zararlı madde (5 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Bilgisayar, telefon veya televizyonda görüntülerin yansıdığı panel yüzeyi (5 Harf)' }
     ]
   },

   "9": {
     grid: [
       [ e(), e(), e(), e(), e(), e(), e(), e(), e() ],
       [ e(), e(), h(2, 'down'), e(), h(3, 'down'), e(), e(), e(), e() ],
       [ e(), h(1, 'right'), l('M'), l('E'), l('T'), l('A'), l('F'), l('O'), l('R') ],
       [ e(), e(), l('E'), e(), l('E'), e(), e(), e(), e() ],
       [ e(), e(), l('K'), e(), l('O'), e(), e(), e(), e() ],
       [ h(4, 'right'), l('K'), l('A'), l('D'), l('R'), l('O'), e(), e(), e() ],
       [ e(), e(), l('N'), e(), l('İ'), e(), e(), e(), e() ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Bir şeyi başka bir şeyle benzeterek veya kıyaslayarak anlatma sanatı, mecaz (7 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Olayların geçtiği, sınırları belirli veya soyut yer, ortam (5 Harf)' },
       { id: 3, direction: 'Aşağı', text: 'Bilimsel gerçeklere dayanarak oluşturulmuş, kanıtlanabilir düşünce sistemi (5 Harf)' },
       { id: 4, direction: 'Sağa', text: 'Bir işte, kurumda veya film projesinde görev alan kişilerin tümü (5 Harf)' }
     ]
   },

   "10": {
     grid: [
       [ e(), e(), e(), e(), e(), e(), e(), e(), e(), e() ],
       [ e(), h(4, 'down'), e(), e(), e(), h(2, 'down'), e(), e(), e(), e() ],
       [ h(1, 'right'), l('P'), l('A'), l('R'), l('A'), l('D'), l('O'), l('K'), l('S'), e() ],
       [ e(), l('R'), e(), e(), e(), l('İ'), e(), e(), e(), e() ],
       [ e(), l('O'), h(3, 'right'), l('S'), l('İ'), l('N'), l('E'), l('R'), l('J'), l('İ') ],
       [ e(), l('J'), e(), e(), e(), l('A'), e(), e(), e(), e() ],
       [ e(), l('E'), e(), e(), e(), l('M'), e(), e(), e(), e() ],
       [ e(), e(), e(), e(), e(), l('İ'), e(), e(), e(), e() ],
       [ e(), e(), e(), e(), e(), l('K'), e(), e(), e(), e() ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Doğru gibi görünen ancak aslında kendi içinde çelişen mantıksal ifade (8 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Sürekli hareket halinde olan, enerjik ve değişime, gelişime açık (7 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Parçaların bir araya gelerek tek başlarına yapacaklarından daha büyük bir güç oluşturması (7 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Önceden belirlenmiş bir amaca ulaşmak için planlanan detaylı tasarım ve çalışma (5 Harf)' }
     ]
   },

 "11": {
     grid: [
       [ e(), e(), e(), h(2, 'down'), e(), e(), e(), e(), e() ],
       [ h(1, 'right'), l('S'), l('İ'), l('B'), l('E'), l('R'), e(), e(), e() ],
       [ e(), e(), e(), l('İ'), e(), e(), e(), e(), e() ],
       [ e(), e(), e(), l('L'), e(), e(), e(), e(), e() ],
       [ e(), e(), e(), l('G'), e(), e(), e(), e(), e() ],
       [ e(), e(), e(), l('İ'), e(), e(), e(), e(), h(4, 'down') ],
       [ e(), e(), h(3, 'right'), l('S'), l('İ'), l('S'), l('T'), l('E'), l('M') ],
       [ e(), e(), e(), l('A'), e(), e(), e(), e(), l('O') ],
       [ e(), e(), e(), l('Y'), e(), e(), e(), e(), l('D') ],
       [ e(), e(), e(), l('A'), e(), e(), e(), e(), l('E') ],
       [ e(), e(), e(), l('R'), e(), e(), e(), e(), l('M') ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'İnternet ve sanal ağlarla ilgili olan, bilgisayar ağına ait (5 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Verileri işleyen, depolayan ve karmaşık hesaplamalar yapan elektronik cihaz (10 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Birbirine bağlı parçalardan oluşan ve uyum içinde çalışan karmaşık düzen (6 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Dijital verileri analog sinyallere çevirerek internete bağlanmayı sağlayan cihaz (5 Harf)' }
     ]
   },

   "12": {
     grid: [
       [ e(), e(), e(), e(), e(), h(2, 'down'), e(), e(), e(), e(), e(), e() ],
       [ h(1, 'right'), l('A'), l('S'), l('T'), l('E'), l('R'), l('O'), l('İ'), l('T'), e(), e(), e() ],
       [ e(), e(), e(), e(), e(), l('O'), e(), e(), e(), e(), e(), e() ],
       [ e(), e(), e(), e(), e(), l('K'), e(), e(), e(), e(), e(), h(4, 'down') ],
       [ e(), e(), e(), h(3, 'right'), l('T'), l('E'), l('L'), l('E'), l('S'), l('K'), l('O'), l('P') ],
       [ e(), e(), e(), e(), e(), l('T'), e(), e(), e(), e(), e(), l('L') ],
       [ e(), e(), e(), e(), e(), e(), e(), e(), e(), e(), e(), l('A') ],
       [ e(), e(), e(), e(), e(), e(), e(), e(), e(), e(), e(), l('Z') ],
       [ e(), e(), e(), e(), e(), e(), e(), e(), e(), e(), e(), l('M') ],
       [ e(), e(), e(), e(), e(), e(), e(), e(), e(), e(), e(), l('A') ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Güneş yörüngesinde dönen küçük kaya ve metal parçası, küçük gezegen (8 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Uzay araçlarını atmosferin dışına taşımak için kullanılan tepkili motor (5 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Uzaktaki gök cisimlerini yakınlaştırarak incelemeyi sağlayan optik alet (8 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Maddenin katı, sıvı ve gaz dışındaki dördüncü hali, iyonize gaz (6 Harf)' }
     ]
   },

   "13": {
       grid: [
         [ e(), e(), e(), h(2, 'down'), e(), e(), e(), e() ],
         [ h(1, 'right'), l('T'), l('A'), l('P'), l('I'), l('N'), l('A'), l('K') ],
         [ e(), e(), e(), l('İ'), e(), h(4, 'down'), e(), e() ],
         [ h(3, 'right'), l('F'), l('İ'), l('R'), l('A'), l('V'), l('U'), l('N') ],
         [ e(), e(), e(), l('A'), e(), l('A'), e(), e() ],
         [ e(), e(), e(), l('M'), e(), l('H'), e(), e() ],
         [ e(), e(), e(), l('İ'), e(), l('A'), e(), e() ],
         [ e(), e(), e(), l('T'), e(), e(), e(), e() ]
       ],
       questions: [
         { id: 1, direction: 'Sağa', text: 'Eski çağlarda tanrılara ibadet etmek için inşa edilen kutsal yapı (7 Harf)' },
         { id: 2, direction: 'Aşağı', text: 'Eski Mısır\'da firavunlar için inşa edilmiş, ucu sivri anıtsal mezar (7 Harf)' },
         { id: 3, direction: 'Sağa', text: 'Eski Mısır hükümdarlarına verilen mutlak güç sahibi unvan (7 Harf)' },
         { id: 4, direction: 'Aşağı', text: 'Çöllerin ortasında su ve yeşillik bulunan, yaşamı destekleyen alan (4 Harf)' }
       ]
     },

   "14": {
     grid: [
       [ e(), e(), e(), e(), h(2, 'down'), e(), e(), e() ],
       [ h(1, 'right'), l('V'), l('O'), l('L'), l('K'), l('A'), l('N'), e() ],
       [ e(), e(), e(), e(), l('R'), e(), h(4, 'down'), e() ],
       [ e(), e(), h(3, 'right'), l('M'), l('A'), l('G'), l('M'), l('A') ],
       [ e(), e(), e(), e(), l('T'), e(), l('A'), e() ],
       [ e(), e(), e(), e(), l('E'), e(), l('Ğ'), e() ],
       [ e(), e(), e(), e(), l('R'), e(), l('A'), e() ],
       [ e(), e(), e(), e(), e(), e(), l('R'), e() ],
       [ e(), e(), e(), e(), e(), e(), l('A'), e() ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Yer altındaki erimiş maddeleri, kül ve gazları yeryüzüne püskürten dağ (6 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Yanardağların tepesinde patlama sonucu oluşan çanak biçimli dev çukur (6 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Yer kabuğunun altındaki erimiş, aşırı sıcak kayaç hamuru (5 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Yer kabuğunun veya dağların içindeki doğal, büyük ve karanlık oyuk (6 Harf)' }
     ]
   },

   "15": {
     grid: [
       [ e(), e(), e(), e(), e(), h(2, 'down'), e(), e() ],
       [ h(1, 'right'), l('A'), l('N'), l('A'), l('T'), l('O'), l('M'), l('İ') ],
       [ e(), e(), e(), e(), e(), l('R'), e(), e() ],
       [ e(), e(), e(), e(), e(), l('G'), e(), h(4, 'down') ],
       [ e(), h(3, 'right'), l('S'), l('İ'), l('N'), l('A'), l('P'), l('S') ],
       [ e(), e(), e(), e(), e(), l('N'), e(), l('İ') ],
       [ e(), e(), e(), e(), e(), e(), e(), l('S') ],
       [ e(), e(), e(), e(), e(), e(), e(), l('T') ],
       [ e(), e(), e(), e(), e(), e(), e(), l('E') ],
       [ e(), e(), e(), e(), e(), e(), e(), l('M') ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Canlıların vücut yapısını, organlarını ve sistemlerini inceleyen bilim (7 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Vücutta solunum, sindirim gibi belirli bir görevi yerine getiren doku grubu (5 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Nöronların (sinir hücrelerinin) birbirleriyle sinyal aktardığı bağlantı noktası (6 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Bir amaca ulaşmak için uyum içinde çalışan ve birbirine bağlı parçalar bütünü (6 Harf)' }
     ]
   },

   "16": {
     grid: [
       [ e(), e(), h(2, 'down'), e(), e(), e(), e(), e(), e() ],
       [ h(1, 'right'), l('E'), l('D'), l('E'), l('B'), l('İ'), l('Y'), l('A'), l('T') ],
       [ e(), e(), l('E'), e(), h(4, 'down'), e(), e(), e(), e() ],
       [ h(3, 'right'), l('E'), l('S'), l('E'), l('R'), e(), e(), e(), e() ],
       [ e(), e(), l('T'), e(), l('O'), e(), e(), e(), e() ],
       [ e(), e(), l('A'), e(), l('M'), e(), e(), e(), e() ],
       [ e(), e(), l('N'), e(), l('A'), e(), e(), e(), e() ],
       [ e(), e(), e(), e(), l('N'), e(), e(), e(), e() ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Duygu ve düşüncelerin dil aracılığıyla estetik biçimde ifade edildiği sanat (8 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Tarihi olayları, savaşları veya kahramanlıkları coşkulu dille anlatan şiir (6 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Bir yazarın, ressamın veya bestecinin ortaya koyduğu sanatsal ürün (4 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'İnsanların serüvenlerini, iç dünyalarını ve çevrelerini detaylı anlatan yazı (5 Harf)' }
     ]
   },

   "17": {
     grid: [
       [ e(), e(), e(), h(2, 'down'), e(), e(), e(), e(), e(), e() ],
       [ h(1, 'right'), l('A'), l('L'), l('G'), l('O'), l('R'), l('İ'), l('T'), l('M'), l('A') ],
       [ e(), e(), e(), l('R'), e(), e(), e(), e(), h(4, 'down'), e() ],
       [ e(), h(3, 'right'), l('Y'), l('A'), l('Z'), l('I'), l('L'), l('I'), l('M'), e() ],
       [ e(), e(), e(), l('F'), e(), e(), e(), e(), l('O'), e() ],
       [ e(), e(), e(), l('İ'), e(), e(), e(), e(), l('D'), e() ],
       [ e(), e(), e(), l('K'), e(), e(), e(), e(), l('Ü'), e() ],
       [ e(), e(), e(), e(), e(), e(), e(), e(), l('L'), e() ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Bir problemi çözmek veya bir amaca ulaşmak için tasarlanan mantıksal adımlar (9 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Bilgisayar ekranında veya kağıt üzerinde oluşturulan görsel tasarımlar (6 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Bilgisayarı çalıştıran, donanıma ne yapacağını söyleyen kodların tümü (7 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Bir sistemin veya yazılımın kendi içinde bağımsız olarak çalışabilen parçası (5 Harf)' }
     ]
   },

   "18": {
     grid: [
       [ e(), e(), e(), h(2, 'down'), e(), e(), e(), e(), e() ],
       [ h(1, 'right'), l('K'), l('A'), l('H'), l('R'), l('A'), l('M'), l('A'), l('N') ],
       [ e(), e(), e(), l('A'), e(), e(), h(4, 'down'), e(), e() ],
       [ h(3, 'right'), l('B'), l('Ü'), l('Y'), l('Ü'), l('C'), l('Ü'), e(), e() ],
       [ e(), e(), e(), l('A'), e(), e(), l('T'), e(), e() ],
       [ e(), e(), e(), l('L'), e(), e(), l('O'), e(), e() ],
       [ e(), e(), e(), l('E'), e(), e(), l('P'), e(), e() ],
       [ e(), e(), e(), l('T'), e(), e(), l('Y'), e(), e() ],
       [ e(), e(), e(), e(), e(), e(), l('A'), e(), e() ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Olaylarda üstün cesaret göstererek ön plana çıkan, destansı ana karakter (8 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Ruhların dünyada kalan, genellikle geceleri beliren saydam ve korkutucu yansıması (7 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Sihir, büyü ve doğaüstü karanlık güçleri kullandığına inanılan mistik kişi (6 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Hiçbir zaman var olamayacak kadar kusursuz ve ideal toplum hayali (6 Harf)' }
     ]
   },

   "19": {
     grid: [
       [ e(), e(), e(), h(2, 'down'), e(), e(), e(), e(), e(), e() ],
       [ h(1, 'right'), l('S'), l('O'), l('N'), l('S'), l('U'), l('Z'), l('L'), l('U'), l('K') ],
       [ e(), e(), e(), l('O'), e(), h(4, 'down'), e(), e(), e(), e() ],
       [ h(3, 'right'), l('M'), l('İ'), l('S'), l('T'), l('İ'), l('K'), e(), e(), e() ],
       [ e(), e(), e(), l('T'), e(), l('H'), e(), e(), e(), e() ],
       [ e(), e(), e(), l('A'), e(), l('T'), e(), e(), e(), e() ],
       [ e(), e(), e(), l('L'), e(), l('İ'), e(), e(), e(), e() ],
       [ e(), e(), e(), l('J'), e(), l('M'), e(), e(), e(), e() ],
       [ e(), e(), e(), l('İ'), e(), l('A'), e(), e(), e(), e() ],
       [ e(), e(), e(), e(), e(), l('L'), e(), e(), e(), e() ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Başı ve sonu olmayan, ölçülemeyen sınırsız zaman ve mekan boyutu (9 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'Geçmişte kalan güzel günlere, yaşanmışlıklara duyulan melankolik özlem (8 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Akıl ve bilimle açıklanamayan, gizemli, ruhsal ve doğaüstü olaylara ait (6 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Bir olayın veya durumun gerçekleşebilme olasılığı, mantıksal şans payı (7 Harf)' }
     ]
   },

   "20": {
     grid: [
       [ e(), e(), e(), h(2, 'down'), e(), e(), e(), e(), e(), e() ],
       [ h(1, 'right'), l('P'), l('A'), l('R'), l('A'), l('D'), l('İ'), l('G'), l('M'), l('A') ],
       [ e(), e(), e(), l('E'), e(), e(), e(), e(), h(4, 'down'), e() ],
       [ e(), h(3, 'right'), l('K'), l('A'), l('R'), l('A'), l('K'), l('T'), l('E'), l('R') ],
       [ e(), e(), e(), l('L'), e(), e(), e(), e(), l('V'), e() ],
       [ e(), e(), e(), l('İ'), e(), e(), e(), e(), l('R'), e() ],
       [ e(), e(), e(), l('T'), e(), e(), e(), e(), l('E'), e() ],
       [ e(), e(), e(), l('E'), e(), e(), e(), e(), l('N'), e() ],
       [ e(), e(), e(), e(), e(), e(), e(), e(), l('S'), e() ],
       [ e(), e(), e(), e(), e(), e(), e(), e(), l('E'), e() ],
       [ e(), e(), e(), e(), e(), e(), e(), e(), l('L'), e() ]
     ],
     questions: [
       { id: 1, direction: 'Sağa', text: 'Belirli bir çağda veya toplumda geçerli olan, kabul görmüş ortak inanç ve değerler (9 Harf)' },
       { id: 2, direction: 'Aşağı', text: 'İnsan zihninden bağımsız, somut ve nesnel olarak var olan değişmez gerçeklik (7 Harf)' },
       { id: 3, direction: 'Sağa', text: 'Bir bireyin düşünce yapısı, olaylara verdiği tepkiler ve huy özelliklerinin tümü (8 Harf)' },
       { id: 4, direction: 'Aşağı', text: 'Sadece bir zümreye veya bölgeye değil, tüm dünyaya ve insanlığa ait olan (8 Harf)' }
     ]
   }
 };

// Node.js (Backend) ortamı için dışa aktarma (export) kodu
module.exports = levelsData;