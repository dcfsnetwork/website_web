import SlashTitle from '@/components/SlashTitle'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import style from './index.module.scss'

const PartTwo: React.FC = () => {
  const { t } = useTranslation()

  const tableData = useMemo(
    () => [
      { roles: t('byte_table_row1_col1'), proportion: t('byte_table_row1_col2'), quantion: t('byte_table_row1_col3') },
      { roles: t('byte_table_row2_col1'), proportion: '1%', quantion: t('byte_table_row2_col3') },
      { roles: t('byte_table_row3_col1'), proportion: '1%', quantion: t('byte_table_row3_col3') },
      { roles: t('byte_table_row4_col1'), proportion: '2%', quantion: t('byte_table_row4_col3') },
      { roles: t('byte_table_row5_col1'), proportion: '12%', quantion: t('byte_table_row5_col3') },
      { roles: t('byte_table_row6_col1'), proportion: '20%', quantion: t('byte_table_row6_col3') },
      { roles: t('byte_table_row7_col1'), proportion: '5%', quantion: t('byte_table_row7_col3') },
      { roles: t('byte_table_row8_col1'), proportion: '5%', quantion: t('byte_table_row8_col3') },
      { roles: t('byte_table_row9_col1'), proportion: '54%', quantion: t('byte_table_row9_col3') }
    ],
    [t]
  )

  return (
    <div className="content-container">
      <div className={`content-wrap ${style['part_two']}`}>
        <SlashTitle title={t('byte_title2')} />
        <div>
          <div className={style['table']}>
            {tableData.map((item, index) => (
              <div key={index}>
                <div>{item.roles}</div>
                <div>{item.proportion}</div>
                <div>{item.quantion}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartTwo
