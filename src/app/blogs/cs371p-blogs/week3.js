import Image from "next/image";
import Link from "next/link";

export const INDEX = 3;

export const DATE = "2022-09-11";

export const QUESTIONS = [
  "What did you do this past week?",
  "What's in your way?",
  "What will you do next week?",
  "What did you think of Paper #3: Continuous Integration?",
  "What was your experience of exceptions, char*, std::string, and ==?",
  "What made you happy this week?",
  "What's your pick-of-the-week or tip-of-the-week?",
];

export const ANSWERS = [
  <>
    This past week, I looked more at the project specifications in preparation for Project 1:
    Collatz. I'm not yet finished with the project, but it looks to be okay.
  </>,
  <>
    The biggest thing in my way is balancing all of my commitments, such as managing my club, Texas
    CSA, my four other classes, bouldering, and looking for internships. Allocating my time
    correctly has been pretty stressful thus far, so hopefully I'll survive the rest of the
    semester.
  </>,
  <>
    This next week, I'm looking to attend the CNS Career Fair and start applying to internships.
    Recruiting season and the application process will be pretty chaotic for me, but I'm just
    stepping one foot at a time in front of the other. I can only go up from here, honestly.
  </>,
  <>
    Continuous integration is pretty cool! I believe I've heard of this sort of practice, but I
    never knew the official name that references it. All of these sections that the author talked
    about are clearly great practices for any programming team to go through. Glad to see Mr. Fowler
    share his experience with continuous integration!
  </>,
  <>
    Exceptions are an amazing tool to keep track of correctness in the code. Did something go wrong
    and did an exception occur? If our exceptions are written correctly, then we'll have no trouble
    finding and fixing the bug. I think it's definitely a great thing to utilize in our code. char
    pointers are something I've been dealing with since the beginning of my sophomore year, with
    Comp. Org. & Arch. I think, compared to a lot of the other sections, it's one of the lesser
    complicated topics in C and C++, so it's not a big issue. Once we get to the real pointers and
    pointer dereferencing and the like, then I might be in trouble. std::string is something I
    haven't seen before this past week. As far as I was concerned, there were only char *, not
    Strings, but it's cool to learn about it!
  </>,
  <>
    Like last week, I'm elated to see our CSA events going well, as we ended up with huge turnouts
    to our dumpling night event. Always thankful to the team for doing a great job in their
    preparation and execution of the events. Regarding bouldering, I've been doing some more hanging
    exercises, like crimping off of my loft's staircase in my apartment. I think it's unironically
    and visibly translated into my bouldering so far, so I'm very happy about that.
  </>,
  <>
    My pick for this week might be pretty well-known but regardless it's good to see once again.
    It's a GitHub megathread for Summer 2023 internships. It mentions what positions each company is
    looking for as well as where the internship will be based. Very great thread for all of us
    undergrads to run through and easily see jobs to apply for!
    <Link
      href="https://github.com/pittcsc/Summer2023-Internships"
      style={{ marginTop: "1em", textAlign: "center" }}
    >
      https://github.com/pittcsc/Summer2023-Internships
    </Link>
    <div>
      <Image
        alt="Summer 2023 Internships GitHuB"
        src={"/week3-internships.png"}
        width={908}
        height={994}
        layout="responsive"
        style={{ margin: "1em 0 0.5em" }}
      />
    </div>
  </>,
];
