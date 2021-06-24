import { HelpCenterThread } from '../helpCenterThread/help-center-thread';
import { Staff } from '../staff/staff';
import { User } from '../user/user';

export class HelpCenter {

	id: Number;
	createdAt: Date;
	updatedAt: Date;
	closedAt: Date;
	userId: Number;
	userDidQuestion: User;
	question: String;
	assignedToId: Number;
	staffAssigned: Staff;
	helpThreads: Array<HelpCenterThread>;

}
