import { HelpCenter} from '../helpCenter/help-center';

export class HelpCenterThread {

    id: number;
    createdAt: Date;
	helpCenterId: number;
	helpCenterForThread: HelpCenter;
	question: String;
	answer: String;
}
