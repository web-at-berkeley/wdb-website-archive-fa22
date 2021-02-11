import { Fall2020ProjectData } from './Fall2020Projects';
import { MemberProjects } from './MemberProjects';

const PastProjects = Fall2020ProjectData.concat(MemberProjects);

export { PastProjects };

export {
	Fall2020StudentProjectData as StudentProjects,
	Fall2020ProjectData as Fall2020Projects,
} from './Fall2020Projects';

export { Spring2021ProjectData as Spring2021Projects } from './Spring2021Projects';
