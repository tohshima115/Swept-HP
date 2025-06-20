export const attachmentTypes = [
  { key: '安定型', label: '安定型', description: '愛着不安、愛着回避とも低く、もっとも安定したタイプ' },
  { key: '安定一不安型', label: '安定一不安型', description: '愛着不安の傾向がみられるが、全体には安定したタイプ' },
  { key: '安定一回避型', label: '安定一回避型', description: '愛着回避の傾向がみられるが、全体には安定したタイプ' },
  { key: '安定一不安一回避型', label: '安定一不安一回避型', description: '愛着不安と愛着回避の傾向がみられるが、全体には安定したタイプ' },
  { key: '不安型', label: '不安型', description: '愛着不安が強く、対人関係に敏感なタイプ' },
  { key: '不安—安定型', label: '不安—安定型', description: '愛着不安が強いが、ある程度適応力があるタイプ' },
  { key: '回避型', label: '回避型', description: '愛着回避が強く、親密な関係になりにくいタイプ' },
  { key: '回避一安定型', label: '回避一安定型', description: '愛着回避が強いが、ある程度適応力があるタイプ' },
  { key: '恐れ一回避型', label: '恐れ一回避型', description: '愛着不安、愛着回避とも強く、傷つくことに敏感で、疑り深くなりやすいタイプ' },
];

export const recommendedBooks = {
  A: { // 安定
    title: '愛着障害は何歳からでも必ず修復できる',
    url: 'https://amzn.to/3SZw08w',
  },
  B: { // 不安
    title: '不安型愛着スタイル～他人の顔色に支配される人々～ (光文社新書)',
    url: 'https://amzn.to/40cuB28',
  },
  C: { // 回避
    title: '回避性愛着障害～絆が稀薄な人たち～ (光文社新書)',
    url: 'https://amzn.to/4l8llnQ',
  },
  default: {
    title: '愛着障害～子ども時代を引きずる人々～ (光文社新書)',
    url: 'https://amzn.to/44aP6xG',
  },
}; 