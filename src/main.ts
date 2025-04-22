import CandidateEntry from "./candidate";

(function main(): void {
	let entry: CandidateEntry = new CandidateEntry();
	entry.upVote("C003-ALPHANUMERIC16", "p1");
	entry.upVote("C005-ALPHANUMERIC16", "p4");
	entry.upVote("C006-ALPHANUMERIC16", "p5");
	entry.upVote("C007-ALPHANUMERIC16", "p3");

	entry.declareResult();
})()
