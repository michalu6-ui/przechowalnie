const questions = [
  { text: 'Po intensywnym dniu najlepiej regenerujesz się wśród ludzi.', axis: 'EI', positive: 'E' },
  { text: 'Zwykle pierwszy_a zaczynasz rozmowę z nową osobą.', axis: 'EI', positive: 'E' },
  { text: 'Lubisz, gdy wokół Ciebie dużo się dzieje.', axis: 'EI', positive: 'E' },
  { text: 'Myśli układają Ci się najlepiej, kiedy mówisz o nich na głos.', axis: 'EI', positive: 'E' },
  { text: 'Po spotkaniu z ludźmi czujesz przypływ energii.', axis: 'EI', positive: 'E' },
  { text: 'Chętnie zabierasz głos w większej grupie.', axis: 'EI', positive: 'E' },
  { text: 'Wolisz dzielić się pomysłem od razu niż długo go dopracowywać w ciszy.', axis: 'EI', positive: 'E' },
  { text: 'Łatwo nawiązujesz kontakt w nowym miejscu.', axis: 'EI', positive: 'E' },
  { text: 'Najpierw zauważasz konkretne fakty i szczegóły.', axis: 'SN', positive: 'S' },
  { text: 'Wolisz sprawdzone rozwiązania niż pełne ryzyka eksperymenty.', axis: 'SN', positive: 'S' },
  { text: 'Przy planowaniu opierasz się głównie na tym, co już wiesz.', axis: 'SN', positive: 'S' },
  { text: 'Cenisz instrukcje, które prowadzą krok po kroku.', axis: 'SN', positive: 'S' },
  { text: 'Często wyobrażasz sobie, co mogłoby wydarzyć się dalej.', axis: 'SN', positive: 'N' },
  { text: 'Łatwo dostrzegasz ukryte połączenia między odległymi ideami.', axis: 'SN', positive: 'N' },
  { text: 'Bardziej interesują Cię możliwości niż obecny stan rzeczy.', axis: 'SN', positive: 'N' },
  { text: 'Lubisz rozmawiać o znaczeniach, wzorach i tym, co dopiero może powstać.', axis: 'SN', positive: 'N' },
  { text: 'Podejmując decyzję, najpierw analizujesz jej logiczne konsekwencje.', axis: 'TF', positive: 'T' },
  { text: 'Trudno Ci odłożyć na bok emocje, gdy ktoś potrzebuje wsparcia.', axis: 'TF', positive: 'F' },
  { text: 'Spór traktujesz przede wszystkim jak problem do rozwiązania.', axis: 'TF', positive: 'T' },
  { text: 'Ważne jest dla Ciebie, aby decyzja była zgodna z Twoimi wartościami.', axis: 'TF', positive: 'F' },
  { text: 'W dyskusji bardziej przekonują Cię argumenty niż sympatia do osoby.', axis: 'TF', positive: 'T' },
  { text: 'Zanim ocenisz pomysł, zastanawiasz się, jak wpłynie na ludzi.', axis: 'TF', positive: 'F' },
  { text: 'Potrafisz przekazać trudną uwagę bez owijania w bawełnę.', axis: 'TF', positive: 'T' },
  { text: 'Dobra atmosfera jest dla Ciebie równie ważna jak skuteczność.', axis: 'TF', positive: 'F' },
  { text: 'Lubisz mieć plan i trzymać się ustalonego kierunku.', axis: 'JP', positive: 'J' },
  { text: 'Najlepiej działasz, gdy możesz zostawić sobie kilka opcji.', axis: 'JP', positive: 'P' },
  { text: 'Satysfakcję daje Ci domykanie spraw przed rozpoczęciem kolejnych.', axis: 'JP', positive: 'J' },
  { text: 'Często działasz spontanicznie, gdy pojawia się dobra okazja.', axis: 'JP', positive: 'P' }
  ,{ text: 'Wolisz wiedzieć wcześniej, czego spodziewać się danego dnia.', axis: 'JP', positive: 'J' },
  { text: 'Terminy mobilizują Cię dopiero wtedy, gdy są naprawdę blisko.', axis: 'JP', positive: 'P' },
  { text: 'Porządek w planie daje Ci poczucie swobody.', axis: 'JP', positive: 'J' },
  { text: 'Zmiana planów w ostatniej chwili potrafi być dla Ciebie ekscytująca.', axis: 'JP', positive: 'P' },
  { text: 'Po trudnej sytuacji szybko odzyskujesz spokój i ruszasz dalej.', axis: 'AT', positive: 'A' },
  { text: 'Rzadko długo rozpamiętujesz popełnione błędy.', axis: 'AT', positive: 'A' },
  { text: 'Nawet pod presją ufasz swoim decyzjom.', axis: 'AT', positive: 'A' },
  { text: 'Łatwo zachowujesz dystans, gdy ktoś krytykuje Twoją pracę.', axis: 'AT', positive: 'A' },
  { text: 'Drobne problemy potrafią wracać do Ciebie myślami przez długi czas.', axis: 'AT', positive: 'T' },
  { text: 'Często zastanawiasz się, czy na pewno podjąłeś_aś dobrą decyzję.', axis: 'AT', positive: 'T' },
  { text: 'Krytyka mocno wpływa na Twoje samopoczucie.', axis: 'AT', positive: 'T' },
  { text: 'Przed ważnym wydarzeniem wyobrażasz sobie różne trudne scenariusze.', axis: 'AT', positive: 'T' }
];

