import React from 'react';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <div className='d-flex justify-content-center'>
        <svg className="animate-spin -ml-1 mr-3 h-12 w-12 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="60" stroke="currentColor" stroke-width="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          
        
        </svg>

      
  </div>;
    }

    return (
        <div className=' mb-4 d-flex flex-wrap justify-content-between'>
            {posts.map(post => (
                // <li key={post.char_id} className='list-group-item'>
                //   {post.name}
                // </li>
                <div className="card" style={{width:18+'rem'}}>
                    <img className="card-img-top" src={post.img} alt="Card image cap" />
                    <div className="card-body">
                    
                    <div className='d-flex flex-column' >
                        <div><strong>Name : </strong>{post.name}</div>
                        <div><strong>Nickname : </strong>{post.nickname}</div>
                        <div><strong>Birthday : </strong>{new Date(post.birthday).toDateString()}</div>
                        <div><strong>Category : </strong>{post.category}</div>
                        <div><strong>Portrayed : </strong>{post.portrayed}</div>
                        <div><strong>Status : </strong>{post.status}</div>
                        <div><strong>Occupation : </strong>{post.occupation.map((data) => data)}</div>
                        
                    </div>
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Posts;