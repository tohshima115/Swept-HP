import { Image } from '@/components/atoms/Image'
import { Heading1, Heading2, Heading3 } from '@/components/atoms/typography'
import ExpandableContents from '@/components/molecules/ExpandableContents'
import { Container, Typography, Box } from '@mui/material'

const Service = () => {

  return (
    <Container maxWidth="md" sx={{ pt: 3, pb:5 }}>
    <Box sx={{ textAlign: 'center' }}>
      <Heading1 titleEn={'Service'} titleJa={'事業内容'}/>
    </Box>
    <Box mx={1} mt={5}>
      <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>
      <ExpandableContents>
        <Typography >
          これは非常に長い文章の始まりです。最初は指定された高さまで表示され、
          残りの部分は隠されています。グラデーション効果により、
          文章が下に続いていることが視覚的に示唆されます。
        </Typography>

        <Heading3 title={'セクションの見出し'}/>
        <Typography >

          ここにセクション1の詳細な内容が入ります。
          MUIのTypographyコンポーネントを使って段落を表現しています。
          カスタムの見出しコンポーネント (Heading2.tsx) も問題なく使用できます。
        </Typography>

        <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>

        <Typography >
          画像の後にも文章は続けられます。「もっと読む」ボタンをクリックすると、
          隠されていた部分がスムーズなアニメーションと共に表示されます。
        </Typography>

        <Typography >
          さらに追加の文章です。コンテンツの量に応じて、コンポーネントは
          適切に高さを調整します。ボタンのテキストも「一部を表示」に変わります。
          再度クリックすれば、元の折りたたまれた状態に戻ります。
        </Typography>
      </ExpandableContents>

      <Heading2 title={'ターゲット顧客'}/>
      <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>
      <ExpandableContents >
        <Typography >
          これは非常に長い文章の始まりです。最初は指定された高さまで表示され、
          残りの部分は隠されています。グラデーション効果により、
          文章が下に続いていることが視覚的に示唆されます。
        </Typography>

        <Heading3 title={'セクションの見出し'}/>
        <Typography >
          ここにセクション1の詳細な内容が入ります。
          MUIのTypographyコンポーネントを使って段落を表現しています。
          カスタムの見出しコンポーネント (Heading2.tsx) も問題なく使用できます。
        </Typography>

        <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>

        <Typography >
          画像の後にも文章は続けられます。「もっと読む」ボタンをクリックすると、
          隠されていた部分がスムーズなアニメーションと共に表示されます。
        </Typography>

        <Typography >
          さらに追加の文章です。コンテンツの量に応じて、コンポーネントは
          適切に高さを調整します。ボタンのテキストも「一部を表示」に変わります。
          再度クリックすれば、元の折りたたまれた状態に戻ります。
        </Typography>
      </ExpandableContents>

      <Heading2 title={'ターゲットの課題'}/>
      <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>
      <ExpandableContents >
        <Typography >
          これは非常に長い文章の始まりです。最初は指定された高さまで表示され、
          残りの部分は隠されています。グラデーション効果により、
          文章が下に続いていることが視覚的に示唆されます。
        </Typography>

        <Heading3 title={'セクションの見出し'}/>

        <Typography >
          ここにセクション1の詳細な内容が入ります。
          MUIのTypographyコンポーネントを使って段落を表現しています。
          カスタムの見出しコンポーネント (Heading2.tsx) も問題なく使用できます。
        </Typography>

        <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>

        <Typography >
          画像の後にも文章は続けられます。「もっと読む」ボタンをクリックすると、
          隠されていた部分がスムーズなアニメーションと共に表示されます。
        </Typography>

        <Typography >
          さらに追加の文章です。コンテンツの量に応じて、コンポーネントは
          適切に高さを調整します。ボタンのテキストも「一部を表示」に変わります。
          再度クリックすれば、元の折りたたまれた状態に戻ります。
        </Typography>
      </ExpandableContents>

      <Heading2 title={'与える価値'}/>
      <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>
      <ExpandableContents >
        <Typography >
          これは非常に長い文章の始まりです。最初は指定された高さまで表示され、
          残りの部分は隠されています。グラデーション効果により、
          文章が下に続いていることが視覚的に示唆されます。
        </Typography>

        <Heading3 title={'セクションの見出し'}/>

        <Typography >
          ここにセクション1の詳細な内容が入ります。
          MUIのTypographyコンポーネントを使って段落を表現しています。
          カスタムの見出しコンポーネント (Heading2.tsx) も問題なく使用できます。
        </Typography>

        <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>

        <Typography >
          画像の後にも文章は続けられます。「もっと読む」ボタンをクリックすると、
          隠されていた部分がスムーズなアニメーションと共に表示されます。
        </Typography>

        <Typography >
          さらに追加の文章です。コンテンツの量に応じて、コンポーネントは
          適切に高さを調整します。ボタンのテキストも「一部を表示」に変わります。
          再度クリックすれば、元の折りたたまれた状態に戻ります。
        </Typography>
      </ExpandableContents>

      <Heading2 title={'市場規模と機会'}/>
      <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>
      <ExpandableContents >
        <Typography >
          これは非常に長い文章の始まりです。最初は指定された高さまで表示され、
          残りの部分は隠されています。グラデーション効果により、
          文章が下に続いていることが視覚的に示唆されます。
        </Typography>

        <Heading3 title={'セクションの見出し'}/>

        <Typography >
          ここにセクション1の詳細な内容が入ります。
          MUIのTypographyコンポーネントを使って段落を表現しています。
          カスタムの見出しコンポーネント (Heading2.tsx) も問題なく使用できます。
        </Typography>

        <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>

        <Typography >
          画像の後にも文章は続けられます。「もっと読む」ボタンをクリックすると、
          隠されていた部分がスムーズなアニメーションと共に表示されます。
        </Typography>

        <Typography >
          さらに追加の文章です。コンテンツの量に応じて、コンポーネントは
          適切に高さを調整します。ボタンのテキストも「一部を表示」に変わります。
          再度クリックすれば、元の折りたたまれた状態に戻ります。
        </Typography>
      </ExpandableContents>

      <Heading2 title={'ビジネスモデル'}/>
      <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>
      <ExpandableContents >
        <Typography >
          これは非常に長い文章の始まりです。最初は指定された高さまで表示され、
          残りの部分は隠されています。グラデーション効果により、
          文章が下に続いていることが視覚的に示唆されます。
        </Typography>

        <Heading3 title={'セクションの見出し'}/>

        <Typography >
          ここにセクション1の詳細な内容が入ります。
          MUIのTypographyコンポーネントを使って段落を表現しています。
          カスタムの見出しコンポーネント (Heading2.tsx) も問題なく使用できます。
        </Typography>

        <Image src={'https://picsum.photos/200'} alt={''} height={'168px'}/>

        <Typography >
          画像の後にも文章は続けられます。「もっと読む」ボタンをクリックすると、
          隠されていた部分がスムーズなアニメーションと共に表示されます。
        </Typography>

        <Typography >
          さらに追加の文章です。コンテンツの量に応じて、コンポーネントは
          適切に高さを調整します。ボタンのテキストも「一部を表示」に変わります。
          再度クリックすれば、元の折りたたまれた状態に戻ります。
        </Typography>
      </ExpandableContents>
      
    </Box>
  </Container>
  )
}

export default Service 