const profiles = {
  INTJ: { name: 'Architekt', summary: 'Strategiczne myślenie, niezależność i potrzeba budowania rozwiązań, które mają sens także za kilka kroków.', healthy: 'Tworzysz klarowną wizję, pracujesz samodzielnie i cierpliwie zamieniasz złożony problem w system.', unhealthy: 'Możesz odcinać się od ludzi, traktować emocje jak przeszkodę i zbyt mocno ufać własnemu planowi.', career: 'Strategia, analiza danych, inżynieria, programowanie, badania, architektura systemów i zarządzanie produktem.', relationships: 'Zaleta: lojalność, szczerość i pomoc w rozwiązywaniu problemów. Wyzwanie: warto częściej mówić o uczuciach, nie tylko o rozwiązaniach.', work: 'Zaleta: samodzielność, standardy jakości i myślenie długoterminowe. Wyzwanie: delegowanie i cierpliwość wobec mniej uporządkowanych procesów.' },
  INTP: { name: 'Analityk', summary: 'Ciekawość, precyzja i przyjemność z rozkładania skomplikowanych idei na prostsze elementy.', healthy: 'Eksplorujesz bez uprzedzeń, zadajesz trafne pytania i znajdujesz eleganckie wyjaśnienia.', unhealthy: 'Możesz utknąć w analizie, unikać decyzji i brzmieć chłodno, gdy inni potrzebują jasnego wsparcia.', career: 'Badania, informatyka, matematyka, analityka, UX research, filozofia i role wymagające eksperymentowania.', relationships: 'Zaleta: ciekawość drugiej osoby i wolność od gier. Wyzwanie: regularnie okazuj obecność, nawet gdy problemu nie trzeba naprawiać.', work: 'Zaleta: oryginalne rozwiązania i szybkie uczenie się. Wyzwanie: domykanie zadań oraz przekładanie idei na prosty komunikat.' },
  ENTJ: { name: 'Dowódca', summary: 'Energia do działania, klarowny kierunek i talent do porządkowania zasobów wokół ambitnego celu.', healthy: 'Podejmujesz odpowiedzialność, budujesz skuteczne zespoły i bronisz wysokich standardów.', unhealthy: 'Możesz dominować rozmowę, naciskać na tempo i mylić skuteczność z racją.', career: 'Przywództwo, przedsiębiorczość, zarządzanie, konsulting, finanse, operacje i rozwój organizacji.', relationships: 'Zaleta: inicjatywa, stabilność i gotowość do walki o wspólne cele. Wyzwanie: słuchaj bez natychmiastowego przejmowania steru.', work: 'Zaleta: decyzje, strategia i odpowiedzialność za wynik. Wyzwanie: doceniaj proces i ludzi, nie tylko końcowy rezultat.' },
  ENTP: { name: 'Odkrywca', summary: 'Pomysłowość, elastyczność i naturalna chęć testowania, czy istnieje jeszcze lepsza droga.', healthy: 'Rozbijasz schematy, widzisz szanse i potrafisz przekonać innych do odważnego eksperymentu.', unhealthy: 'Możesz prowokować dla sportu, porzucać projekty po fazie pomysłu i nie zauważać zmęczenia innych.', career: 'Innowacje, startupy, marketing, negocjacje, strategia, media, produkt i przedsiębiorczość.', relationships: 'Zaleta: humor, inspiracja i otwartość na różnice. Wyzwanie: nie zamieniaj każdej rozmowy w debatę.', work: 'Zaleta: kreatywność i szybkie łączenie faktów. Wyzwanie: rutyna, konsekwencja i dopracowanie szczegółów.' },
  INFJ: { name: 'Doradca', summary: 'Intuicja połączona z uważnością na ludzi i potrzebą nadawania działaniom głębszego znaczenia.', healthy: 'Widzisz szerszy sens, słuchasz uważnie i pomagasz ludziom rozwijać się bez odbierania im sprawczości.', unhealthy: 'Możesz idealizować innych, tłumić własne potrzeby i wycofywać się bez wyjaśnienia, gdy granice są przekraczane.', career: 'Psychologia, edukacja, HR, pomoc społeczna, pisanie, strategia marki i praca nad zmianą społeczną.', relationships: 'Zaleta: empatia, głębia i zaangażowanie. Wyzwanie: mów wprost, czego potrzebujesz, zamiast liczyć na domyślność.', work: 'Zaleta: wizja, sens i praca z ludźmi. Wyzwanie: ochrona energii i akceptacja, że nie każdy problem da się naprawić.' },
  INFP: { name: 'Mediator', summary: 'Wrażliwość, autentyczność i wyobraźnia, która pomaga widzieć więcej niż samą powierzchnię sytuacji.', healthy: 'Bronisz wartości, tworzysz z sercem i potrafisz dostrzec człowieka tam, gdzie inni widzą tylko rolę.', unhealthy: 'Możesz idealizować, unikać trudnej konfrontacji i brać krytykę tego, co tworzysz, za krytykę siebie.', career: 'Pisanie, sztuka, projektowanie, psychologia, edukacja, organizacje społeczne i komunikacja z misją.', relationships: 'Zaleta: akceptacja, lojalność i emocjonalna uważność. Wyzwanie: stawiaj granice i nie znikaj, gdy pojawia się konflikt.', work: 'Zaleta: znaczenie, kreatywność i jakość relacji. Wyzwanie: struktura, promocja własnej pracy i decyzje pod presją.' },
  ENFJ: { name: 'Przewodnik', summary: 'Łączenie ludzi, czytanie atmosfery i konsekwentne wspieranie rozwoju wspólnego pomysłu.', healthy: 'Mobilizujesz, zauważasz potencjał innych i budujesz środowisko, w którym ludzie chcą współpracować.', unhealthy: 'Możesz brać za dużo odpowiedzialności, kontrolować troską i uzależniać własną wartość od uznania.', career: 'Edukacja, coaching, HR, zarządzanie zespołem, komunikacja, sprzedaż doradcza i działalność społeczna.', relationships: 'Zaleta: ciepło, inicjatywa i umiejętność budowania więzi. Wyzwanie: pozwól bliskim mieć inne tempo i potrzeby.', work: 'Zaleta: przywództwo relacyjne i motywowanie. Wyzwanie: trudne decyzje oraz przyjmowanie krytyki bez personalizowania.' },
  ENFP: { name: 'Inspirator', summary: 'Entuzjazm, otwartość na możliwości i łatwość dostrzegania potencjału w ludziach oraz ideach.', healthy: 'Wnosisz energię, łączysz odległe pomysły i pomagasz innym uwierzyć, że zmiana jest możliwa.', unhealthy: 'Możesz rozpraszać się, obiecywać więcej, niż masz zasobów, i uciekać od nudy lub ograniczeń.', career: 'Kreatywność, media, marketing, design, edukacja, przedsiębiorczość, kultura i praca projektowa.', relationships: 'Zaleta: spontaniczność, akceptacja i emocjonalna hojność. Wyzwanie: przewidywalność i dotrzymywanie małych obietnic.', work: 'Zaleta: pomysły, networking i entuzjazm. Wyzwanie: priorytety, rutyna i kończenie tego, co już nie jest nowe.' },
  ISTJ: { name: 'Inspektor', summary: 'Odpowiedzialność, praktyczne myślenie i szacunek do rozwiązań, które sprawdzają się w realnym świecie.', healthy: 'Budujesz zaufanie przez konsekwencję, pamiętasz o szczegółach i dowozisz to, co zostało ustalone.', unhealthy: 'Możesz kurczowo trzymać się procedur, zbyt szybko odrzucać nowości i brać odstępstwa za brak szacunku.', career: 'Finanse, administracja, prawo, kontrola jakości, logistyka, inżynieria i zarządzanie operacyjne.', relationships: 'Zaleta: niezawodność, troska praktyczna i lojalność. Wyzwanie: elastyczność wobec spontanicznych potrzeb bliskich.', work: 'Zaleta: dokładność, terminowość i stabilność. Wyzwanie: eksperymentowanie i komunikowanie uczuć w zespole.' },
  ISFJ: { name: 'Opiekun', summary: 'Uważność na potrzeby innych, solidność i cicha konsekwencja w tworzeniu bezpiecznego otoczenia.', healthy: 'Pamiętasz o ludziach, tworzysz rytuały bezpieczeństwa i pomagasz bez robienia z tego przedstawienia.', unhealthy: 'Możesz przeciążać się obowiązkami, unikać odmowy i gromadzić żal, gdy inni nie odwzajemniają troski.', career: 'Opieka, medycyna, edukacja, administracja, HR, organizacja wydarzeń i obsługa klienta.', relationships: 'Zaleta: ciepło, pamięć o szczegółach i stałość. Wyzwanie: proś o pomoc i mów o frustracji wcześniej.', work: 'Zaleta: współpraca, odpowiedzialność i dbałość o jakość. Wyzwanie: zmiany, autopromocja i obrona własnych granic.' },
  ESTJ: { name: 'Organizator', summary: 'Decyzyjność, konkret i umiejętność zamiany planu w sprawnie działający system.', healthy: 'Porządkujesz chaos, jasno określasz oczekiwania i bierzesz odpowiedzialność za wspólny wynik.', unhealthy: 'Możesz być zbyt apodyktyczny, oceniać ludzi przez produktywność i nie dawać miejsca na odmienny styl.', career: 'Operacje, zarządzanie, finanse, sprzedaż, administracja, logistyka i przedsiębiorczość.', relationships: 'Zaleta: stabilność, szczerość i praktyczna pomoc. Wyzwanie: pytaj, zanim wydasz instrukcję.', work: 'Zaleta: wykonanie, jasność i organizacja. Wyzwanie: tolerancja dla procesu, emocji i niepełnych danych.' },
  ESFJ: { name: 'Gospodarz', summary: 'Troska o relacje, praktyczna pomoc i talent do tworzenia atmosfery, w której ludzie czują się zauważeni.', healthy: 'Łączysz ludzi, pamiętasz o potrzebach grupy i dbasz, by współpraca była ludzka oraz konkretna.', unhealthy: 'Możesz uzależniać decyzje od aprobaty, brać dystans osobiście i wywierać presję społeczną.', career: 'Edukacja, medycyna, HR, eventy, sprzedaż, hospitality, obsługa klienta i komunikacja.', relationships: 'Zaleta: ciepło, dostępność i umiejętność świętowania innych. Wyzwanie: szanuj różne sposoby okazywania uczuć.', work: 'Zaleta: koordynacja i morale zespołu. Wyzwanie: krytyka, konflikty i decyzje niepopularne, ale potrzebne.' },
  ISTP: { name: 'Rzemieślnik', summary: 'Spokój w działaniu, pragmatyzm i satysfakcja z rozwiązywania problemów własnymi rękami.', healthy: 'Zachowujesz zimną krew, szybko diagnozujesz problem i testujesz rozwiązanie bez zbędnej teorii.', unhealthy: 'Możesz odcinać się od emocji, działać impulsywnie i znikać, gdy relacja wymaga rozmowy.', career: 'Inżynieria, technika, IT, mechanika, bezpieczeństwo, analiza awarii i praca terenowa.', relationships: 'Zaleta: niezależność, spokój i pomoc w kryzysie. Wyzwanie: komunikuj zaangażowanie słowami, nie tylko działaniem.', work: 'Zaleta: praktyka, elastyczność i rozwiązywanie awarii. Wyzwanie: długie planowanie i praca z nadmiarem spotkań.' },
  ISFP: { name: 'Artysta', summary: 'Wrażliwość na szczegóły, potrzeba wolności i autentyczny sposób wyrażania tego, co ważne.', healthy: 'Tworzysz piękno, reagujesz uważnie na otoczenie i pozwalasz innym być sobą.', unhealthy: 'Możesz wycofywać się bez słowa, brać ograniczenia jako atak i odkładać trudne decyzje.', career: 'Sztuka, fotografia, moda, projektowanie, rzemiosło, praca z naturą i pomoc indywidualna.', relationships: 'Zaleta: delikatność, obecność i brak osądzania. Wyzwanie: nazwij konflikt, zanim zamieni się w dystans.', work: 'Zaleta: estetyka, empatia i adaptacja. Wyzwanie: terminy, formalne zasady i prezentowanie własnych osiągnięć.' },
  ESTP: { name: 'Działacz', summary: 'Szybka reakcja, odwaga w próbowaniu i energia, która najlepiej działa w kontakcie z rzeczywistością.', healthy: 'Czytasz sytuację na bieżąco, podejmujesz ryzyko świadomie i potrafisz porwać ludzi do działania.', unhealthy: 'Możesz szukać adrenaliny, ignorować konsekwencje i traktować ostrożność jak słabość.', career: 'Sprzedaż, negocjacje, sport, przedsiębiorczość, eventy, media i role kryzysowe.', relationships: 'Zaleta: energia, szczerość i umiejętność rozładowania napięcia. Wyzwanie: nie uciekaj od rozmów o przyszłości.', work: 'Zaleta: działanie pod presją i szybkie decyzje. Wyzwanie: dokumentacja, konsekwencje oraz cierpliwość.' },
  ESFP: { name: 'Animator', summary: 'Obecność, spontaniczność i umiejętność wnoszenia lekkości oraz koloru do wspólnych doświadczeń.', healthy: 'Zauważasz ludzi, tworzysz atmosferę i odważnie czerpiesz z chwili bez udawania kogoś innego.', unhealthy: 'Możesz unikać ciszy, decyzji i trudnych emocji, przykrywając je aktywnością lub humorem.', career: 'Wydarzenia, media, sprzedaż, sztuka, edukacja, turystyka i praca z publicznością.', relationships: 'Zaleta: ciepło, hojność i radość bycia razem. Wyzwanie: zostań przy drugiej osobie także w cięższym momencie.', work: 'Zaleta: energia, kontakt z klientem i elastyczność. Wyzwanie: monotonia, budżet i praca bez natychmiastowej nagrody.' }
};

