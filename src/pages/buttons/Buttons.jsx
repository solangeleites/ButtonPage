import React from 'react'
import Button from '../../components/buttonsComponents/button1/Button1'
import Button2 from '../../components/buttonsComponents/button2/Button2'
import { Box, Container } from './ButtonsStyles'
import Button3 from '../../components/buttonsComponents/button3/Button3'
import Button4 from '../../components/buttonsComponents/button4/Button4'
import Button5 from '../../components/buttonsComponents/button5/Button5'
import Button6 from '../../components/buttonsComponents/button6/Button6'
import Button7 from '../../components/buttonsComponents/button7/Button7'
import Button8 from '../../components/buttonsComponents/button8/Button8'

const Buttons = () => {
  return (
    <Container>
      <Box>
<Button />
        </Box>

      <Box>

        <Button2 />
      </Box>

      <Box>
<Button3 />
      </Box>

      <Box>
    <Button4 />

      </Box>

      <Box>
        <Button5 />
      </Box>


      <Box>

<Button6 />

      </Box>

      <Box>
    <Button7 />
      </Box>
      <Box>
        <Button8 />
      </Box>
    </Container>
  )
}

export default Buttons