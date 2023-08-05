import { YoutubeEmbed } from "@/components/youtube-embed/youtube-embed";
import { CodeBlock, dracula } from "react-code-blocks";

export const INDEX = 5;

export const DATE = "2022-09-25";

export const QUESTIONS = [
  "What did you do this past week?",
  "What's in your way?",
  "What will you do next week?",
  "What did you think of Paper #5: The Single Responsibility Principle?",
  "What was your experience of arguments and const?",
  "What made you happy this week?",
  "What's your pick-of-the-week or tip-of-the-week?",
];

export const ANSWERS = [
  <>
    This past week, I worked on setting up the GitLab repo and the dummy code for Project 2: Voting.
    Besides that, I handled some stuff for CSA like tabling and shoutcasting for one of our VALORANT
    tournaments, as well as took my first OA… and that was a disaster…
  </>,
  <>
    One of the aspects of my day-to-day that I wanted to improve is to wake up earlier. This entire
    week basically, I slept around 2am and woke up around 8-10am. As a result, I get pretty sleepy
    around 4-5pm and even earlier if I don't stay on campus. 6 hours of sleep is definitely not
    enough for me, so I'm trying to sleep earlier in order to not feel so bad during the
    late-afternoon time.
  </>,
  <>
    Next week, I'll look to accomplish what was aforementioned by doing more stuff during the day
    and not wasting so much time hanging out with friends or doing other random things. Also, in the
    morning, I can hopefully awaken myself better by stretching, drinking matcha tea, getting
    sunlight, and not staying in bed for 20 minutes after my alarm rings… Other than that, I really
    need to study a lot more LeetCode problems and data structures / algorithms because I got mad
    exposed from my first OA when they slammed me with two medium problems. If I want to get an
    internship next summer, I cannot be making mistakes like this.
  </>,
  <>
    As something that I've never actively thought about before but seems pretty clear, I'm glad to
    see that the Single Responsibility Principle is an actual thing. I feel like this is a principle
    that can be applied to many different aspects of academics and life, since being able to
    properly proportion and separate tasks seems like it could fall under this principle.
  </>,
  <>
    Arguments, pointers, and const seemed pretty brutal at first in the way that they function, but
    by the end of the week, I think I have a better inclination to how they work. When Downing said
    that the const alters the thing that is closer to it in the syntax:
    <CodeBlock
      text={`(1) const int* u = v;
(2) int* const w = x;
(3) const int* constant y = z;`}
      language="cpp"
      showLineNumbers={false}
      customStyle={{ borderRadius: "1em", margin: "1em 0", fontStyle: "normal" }}
      theme={dracula}
    />
    It was definitely clearer in the end. For example, in (1), the const is closer to the int in the
    syntax, so it's modifying the int that the pointer is pointing to. In other words, the int is
    immutable. In (2), however, the const is closer to the asterisk *, thus must be modifying the
    actual pointer. In other words, the pointer is immutable. In (3), both the int and pointer are
    immutable!
  </>,
  <>
    I'm happy to have some more things under control, such as starting on Project 2: Voting a little
    early, and CSA in general. I haven't shoutcasted in a while, so I'm glad to have had that
    opportunity to cast in a tournament and dust off some of my rust.
  </>,
  <>
    My pick for this week is this YouTube video I saw on my recommended differentiating something
    we've learned in class: pointers!
    <YoutubeEmbed embedId={"2ybLD6_2gKM"} />
  </>,
];
