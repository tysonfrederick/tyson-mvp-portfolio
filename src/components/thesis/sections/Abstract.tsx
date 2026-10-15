import ThesisSection from "../ThesisSection";

const paragraphs = [
  "The notion of randomness, chance, and variability in digital media appeals to me. I feel that my artwork reflects this in a unique way. To me, being an artist is about making this amazing thing. I tend to direct towards visual aesthetics and generative reflection of my views on life. I find digital media valuable and abundant of variability and extensive in manipulation, and that allows me to explore an exponential and infinite amount of possibilities. As technology rises, the expansion of what is possible cumulatively inclines. Process, breaking down structures, abstraction, versioning, and the successful-failure lead the digital media artist into the future and unknown. I see the artist as an adventurer and creator.",
  "Am I a technological artist? The partnering of abstraction and digital media makes sense. The introduction of iteration or repetition facilitates the process of abstraction. Abstraction is also complementary to technological art for when something has a variable repeating thousands of times, discovering and understanding it’s form can become more and more complex. For instance, one change, repeated hundreds, thousands, or millions of times, no matter how much time is given, is impossible for the majority of art mediums. This is the domain of computing and digital media.",
  "As a digital media artist I go by the roles of programmer, designer, developer, teacher, student, or problem-solver. I really enjoy a challenge. Between the mix of art, technology, and research, anything is possible by use of change, testing, and repetition.",
  "In terms of its prominence, this chance of unknown change is the process, structure, or framework of my practices. I discover results by producing many tests and small projects with techniques of digital media. These results aren’t intentional but instead develop out of process, abstraction, variability, and repetition.",
  
] as const;

export default function Abstract() {
  return (
    <ThesisSection id="abstract" title="Abstract" paragraphs={paragraphs} />
  );
}
