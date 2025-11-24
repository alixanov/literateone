// src/components/tasks/Tasks.jsx
import React, { useState } from "react";
import styled from "styled-components";

/* ==================== СТИЛИ ==================== */
const PageWrapper = styled.div`
  min-height: 100vh;

  padding: 4rem 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const TasksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  width: 380px;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4);
    border-color: #667eea;
  }
`;

const CardIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a202c;
  text-align: center;
  letter-spacing: -0.5px;
`;

const CardDescription = styled.p`
  font-size: 1.05rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #4a5568;
  text-align: center;
`;

const CardButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  font-size: 1.05rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 950px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
  position: relative;
  border-top: 8px solid #667eea;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #e2e8f0;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a5568;
  z-index: 10;

  &:hover {
    background: #cbd5e0;
    transform: rotate(90deg);
  }
`;

const ModalTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  margin: 1.5rem 0 2.5rem;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  transition: width 0.4s ease;
  width: ${({ progress }) => progress}%;
`;

const QuestionNumber = styled.div`
  text-align: center;
  font-size: 1.1rem;
  color: #718096;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const QuestionText = styled.h3`
  font-size: 1.4rem;
  color: #2d3748;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 600;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const OptionButton = styled.button`
  background: ${({ selected }) => (selected ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f7fafc')};
  color: ${({ selected }) => (selected ? 'white' : '#2d3748')};
  border: 2px solid ${({ selected }) => (selected ? '#667eea' : '#e2e8f0')};
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  font-size: 1.05rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    border-color: #667eea;
    background: ${({ selected }) => (selected ? 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)' : '#edf2f7')};
    transform: translateX(5px);
  }
`;

const ActionButton = styled.button`
  background: ${({ variant }) =>
    variant === 'danger' ? 'linear-gradient(135deg, #f56565 0%, #c53030 100%)' :
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${({ variant }) =>
    variant === 'danger' ? 'rgba(245, 101, 101, 0.6)' : 'rgba(102, 126, 234, 0.6)'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const ResultContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ResultScore = styled.div`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 2rem 0;
`;

const ResultText = styled.p`
  font-size: 1.3rem;
  color: #4a5568;
  margin: 1rem 0;
`;

const CrosswordGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(15, 38px);
  grid-template-rows: repeat(15, 38px);
  gap: 2px;
  margin: 2rem auto;
  justify-content: center;
  background: #e2e8f0;
  padding: 10px;
  border-radius: 12px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(15, 28px);
    grid-template-rows: repeat(15, 28px);
  }
`;

const CrosswordCell = styled.input`
  width: 38px;
  height: 38px;
  border: 2px solid ${({ $blocked, $isCorrect, $isIncorrect }) =>
    $blocked ? 'transparent' :
      $isCorrect ? '#48bb78' :
        $isIncorrect ? '#f56565' :
          '#cbd5e0'};
  background: ${({ $blocked, $isCorrect, $isIncorrect }) =>
    $blocked ? '#2d3748' :
      $isCorrect ? '#c6f6d5' :
        $isIncorrect ? '#fed7d7' :
          'white'};
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #2d3748;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
    transform: scale(1.1);
    z-index: 10;
  }

  &:disabled {
    background: ${({ $blocked }) => $blocked ? '#2d3748' : '#f7fafc'};
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }
`;

const CellNumber = styled.span`
  position: absolute;
  top: 1px;
  left: 3px;
  font-size: 0.6rem;
  font-weight: 700;
  color: #667eea;
  pointer-events: none;
  z-index: 5;
`;

const ClueSection = styled.div`
  margin: 2rem 0;
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #667eea;
`;

const ClueTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const ClueList = styled.ol`
  list-style-position: inside;
  color: #4a5568;
  line-height: 2;
`;

const ClueItem = styled.li`
  font-size: 1.05rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.2s ease;

  &:hover {
    background: white;
  }
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 1.5rem 0;
  box-shadow: 0 4px 15px rgba(72, 187, 120, 0.4);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const StageInfo = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #667eea;
  margin: 1rem 0;
  font-weight: 700;
`;

const AnswerReveal = styled.div`
  background: #edf2f7;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  border-left: 4px solid #48bb78;
`;

const AnswerTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const AnswerItem = styled.div`
  font-size: 1.05rem;
  color: #4a5568;
  padding: 0.5rem 0;
  line-height: 1.6;
  
  strong {
    color: #2d3748;
    font-weight: 700;
  }
`;

/* ==================== ДАННЫЕ ТЕСТА ==================== */
const testQuestions = [
  { question: "Mediasavodxonlik nima?", options: ["A) Kitob o'qish ko'nikmalari", "B) Media kontentni tanqidiy tahlil qilish va baholash qobiliyati", "C) Kompyuter bilan ishlash ko'nikmalari"], correct: 1 },
  { question: "Quyidagilardan qaysi biri soxta yangilik alomatiga ishora qilishi mumkin?", options: ["A) Shov-shuvli sarlavhalar va hissiy til", "B) Muallif va nashr sanasining ko'rsatilishi", "C) Manbalarga havolalar mavjudligi"], correct: 0 },
  { question: "'Faktcheking' termini nimani anglatadi?", options: ["A) Faktlarni haqiqiylikka tekshirish", "B) Yangiliklar yaratish", "C) Maqolalarni nashr qilish"], correct: 0 },
  { question: "Qaysi axborot manbai eng ishonchli?", options: ["A) Muallifsiz anonim blog", "B) Obro'si bor tasdiqlangan axborot agentligi", "C) Notanish odamdan ijtimoiy tarmoqdagi xabar"], correct: 1 },
  { question: "Ijtimoiy media kontekstida 'exo-kamera' nima?", options: ["A) Podkast yozish uchun joy", "B) Foydalanuvchilar faqat o'z e'tiqodlarini tasdiqlovchi ma'lumotlarni ko'radigan vaziyat", "C) Ovoz yozish texnologiyasi"], correct: 1 },
  { question: "Yangilik nashr sanasini nima uchun tekshirish kerak?", options: ["A) Maqola yoshini va ma'lumot dolzarbligini bilish uchun", "B) Kun vaqtini bilish uchun", "C) Bu muhim emas"], correct: 0 },
  { question: "'Deepfake' nima?", options: ["A) Suvga chuqur sho'ng'ish", "B) Sun'iy intellekt yordamida manipulyatsiya uchun yaratilgan sintetik media fayllar", "C) Ijtimoiy tarmoq nomi"], correct: 1 },
  { question: "Qaysi harakat tanqidiy fikrlashning bir qismi EMAS?", options: ["A) Axborot manbasini tahlil qilish", "B) Tekshirmasdan darhol nashr qilish", "C) Turli nuqtai nazarlarni solishtirish"], correct: 1 },
  { question: "'Virusli kontent' nimani anglatadi?", options: ["A) Virus bilan zararlangan kontent", "B) Internetda tez tarqaladigan kontent", "C) Tibbiy ma'lumot"], correct: 1 },
  { question: "Nima uchun yangiliklaridagi rasmlarni tekshirish muhim?", options: ["A) Rasmlar tahrirlangan yoki boshqa kontekstdan olingan bo'lishi mumkin", "B) Foto sifatini baholash uchun", "C) Bu majburiy emas"], correct: 0 },
  { question: "'Klikbeyt' nima?", options: ["A) Baliq ovlash usuli", "B) Kliklarni jalb qilish uchun provokatsion sarlavha", "C) Kompyuter dasturi"], correct: 1 },
  { question: "Ijtimoiy tarmoqlardagi algoritmlar qanday rol o'ynaydi?", options: ["A) Foydalanuvchilarga qanday kontentni ko'rsatishni aniqlaydi", "B) Matn terishga yordam beradi", "C) Viruslardan himoya qiladi"], correct: 0 },
  { question: "'Raqamli iz' nima?", options: ["A) Ekrandagi barmoq izi", "B) Foydalanuvchining internetdagi harakatlari haqida ma'lumot", "C) Fayl hajmi"], correct: 1 },
  { question: "Nima uchun internetda maxfiylik muhim?", options: ["A) Shaxsiy ma'lumotlarni ruxsatsiz kirishdan himoya qilish uchun", "B) Do'stlardan shaxsiyatingizni yashirish uchun", "C) Bu muhim emas"], correct: 0 },
  { question: "Agar ma'lumotning haqiqiyligiga shubha qilsangiz nima qilishingiz kerak?", options: ["A) Darhol ijtimoiy tarmoqlarda baham ko'rish", "B) Ma'lumotni bir nechta mustaqil manbalarda tekshirish", "C) Unga e'tibor bermaslik"], correct: 1 }
];
/* ==================== КРОССВОРД: ЭТАПЛАР ==================== */
const crosswordStages = [
  {
    stage: 1,
    title: "1-bosqich: Birinchi so'z",
    words: [
      {
        word: "ANALOG",
        row: 2, col: 2, dir: "h",
        clue: "To'lqinli signal, raqamli bo'lmagan (6 harf)",
        number: "1"
      }
    ]
  },
  {
    stage: 2,
    title: "2-bosqich: Ikki so'z",
    words: [
      {
        word: "AXBOROT",
        row: 2, col: 4, dir: "v",
        clue: "Ma'lumot, xabar, tushuncha (7 harf)",
        number: "2"
      },
      {
        word: "BLOG",
        row: 4, col: 4, dir: "h",
        clue: "Veb-jurnalning qisqa ko'rinishi (4 harf)",
        number: "3"
      }
    ]
  },

];


/* ==================== КОМПОНЕНТ ==================== */
const Tasks = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Кроссворд
  const [currentStage, setCurrentStage] = useState(0);
  const [crosswordInput, setCrosswordInput] = useState({});
  const [showStageAnswers, setShowStageAnswers] = useState(false);
  const [completedStages, setCompletedStages] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const openModal = (type) => {
    setActiveModal(type);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setCurrentStage(0);
    setCrosswordInput({});
    setShowStageAnswers(false);
    setCompletedStages([]);
    setIsComplete(false);
  };

  const closeModal = () => setActiveModal(null);

  /* ==================== ТЕСТ ==================== */
  const handleAnswerSelect = (index) => setSelectedAnswer(index);

  const handleNextQuestion = () => {
    if (selectedAnswer === testQuestions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  /* ==================== КРОССВОРД ==================== */
  const createCrosswordGrid = () => {
    const grid = Array(15).fill(null).map(() =>
      Array(15).fill(null).map(() => ({ type: 'blocked', letter: '', number: null, stage: -1 }))
    );

    // Добавляем только слова из пройденных этапов
    for (let i = 0; i <= currentStage; i++) {
      crosswordStages[i].words.forEach(({ word, row, col, dir, number }) => {
        word.split("").forEach((letter, idx) => {
          const r = dir === "h" ? row : row + idx;
          const c = dir === "h" ? col + idx : col;

          if (r >= 0 && r < 15 && c >= 0 && c < 15) {
            // Сохраняем номер только в первой ячейке
            const cellNumber = idx === 0 ? number : grid[r][c].number;

            grid[r][c] = {
              type: 'active',
              letter: letter,
              number: cellNumber,
              stage: i
            };
          }
        });
      });
    }

    return grid;
  };

  const crosswordGrid = createCrosswordGrid();

  const handleCrosswordChange = (row, col, value) => {
    if (showStageAnswers) return;

    const key = `${row}-${col}`;
    const newValue = value.toUpperCase().slice(-1);

    setCrosswordInput(prev => ({ ...prev, [key]: newValue }));

    // Автофокус на следующую ячейку
    if (newValue && col < 14) {
      const nextCell = document.querySelector(`input[data-row="${row}"][data-col="${col + 1}"]`);
      if (nextCell && !nextCell.disabled) {
        setTimeout(() => nextCell.focus(), 10);
      }
    }
  };

  const checkCurrentStage = () => {
    const currentWords = crosswordStages[currentStage].words;
    let allCorrect = true;

    // Проверяем каждое слово текущего этапа
    currentWords.forEach(({ word, row, col, dir }) => {
      const userWord = [];

      // Собираем введенное пользователем слово
      word.split("").forEach((letter, idx) => {
        const r = dir === "h" ? row : row + idx;
        const c = dir === "h" ? col + idx : col;
        const key = `${r}-${c}`;
        userWord.push((crosswordInput[key] || '').trim().toUpperCase());
      });

      const userWordString = userWord.join('');

      // Сравниваем с правильным словом
      if (userWordString !== word) {
        allCorrect = false;
        console.log(`Слово ${word} не совпадает. Введено: ${userWordString}`);
      }
    });

    setShowStageAnswers(true);

    if (allCorrect && !completedStages.includes(currentStage)) {
      setCompletedStages(prev => [...prev, currentStage]);
    }
  };

  const nextStage = () => {
    if (currentStage < crosswordStages.length - 1) {
      setCurrentStage(prev => prev + 1);
      setShowStageAnswers(false);
    } else {
      setIsComplete(true);
    }
  };

  const resetCrossword = () => {
    setCurrentStage(0);
    setCrosswordInput({});
    setShowStageAnswers(false);
    setCompletedStages([]);
    setIsComplete(false);
  };

  const getCellStatus = (row, col, cell) => {
    if (!showStageAnswers || cell.type !== 'active') {
      return { isCorrect: false, isIncorrect: false };
    }

    // Проверяем только ячейки текущего этапа
    if (cell.stage !== currentStage) {
      return { isCorrect: false, isIncorrect: false };
    }

    const key = `${row}-${col}`;
    const userInput = (crosswordInput[key] || '').trim().toUpperCase();
    const correctLetter = cell.letter.toUpperCase();

    const isCorrect = userInput === correctLetter;
    const isIncorrect = userInput && userInput !== correctLetter;

    return { isCorrect, isIncorrect };
  };

  const testProgress = ((currentQuestion + (showResult ? 1 : 0)) / testQuestions.length) * 100;
  const currentStageData = crosswordStages[currentStage];
  const isCurrentStageCorrect = completedStages.includes(currentStage);

  return (
    <PageWrapper>
      <TasksContainer>
        <Card>
          <CardIcon>⚖️</CardIcon>
          <CardTitle>Mediasavodxonlik testlari</CardTitle>
          <CardDescription>
            Mediasavodxonlik va axborot xavfsizligi bo'yicha 15 savolli test
          </CardDescription>
          <CardButton onClick={() => openModal('test')}>Testni boshlash</CardButton>
        </Card>

        <Card>
          <CardIcon>📋</CardIcon>
          <CardTitle>Mediasavodxonlik krossvordi</CardTitle>
          <CardDescription>
            Bosqichma-bosqich krossvordni yeching: 1-bosqich - 1 so'z, 2-bosqich - 2 so'z, 3-bosqich - 3 so'z
          </CardDescription>
          <CardButton onClick={() => openModal('crossword')}>Krossvordni ochish</CardButton>
        </Card>
      </TasksContainer>

      {/* ==================== ТЕСТ ==================== */}
      {activeModal === 'test' && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>

            {!showResult ? (
              <>
                <ModalTitle>Mediasavodxonlik testi</ModalTitle>
                <QuestionNumber>Savol {currentQuestion + 1} / {testQuestions.length}</QuestionNumber>
                <ProgressBar><ProgressFill progress={testProgress} /></ProgressBar>

                <QuestionText>{testQuestions[currentQuestion].question}</QuestionText>

                <OptionsContainer>
                  {testQuestions[currentQuestion].options.map((opt, i) => (
                    <OptionButton
                      key={i}
                      selected={selectedAnswer === i}
                      onClick={() => handleAnswerSelect(i)}
                    >
                      {opt}
                    </OptionButton>
                  ))}
                </OptionsContainer>

                <ActionButton
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                >
                  {currentQuestion < testQuestions.length - 1 ? 'Keyingi savol' : 'Testni yakunlash'}
                </ActionButton>
              </>
            ) : (
              <ResultContainer>
                <ModalTitle>Test natijalari</ModalTitle>
                <ResultScore>{score} / {testQuestions.length}</ResultScore>
                <ResultText>
                  {score >= 13 ? '🏆 A\'lo! Siz mediasavodxonlik bo\'yicha ekspertsiz!' :
                    score >= 10 ? '✅ Juda yaxshi! Siz mavzuni yaxshi bilasiz!' :
                      score >= 7 ? '👍 Yaxshi! Ishlash uchun joy bor!' :
                        '📚 Mediasavodxonlik bo\'yicha materiallarni o\'rganishni tavsiya qilamiz!'}
                </ResultText>
                <ResultText>To'g'ri javoblar foizi: {Math.round((score / testQuestions.length) * 100)}%</ResultText>
                <ActionButton onClick={restartTest}>Testni qayta topshirish</ActionButton>
              </ResultContainer>
            )}
          </ModalContent>
        </ModalOverlay>
      )}

      {/* ==================== КРОССВОРД ==================== */}
      {activeModal === 'crossword' && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalTitle>Mediasavodxonlik krossvordi</ModalTitle>

            <StageInfo>
              {currentStageData.title} ({currentStage + 1}/{crosswordStages.length})
            </StageInfo>

            {isComplete && (
              <SuccessMessage>
                🎉 Tabriklaymiz! Barcha bosqichlar muvaffaqiyatli yakunlandi! 🎉
              </SuccessMessage>
            )}

            <CrosswordGrid>
              {crosswordGrid.map((row, rowIdx) =>
                row.map((cell, colIdx) => {
                  const { isCorrect, isIncorrect } = getCellStatus(rowIdx, colIdx, cell);
                  const isDisabled = cell.type === 'blocked' || (showStageAnswers && cell.stage !== currentStage) || (cell.stage < currentStage);

                  return (
                    <div key={`${rowIdx}-${colIdx}`} style={{ position: 'relative' }}>
                      {cell.number && <CellNumber>{cell.number}</CellNumber>}
                      <CrosswordCell
                        data-row={rowIdx}
                        data-col={colIdx}
                        type="text"
                        $blocked={cell.type === 'blocked'}
                        disabled={isDisabled}
                        $isCorrect={isCorrect}
                        $isIncorrect={isIncorrect}
                        maxLength={1}
                        value={crosswordInput[`${rowIdx}-${colIdx}`] || ''}
                        onChange={(e) => handleCrosswordChange(rowIdx, colIdx, e.target.value)}
                      />
                    </div>
                  );
                })
              )}
            </CrosswordGrid>

            <ClueSection>
              <ClueTitle>📝 Savollar:</ClueTitle>
              <ClueList>
                {currentStageData.words.map((w, i) => (
                  <ClueItem key={i}>
                    <strong>{w.number}.</strong> {w.clue}
                  </ClueItem>
                ))}
              </ClueList>
            </ClueSection>

            {!showStageAnswers && !isComplete && (
              <ButtonGroup>
                <ActionButton onClick={checkCurrentStage}>
                  ✓ Javoblarni tekshirish
                </ActionButton>
              </ButtonGroup>
            )}

            {showStageAnswers && !isComplete && (
              <>
                {isCurrentStageCorrect ? (
                  <SuccessMessage>
                    ✅ To'g'ri! Barcha so'zlar to'g'ri yechildi!
                  </SuccessMessage>
                ) : (
                  <AnswerReveal>
                    <AnswerTitle>❌ Ba'zi javoblar noto'g'ri. To'g'ri javoblar:</AnswerTitle>
                    {currentStageData.words.map((w, i) => (
                      <AnswerItem key={i}>
                        {w.number}. <strong>{w.word}</strong> — {w.clue}
                      </AnswerItem>
                    ))}
                  </AnswerReveal>
                )}

                <ButtonGroup>
                  {isCurrentStageCorrect && currentStage < crosswordStages.length - 1 && (
                    <ActionButton onClick={nextStage}>
                      ➡️ Keyingi bosqich
                    </ActionButton>
                  )}
                  {isCurrentStageCorrect && currentStage === crosswordStages.length - 1 && (
                    <ActionButton onClick={() => setIsComplete(true)}>
                      🏆 Yakunlash
                    </ActionButton>
                  )}
                  <ActionButton variant="danger" onClick={resetCrossword}>
                    🔄 Qayta boshlash
                  </ActionButton>
                </ButtonGroup>
              </>
            )}

            {isComplete && (
              <ButtonGroup>
                <ActionButton variant="danger" onClick={resetCrossword}>
                  🔄 Boshidan boshlash
                </ActionButton>
              </ButtonGroup>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
};
export default Tasks;