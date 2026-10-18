import ThesisSection from "../ThesisSection";

const paragraphs = [
  "Considering my love for the computer and an obsessive way at looking at new things, the ability to produce and construct so many different objects, artworks, prints, videos, software applications, video games, and interactivities allows me the freedom to think and act in ways that express myself. As I learn these notions of my own cognition through experience, I find a great serenity in abstraction from normalcy, as it brings the different perspective I am always looking for. Pairing the focus of process and the momentary nature of variation or abstraction best describe my work.",
  "We all have this idea of what it means to be normal. Is normal just a term for whatever I am not? Do some people consider themselves normal, where other people do not? Can artwork and art practice reveal something about the nature of things? These are some of the questions I hope to answer. My practice consists of more than just my artwork, though my artwork does a great job of reflecting my ideas about purpose. This gives me a greater sense of perspective about what I think is actually happening.",
  "I think about the questions that arise from my confrontation with ancient and modern philosophy’s exposition of the study of being, of consciousness, and the essence of reality itself. I have found a link, a connection, a truth that is shared between culture, philosophy, and art, specifically digital media, and the philosophical inquiries that relate to the study of a thing.",
  "I like to think that my perception of reality can change reality and the world. I use this as a resource in exposing myself to the ideas that I have regarding the value in and of objects, or anything that is external to me. I can compare the external value and my own personal internal value. This applies to every experience I have that seems to be unrelated or external to my own consciousness. It is hard for me to think the world is just an appearance, a chance or coincidence; it needs to be something that is unrevealed and waiting to be discovered. I don’t try to control or influence other people or things. I would rather watch and listen for if I am too loud I may not hear or feel something spectacular, even though it may be beneath my feet.",
  "The ability to repetitiously change and create allows for the construction of new images, objects, and ideas through many dynamic processes, resulting in many different outcomes. These random outcomes are produced by algorithmic variation and repetition often leading to something else, something other than what is proposed. Integrating new ideas into culture and society is evolutionary. Through the act of observation and introspection, one can consider what a thing is or is not Art is a personal examination and expression of existence and what constitutes reality."
] as const;

export default function Introduction() {
  return (
    <ThesisSection
      id="introduction"
      title="Artist Introduction"
      paragraphs={paragraphs}
    />
  );
}
