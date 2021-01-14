import React, {useEffect, useState} from 'react';
import PostShort from './PostShort';
import { Link } from 'react-router-dom';
/*подключение ссылки для навигации */
import { Row } from 'reactstrap';
/*import Pagination from './pagination';

const [postsPerPage] = useState(10);
const [currentPage, setCurrentPage] = useState(1);
const handlePaginate = pageIndex => setCurrentPage(pageIndex);
const [posts, setPost] = useState([]);*/

const Posts = (props) => {
        const posts = props.posts.slice(0, 6).map((post, index) => (
            <PostShort className="col-md-4" {...post} key={index}/>
        ))



        return (
            <React.Fragment>
                <Link to="/posts"><h2 className="text-center">Список постов</h2></Link>
                <Row>
                    {posts}
                </Row>
            </React.Fragment>
        )
     return (
        <div>



            </div>
    )   
    }

 /*<Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={handlePaginate}
          />
          перенести в return*/   

export default Posts;