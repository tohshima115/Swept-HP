import { Image } from '@/components/atoms/Image'
import { Heading1, Heading2 } from '@/components/atoms/typography'
import { Container, Typography, Box, SxProps, Theme, List, ListItem } from '@mui/material'
import ResponsiveTypography from '../atoms/ResponsiveTypography'
import TextBlock from '../molecules/TextBlock'

interface ServiceProps {
  sx?: SxProps<Theme>;
}

// 各説明文をconstでページ上部にまとめて管理
const serviceTexts = [
  'あなたが過去の経験と向き合い、自分自身や他者とのより良い関係性を築くための信頼できる最初の相談相手となり、人生をともに歩んでいきます。',
  '愛着形成の過程で困難を抱え生きづらさを感じている方々が、安心して自分と向き合い、自分自身や他者とより良い関係性を築くための一歩を踏み出せるよう、愛着問題に特化したAI対話サービスを提供します。',
  'このサービスは、単なる雑談相手や情報提供AIではありません。',
  'あなたの最初の「こころの安全基地」となることを目指し、愛着理論に基づいて設計された特別なAIです。',
];
const targetCustomerTexts = [
  '愛着の問題に起因する生きづらさを感じており、対人関係や自己肯定感に課題を抱えている方向けにサービスの展開を考えております。',
  '愛着の形成が終わり自己理解や対人関係に関心が高まる10代後半以降の方が主なターゲットです。',
  '対人での相談には抵抗があるが、自分のペースで安心して内面と向き合いたい方や、自身が抱えている問題を解決していく第一歩を踏み出したいと考えている方に最適なサービスを目指します。',
];
const targetIssueTexts = [
  'ターゲット顧客は、幼少期に形成された不安定な愛着により、見捨てられ不安、対人関係での過度な依存や回避、感情の不安定さといった根本的な問題を抱えています。',
  'この愛着の課題を背景に、漠然とした生きづらさや孤独感、自己否定感、感情の波による疲弊を日常的に感じているケースが多く見られます。',
  'こうした慢性的なストレスから、精神疾患や発達障害と似た症状が現れ、医療機関で投薬による対症療法を受けている場合もあります。',
  'しかし、薬はあくまで目の前の苦痛を一時的に和らげるものであり、愛着に根差す問題そのものの解決には至りません。',
  'また、安心してコミュニケーションできる「こころの安全基地」を求めている一方で、人との親密さへの恐れや、専門家に相談すること自体に高い心理的ハードルを感じているため、根本的な解決に向けた一歩をなかなか踏み出せずにいます。',
];
const valueTexts = [
  '愛着の問題に起因する生きづらさを感じており、対人関係や自己肯定感に課題を抱えている方向けにサービスの展開を考えております。',
  '愛着の形成が終わり自己理解や対人関係に関心が高まる10代後半以降の方が主なターゲットです。',
  '対人での相談には抵抗があるが、自分のペースで安心して内面と向き合いたい方や、自身が抱えている問題を解決していく第一歩を踏み出したいと考えている方に最適なサービスを目指します。',
];

const Service: React.FC<ServiceProps> = ({ sx }) => {
  return (
    <Container maxWidth="md" sx={{ pt: 8, pb:5, ...sx }}>
      <Box sx={{ textAlign: 'center' }}>
        <Heading1 titleEn={'Service'} titleJa={'事業内容'}/>
      </Box>
      <Box mx={1} mt={5}>
        <Image src={'/assets/logo_yoko.svg'} alt={''} />
        <ResponsiveTypography
          variantXs="h4"
          variantSm="h3"
          color="text.primary"
          sxXs={{ my: 2, textIndent: '0.5em', ml: '-0.5em' }}
          sxSm={{ my: 2, textIndent: '0.5em', ml: '-0.5em' }}
        >
          あなたの最初の<br/>
          「こころの安全基地」となるAI
        </ResponsiveTypography>
        {/* 事業内容説明文 */}
        <TextBlock texts={serviceTexts} />
      </Box>

      <Heading2 title={'ターゲット顧客'}/>
      <Box mx={1} >
        <ResponsiveTypography
          variantXs="h5"
          variantSm="h5"
          color="text.primary"
          sxXs={{ my: 2 }}
          sxSm={{ my: 2 }}
          childrenXs={
            <>
              不安定な愛着を抱えている<br/>
              大人
            </>
          }
          childrenSm={
            <>不安定な愛着を抱えている大人</>
          }
        />
        {/* ターゲット顧客説明文 */}
        <TextBlock texts={targetCustomerTexts} />
      </Box>

      <Heading2 title={'ターゲットの課題'}/>
      <Box mx={1}>
        <ResponsiveTypography
          variantXs="h5"
          variantSm="h5"
          color="text.primary"
          sxXs={{ my: 2 }}
          sxSm={{ my: 2 }}
          childrenXs={
            <>
              精神疾患や発達障害に似た症状で<br/>
              生活が安定しない
            </>
          }
          childrenSm={
            <>精神疾患や発達障害に似た症状で生活が安定しない</>
          }
        />
        <List sx={{ my: 2, pl: 3,py:0, listStyle: 'disc' }}> {/* listStyle:'disc' を追加 */}
          {/* pl: 0 を削除、 disableGutters も影響する場合があるので削除を試す */}
          <ListItem disableGutters sx={{ display: 'list-item' }}>
            <Typography variant="h6" color="text.secondary">
              投薬は対症療法でしかない
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ display: 'list-item' }}>
            <Typography variant="h6" color="text.secondary">
              他者に相談しても一時的な解決にしかならない
            </Typography>
          </ListItem>
        </List>
        {/* ターゲットの課題説明文 */}
        <TextBlock texts={targetIssueTexts} />
      </Box>
      <Heading2 title={'与える価値'}/>
      <Box mx={1} >
        <ResponsiveTypography
          variantXs="h5"
          variantSm="h5"
          color="text.primary"
          sxXs={{ my: 2, textIndent: '0.5em', ml: '-0.5em' }}
          sxSm={{ my: 2 }}
          childrenXs={
            <>
              愛着モデルに基づいた<br/>
              「こころの安全基地」の提供
            </>
          }
          childrenSm={
            <>愛着モデルに基づいた「こころの安全基地」の提供</>
          }
        />
        {/* 与える価値説明文 */}
        <TextBlock texts={valueTexts} />
      </Box>
    </Container>
  )
}

export default Service 