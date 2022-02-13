import { ReactElement } from 'react'

import ErrorPageLayout from 'layouts/ErrorPageLayout/ErrorPageLayout'

const InternalServerError = () => <></>

InternalServerError.getLayout = function getLayout(page: ReactElement) {
  return <ErrorPageLayout title="Something went wrong!">{page}</ErrorPageLayout>
}

export default InternalServerError
