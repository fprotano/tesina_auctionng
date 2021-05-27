export class Auction{
id: number;
createdAt: Date;
updateAt: Date;
userItemId: number;
winnerUserId: number;
startPrice: number;
currentBid: number;
shipmentExtraPrice: number;
minEarn: number;
freeBidEveryTime: number;
fixedBidEveryTime: number;
startAuctionAt: Date;
endAuctionAt: Date;
closedAuctionAt: Date;
}