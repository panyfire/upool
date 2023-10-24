import React, { FC } from 'react'
import {Text} from "ui";
import {LockOverviewStyles, LockOverviewStylesItem} from "./styles";

export const LockOverview: FC = () => {
  return (
      <div>
          <Text text={'lock overview '} type={'popUpPreTitle'} />
          <LockOverviewStyles>
              <LockOverviewStylesItem>
                  <Text text={'ETH to be locked'} type={'popUpValue'} />
                  <Text text={'0.00'} type={'value'} />
              </LockOverviewStylesItem>
              <LockOverviewStylesItem>
                  <Text text={'apr'} type={'popUpValue'} />
                  <Text text={'0.93%'} type={'value'} />
              </LockOverviewStylesItem>
              <LockOverviewStylesItem>
                  <Text text={'duration'} type={'popUpValue'} />
                  <Text text={'1 day'} type={'value'} />
              </LockOverviewStylesItem>
              <LockOverviewStylesItem>
                  <Text text={'Start locking'} type={'popUpValue'} />
                  <Text text={'Jul 6th, 2023 22:26'} type={'value'} />
              </LockOverviewStylesItem>
              <LockOverviewStylesItem>
                  <Text text={'end locking'} type={'popUpValue'} />
                  <Text text={'Jul 6th, 2023 22:26'} type={'value'} />
              </LockOverviewStylesItem>
              <LockOverviewStylesItem>
                  <Text text={'expected roi'} type={'popUpValue'} />
                  <Text text={'$0.00'} type={'value'} />
              </LockOverviewStylesItem>
          </LockOverviewStyles>
      </div>
  )
}
