import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DcScreen } from '../heroes/components/dc/DcScreen'
import { HeroScreen } from '../heroes/components/hero/HeroScreen'
import { MarvelScreen } from '../heroes/components/marvel/MarvelScreen'
import { SearchScreen } from '../heroes/components/search/SearchScreen'
import { Navbar } from '../ui/components/Navbar'

export const DashboarRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
          <Routes>
              <Route path="marvel" element={ <MarvelScreen /> } />
              <Route path="dc" element={ <DcScreen /> } />
              <Route path="search" element={ <SearchScreen /> } />
              <Route path="hero" element={ <HeroScreen /> } />
              <Route path="/" element={ <MarvelScreen /> } />
              
          </Routes>
        </div>
    </>
  )
}
