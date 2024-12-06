import React from 'react'

const Footer = ({user}:FooterProps) => {
  return (
    <footer className='footer'>
      <div className='footer_name'>
        <p className='tex-xl font-bold text-gray-900'>
            {user.firstName[0]}
        </p>
      </div>
    </footer>
  )
}

export default Footer
