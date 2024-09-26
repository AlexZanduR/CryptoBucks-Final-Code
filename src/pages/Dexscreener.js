import { data } from "autoprefixer";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { TrendingContext } from "../context/TrendingContext";
import TrendingCoin from "./../components/TrendingCoin";

const getIframeUrl = (
  pairAddress: string,
  chainSlug: string,
  theme: string
): string =>
  'https://dexscreener.com/${chainSlug}/${pairAddress}?embed=1&theme=${theme}&info=0&trades=0';

const Chart: React.FC = () => {
  const theme: string = "dark";
  const chainSlug: string = "solana";
  const iframeUrl: string = getIframeURL(
    "B8whh26yir2ser4csXi6TTx9cmWFJkt2iViLKwJ8pump",
    chainSlug,
    theme
  );

  return (
    <div className="w-full h-[400px] border-b rounded-t-md overflow-hidden">
      <iframe
          src={iframeUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Token Chart"></iframe>
    </div>
  );
};

export default Chart;

