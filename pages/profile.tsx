import React, {FC, useContext} from 'react'
import Head from 'next/head'
import { AuthContext } from '../src/context/Auth'
import PostCard from '../components/PostCard'
import ProfileCard from '../components/ProfileCard'

const Profile: FC = () => {
  return (
        <div className="text-black">
            <Head>
                <title>Garage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main">
                <ProfileCard 
                 profile="自己紹介"
                 profileName="とさ"
                 iconURL="./icon.jpg"
                />
                <div className="h-12 bg-gray-100">
                    <div className="bg-gray-700 text-white w-20 text-center h-8 rounded-b-lg font-bold">
                        Posts
                    </div>
                </div>
            </div>
            <div className="main bg-gray-100 grid-container min-h">
                <PostCard imgURL="./mbp-silver-gallery1-202011.jpeg" iconURL="./icon.jpg" userName="とさ" content="お金が貯まったので購入しました！すごく良かったです！..." createAt="2020-12"/>
                <PostCard imgURL="./mbp-silver-gallery1-202011.jpeg" iconURL="./icon.jpg" userName="とさ" content="お金が貯まったので購入しました！すごく良かったです！..." createAt="2020-12"/>
                <PostCard imgURL="./mbp-silver-gallery1-202011.jpeg" iconURL="./icon.jpg" userName="とさ" content="お金が貯まったので購入しました！すごく良かったです！..." createAt="2020-12"/>
            </div>
        </div>
  );
} 

export default Profile;