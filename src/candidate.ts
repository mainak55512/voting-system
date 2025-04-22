import { setPreference, Preference, getEntries, CandidateData} from "./register";

interface CandidateType {
	[key: string]: Candidate;
}

export default class CandidateEntry {
	preference: Preference;
	private candidateList: CandidateType = {};

	constructor() {
		const entries = getEntries();
		this.preference = setPreference(entries);
		entries.candidates.forEach((e: CandidateData) => {
			this.addCandidate(e.name, e.party, e.id);
		});
	}

	private addCandidate(name: string, party: string, candidate_id: string): void {
		this.candidateList[candidate_id] = new Candidate(name, party, candidate_id);
	}

	upVote(candidate_id: string, preference: string): void {
		this.candidateList[candidate_id].updateVoteCount(this.preference,preference);
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

	updateVoteCount(prefList: Preference,preference: string): void {
		if (prefList.hasOwnProperty(preference)) {
			this.vote_count += prefList[preference];
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