const roleGroups = {
  INTJ: { label: 'Analitycy', className: 'group-analysts', role: 'Architekt systemów', description: 'Projektujesz rozwiązania, które łączą dalekosiężną wizję z precyzją.', avatar: 'AX', scene: 'city' },
  INTP: { label: 'Analitycy', className: 'group-analysts', role: 'Laboratorium idei', description: 'Najlepiej działasz tam, gdzie pytania są ważniejsze niż gotowe odpowiedzi.', avatar: 'IQ', scene: 'city' },
  ENTJ: { label: 'Analitycy', className: 'group-analysts', role: 'Strateg operacji', description: 'Widzisz planszę z góry i potrafisz nadać ludziom wspólny kierunek.', avatar: 'CX', scene: 'city' },
  ENTP: { label: 'Analitycy', className: 'group-analysts', role: 'Łowca możliwości', description: 'Łączysz odległe pomysły i znajdujesz przejścia tam, gdzie inni widzą ścianę.', avatar: 'NX', scene: 'city' },
  INFJ: { label: 'Dyplomaci', className: 'group-diplomats', role: 'Kartograf sensu', description: 'Pomagasz ludziom zobaczyć kierunek, który wcześniej był tylko przeczuciem.', avatar: 'SV', scene: 'nature' },
  INFP: { label: 'Dyplomaci', className: 'group-diplomats', role: 'Opiekun wartości', description: 'Chronisz to, co autentyczne, i nadajesz pomysłom osobisty rytm.', avatar: 'EL', scene: 'nature' },
  ENFJ: { label: 'Dyplomaci', className: 'group-diplomats', role: 'Budowniczy wspólnot', description: 'Wydobywasz z ludzi potencjał i tworzysz przestrzeń do współpracy.', avatar: 'JM', scene: 'nature' },
  ENFP: { label: 'Dyplomaci', className: 'group-diplomats', role: 'Inspirator zmian', description: 'Rozpalasz ciekawość i widzisz przyszłość jako zbiór realnych możliwości.', avatar: 'OP', scene: 'nature' },
  ISTJ: { label: 'Strażnicy', className: 'group-sentinels', role: 'Gwarant jakości', description: 'Budujesz stabilność dzięki konsekwencji, pamięci do szczegółów i rzetelności.', avatar: 'RK', scene: 'city' },
  ISFJ: { label: 'Strażnicy', className: 'group-sentinels', role: 'Opiekun zespołu', description: 'Zauważasz potrzeby, o których inni jeszcze nie zdążyli powiedzieć.', avatar: 'MA', scene: 'nature' },
  ESTJ: { label: 'Strażnicy', className: 'group-sentinels', role: 'Dowódca wykonania', description: 'Zamieniasz plan w rytm pracy, na którym inni mogą polegać.', avatar: 'VT', scene: 'city' },
  ESFJ: { label: 'Strażnicy', className: 'group-sentinels', role: 'Gospodarz relacji', description: 'Łączysz porządek z troską i sprawiasz, że ludzie czują się częścią całości.', avatar: 'LA', scene: 'nature' },
  ISTP: { label: 'Adventurers', className: 'group-adventurers', role: 'Operator terenu', description: 'Najlepiej reagujesz w ruchu, kiedy można sprawdzić rozwiązanie w praktyce.', avatar: 'ZX', scene: 'nature' },
  ISFP: { label: 'Adventurers', className: 'group-adventurers', role: 'Twórca atmosfery', description: 'Dostrzegasz faktury, nastroje i detale, które nadają doświadczeniu charakter.', avatar: 'YU', scene: 'nature' },
  ESTP: { label: 'Adventurers', className: 'group-adventurers', role: 'Inicjator akcji', description: 'Wchodzisz w sytuację z odwagą i szybko wyczuwasz, co zadziała teraz.', avatar: 'JR', scene: 'city' },
  ESFP: { label: 'Adventurers', className: 'group-adventurers', role: 'Reżyser doświadczeń', description: 'Tworzysz energię, która pozwala ludziom być razem naprawdę, nie tylko formalnie.', avatar: 'KO', scene: 'city' }
};

