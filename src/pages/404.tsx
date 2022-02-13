import { ReactElement } from 'react'

import ErrorPageLayout from 'layouts/ErrorPageLayout/ErrorPageLayout'

const NotFound = () => <></>

NotFound.getLayout = function getLayout(page: ReactElement) {
  return (
    <ErrorPageLayout title="Page not found!">{page}</ErrorPageLayout>
  )
}

export default NotFound
