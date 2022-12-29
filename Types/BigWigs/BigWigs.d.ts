interface IBigWigsAnchor {
  bars: LuaPairsKeyIterable<IBigWigsAnchorBar>;
}

interface IBigWigsAnchorBar {
  candyBarLabel: {
    text: string;
  };
  candyBarIconFrame: {
    icon: number;
  };
  remaining: number;
  start: number;
}

declare const BigWigsAnchor: IBigWigsAnchor;
