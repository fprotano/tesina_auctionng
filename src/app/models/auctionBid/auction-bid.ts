import { Auction } from '../auction/auction';
import { User } from '../user/user';

export class AuctionBid {

id: number;
auctionId: number;
userId: number;
bid: number;
createAt: Date;
bidAuction: Auction;
userBid: User;
}
