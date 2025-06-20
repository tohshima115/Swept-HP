export type ScoreType = 'A' | 'B' | 'C' | null;
export type ChoicePosition = 'left' | 'center' | 'right';

export interface Choice {
  label: string;
  score: ScoreType;
  position: ChoicePosition;
}

export interface Question {
  id: number;
  question: string;
  choices: Choice[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: '積極的に新しいことをしたり、新しい場所に出かけたり、新しい人に会ったりする方ですか。',
    choices: [
      { label: 'はい', score: 'A', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 2,
    question: '誰とでもすぐに打ち解けたり、くつろげる方ですか。',
    choices: [
      { label: 'はい', score: 'A', position: 'left' },
      { label: 'いいえ', score: 'C', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 3,
    question: 'もし困ったことがあっても、どうにかなると楽観的に考える方ですか。',
    choices: [
      { label: 'はい', score: 'A', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 4,
    question: '親しい友人や知人のことを心から信頼する方ですか。',
    choices: [
      { label: 'はい', score: 'A', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 5,
    question: '人を責めたり、攻撃的になりやすいところがありますか。',
    choices: [
      { label: 'いいえ', score: 'A', position: 'right' },
      { label: 'はい', score: null, position: 'left' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 6,
    question: '今まで経験のないことをするとき、不安を感じやすい方ですか。',
    choices: [
      { label: 'いいえ', score: 'A', position: 'right' },
      { label: 'はい', score: null, position: 'left' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 7,
    question: 'あなたの親(養育者)は、あなたに対して冷淡なところがありましたか。',
    choices: [
      { label: 'いいえ', score: 'A', position: 'right' },
      { label: 'はい', score: null, position: 'left' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 8,
    question: '人はいざというとき、裏切ったり、当てにならなかったりするものだと思いますか。',
    choices: [
      { label: 'いいえ', score: 'A', position: 'right' },
      { label: 'はい', score: null, position: 'left' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 9,
    question: 'あなたの親(養育者)は、あなたを評価してくれるよりも、批判的ですか。',
    choices: [
      { label: 'いいえ', score: 'A', position: 'right' },
      { label: 'はい', score: null, position: 'left' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 10,
    question: '子どものころの思い出は、楽しいことの方が多いですか。',
    choices: [
      { label: 'はい', score: 'A', position: 'left' },
      { label: 'いいえ', score: 'B', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 11,
    question: 'あなたの親(養育者)に対して、とても感謝していますか。',
    choices: [
      { label: 'はい', score: 'A', position: 'left' },
      { label: 'いいえ', score: 'B', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 12,
    question: 'つらいことがあったとき、親や家族のことを思い出すと、気持ちが落ち着きますか。',
    choices: [
      { label: 'はい', score: 'A', position: 'left' },
      { label: 'いいえ', score: 'B', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 13,
    question: 'そばにいなくなっても、一人の人のことを長く思い続ける方ですか。それとも、次の人をすぐ求めてしまう方ですか。',
    choices: [
      { label: '一人のことを\n思い続ける', score: 'A', position: 'left' },
      { label: '次の人を\n求めてしまう', score: 'B', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 14,
    question: '好き嫌いが激しい方ですか。',
    choices: [
      { label: 'はい', score: 'B', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 15,
    question: 'とてもいい人だと思っていたのに、幻滅したり、嫌いになったりすることがありますか。',
    choices: [
      { label: 'よくある', score: 'B', position: 'left' },
      { label: 'あまりない', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 16,
    question: 'よくイライラしたり、落ち込んだりする方ですか。',
    choices: [
      { label: 'よくある', score: 'B', position: 'left' },
      { label: 'あまりない', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 17,
    question: '自分にはあまり取り柄がないと思うことがありますか。',
    choices: [
      { label: 'よくある', score: 'B', position: 'left' },
      { label: 'あまりない', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 18,
    question: '拒絶されるのではないかと、不安になることがありますか。',
    choices: [
      { label: 'よくある', score: 'B', position: 'left' },
      { label: 'あまりない', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 19,
    question: '良いところより、悪いところの方が気になってしまいますか。',
    choices: [
      { label: 'はい', score: 'B', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 20,
    question: '自分に自信がある方ですか。',
    choices: [
      { label: 'はい', score: null, position: 'left' },
      { label: 'いいえ', score: 'B', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 21,
    question: '人に頼らずに、決断したり行動したりできる方ですか。',
    choices: [
      { label: 'はい', score: null, position: 'left' },
      { label: 'いいえ', score: 'B', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 22,
    question: '自分はあまり人から愛されない存在だと思いますか。',
    choices: [
      { label: 'はい', score: 'B', position: 'left' },
      { label: 'いいえ', score: 'A', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 23,
    question: '何か嫌なことがあると、引きずってしまう方ですか。',
    choices: [
      { label: 'はい', score: 'B', position: 'left' },
      { label: 'いいえ', score: 'A', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 24,
    question: 'あなたの親(養育者)から、よく傷つけられるようなことをされましたか。',
    choices: [
      { label: 'はい', score: 'B', position: 'left' },
      { label: 'いいえ', score: 'A', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 25,
    question: 'あなたの親(養育者)に対して、怒りや恨みを感じることがありますか。',
    choices: [
      { label: 'はい', score: 'B', position: 'left' },
      { label: 'いいえ', score: 'A', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 26,
    question: 'つらいときに、身近な人に接触を求める方ですか。それとも、つらいときほど、接触を求めようとしなくなる方ですか。',
    choices: [
      { label: '接触を求める', score: null, position: 'left' },
      { label: '接触を求めない', score: 'C', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 27,
    question: '親しい対人関係は、あなたにとって重要ですか。',
    choices: [
      { label: 'とても重要である', score: null, position: 'left' },
      { label: 'それほど重要でない', score: 'C', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 28,
    question: 'いつも冷静でクールな方ですか',
    choices: [
      { label: 'はい', score: 'C', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 29,
    question: 'べたべたした付き合いは、苦手ですか',
    choices: [
      { label: 'はい', score: 'C', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 30,
    question: '関わりのあった人と別れても、すぐ忘れる方ですか',
    choices: [
      { label: 'はい', score: 'C', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 31,
    question: '人付き合いより、自分の世界が大切ですか。',
    choices: [
      { label: 'はい', score: 'C', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 32,
    question: '自分の力だけが頼りだと思いますか。',
    choices: [
      { label: 'はい', score: 'C', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 33,
    question: '昔のことは懐かしいですか。',
    choices: [
      { label: 'はい', score: null, position: 'left' },
      { label: 'いいえ', score: 'C', position: 'right' },
      { label: '中立', score: 'C', position: 'center' }
    ]
  },
  {
    id: 34,
    question: 'あまり感情を表情に出さない方ですか。',
    choices: [
      { label: 'はい', score: 'C', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 35,
    question: '恋人や配偶者にも、プライバシーは冒されたくないですか。',
    choices: [
      { label: 'はい', score: 'C', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 36,
    question: '親しい人と肌が触れ合ったり、抱擁したりするスキンシップをとることを好みますか。それとも、あまり好みませんか。',
    choices: [
      { label: '好む方だ', score: null, position: 'left' },
      { label: 'あまり好まない', score: 'C', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 37,
    question: '幼いころのことをよく覚えている方ですか。それとも、あまり記憶がない方ですか。',
    choices: [
      { label: 'よく覚えている', score: null, position: 'left' },
      { label: 'あまり記憶がない', score: 'C', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 38,
    question: '親しい人といるときにも、気を遣ってしまう方ですか。',
    choices: [
      { label: 'はい', score: 'B', position: 'left' },
      { label: 'いいえ', score: 'A', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 39,
    question: '困っているとき、他人は親切に助けてくれるものだと思いますか。',
    choices: [
      { label: 'はい', score: 'A', position: 'left' },
      { label: 'いいえ', score: 'C', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 40,
    question: '他人の善意に気軽にすがる方ですか。',
    choices: [
      { label: 'はい', score: 'A', position: 'left' },
      { label: 'いいえ', score: 'C', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 41,
    question: '失敗を恐れて、チャレンジを避けてしまうことがありますか。',
    choices: [
      { label: 'はい', score: 'C', position: 'left' },
      { label: 'いいえ', score: null, position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 42,
    question: '人と別れるとき、とても悲しく感じたり、動揺する方ですか。',
    choices: [
      { label: 'はい', score: 'B', position: 'left' },
      { label: 'いいえ', score: 'C', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 43,
    question: '他人に煩わされず、一人で自由に生きていくのが好きですか。',
    choices: [
      { label: 'はい', score: 'C', position: 'left' },
      { label: 'いいえ', score: 'B', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 44,
    question: 'あなたにとって、仕事や学業と、恋愛や対人関係のどちらが重要ですか。',
    choices: [
      { label: '仕事や学業', score: 'C', position: 'left' },
      { label: '恋愛や対人関係', score: 'B', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  },
  {
    id: 45,
    question: 'あなたが傷ついたり、落ち込んでいるとき、他の人になぐさめてもらったり、話を聞いてもらうことは、どれくらい大事ですか。',
    choices: [
      { label: 'とても重要である', score: null, position: 'left' },
      { label: 'あまり重要でない', score: 'C', position: 'right' },
      { label: '中立', score: null, position: 'center' }
    ]
  }
]; 