const avatarSymbols = {
  INTJ: '<>', INTP: '?', ENTJ: 'GO', ENTP: 'NEW',
  INFJ: 'MAP', INFP: 'ART', ENFJ: 'LINK', ENFP: 'SPARK',
  ISTJ: 'OK', ISFJ: 'CARE', ESTJ: 'OPS', ESFJ: 'TEAM',
  ISTP: 'FIX', ISFP: 'FORM', ESTP: 'NOW', ESFP: 'PLAY'
};

const groupScenes = {
  'group-analysts': 'lab',
  'group-adventurers': 'yard',
  'group-diplomats': 'room',
  'group-sentinels': 'garden'
};

const avatarTraits = {
  INTJ: { tool: 'LAPTOP', shape: 'laptop', mood: 'focused' }, INTP: { tool: 'BOOK', shape: 'book', mood: 'curious' }, ENTJ: { tool: 'KEYS', shape: 'keys', mood: 'firm' }, ENTP: { tool: 'MARKER', shape: 'marker', mood: 'playful' },
  INFJ: { tool: 'COMPASS', shape: 'compass', mood: 'calm' }, INFP: { tool: 'PENCIL', shape: 'pencil', mood: 'soft' }, ENFJ: { tool: 'PHONE', shape: 'phone', mood: 'warm' }, ENFP: { tool: 'CAMERA', shape: 'camera', mood: 'bright' },
  ISTJ: { tool: 'CHECKLIST', shape: 'checklist', mood: 'steady' }, ISFJ: { tool: 'MUG', shape: 'mug', mood: 'kind' }, ESTJ: { tool: 'CLIPBOARD', shape: 'clipboard', mood: 'firm' }, ESFJ: { tool: 'TOTE BAG', shape: 'bag', mood: 'warm' },
  ISTP: { tool: 'WRENCH', shape: 'wrench', mood: 'alert' }, ISFP: { tool: 'HEADPHONES', shape: 'headphones', mood: 'dreamy' }, ESTP: { tool: 'WATCH', shape: 'watch', mood: 'bold' }, ESFP: { tool: 'MICROPHONE', shape: 'microphone', mood: 'joyful' }
};

