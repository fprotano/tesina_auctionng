import { User } from '../user/user';
import { Staff } from '../staff/staff';
import { HelpCenterThreadDTO } from '../helpCenterThreadDTO/help-center-thread-dto';

export class HelpCenterDTO {

    id: Number;
	createdAt: Date;
	updatedAt ? : Date;
	closedAt ? : Date;
	userId: Number;
	userDidQuestion: User;
	question: String;
	assignedToId: Number;
	staffAssigned: Staff;
    helpThreads: Array<HelpCenterThreadDTO>;
}
