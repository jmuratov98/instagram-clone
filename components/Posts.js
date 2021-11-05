import Post from './Post';

const posts = [
    {
        id: 0,
        username: 'mrinq',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Hello there'
    },
    {
        id: 1,
        username: 'mrinq',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Good bye there'
    }
]

function Posts() {
    return (
        <div>
            {
                posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        userImg={post.userImg}
                        img={post.img}
                        caption={post.caption}
                    />
                ))
            }
        </div>
    )
}

export default Posts
