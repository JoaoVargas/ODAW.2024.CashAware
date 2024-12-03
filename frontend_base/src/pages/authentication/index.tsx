import React from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from '@/assets/images/logo.png'
import useScreenSize from '@/lib/useScreenSize'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

import '@/assets/styles/authPageAnimation.css'

export default function AuthenticationPage() {
  const screenSize = useScreenSize();
  const navigate = useNavigate()


  return (
    <Card className='border-0 drop-shadow-none w-[500px] lg:w-[750px]'>
      <CardHeader className='justify-center items-center'>
        <img src={Logo} alt="CasAware logo" className='w-full'/>
      </CardHeader>
      <CardContent className='flex items-center justify-center'>
        <div className='flex justify-around w-[500px] lg:w-[750px]'>
          <Button 
          variant='primary'
          size={screenSize.width >= 1024 ? 'xlg' : 'lg'}
          onClick={() => navigate('/auth/register')}>
            Registrar
          </Button>
          <Button 
          variant='primary'
          size={screenSize.width >= 1024 ? 'xlg' : 'lg'}
          onClick={() => navigate('/auth/login')}>
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
