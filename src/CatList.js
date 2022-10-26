// write your CatList component here
import React from 'react'
import catsReducer from './reducers/catsReducer';
 class CatList extends React.Component {
     render(){
        const Tom = this.props.cats.map(cat => { return <img src={cat.url} key={cat.id}></img>})
        return <div>{Tom}</div>
    
     }
     
     
    

 }
 export default CatList;