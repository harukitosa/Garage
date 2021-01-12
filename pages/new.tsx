import React, {FC} from 'react'
import Head from 'next/head'

const New: FC = () => {
  return (
        <div className="text-black">
            <Head>
                <title>Garage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main bg-gray-100 w-full min-h">
                <div className="p-2">
                    <h1 className="text-center text-md text-gray-400">投稿を作成</h1>
                </div>
                <div className="p-2">
                <textarea placeholder="普段使っているガジェットや新しく購入した製品について口コミを書いてみよう！ひとことでもOK、思いっきり語ってもOKです" className="w-full bg-gray-100 h-60 p-4 border-2 rounded-lg"/>
                <label className="text-sm text-gray-600 p-1 mt-4">購入金額</label>
                <div className="flex flex-row">
                    <input className="border-2 w-full h-8 p-1 bg-gray-100 rounded-lg" placeholder="購入金額を記入して記録しよう！"></input>
                    <span className="h-8 p-1 text-center w-6">円</span>
                </div>
                </div>
                <div className="flex flex-row">
                    <div className="h-16 w-16 border-2 border-black rounded-lg m-2 flex-col items-center justify-center">
                        <div className="pt-1 text-center">
                            <img src="/image-outline.svg" alt="image" width="32" height="32" className="m-auto"/>
                            <span className="text-min">画像を追加</span>
                        </div>
                    </div>
                    <div className="h-16 w-16 border-2 border-black rounded-lg m-2 flex-col items-center justify-center">
                        <div className="pt-1 text-center">
                            <img src="/clipboard-outline.svg" alt="image" width="32" height="32" className="m-auto"/>
                            <span className="text-min">商品を追加</span>
                        </div>
                    </div>
                </div>
                <div className="w-full m-auto flex justify-center">
                    <button className="bg-blue-700 rounded-lg w-full ml-8 mr-8 mt-4 p-2 text-white">
                        投稿する
                    </button>
                </div>
            </div>
        </div>
  );
} 

export default New;