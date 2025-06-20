import { describe, it, expect } from 'vitest';
import { determineAttachmentStyle } from './determineAttachmentStyle';

describe('determineAttachmentStyle', () => {
  // 1. 安定型 (優勢)
  it('should return "安定型" for dominant stable scores', () => {
    expect(determineAttachmentStyle(15, 5, 4)).toBe('安定型');
    expect(determineAttachmentStyle(10, 5, 5)).toBe('安定型');
  });

  // 2. 安定一不安型
  it('should return "安定一不安型" when stable is high but also anxious', () => {
    // 安定型(優勢)の条件(A-C>=5)を満たさない
    expect(determineAttachmentStyle(12, 9, 8)).toBe('安定一不安型');
  });

  // 3. 安定一回避型
  it('should return "安定一回避型" when stable is high but also avoidant', () => {
    // 安定型(優勢)の条件(A-B>=5)を満たさず、
    // 安定一不安型(A>B)の条件も満たさない
    expect(determineAttachmentStyle(12, 8, 9)).toBe('安定一回避型');
  });

    // 2. 安定一不安型
    it('should return "安定一不安型" when stable is high but also anxious', () => {
        // 安定型(優勢)の条件(A-C>=5)を満たさない
        expect(determineAttachmentStyle(12, 9, 9)).toBe('安定一不安一回避型');
    });

  // 4. 恐れ一回避型
  it('should return "恐れ一回避型" for fearful-avoidant scores', () => {
    expect(determineAttachmentStyle(4, 10, 10)).toBe('恐れ一回避型');
    expect(determineAttachmentStyle(0, 15, 16)).toBe('恐れ一回避型');
  });

  // 5. 不安型 (優勢)
  it('should return "不安型" for dominant anxious scores', () => {
    // 恐れ一回避型(C>=10)の条件を満たさない
    expect(determineAttachmentStyle(4, 15, 9)).toBe('不安型');
  });

  // 6. 回避型 (優勢)
  it('should return "回避型" for dominant avoidant scores', () => {
    // 恐れ一回避型(B>=10)の条件を満たさない
    expect(determineAttachmentStyle(4, 9, 15)).toBe('回避型');
  });

  // 7. 不安—安定型
  it('should return "不安—安定型" for anxious-stable mix', () => {
    // 上記のどの条件も満たさない
    expect(determineAttachmentStyle(8, 9, 4)).toBe('不安—安定型');
  });

  // 8. 回避一安定型
  it('should return "回避一安定型" for avoidant-stable mix', () => {
    // 上記のどの条件も満たさない
    expect(determineAttachmentStyle(8, 4, 9)).toBe('回避一安定型');
  });

  // --- デフォルトケース ---
  describe('default cases based on max value', () => {
    it('should return "安定型" when A is max and no other rule applies', () => {
      expect(determineAttachmentStyle(9, 4, 3)).toBe('安定型');
    });

    it('should return "不安型" when B is max and no other rule applies', () => {
      expect(determineAttachmentStyle(4, 9, 3)).toBe('不安型');
    });

    it('should return "回避型" when C is max and no other rule applies', () => {
      expect(determineAttachmentStyle(3, 4, 9)).toBe('回避型');
    });

    it('should return "安定型" as a final fallback when scores are equal', () => {
      expect(determineAttachmentStyle(4, 4, 4)).toBe('安定型');
    });
  });
}); 