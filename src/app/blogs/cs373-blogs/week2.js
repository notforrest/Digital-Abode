"use client";

import { YoutubeEmbed } from "@/components/youtube-embed/youtube-embed";
import { CodeBlock, dracula } from "react-code-blocks";

export const INDEX = 2;

export const DATE = "2023-01-24";

export const QUESTIONS = [
  "What did you do this past week?",
  "What's in your way?",
  "What will you do next week?",
  "What did you think of Paper #2: Makefile?",
  "What was your experience of unit tests, coverage, and IsPrime?",
  "What made you happy this week?",
  "What's your pick-of-the-week or tip-of-the-week?",
];

export const ANSWERS = [
  <>
    This past week, I got settled into the new semester! There was a lot of housekeeping that I
    needed to keep track of such as orgs and athletics, but I think everything should be about in
    place now.
  </>,
  <>
    I think the main thing I need to brush up is my Python. I'm not incredibly fluent in Python but
    I think I should know enough to get by on this first project.
  </>,
  <>
    This week, I am looking to finish up working on Project 1: Collatz. Other than that, my other
    classes have some assignments as well to take care of and that should be no problem as long as I
    keep on top of my work.
  </>,
  <>
    Paper #2 didn't involve anything too interesting or newfound to me. Similar to makefiles I've
    worked with before (but in Python), I think makefiles are very useful and save a lot of time in
    the long run. On top of that, there's some interesting information to be found inside of this
    makefile such as what Python packages we're using.
  </>,
  <>
    Unit tests and coverage were concepts that I've learned to use over the past couple of years
    and, most recently, last semester. They're essential in the software engineering process so I'm
    glad that we're getting some experience in this area. As for IsPrime, it was a good basic
    exercise for how to look for simple optimizations that would make our code literally twice as
    fast (such as only checking the odd numbers).Unit tests and coverage were concepts that I've
    learned to use over the past couple of years and, most recently, last semester. They're
    essential in the software engineering process so I'm glad that we're getting some experience in
    this area. As for IsPrime, it was a good basic exercise for how to look for simple optimizations
    that would make our code literally twice as fast (such as only checking the odd numbers).
  </>,
  <>
    Some of the things that made me happy this week was that I got more active! I averaged more than
    5 miles a day this week and I'm pretty proud of that. To add on to that, I spent the entirety of
    Thursday on my Algorithms homework (8 hours of working straight) and completed it with a couple
    of hours to spare!
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
