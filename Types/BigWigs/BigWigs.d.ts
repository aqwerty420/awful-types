interface BigWigsAnchor {
  bars: LuaPairsKeyIterable<BigWigsAnchorBar>;
}

interface BigWigsAnchorBar {
  candyBarLabel: {
    text: string;
  };
  candyBarIconFrame: {
    icon: number;
  };
  remaining: number;
  start: number;
}

declare const BigWigsAnchor: BigWigsAnchor;

declare const BigWigsEmphasizeAnchor: BigWigsAnchor;
