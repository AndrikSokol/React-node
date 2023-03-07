import React from 'react'
import MyButton from './UI/button/MyButton'

const SwitchPages = ({totalPages,pagesArray,changePage}) => {
  return (
    <div style ={{display:'flex',justifyContent:'center'}}>
        {totalPages &&
            pagesArray.map((p) =>{
            return(<MyButton key ={p} onClick ={()=>changePage(p)} style= {{marginRight:'10px'}}>{p}</MyButton>)
          })
        }
    </div>
  )
}

export default SwitchPages;