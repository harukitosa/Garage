import React, {FC} from 'react'

const MenuHeader: FC = () => {
    return (
        <div className="bg-gray-700 text-white h-12 main sticky top-12 flex flex-row justify-evenly items-center border-t-2">
            <div>
                新着
            </div>
            <div>
                フォロー
            </div>
            <div>
                ランキング
            </div>
            <div>
                タグ別
            </div>
        </div>
    );
} 

export default MenuHeader;