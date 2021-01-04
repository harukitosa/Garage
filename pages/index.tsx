import React, {FC, useContext} from 'react'
import Head from 'next/head'
import { AuthContext } from '../src/context/Auth'
import PostCard from '../components/PostCard'
// import SignInWithTwitter from '../components/SignInWithTwitter'

const Home: FC = () => {
  const { currentUser } = useContext(AuthContext);
  return (
        <div className="text-black">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main bg-gray-100 grid-container">
                <PostCard imgURL="./mbp-silver-gallery1-202011.jpeg"/>
                <PostCard imgURL="./mbp13-witb-silver-202005.jpeg"/>
                <PostCard imgURL="./mbp-silver-gallery1-202011.jpeg"/>
                <PostCard imgURL="./mbp-silver-gallery1-202011.jpeg"/>
                <PostCard imgURL="./mbp13-witb-silver-202005.jpeg"/>
                <PostCard imgURL="./mbp-silver-gallery1-202011.jpeg"/>
                <PostCard imgURL="./mbp-silver-gallery1-202011.jpeg"/>
                {/* { currentUser !== undefined &&
                    <SignInWithTwitter>
                        twitterでログインする
                    </SignInWithTwitter>
                } */}
            </div>
        </div>
  );
} 

export default Home;