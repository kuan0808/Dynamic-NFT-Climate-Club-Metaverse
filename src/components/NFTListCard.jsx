import React from "react"
import { EyeIcon, HeartIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"
import clsx from "clsx";

import badge from "../assets/badge.png"

const status = ["NEW", "BUY NOW", "ON AUCTION", "HAS OFFERS"]

const NFTListCard = ({ cot, contractAddress, tokenId, collectionName, imageUrl, neutralized }) => {
  // const index = Math.floor(Math.random() * 4)
  const index = tokenId > 100 ? 0 : 1;
  return (
    <div className="rounded-xl shadow-md overflow-hidden">
      <Link to={`/assets/${contractAddress}/${tokenId}`}>
        <div className="relative">
          <img
            src={`http://arweave.net/${imageUrl}`}
            alt=""
            className="w-full h-auto object-cover"
          />
          {neutralized && (
            <img src={badge} alt="" className="absolute top-0 left-0 w-full h-full" />
          )}
        </div>
        <div className="p-4 grid grid-cols-2 text-sm border-b border-gray-200 relative">
          <div className="flex flex-col items-start justify-start gap-2">
            <p className="font-semibold text-lg">{collectionName}</p>
            <p className="font-semibold text-lg">#{tokenId}</p>
          </div>
          <div className="flex flex-col items-end justify-between gap-2">
            <div className="flex flex-col items-end justify-center">
              <div className="flex items-center justify-center gap-1.5">
                <p className="font-semibold">Price</p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.90773 9.41089L1.18491 5.68807L6.30591 0.567074C6.4066 0.466387 6.4066 0.303145 6.30591 0.202469C6.20522 0.101781 6.04199 0.101781 5.94132 0.202469L0.638007 5.50577C0.537331 5.60645 0.537331 5.76968 0.638007 5.87037L4.54314 9.77549C4.64383 9.87618 4.80706 9.87618 4.90773 9.77549C5.00842 9.67482 5.00842 9.51157 4.90773 9.41089ZM7.78933 0.424492L10.8966 0.915098L11.3872 4.02237C11.4122 4.18038 11.36 4.34079 11.2469 4.4539L6.47717 9.2236C6.2819 9.41887 5.96532 9.41887 5.77006 9.2236L2.58808 6.04163C2.39282 5.84637 2.39282 5.52979 2.58808 5.33452L7.35778 0.564812C7.4709 0.451699 7.63132 0.399539 7.78933 0.424492ZM7.71676 0.93502L2.96373 5.68807L6.12361 8.84795L10.8766 4.09491L10.4457 1.36592L7.71676 0.93502ZM7.36105 2.68286C6.8729 3.17102 6.8729 3.96248 7.36105 4.45063H7.36104C7.8492 4.93879 8.64066 4.93879 9.12882 4.45063C9.61697 3.96248 9.61697 3.17102 9.12882 2.68286C8.64066 2.19471 7.8492 2.19471 7.36105 2.68286ZM7.72565 4.08603C8.01244 4.37282 8.47742 4.37282 8.76421 4.08603C9.051 3.79923 9.051 3.33427 8.76421 3.04746C8.47742 2.76067 8.01245 2.76067 7.72565 3.04746C7.43885 3.33426 7.43885 3.79923 7.72565 4.08603Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-500">0.01DAI</p>
            </div>
            <div className="flex flex-col items-end justify-center">
              <div className="flex items-center justify-center  gap-1.5">
                <p className="font-semibold">COT</p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.65 5.6C7.9 5.1 8 4.55 8 4C8 1.8 6.2 0 4 0C3.25 0 2.5 0.25 1.9 0.6C1.75 0.5 1.55 0.4 1.3 0.4C0.75 0.4 0.3 0.85 0.3 1.4C0.3 1.65 0.4 1.85 0.5 2C0.2 2.6 0 3.25 0 4C0 6.2 1.8 8 4 8C5 8 5.9 7.65 6.6 7.05C6.75 7.15 6.9 7.2 7.1 7.2C7.6 7.2 8 6.8 8 6.3C8 6 7.85 5.75 7.65 5.6ZM1.3 0.65C1.7 0.65 2.05 1 2.05 1.4C2.05 1.8 1.7 2.15 1.3 2.15C0.9 2.15 0.6 1.8 0.6 1.4C0.6 1 0.9 0.65 1.3 0.65ZM0.75 2.2C0.5 2.75 0.3 3.35 0.3 4C0.3 6.05 1.95 7.7 4 7.75C4.9 7.75 5.75 7.4 6.4 6.85C6.3 6.7 6.25 6.55 6.25 6.35C6.25 5.85 6.65 5.45 7.15 5.45C7.2 5.45 7.3 5.45 7.4 5.5C7.6 5 7.7 4.5 7.7 4C7.7 1.95 6.05 0.3 4 0.3C3.3 0.3 2.65 0.5 2.1 0.8C2.25 0.95 2.3 1.15 2.3 1.35C2.3 1.9 1.85 2.35 1.3 2.35C1.1 2.35 0.9 2.3 0.75 2.2ZM7.1 6.95C6.75 6.95 6.45 6.65 6.45 6.3C6.45 5.95 6.75 5.65 7.1 5.65C7.45 5.65 7.75 5.95 7.75 6.3C7.75 6.65 7.45 6.95 7.1 6.95ZM4.1 5.6C4.4 5.6 4.6 5.5 4.8 5.35C4.95 5.2 5.1 4.95 5.15 4.55L5.85 4.65C5.75 5.15 5.55 5.5 5.25 5.8C4.95 6.05 4.55 6.2 4.1 6.2C3.5 6.2 3.05 6.05 2.7 5.65C2.35 5.25 2.15 4.7 2.15 4C2.15 3.55 2.25 3.15 2.4 2.8C2.55 2.45 2.75 2.2 3.1 2.05C3.4 1.9 3.75 1.8 4.1 1.8C4.55 1.8 4.9 1.9 5.25 2.1C5.55 2.35 5.7 2.65 5.8 3.1L5.1 3.2C5.05 2.9 4.9 2.7 4.75 2.55C4.6 2.4 4.4 2.35 4.15 2.35C3.75 2.35 3.5 2.5 3.25 2.75C3 3 2.9 3.45 2.9 4C2.9 4.55 3 5 3.25 5.2C3.45 5.45 3.75 5.6 4.1 5.6Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-500">{cot}t</p>
            </div>
            <div className="flex flex-col items-end justify-center">
              <div className="flex items-center justify-center gap-1.5">
                <p className="font-semibold tracking-tighter">Trade times</p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.88089 5.17413C7.92702 5.20071 7.9598 5.24344 7.97323 5.29443C7.98635 5.34446 7.97896 5.39664 7.95222 5.44158L7.27604 6.60196C7.24065 6.6627 7.17444 6.70042 7.10332 6.70042C7.06884 6.70042 7.03487 6.69139 7.00569 6.67469L3.77979 4.72322L3.00635 6.05135C2.92312 6.19454 2.7673 6.2835 2.59967 6.2835C2.5177 6.2835 2.43669 6.26193 2.36537 6.22113L0.257485 5.01529C0.148983 4.95311 0.0715235 4.85269 0.0393453 4.73254C0.00733504 4.61309 0.0239718 4.48839 0.0862016 4.38145L2.38557 0.436024C2.46888 0.292977 2.62488 0.204102 2.79265 0.204102C2.87459 0.204102 2.95558 0.225591 3.02682 0.266235L5.13455 1.47243C5.2431 1.53451 5.32062 1.63495 5.35285 1.75524C5.38486 1.87471 5.3682 1.99928 5.30592 2.10611L4.53491 3.42938L7.88089 5.17413ZM3.96661 2.07216C3.99364 2.07216 4.02099 2.07901 4.04602 2.09338C4.12192 2.13715 4.14842 2.23422 4.10523 2.30952L3.49684 3.35385C3.45218 3.42996 3.35383 3.45606 3.27766 3.4122C3.24039 3.39081 3.21383 3.35637 3.20285 3.31522C3.19203 3.27471 3.19774 3.23241 3.21889 3.19615L3.8275 2.15184C3.85727 2.10076 3.91129 2.07216 3.96661 2.07216ZM3.09957 3.71872L3.09985 3.71903C3.13668 3.73983 3.16304 3.77355 3.1741 3.81396C3.18524 3.85475 3.17963 3.89763 3.15836 3.9346L3.0909 4.05056C3.04639 4.12649 2.94821 4.15264 2.87192 4.10882C2.8346 4.08736 2.80798 4.05294 2.79703 4.01183C2.78624 3.97139 2.79194 3.92917 2.8131 3.89294L2.88064 3.77698C2.91043 3.72595 2.96446 3.69741 3.01984 3.69741C3.04699 3.69741 3.07447 3.70428 3.09957 3.71872ZM3.86491 7.21475H0.349375C0.223932 7.21475 0.121873 7.33169 0.121873 7.45578C0.121873 7.57986 0.223932 7.69677 0.349375 7.69677H3.86491C3.99015 7.69677 4.09205 7.57986 4.09205 7.45578C4.09205 7.33169 3.99015 7.21475 3.86491 7.21475ZM2.73003 5.74154C2.68713 5.80167 2.61129 5.82308 2.55457 5.82308C2.54459 5.82308 2.53509 5.82241 2.52633 5.82113C2.44848 5.80958 2.3708 5.76994 2.33142 5.74732L0.691591 4.80932C0.612469 4.76412 0.555891 4.69084 0.532323 4.603C0.508811 4.51539 0.521027 4.4239 0.566708 4.34537L2.59472 0.863902C2.65567 0.759429 2.76936 0.694561 2.8914 0.694561C2.95092 0.694561 3.00972 0.710166 3.06146 0.739714L4.70038 1.67781C4.77969 1.72325 4.83632 1.79669 4.85987 1.88458C4.8833 1.9721 4.87107 2.06344 4.82544 2.14175C4.6135 2.50665 2.75387 5.70807 2.73003 5.74154ZM3.98633 4.3716L7.03013 6.24864L7.51128 5.41285L4.32577 3.78878L3.98633 4.3716Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-500">{Math.floor(Math.random() * 10)}</p>
            </div>
          </div>
          <div className={clsx("text-white p-1.5 text-lg absolute left-0 bottom-4", neutralized ? "ml-1 bg-white border border-gray-500 rounded-xl text-black shadow-[5px_5px_0px_2px_rgba(0,0,0)]" : "bg-[#73c000]")}>
            <p>{neutralized ? "Neutralized" : status[index]}</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center justify-start gap-1">
            <EyeIcon className="w-4 h-4" />
            <p>watchlist: 100</p>
          </div>
          <div className="flex items-center justify-end gap-1">
            <HeartIcon className="w-4 h-4 text-red-700" />
            <p>21</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default NFTListCard
