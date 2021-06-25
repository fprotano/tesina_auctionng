import { User } from '../user/user';
import { HelpCenter } from '../helpCenter/help-center';
import { Role } from '../role/role';
export class Staff {

 	id: Number;
	createAt: Date;
	updatedAt: Date;
	email: String;
	password: String;
	name: String;
	surname: String;
	roleId: Number;
	// staffRole: Role;
	nextOtpCodeAfterDate: Date;
	otpCode: String;
	otpCodeExpiresAt: Date;
	// listHelpCenterOfStaff: Array<HelpCenter>;

}