let current = 0;
let answers = [];
const screens = document.querySelectorAll('[data-screen]');
const show = (name) => screens.forEach((screen) => screen.classList.toggle('hidden', screen.dataset.screen !== name));
const question = document.querySelector('[data-question]');
const currentLabel = document.querySelector('[data-current]');
const progress = document.querySelector('[data-progress]');
document.querySelector('[data-total]').textContent = questions.length;

function renderQuestion() {
  const item = questions[current];
  question.textContent = item.text;
  currentLabel.textContent = String(current + 1).padStart(2, '0');
  document.querySelector('[data-question-number]').textContent = `PYTANIE ${String(current + 1).padStart(2, '0')}`;
  progress.style.width = `${((current + 1) / questions.length) * 100}%`;
}

function calculateType() {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0, A: 0, Turbulent: 0 };
  const opposite = { E: 'I', I: 'E', S: 'N', N: 'S', T: 'F', F: 'T', J: 'P', P: 'J', A: 'Turbulent', Turbulent: 'A' };
  questions.forEach((item, index) => {
    const positiveScore = answers[index] ?? 2;
    scores[item.positive] += positiveScore;
    scores[opposite[item.positive]] += 4 - positiveScore;
  });
  const type = `${scores.E >= scores.I ? 'E' : 'I'}${scores.S >= scores.N ? 'S' : 'N'}${scores.T >= scores.F ? 'T' : 'F'}${scores.J >= scores.P ? 'J' : 'P'}`;
  const subtype = scores.A >= scores.Turbulent ? 'A' : 'T';
  return { type, subtype, scores };
}

