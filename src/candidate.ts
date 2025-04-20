enum Preference {
	first = 5,
	second = 4,
	third = 3,
	fourth = 2,
	fifth = 1
}

export default class Candidate {
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
		switch (preference.toLowerCase()) {
			case "first": {
				this.vote_count += Preference.first;
				break;
			}
			case "second": {
				this.vote_count += Preference.second;
				break;
			}
			case "third": {
				this.vote_count += Preference.third;
				break;
			}
			case "fourth": {
				this.vote_count += Preference.fourth;
				break;
			}
			case "fifth": {
				this.vote_count += Preference.fifth;
				break;
			}
			default: {
				this.vote_count += 0;
			}
		}
	}

	getVoteDetails(): void {
		console.log(`Candidate:\t${this.name}\nCandidate ID:\t${this.candidate_id}\nParty:\t${this.party}\nTotal Points:\t${this.vote_count}\n\n`);
	}
}
