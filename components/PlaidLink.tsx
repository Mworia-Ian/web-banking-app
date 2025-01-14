import React from 'react'
import { Button } from './ui/button'

const PlaidLink = ({user, variant}:PlaidLinkProps) => {
  return (
    <div>
      {variant === 'primary' ? (
        <Button 
        className='plaidlink-primary'>
            Connect Bank
        </Button>
      ): variant === 'ghost' ? (
        <Button>
            Conect Bank
        </Button>
      ) : (
        <Button>
            Connect Bank
        </Button>
      )}
    </div>
  )
}

export default PlaidLink
