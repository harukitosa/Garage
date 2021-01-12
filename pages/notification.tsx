import React, {FC} from 'react'
import Head from 'next/head'
import NoticeListItem from '../components/NoticeListItem';

const Notification: FC = () => {
  return (
        <div className="text-black">
            <Head>
                <title>Garage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main bg-gray-100 w-full min-h">
                <div className="w-full p-4">
                    <h1 className="text-2xl text-center">通知</h1>
                </div>
                <NoticeListItem 
                    iconURL="/icon.jpg"
                    content="とさからいいねが届きました"
                />
                <NoticeListItem 
                    iconURL="/icon.jpg"
                    content="とさからいいねが届きました"
                />
                <NoticeListItem 
                    iconURL="/icon.jpg"
                    content="とさからいいねが届きました"
                />
            </div>
        </div>
  );
} 

export default Notification;