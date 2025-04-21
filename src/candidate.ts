import { setPreference, Preference, getEntries} from "./register";

interface CandidateType {
	[key: string]: Candidate;
}
const entries = getEntries();
const Preference: Preference = setPreference(entries);

export default class CandidateEntry {
	private candidateList: CandidateType;

	constructor() {
		this.candidateList = {};
	}

	addCandidate(name: string, party: string, candidate_id: string): void {
		this.candidateList[candidate_id] = new Candidate(name, party, candidate_id);
	}

	upVote(candidate_id: string, preference: string): void {
		this.candidateList[candidate_id].updateVoteCount(preference);
	}

	showDetails(): void {
		console.log(this.candidateList);
	}

	declareResult(): void {
		let candidate: string = "";
		let candidate_id: string = "";
		let candidate_party: string = "";
		let max_votes: number = 0;
		let candidates: string[] = Object.keys(this.candidateList);
		candidates.forEach((e: string) => {
			let candidateVote: number = this.candidateList[e].getVotes();
			if (candidateVote > max_votes) {
				max_votes = candidateVote;
				candidate = this.candidateList[e].getCandidateName();
				candidate_party = this.candidateList[e].getCandidateParty();
				candidate_id = this.candidateList[e].getCandidateID();
			}
		});

		console.log(`
Winning Party: ${candidate_party}
Candidate Name: ${candidate} (${candidate_id})
Vote Count: ${max_votes}
`)
	}
}

class Candidate {
	private name: string;
	private candidate_id: string;	//This will be unique id to identify the candidate
	private party: string;
	private vote_count: number = 0;

	constructor(name: string, party: string, candidate_id: string) {
		this.name = name;
		this.party = party;
		this.candidate_id = candidate_id;
	}

	updateVoteCount(preference: string): void {
		if (Preference.hasOwnProperty(preference)) {
			this.vote_count += Preference[preference];
		}
	}

	getVotes(): number {
		return this.vote_count;
	}
	getCandidateName(): string {
		return this.name;
	}
	getCandidateID(): string {
		return this.candidate_id;
	}
	getCandidateParty(): string {
		return this.party;
	}
}
