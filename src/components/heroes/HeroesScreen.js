import React, { useEffect, useState } from 'react'
import { fetchToApi } from '../../helpers/fetchToApi'

export const HeroesScreen = () => {

  const [heroes, setHeroes] = useState([])
  
  useEffect(() => {
    const url = `https://superheroapi.com/api/${process.env.REACT_APP_API_KEY}/search/spider`
    fetchToApi(url).then(hero => hero.response === "success" ? setHeroes(hero.results) : setHeroes('Error'))

  }, [])

  return (
    <div className="heroes-container">
      <div className="heroes-cards-container row row-cols-3 row-cols-md-4 g-4 flex-wrap w-75 mx-auto overflow-scroll">
          {
            heroes.map(hero => {
              return(
                <div key={hero.id}  className="col">
                <div className="card h-100">
                  <img className="card-img-top" src={`${hero.image.url}`} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}
