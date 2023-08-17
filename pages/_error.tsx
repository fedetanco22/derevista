import React from 'react'
import { NextPageContext } from 'next'

interface CustomErrorProps {
  statusCode: number | undefined
}

const CustomError: React.FC<CustomErrorProps> = ({ statusCode }) => {
  return (
    <div>
      <h1>Error {statusCode}</h1>
      <p>Oops! Something went wrong.</p>
    </div>
  )
}

export const getServerSideProps = ({
  res,
  err,
}: NextPageContext): { props: CustomErrorProps } => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { props: { statusCode } }
}

export default CustomError
