const questions = [
  { text: 'Po intensywnym dniu najlepiej regenerujesz się wśród ludzi.', axis: 'EI', positive: 'E' },
  { text: 'Zwykle pierwszy_a zaczynasz rozmowę z nową osobą.', axis: 'EI', positive: 'E' },
  { text: 'Lubisz, gdy wokół Ciebie dużo się dzieje.', axis: 'EI', positive: 'E' },
  { text: 'Myśli układają Ci się najlepiej, kiedy mówisz o nich na głos.', axis: 'EI', positive: 'E' },
  { text: 'Najpierw zauważasz konkretne fakty i szczegóły.', axis: 'SN', positive: 'S' },
  { text: 'Wolisz sprawdzone rozwiązania niż pełne ryzyka eksperymenty.', axis: 'SN', positive: 'S' },
  { text: 'Często wyobrażasz sobie, co mogłoby wydarzyć się dalej.', axis: 'SN', positive: 'N' },
  { text: 'Łatwo dostrzegasz ukryte połączenia między odległymi ideami.', axis: 'SN', positive: 'N' },
  { text: 'Podejmując decyzję, najpierw analizujesz jej logiczne konsekwencje.', axis: 'TF', positive: 'T' },
  { text: 'Trudno Ci odłożyć na bok emocje, gdy ktoś potrzebuje wsparcia.', axis: 'TF', positive: 'F' },
  { text: 'Spór traktujesz przede wszystkim jak problem do rozwiązania.', axis: 'TF', positive: 'T' },
  { text: 'Ważne jest dla Ciebie, aby decyzja była zgodna z Twoimi wartościami.', axis: 'TF', positive: 'F' },
  { text: 'Lubisz mieć plan i trzymać się ustalonego kierunku.', axis: 'JP', positive: 'J' },
  { text: 'Najlepiej działasz, gdy możesz zostawić sobie kilka opcji.', axis: 'JP', positive: 'P' },
  { text: 'Satysfakcję daje Ci domykanie spraw przed rozpoczęciem kolejnych.', axis: 'JP', positive: 'J' },
  { text: 'Często działasz spontanicznie, gdy pojawia się dobra okazja.', axis: 'JP', positive: 'P' }
];

const profiles = {
  INTJ: ['Architekt', 'Strategiczne myślenie, niezależność i potrzeba budowania rozwiązań, które mają sens także za kilka kroków.'],
  INTP: ['Analityk', 'Ciekawość, precyzja i przyjemność z rozkładania skomplikowanych idei na prostsze elementy.'],
  ENTJ: ['Dowódca', 'Energia do działania, klarowny kierunek i talent do porządkowania zasobów wokół ambitnego celu.'],
  ENTP: ['Odkrywca', 'Pomysłowość, elastyczność i naturalna chęć testowania, czy istnieje jeszcze lepsza droga.'],
  INFJ: ['Doradca', 'Intuicja połączona z uważnością na ludzi i potrzebą nadawania działaniom głębszego znaczenia.'],
  INFP: ['Mediator', 'Wrażliwość, autentyczność i wyobraźnia, która pomaga widzieć więcej niż samą powierzchnię sytuacji.'],
  ENFJ: ['Przewodnik', 'Łączenie ludzi, czytanie atmosfery i konsekwentne wspieranie rozwoju wspólnego pomysłu.'],
  ENFP: ['Inspirator', 'Entuzjazm, otwartość na możliwości i łatwość dostrzegania potencjału w ludziach oraz ideach.'],
  ISTJ: ['Inspektor', 'Odpowiedzialność, praktyczne myślenie i szacunek do rozwiązań, które sprawdzają się w realnym świecie.'],
  ISFJ: ['Opiekun', 'Uważność na potrzeby innych, solidność i cicha konsekwencja w tworzeniu bezpiecznego otoczenia.'],
  ESTJ: ['Organizator', 'Decyzyjność, konkret i umiejętność zamiany planu w sprawnie działający system.'],
  ESFJ: ['Gospodarz', 'Troska o relacje, praktyczna pomoc i talent do tworzenia atmosfery, w której ludzie czują się zauważeni.'],
  ISTP: ['Rzemieślnik', 'Spokój w działaniu, pragmatyzm i satysfakcja z rozwiązywania problemów własnymi rękami.'],
  ISFP: ['Artysta', 'Wrażliwość na szczegóły, potrzeba wolności i autentyczny sposób wyrażania tego, co ważne.'],
  ESTP: ['Działacz', 'Szybka reakcja, odwaga w próbowaniu i energia, która najlepiej działa w kontakcie z rzeczywistością.'],
  ESFP: ['Animator', 'Obecność, spontaniczność i umiejętność wnoszenia lekkości oraz koloru do wspólnych doświadczeń.']
};

let current = 0;
let answers = [];
const screens = document.querySelectorAll('[data-screen]');
const show = (name) => screens.forEach((screen) => screen.classList.toggle('hidden', screen.dataset.screen !== name));
const question = document.querySelector('[data-question]');
const currentLabel = document.querySelector('[data-current]');
const progress = document.querySelector('[data-progress]');

function renderQuestion() {
  const item = questions[current];
  question.textContent = item.text;
  currentLabel.textContent = String(current + 1).padStart(2, '0');
  document.querySelector('[data-question-number]').textContent = `PYTANIE ${String(current + 1).padStart(2, '0')}`;
  progress.style.width = `${((current + 1) / questions.length) * 100}%`;
}

function calculateType() {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  questions.forEach((item, index) => {
    const positiveScore = answers[index];
    const opposite = { E: 'I', I: 'E', S: 'N', N: 'S', T: 'F', F: 'T', J: 'P', P: 'J' };
    const strength = Math.abs(positiveScore - 2);
    scores[item.positive] += positiveScore > 2 ? strength : 0;
    scores[opposite[item.positive]] += positiveScore < 2 ? strength : 0;
  });
  const type = `${scores.E >= scores.I ? 'E' : 'I'}${scores.S >= scores.N ? 'S' : 'N'}${scores.T >= scores.F ? 'T' : 'F'}${scores.J >= scores.P ? 'J' : 'P'}`;
  return { type, scores };
}

function renderResult() {
  const { type, scores } = calculateType();
  const [name, description] = profiles[type];
  document.querySelector('[data-type]').textContent = type;
  document.querySelector('[data-summary]').textContent = name;
  document.querySelector('[data-description]').textContent = description;
  const pairs = [['E', 'I'], ['S', 'N'], ['T', 'F'], ['J', 'P']];
  document.querySelector('[data-scales]').innerHTML = pairs.map(([left, right]) => {
    const total = scores[left] + scores[right] || 1;
    const position = Math.round((scores[right] / total) * 100);
    return `<div class="scale-row"><span>${left}</span><div class="scale-line"><i class="scale-marker" style="left: ${position}%"></i></div><span>${right}</span></div>`;
  }).join('');
  show('result');
}

document.querySelector('[data-action="start"]').addEventListener('click', () => { current = 0; answers = []; renderQuestion(); show('quiz'); });
document.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => {
  answers[current] = Number(button.dataset.answer);
  if (current < questions.length - 1) { current += 1; renderQuestion(); } else renderResult();
}));
document.querySelectorAll('[data-action="reset"], [data-action="restart"]').forEach((button) => button.addEventListener('click', () => { current = 0; answers = []; show(button.dataset.action === 'restart' ? 'quiz' : 'intro'); if (button.dataset.action === 'restart') renderQuestion(); }));
document.querySelector('[data-action="print"]').addEventListener('click', () => window.print());
