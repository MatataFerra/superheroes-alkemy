import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../shared/Logo'

export const HomeScreen = () => {
  return (
    <>
    <Logo />
    <div className="home-container">
      <div className="home-add-character" data-bs-toggle="tooltip" data-bs-placement="top" title="click en '+' para agregar a tu equipo">
          <Link to='hero'>
            <img src="/assets/plus.svg" alt="Plus Icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregá a tu equipo"/>
          </Link>
      </div>
    </div>
    </>
  )
}
