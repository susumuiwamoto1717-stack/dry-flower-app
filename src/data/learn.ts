export interface LearnSection {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  tips: string[];
  imageGradient: string;
}

export const learnSections: LearnSection[] = [
  {
    id: "what",
    title: "ドライフラワーとは？",
    subtitle: "生花を乾燥させた、長く楽しめるお花",
    content:
      "ドライフラワーは、生花を自然乾燥やシリカゲルなどで乾燥させたお花です。水やりが不要で、数ヶ月〜数年にわたって美しさを楽しめます。くすんだアンティークカラーが生花にはない独特の魅力です。",
    tips: [
      "水やり不要で手軽に楽しめる",
      "数ヶ月〜1年以上飾れる",
      "独特のアンティーク感が魅力",
      "インテリアとして人気急上昇中",
    ],
    imageGradient: "linear-gradient(135deg, #E8DDD3, #C5D1C5, #FAF6F1)",
  },
  {
    id: "difference",
    title: "生花との違いは？",
    subtitle: "それぞれのよさを知って選ぼう",
    content:
      "生花はみずみずしさと香りが魅力。一方ドライフラワーは、手入れの手軽さと長持ちする点が強み。アレルギーが気になる方や、忙しい方にもおすすめです。",
    tips: [
      "生花：みずみずしい、香りが強い、1〜2週間",
      "ドライ：手入れ不要、長持ち、アンティーク調",
      "プリザーブド：色鮮やか、やや高価、数年持つ",
      "用途に応じて使い分けるのがベスト",
    ],
    imageGradient: "linear-gradient(135deg, #D4A5A5, #E8DDD3, #C5D1C5)",
  },
  {
    id: "care",
    title: "お手入れのコツ",
    subtitle: "長く美しく楽しむために",
    content:
      "ドライフラワーは基本的にお手入れ不要ですが、いくつかのポイントを押さえると長持ちします。直射日光と湿気を避け、定期的にほこりを払うだけでOK。",
    tips: [
      "直射日光を避ける（色あせ防止）",
      "湿気の多い場所を避ける（カビ防止）",
      "ほこりはドライヤーの冷風でやさしく飛ばす",
      "ヘアスプレーを軽くかけると崩れにくくなる",
    ],
    imageGradient: "linear-gradient(135deg, #A8B5A0, #E8DDD3, #FAF6F1)",
  },
  {
    id: "how",
    title: "飾り方のバリエーション",
    subtitle: "花瓶だけじゃない、色々な楽しみ方",
    content:
      "ドライフラワーの楽しみ方は花瓶に飾るだけではありません。スワッグ（壁掛け花束）、リース、ガーランドなど、多彩なアレンジが可能です。",
    tips: [
      "スワッグ：束ねて逆さに吊るすだけ、簡単おしゃれ",
      "リース：玄関やドアに。季節のアクセント",
      "ガーランド：紐に通して壁を飾る",
      "フレーム：額縁に入れてアートのように",
    ],
    imageGradient: "linear-gradient(135deg, #F5E6B8, #E8C4C4, #E8DDD3)",
  },
];
