import * as S from './style'

export type OverViewItemProps = {
  headerText: string;
  mainRecordPrefix?: string;
  mainRecord: number | string;
  mainRecordSuffix?: string;
  rank: number;
  detailItem: OverViewDetailItem[];
  color: string;
};

export type OverViewDetailItem = {
  text: string;
  value: number | string;
}

const OverViewItem = ({
  headerText,
  mainRecordPrefix,
  mainRecord,
  mainRecordSuffix,
  rank,
  detailItem,
  color
}: OverViewItemProps) => {
  return (
    <S.OverViewItem $color={color}>
      <h1>{headerText}</h1>
      <section>
        <S.OverViewItemHeader $color={color}>
          <S.OverViewMainRecord>
            {mainRecordPrefix}
            <p>{mainRecord}</p>
            {mainRecordSuffix}
          </S.OverViewMainRecord>
          <div><p>#{rank}</p>위</div>
        </S.OverViewItemHeader>
        <S.OverViewDetailBar/>
        <S.OverViewDetailItemContainer>
          {detailItem.map(item => (
            <S.OverViewDetailItem>
              <p>{item.text}</p>
              <S.OverViewDetailBar/>
              <span>{item.value}</span>
            </S.OverViewDetailItem>
          ))}
        </S.OverViewDetailItemContainer>
      </section>
    </S.OverViewItem>
  );
}

export default OverViewItem