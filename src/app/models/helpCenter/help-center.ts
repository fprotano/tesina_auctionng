import { HelpCenterThread } from '../helpCenterThread/help-center-thread';

export class HelpCenter {

id: number;
userId: number;
assignedToId: number;
question: string;
createdAt: Date;
updatedAt: Date;
closedAt: Date;

// listHelpCenterThreads: Array<HelpCenterThread>;

}
