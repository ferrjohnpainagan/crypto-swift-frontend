import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Remit from './Remit'
import Wallet from './Wallet'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const pathState: any = location?.state || false
  const isActivePage = (page: string) => {
    return location.pathname.includes(page)
  }
  const handleRemit = () => {
    // navigate('/remit/bank-login')
    let route: string
    switch (true) {
      case pathState.origin.includes('success/cash-in'):
        route = '/remit/bank-recipient'
        break
      case pathState.origin.includes('success/exchange'):
        route = '/remit/cash-out'
        break
      case pathState.origin.includes('success/cash-out'):
        route = '/remit/cash-in'
        break
      default:
        route = pathState.origin
        break
    }

    navigate(route)
  }
  const handleWallet = () => {
    navigate('/wallet/home', {
      state: {
        origin: location.pathname,
      },
    })
  }
  // const handleHome = () => {
  //   navigate('/remit/bank-login')
  // }
  return (
    <div className="flex h-20 w-screen items-center border-b-gray-400 bg-white px-24 shadow-sm">
      <div
        className="cursor-pointer font-poppins text-xl font-extrabold"
        // onClick={handleHome}
      >
        <a className="text-blue1">Crypto</a>
        <a className="text-indigo1">Swift</a>
      </div>
      <div className="flex w-screen justify-between">
        <div>
          <Remit isActivePage={isActivePage} handleRemit={handleRemit} />
          <Wallet isActivePage={isActivePage} handleWallet={handleWallet} />
        </div>
        <div
          className="flex cursor-pointer items-center font-poppins text-sm"
          onClick={() => {
            localStorage.clear()
            navigate('/remit/bank-login')
          }}
        >
          Logout
        </div>
      </div>
    </div>
  )
}

export default Header
