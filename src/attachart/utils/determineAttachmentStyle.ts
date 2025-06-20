export type AttachmentStyle =
  | '安定型'
  | '安定一不安型'
  | '安定一回避型'
  | '安定一不安一回避型' 
  | '恐れ一回避型'
  | '不安型'
  | '回避型'
  | '不安—安定型'
  | '回避一安定型';

export const determineAttachmentStyle = (A: number, B: number, C: number): AttachmentStyle => {
  const max = Math.max(A, B, C);

  if (A >= 10 && A - B >= 5 && A - C >= 5) return '安定型';
  if (A > B && B > C && B >= 5 ) return '安定一不安型';
  if (A > C && C > B && C >= 5) return '安定一回避型';
  if (A > C && C == B && C >= 5) return '安定一不安一回避型';
  if (B >= 10 && C >= 10 && B - A >= 5 && C - A >= 5) return '恐れ一回避型';
  if (B >= 10 && B - A >= 5 && B - C >= 5) return '不安型';
  if (C >= 10 && C - A >= 5 && C - B >= 5) return '回避型';
  if (B >= A && A >= 5) return '不安—安定型';
  if (C >= A && A >= 5) return '回避一安定型';

  // デフォルト: 最大値の型
  if (max === A) return '安定型';
  if (max === B) return '不安型';
  if (max === C) return '回避型';

  return '安定型'; // Fallback
}; 