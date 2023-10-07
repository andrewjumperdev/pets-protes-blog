import { posts } from "../db"

const Posts = () => {
    return (
        <div className="col-md-10 col-lg-8 col-xl-7">
            {posts.map((post) => 
                <div className="post-preview">
                    <a href="post.html">
                        <h2 className="post-title">{post.title}</h2>
                        <h3 className="post-subtitle">{post.subTitle}</h3>
                    </a>
                    <p className="post-meta">
                        Posted by {post.author} <br/>
                        on {post.date}
                    </p>
                    <hr className="my-4" />
                </div>
)}
            <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
        </div>
    )
}

export default Posts