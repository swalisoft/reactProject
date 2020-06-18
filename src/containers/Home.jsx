import React from 'react'
import { connect } from 'react-redux'
import "../assets/styles/Home.scss"
import Header from '../components/Header'
import Searcher from '../components/Searcher'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import Item from '../components/Item'

const Home = ({myList, trends, originals, result}) => {
  const lengthOfAllVideos =  trends.length = originals.length;
  return (
    <>
      <Header />
      <Searcher />
    {(result.length < lengthOfAllVideos) 
      ?<>
        <Categories title="Results">
            <Carousel>
            { result.map(item => {
                  return(
                    <Item key={item.id} {...item} />
                  )
              })}
            </Carousel>
          </Categories>
      </>
      :<>
        {myList.length > 0 &&
              <Categories title="My List">
                <Carousel>
                  { myList.map(item => {
                      return(
                        <Item
                        key={item.id} 
                        {...item}
                        isList
                        />
                      )
                  })}
                </Carousel>
              </Categories>
          }
  
          <Categories title="Tends">
            <Carousel>
              { trends.map(item => {
                  return(
                    <Item key={item.id} {...item}/>
                  )
              })}
            </Carousel>
          </Categories>
  
          <Categories title="More Views Videos">
            <Carousel>
            { originals.map(item => {
                  return(
                    <Item key={item.id} {...item} />
                  )
              })}
            </Carousel>
          </Categories>
      </>
      }
    </>
  );
}

const mapStoreToProps = state=>{
  return {
    myList: state.myList,
    trends: state.trends,
    originals:state.originals,
    result: state.result,
  }
}

export default connect(mapStoreToProps, null)(Home);