function renderResult() {
  const { type, subtype, scores } = calculateType();
  const profile = profiles[type];
  const roleGroup = roleGroups[type];
  const { name, summary, description, healthy, unhealthy, career, relationships, work } = {
    ...profile,
    description: profile.summary
  };
  const subtypeName = subtype === 'A' ? 'Assertive' : 'Turbulent';
  const subtypeDescription = subtype === 'A'
    ? 'Zwykle zachowujesz spokój i zaufanie do siebie, nawet gdy sytuacja robi się wymagająca.'
    : 'Mocno zauważasz napięcia i szczegóły sytuacji, co pomaga Ci reagować uważnie i rozwijać się.';
  document.querySelector('[data-type]').textContent = type;
  document.querySelector('[data-summary]').textContent = name;
  document.querySelector('[data-description]').textContent = description;
  document.querySelector('[data-subtype-letter]').textContent = subtype;
  document.querySelector('[data-subtype-name]').textContent = subtypeName;
  document.querySelector('[data-subtype-description]').textContent = subtypeDescription;
  const roleStage = document.querySelector('[data-role-stage]');
  roleStage.className = `role-stage ${roleGroup.className} scene-${groupScenes[roleGroup.className]} type-${type}`;
  document.querySelector('[data-role-avatar]').textContent = roleGroup.avatar;
  document.querySelector('[data-role-prop]').textContent = avatarSymbols[type];
  const tool = document.querySelector('[data-role-tool]');
  tool.textContent = avatarTraits[type].tool;
  tool.className = `avatar-tool tool-${avatarTraits[type].shape}`;
  roleStage.dataset.mood = avatarTraits[type].mood;
  document.querySelector('[data-role-group]').textContent = roleGroup.label;
  document.querySelector('[data-role-title]').textContent = roleGroup.role;
  document.querySelector('[data-role-description]').textContent = roleGroup.description;
  const pairs = [['E', 'I'], ['S', 'N'], ['T', 'F'], ['J', 'P']];
    const scaleMarkup = pairs.map(([left, right]) => {
    const total = scores[left] + scores[right] || 1;
    const leftPercent = Math.round((scores[left] / total) * 100);
    const rightPercent = 100 - leftPercent;
    return `<div class="scale-row"><span>${left} <b>${leftPercent}%</b></span><div class="scale-line"><i class="scale-marker" style="left: ${rightPercent}%"></i></div><span>${right} <b>${rightPercent}%</b></span></div>`;
    }).join('');
    const subtypeTotal = scores.A + scores.Turbulent || 1;
    const assertivePercent = Math.round((scores.A / subtypeTotal) * 100);
    const turbulentPercent = 100 - assertivePercent;
    document.querySelector('[data-scales]').innerHTML = `${scaleMarkup}<div class="scale-row subtype-scale"><span>A <b>${assertivePercent}%</b></span><div class="scale-line"><i class="scale-marker" style="left: ${turbulentPercent}%"></i></div><span>T <b>${turbulentPercent}%</b></span></div>`;
    document.querySelector('[data-profile-panels]').innerHTML = [
      ['Zdrowa wersja', healthy, 'detail-panel-lime'],
      ['Niezdrowa wersja', unhealthy, 'detail-panel-coral'],
      ['Ścieżka kariery', career, 'detail-panel-dark'],
      ['Relacje z ludźmi', relationships, 'detail-panel-light'],
      ['W pracy', work, 'detail-panel-light']
    ].map(([title, text, tone]) => `<article class="detail-panel ${tone}"><p class="detail-label">${title}</p><p>${text}</p></article>`).join('');
  show('result');
}

document.querySelector('[data-action="start"]').addEventListener('click', () => { current = 0; answers = []; renderQuestion(); show('quiz'); });
document.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => {
  answers[current] = Number(button.dataset.answer);
  if (current < questions.length - 1) { current += 1; renderQuestion(); } else renderResult();
}));
document.querySelectorAll('[data-action="reset"], [data-action="restart"]').forEach((button) => button.addEventListener('click', () => { current = 0; answers = []; show(button.dataset.action === 'restart' ? 'quiz' : 'intro'); if (button.dataset.action === 'restart') renderQuestion(); }));
document.querySelector('[data-action="print"]').addEventListener('click', () => window.print());
