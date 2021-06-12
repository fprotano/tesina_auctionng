import { Auction } from '../auction/auction';

export class AuctionOrder {

id: number;
orderNo: string;
auctionId: number;
auctionOrderStatusId: number;
createAt: Date;
updatedAt: Date;
paymentVerifyExpiresAt: Date;
paidAt: Date;
amount: number;
transactionId: string;
auction: Auction;

}
