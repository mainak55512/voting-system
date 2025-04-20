import Candidate from "./candidate";

(function main(): void {
	let candidate_1 = new Candidate("Mainak", "DJC", "M@1999#bh");
	let candidate_2 = new Candidate("Debjit", "PMT", "D@1998#pa");
	let candidate_3 = new Candidate("Abhrajit", "TONGPRESS", "A@1995#da");

	candidate_1.updateVoteCount("first");
	candidate_2.updateVoteCount("second");
	candidate_3.updateVoteCount("fourth");

	candidate_1.getVoteDetails();
	candidate_2.getVoteDetails();
	candidate_3.getVoteDetails();
})()
