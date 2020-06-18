import React from 'react';
import '../assets/styles/components/Searcher.scss'
import { findVideo } from '../actions'
import { connect } from 'react-redux'

var data = []

const useSearchVideo = allVideos =>{
  let auxi = allVideos;

  if(data.length > 0){
    auxi =  [];
  }

  data = [...data, auxi].flat();

  const[query, setQuery] = React.useState('');
  const [filter, setFilter] = React.useState(data);

  React.useMemo(()=>{
    const result = data.filter(item => `${item.title}${item.type}`.toLowerCase().includes(query.toLowerCase())) 
    setFilter(result);  
  },[allVideos, query]);

  return [query, setQuery, filter]
}

const Searcher = ({allVideos, findVideo}) => {
  const [query, setQuery, filter] =  useSearchVideo(allVideos);

  React.useEffect(()=>{
    findVideo(filter);
  },[query])

  return(
    <section className="main">
      <h2 className="main__title">What do you want to see today?</h2>
      <input
      onChange={even => {
        setQuery(even.target.value)
      }}
      value= {query}
      className="input" 
      type="text" 
      placeholder="Search..."/>
    </section>
  )
};

const mapStateToProps = state =>{ 
  const allVideos =  [state.trends, state.originals].flat();

  return{
    allVideos
  }
}

const mapDispachToProps ={
  findVideo
}

export default connect(mapStateToProps,mapDispachToProps)(Searcher);