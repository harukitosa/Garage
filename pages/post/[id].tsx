import React, {FC} from 'react'
import Head from 'next/head'
import PostDetail from '../../components/PostDetail'
import AmazonButton from '../../components/AmazonButton'

const Profile: FC = () => {
  return (
        <div className="text-black">
            <Head>
                <title>Garage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h main bg-gray-100">
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
            </div>
        </div>
  );
} 

export default Profile;