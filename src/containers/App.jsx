import React from 'react'
import "../assets/styles/App.scss"
import Header from '../components/Header'
import Searcher from '../components/Searcher'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import Item from '../components/Item'
import Footer from '../components/Footer'
import useGetApi from '../hooks/useGetApi.js'

const API = 'http://localhost:3000/initalState'

const App = () => {
  const [ videos ] = useGetApi(API);
  return (
    <div>
      <Header />
      <Searcher />
      {videos.mylist.length > 0 &&
          <Categories title="My List">
            <Carousel>
              { videos.mylist.map(item => {
                  return(
                    <Item key={item.id} {...item} />
                  )
              })}
            </Carousel>
          </Categories>
      }

      <Categories title="Tends">
        <Carousel>
          { videos.trends.map(item => {
              return(
                <Item key={item.id} {...item}/>
              )
          })}
        </Carousel>
      </Categories>

      <Categories title="More Views Videos">
        <Carousel>
        { videos.originals.map(item => {
              return(
                <Item key={item.id} {...item} />
              )
          })}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
}

export default App;