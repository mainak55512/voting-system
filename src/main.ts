import CandidateEntry from "./candidate";

(function main(): void {
	let entry: CandidateEntry = new CandidateEntry();
	entry.addCandidate("Mainak", "DJC", "M@1999#bh");
	entry.addCandidate("Debjit", "PMT", "D@1998#pa");
	entry.addCandidate("Abhrajit", "TONGPRESS", "A@1995#da");

	entry.upVote("M@1999#bh", "second");
	entry.upVote("D@1998#pa", "first");
	entry.upVote("A@1995#da", "third");
	entry.upVote("M@1999#bh", "first");

	entry.declareResult();
})()
