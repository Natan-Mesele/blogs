import React, { useState } from 'react'

const itemPerPage = 5;
const data = [
  {
    'date': 'Natale campell | 28 August 2022',
    'title': 'We help Group the internet',
    'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
    
  },
  {
     
    'date': 'Mesele Mengistu | 2 may 2022',
    'title': 'War in Gaz',
    'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
    
  },
  {
     
    'date': 'Natale campell | 28 August 2022',
    'title': 'We help Group the internet',
    'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
    
  },
  {
     
    'date': 'Natale campell | 28 August 2022',
    'title': 'We help Group the internet',
    'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
    
  },
  {
    
    'date': 'Natale campell | 28 August 2022',
    'title': 'We help Group the internet',
    'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
    
  },
  {
     
    'date': 'Natale campell | 28 August 2022',
    'title': 'We help Group the internet',
    'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
    
  },
  {
     
    'date': 'Natale campell | 28 August 2022',
    'title': 'We help Group the internet',
    'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
    
  },
  {
    
    'date': 'Natale campell | 28 August 2022',
    'title': 'We help Group the internet',
    'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
    
  },
  {
     
    'date': 'Natale campell | 28 August 2022',
    'title': 'We help Group the internet',
    'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
    
  },
  {
     
    'date': 'Natale campell | 28 August 2022',
    'title': 'We help Group the internet',
    'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
    
  },
  {
    
    'date': 'Natale campell | 28 August 2022',
    'title': 'We help Group the internet',
    'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
    
  },
  {
     
    'date': 'Natale campell | 28 August 2022',
    'title': 'We help Group the internet',
    'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
    
  }

];

const numberOfPage = Math.ceil(data.length / itemPerPage);
const pageIndex = Array.from({length : numberOfPage}, (_, idx) => idx+1);

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const columns = data.slice(
  currentPage * itemPerPage,
  currentPage + 1 * itemPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='App'>
      {columns.map((column) => {
        return (
          <div className='column'>
            <div className='cell'>{column.date}</div>
            <div className='cell'>{column.title}</div>
            <div className='cell'>{column.desc}</div>
          </div>
        )
      })}
      <button 
      disabled={currentPage < 1 } onclick={() => handlePageChange(currentPage - 1)}>&lt;</button>
      {
        pageIndex.slice(
          Math.max(0, currentPage - 2), 
          Math.min(numberOfPage, currentPage + 3)
        )
      .map((page) => (
        <button 
        key={page} 
        onclick={() => handlePageChange(page - 1)}
        className={page === currentPage + 1 ? "active" : "" }
        >
         {page}
         </button>
      ))}
      <button 
      disabled={currentPage > numberOfPage}
       onclick={() => handlePageChange(currentPage + 1)}>&gt;</button>
    </div>
  )
}

export default App