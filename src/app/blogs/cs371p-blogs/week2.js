import Image from "next/image";

export const INDEX = 2;

export const DATE = "2022-09-04";

export const QUESTIONS = [
  "What did you do this past week?",
  "What's in your way?",
  "What will you do next week?",
  "What did you think of Paper #1: Syllabus?",
  "What was your experience of assertions, unit tests, and coverage?",
  "What made you happy this week?",
  "What's your pick-of-the-week or tip-of-the-week?",
];

export const ANSWERS = [
  <>
    This past week, I helped plan events and table for my organization, Texas Chinese Student
    Association. After the hectic week, I spent the rest of my time bouldering and doing homework.
  </>,
  <>
    The main problem I deal with in day-to-day to life is my own procrastination. 😔 If I sit down
    and focus on doing my work, I usually have no trouble getting it done. The problem is sitting
    down and focusing…
  </>,
  <>
    One of the main things I'm looking to do this next week is get my résumé finalized for the CNS
    Career Fair next week. Additionally, I have a couple of assignments to do for my classes,
    including working on Project 1. Looking forward to the future, I'm going to try to apply to the
    Bridging Discipline Program's Digital Media & Arts certificate and see if a Master's is good for
    me.
  </>,
  <>
    For me, it was pretty straightforward. I don't think Perusall is a bad idea and I enjoy using it
    as a tool to push me to read the syllabus as well as the makefile. On top of that, it's pretty
    cool to see other people's questions and reactions to the information on the files.
  </>,
  <>
    They're a great idea! In previous classes, we generally weren't required to make use of
    assertions and unit tests, but they were still quite helpful. As for gcov, I can definitely see
    its use coming to fruition when debugging. Of course, the biggest fear I have when using these
    strategies is to use them correctly. Hopefully, that won't be a large problem.
  </>,
  <>
    For the most part, I'm happy that the Texas CSA events we hosted went well, as our events had
    much larger turnouts than expected. Grateful for the team to be working hard! As for bouldering,
    I felt pretty good about doing a lot of v4 and v5 routes and trying my hand at v6s. I feel the
    improvement coming along, so hopefully I'll be able to do more v6s in the future.
  </>,
  <>
    The tip I have for this week is related to the C/C++ extension in VSCode. There's something
    called “code snippets” which can be pretty useful for saving some time. Basically, you need a
    Microsoft extension named C/C++ which enables Intellisense as well as these code snippets. When
    you type keywords like for, class, and if, for example, you can press enter and receive a code
    snippet with the main structure of the keyword. Within that structure, you can tab through the
    code and type in the necessary components. Below, you can see that example with the keyword
    class, and what it outputs!
    <div style={{ display: "flex", gap: "1em" }}>
      <div>
        <Image
          alt="Code Snippet 1"
          src={"/week2-code-snippet-1.png"}
          width={1024}
          height={412}
          layout="responsive"
          style={{ margin: "1em 0 0.5em" }}
        />
      </div>
      <div>
        <Image
          alt="Code Snippet 2"
          src={"/week2-code-snippet-2.png"}
          width={666}
          height={1011}
          layout="responsive"
          style={{ margin: "1em 0 0.5em" }}
        />
      </div>
    </div>
  </>,
];
