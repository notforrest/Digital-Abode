import { YoutubeEmbed } from "@/components/youtube-embed/youtube-embed";

export const INDEX = 3;

export const DATE = "2023-01-29";

export const QUESTIONS = [
  "What did you do this past week?",
  "What's in your way?",
  "What will you do next week?",
  "What did you think of Paper #3: Continuous Integration?",
  "What was your experience of exceptions and types?",
  "What made you happy this week?",
  "What's your pick-of-the-week or tip-of-the-week?",
];

export const ANSWERS = [
  <>
    This past week, I had the chance to finish the Collatz project as well as get ahead of the work
    in my classes. Also, with the intramural season coming up, I have been practicing a lot with my
    teams and I am pretty excited to get out on the field and compete.
  </>,
  <>
    For what's in my way, I need to get brushed up for my Algorithms class. There's a large amount
    of complex material that I haven't yet gotten a grasp of so this week I'll hopefully catch up on
    that material.
  </>,
  <>
    For this upcoming week, I am looking to get started on the next project for this class and meet
    my group members! I'm hoping that this semester won't be too difficult for me and I think that
    will depend heavily on my teammates.
  </>,
  <>
    Continuous integration is an important idea for any sort of workflow. Making sure the code works
    after every commit and push is quite useful when determining what is potentially breaking the
    code and thus, the workflow.
  </>,
  <>
    For my experience with exceptions, I understand their use far better now. They seem extremely
    useful to me in certain situations and I definitely plan on using them to check pre- and post-
    conditions whenever possible. As for types, this seemed pretty straightforward except for a
    couple of weird outliers, but those don't seem as important to know.
  </>,
  <>
    This week, I was pretty happy about getting some effective practice for my ultimate frisbee and
    volleyball IM teams. This semester I'm mostly focusing and trying to make playoffs, so useful
    practice is the first step to that.
  </>,
  <>
    My pick for this week is a YouTube short explaining a common misconception about Python's floor
    division function //. TL;DW, the misconception is that the floor function rounds close to 0,
    when in reality it rounds to negative infinity. Thus, a number like -2.5 rounds down to -3
    instead of -2.
    <YoutubeEmbed embedId={"YNCtnYXcRP4"} />
  </>,
];
