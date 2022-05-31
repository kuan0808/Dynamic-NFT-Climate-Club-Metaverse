import React from "react";
import { EyeIcon, SwitchHorizontalIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";

const SingleNFTCard = ({ imageUrl }) => {
  return (
    <div className="h-auto border border-gray-200 shadow-lg rounded-xl">
      <div className="border-b border-gray-200">
        <img src={`http://arweave.net/${imageUrl.substring(5)}`} alt="" />
      </div>
      <div className="p-4 flex items-center justify-between">
        <p>Designer F</p>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center items-start gap-3">
            <div className="flex items-center justify-center gap-2">
              <EyeIcon className="w-5 h-5" />
              <p className="text-gray-400">Watchlist : 100</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <SwitchHorizontalIcon className="w-5 h-5" />
              <p className="text-gray-400">Trading Times : 100</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <HeartIcon className="w-5 h-5" />
            <p className="text-gray-400">21</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNFTCard;
