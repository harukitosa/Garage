import React, {FC} from 'react'
import Head from 'next/head'
import PostDetail from '../../components/PostDetail'
import AmazonButton from '../../components/AmazonButton'
import CommentCard from '../../components/CommentCard'

const Profile: FC = () => {
  return (
        <div className="text-black">
            <Head>
                <title>Garage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main bg-gray-100">
                <PostDetail
                    imgURL="../../mbp-silver-gallery1-202011.jpeg"
                    iconURL="../../icon.jpg"
                    userName="とさ"
                    content="よかったですよ！"
                    createAt="2020-2"
                />
                <div className="p-2">
                    <AmazonButton>
                        Amazonで購入
                    </AmazonButton>
                </div>
                <div className="m-2 font-bold border-b-2 mb-4 border-gray-400">
                    <p>Comment</p>
                </div>
                <div className="w-full p-2">
                    <textarea className="w-full h-20 p-2 border-2 rounded-lg" />
                    <div className="flex flex-row justify-end pr-2 pt-2 w-full">
                        <button className="bg-blue-800 text-white rounded-full w-20 h-8">投稿</button>
                    </div>
                </div>
                <CommentCard
                    iconURL="../../icon.jpg"
                    profileName="近松門左衛門"
                    comment="いいレビューですね！"
                />
                <CommentCard
                    iconURL="../../icon.jpg"
                    profileName="近松門左衛門"
                    comment="Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG and web font. Completely open source, MIT licensed and built by the Ionic Framework team."
                />
            </div>
        </div>
  );
} 

export default Profile;