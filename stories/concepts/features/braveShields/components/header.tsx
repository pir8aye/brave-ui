/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { Grid, Column } from '../../../../../components/gridSystem'
import Separator from '../../../../../components/separator'
import SwitchButton from '../../../../../components/switchButton'
import UnstyledButton from '../../../../../components/unstyledButton'
import TextLabel from '../../../../../components/textLabel'
import locale from '../fakeLocale'
import theme from '../theme'

class BraveShieldsHeader extends React.PureComponent {
  render () {
    return (
      <Grid
        id='braveShieldsHeader'
        theme={theme.braveShieldsHeader}>
        <Column size={4} theme={theme.columnVerticalCenter}>
          <TextLabel theme={theme.title} text={locale.shieldsHeaderShieldsToggle} />
        </Column>
        <Column size={6} theme={theme.columnVerticalCenter}>
          <SwitchButton
            id='shieldsToggle'
            leftText={locale.shieldsHeaderToggleLeftPosition}
            rightText={locale.shieldsHeaderToggleRightPosition}
            checked={true}
            onChange={() => {}} />
        </Column>
        <Column size={2} theme={theme.columnVerticalCenterEnd}>
          <UnstyledButton
            theme={theme.closeButton}
            text='&times;'
            onClick={() => {}} />
        </Column>
        <Column>
          <Separator />
        </Column>
        <Column theme={theme.hostnameContent}>
          <TextLabel text={locale.shieldsHeaderForSite} />
          <TextLabel theme={theme.hostname} text='Simply Red Fan Club' />
        </Column>
      </Grid>
    )
  }
}

export default BraveShieldsHeader
