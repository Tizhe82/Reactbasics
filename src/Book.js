import React from 'react'

const Book = (props) => {

    // attribute, eventHandler
    // onClick, onMouseOver

    const clickHandler = (e) =>{
        console.log(e);
        console.log(e.target);
         alert('helloworld');
    }

    const complexExample = (author) =>{

    }
    console.log(props);   
    const {img, title, author} = props;
    return(
        <article className='book' onMouseOver={()=>{
            console.log(author); 
        }}>
            <img 
            src={img}

            alt=''
            />

            <h1 onClick={()=> console.log}>{title}</h1> 
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>
                reference Example
            </button>

            <button type="button" onClick={() => complexExample(author)}>More complex example</button>
        </article>
    );
};

export default Book
