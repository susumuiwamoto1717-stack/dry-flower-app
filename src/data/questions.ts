import { QuizQuestion } from "./types";

export const questions: QuizQuestion[] = [
  {
    id: "q1",
    question: "どんな雰囲気が好きですか？",
    subtitle: "直感で選んでください",
    options: [
      {
        id: "natural",
        label: "ナチュラルで素朴な感じ",
        imageColor: "linear-gradient(135deg, #E8DDD3, #C5D1C5)",
        scores: { natural: 3, calm: 1 },
      },
      {
        id: "cute",
        label: "かわいらしく華やかに",
        imageColor: "linear-gradient(135deg, #E8C4C4, #D4A5A5)",
        scores: { cute: 3, bright: 1 },
      },
      {
        id: "elegant",
        label: "上品で洗練された感じ",
        imageColor: "linear-gradient(135deg, #B5AFA6, #8B7355)",
        scores: { elegant: 3, calm: 1 },
      },
      {
        id: "calm",
        label: "落ち着いてリラックスできる",
        imageColor: "linear-gradient(135deg, #A8B5A0, #C5D1C5)",
        scores: { calm: 3, natural: 1 },
      },
      {
        id: "bright",
        label: "明るく元気な感じ",
        imageColor: "linear-gradient(135deg, #F5E6B8, #E8C4C4)",
        scores: { bright: 3, cute: 1 },
      },
    ],
  },
  {
    id: "q2",
    question: "好きな色合いは？",
    subtitle: "お花の色をイメージしてみてください",
    options: [
      {
        id: "white_ivory",
        label: "ホワイト・アイボリー",
        imageColor: "linear-gradient(135deg, #FAF6F1, #E8DDD3)",
        scores: { natural: 2, elegant: 1 },
      },
      {
        id: "pink_rose",
        label: "ピンク・ローズ",
        imageColor: "linear-gradient(135deg, #E8C4C4, #D4A5A5)",
        scores: { cute: 2, bright: 1 },
      },
      {
        id: "green_herb",
        label: "グリーン・ハーブ系",
        imageColor: "linear-gradient(135deg, #C5D1C5, #A8B5A0)",
        scores: { natural: 2, calm: 1 },
      },
      {
        id: "brown_antique",
        label: "ブラウン・アンティーク",
        imageColor: "linear-gradient(135deg, #A89279, #8B7355)",
        scores: { calm: 2, elegant: 1 },
      },
      {
        id: "yellow_orange",
        label: "イエロー・オレンジ",
        imageColor: "linear-gradient(135deg, #F5E6B8, #E8C4A0)",
        scores: { bright: 2, cute: 1 },
      },
    ],
  },
  {
    id: "q3",
    question: "お花を飾りたい場所は？",
    subtitle: "メインで飾りたい場所を選んでください",
    options: [
      {
        id: "living",
        label: "リビング",
        imageColor: "linear-gradient(135deg, #E8DDD3, #FAF6F1)",
        scores: { natural: 1, bright: 1 },
      },
      {
        id: "bedroom",
        label: "寝室",
        imageColor: "linear-gradient(135deg, #C5D1C5, #E8DDD3)",
        scores: { calm: 2, natural: 1 },
      },
      {
        id: "entrance",
        label: "玄関",
        imageColor: "linear-gradient(135deg, #B5AFA6, #E8DDD3)",
        scores: { elegant: 2, natural: 1 },
      },
      {
        id: "desk",
        label: "デスク・作業スペース",
        imageColor: "linear-gradient(135deg, #A8B5A0, #C5D1C5)",
        scores: { calm: 1, natural: 1 },
      },
      {
        id: "gift",
        label: "ギフトとして贈りたい",
        imageColor: "linear-gradient(135deg, #E8C4C4, #F5E6B8)",
        scores: { cute: 1, elegant: 1, bright: 1 },
      },
    ],
  },
  {
    id: "q4",
    question: "お花がある空間でどんな気持ちになりたい？",
    subtitle: "理想の気分を教えてください",
    options: [
      {
        id: "relax",
        label: "ほっとしたい・癒されたい",
        imageColor: "linear-gradient(135deg, #C5D1C5, #E8DDD3)",
        scores: { calm: 2, natural: 1 },
      },
      {
        id: "cheerful",
        label: "気分を上げたい・元気になりたい",
        imageColor: "linear-gradient(135deg, #F5E6B8, #E8C4C4)",
        scores: { bright: 2, cute: 1 },
      },
      {
        id: "elegant_mood",
        label: "特別感を味わいたい",
        imageColor: "linear-gradient(135deg, #B5AFA6, #8B7355)",
        scores: { elegant: 2, cute: 1 },
      },
      {
        id: "nature",
        label: "自然を感じたい",
        imageColor: "linear-gradient(135deg, #A8B5A0, #C5D1C5)",
        scores: { natural: 2, calm: 1 },
      },
    ],
  },
  {
    id: "q5",
    question: "好みの香りの系統は？",
    subtitle: "お花と一緒に楽しむ香りを選びます",
    options: [
      {
        id: "floral",
        label: "フローラル系（バラ・ラベンダー）",
        imageColor: "linear-gradient(135deg, #E8C4C4, #D4A5A5)",
        scores: { cute: 1, elegant: 1 },
      },
      {
        id: "woody",
        label: "ウッディ系（ヒノキ・サンダルウッド）",
        imageColor: "linear-gradient(135deg, #A89279, #8B7355)",
        scores: { calm: 1, natural: 1 },
      },
      {
        id: "citrus",
        label: "シトラス系（レモン・ベルガモット）",
        imageColor: "linear-gradient(135deg, #F5E6B8, #E8C4A0)",
        scores: { bright: 1, natural: 1 },
      },
      {
        id: "herb",
        label: "ハーブ系（ミント・ローズマリー）",
        imageColor: "linear-gradient(135deg, #C5D1C5, #A8B5A0)",
        scores: { natural: 1, calm: 1 },
      },
      {
        id: "none",
        label: "特にこだわらない",
        imageColor: "linear-gradient(135deg, #FAF6F1, #E8DDD3)",
        scores: {},
      },
    ],
  },
];
