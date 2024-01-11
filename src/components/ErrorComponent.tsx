import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

type ErrorMessage = {
    message: string
}

const ErrorComponent = (props: ErrorMessage) => {
  return (
   <Alert
  status='error'
  position={"fixed"}
  bottom={"4"}
  left={"50%"}
  transform={"translateX(-50%)"}
  w={"container.lg"}
  >
<AlertIcon />
{props.message}
  </Alert>
  )
}

export default ErrorComponent
