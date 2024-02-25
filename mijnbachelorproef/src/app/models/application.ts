import {Topic} from "./topic";
import {Organisation} from "./organisation";
import {Proposal} from "./proposal";
import {Project} from "./project";

export interface Application {
  topics: Topic[];
  topicsSaved: boolean;
  organisations: Organisation[];
  organisationsSaved: boolean;
  proposals: Proposal[];
  proposalsSaved: boolean;
  project: Project | null;
  projectSaved: boolean;
}
