import { useState, useEffect } from "react";
function News() {
    const[news,setNews]=useState ([]);
useEffect(()=>{
    fetch("https://api.quotable.io/quotes?page=1").then(response => response.json())
    .then(data => setNews(data.results))
},[]);
return(
<div className="IPS">
  {Array.isArray(news) && news.map((newsitem) => {
    return (
      <div key={newsitem._id} className="main-cord">
        <h2>{newsitem.author}</h2>
        <p>Source: {newsitem.content}</p>
      </div>
    );
  })}
</div>
);
}
export default News;