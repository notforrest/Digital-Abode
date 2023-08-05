import { YoutubeEmbed } from "@/components/youtube-embed/youtube-embed";
import { CodeBlock, dracula } from "react-code-blocks";

export const INDEX = 4;

export const DATE = "2022-09-18";

export const QUESTIONS = [
  "What did you do this past week?",
  "What's in your way?",
  "What will you do next week?",
  "What did you think of Paper #4: Pair Programming?",
  "What was your experience of StrCmp, pointers, references?",
  "What made you happy this week?",
  "What's your pick-of-the-week or tip-of-the-week?",
];

export const ANSWERS = [
  <>
    This past week, I finally got around to working on applications. I feel like it's a bit of a
    late start but that'll just mean I'll have to grind harder. I've heard of people applying to
    hundreds of companies and not getting any offers, so I've got a long road ahead. As for my
    classes, I'm swamped. Algorithms is slapping me left and right and I really don't know what's
    going on (I definitely should not have opted into taking the class with a RMP 2.0-rated
    professor… aw man).
  </>,
  <>
    As usual, the main thing in my way is coordinating the sheer number of things I have to deal
    with. One of the constant battles I have is between thinking about my future versus thinking
    about my present. Should I be more focused on internships and jobs for the future at the expense
    of less time studying and doing worse in my classes, as a result? Or should I just focus on my
    classes and success in internships will follow? I'm looking to participate in the 5-year CS
    Master's program here at UT, and I doubt I'll even be able to be competitive if I don't study
    for my classes now and try my best to have a high GPA. Oh man, what to do…
  </>,
  <>
    I have an Algorithms test tomorrow which I am absolutely not prepared for and I'm not really too
    sure how I'm going to… pass that class. Anyways, I'll still be applying to around 5 internships
    a day this coming week and still up until I actually get a job. I really wish that was all I had
    to worry about!
  </>,
  <>
    I am a huge fan of pair programming! After reading through the Perusall, it listed a lot of the
    benefits that I've heard iterated many times from previous classes and just from my general
    experience. There're so many advantages to working with others, including being able to be more
    prepared in the future for software as all you do is work in a team environment, generally. I'm
    glad that Professor Downing is embracing this culture!
  </>,
  <>
    StrCmp is pretty straightforward and makes a lot of sense in the fact that there don't seem to
    be many exceptions or weird applications for the function. In other words, everything follows
    the rules… (right?) As for pointers and references, I was at first very skeptical about the uses
    of references since it seemed so similar to pointers, but as Friday rolled around and Professor
    Downing elaborated more on the advantages (and disadvatanges) of both, I felt far more
    comfortable with them.
  </>,
  <>
    I'm extremely happy about the progress I made when applying to internships for next Summer. I
    feel like I'm on the right track currently and all it is now is to hope it'll all pay off. Other
    than that, I'm happy to have hung out with some friends and continue bouldering on the side.
    Just gotta keep it up!
  </>,
  <>
    My pick for this week is this YouTube video I saw on my recommended describing the importance
    of:
    <CodeBlock
      text={`def main():
      // some code
      
if __name__ == "__main__":
      main()`}
      language="python"
      showLineNumbers={false}
      customStyle={{ borderRadius: "1em", margin: "1em 0", fontStyle: "normal" }}
      theme={dracula}
    />
    One of the points he brought up is viewing it as an “unspoken rule” for Python programs. If
    “__name__” == “__main__” is part of the program, it should be seen as a script. Otherwise, it's
    a library. Anyways, it's a great watch for any Python enthusiasts!
    <YoutubeEmbed embedId={"g_wlZ9IhbTs"} />
  </>,
];
