import { YoutubeEmbed } from "@/components/youtube-embed/youtube-embed";

export const INDEX = 8;

export const DATE = "2022-10-16";

export const QUESTIONS = [
  "What did you do this past week?",
  "What's in your way?",
  "What will you do next week?",
  "What did you think of Paper #8. The Integration Segregation Principle?",
  "What was your experience of my_allocator() starter code and DigitsIterator?",
  "What made you happy this week?",
  "What's your pick-of-the-week or tip-of-the-week?",
];

export const ANSWERS = [
  <>
    This past week, my partner and I began working on Project 3: Allocator. I wanted to be able to
    start early in order to not lose too much time when it wasn't necessary in the first place.
  </>,
  <>
    The main things in my way are my organization's stuff. I've mainly needed to focus on handling a
    lot of the logistics for all of our events and making sure everything runs as smoothly as
    possible. It's been pretty difficult as a lot of deadlines are coming up but as long as I take
    some deep breaths and relax, everything should be a-okay.
  </>,
  <>
    This upcoming week, I'll be working with my partner to finish up Project 3: Allocator! I feel
    like we've made good progress so hopefully that won't take too long. I'll also be continuing to
    do a lot of stuff for my organization and get everything prepared for events!
  </>,
  <>
    The Integration Segregation Principle is, honestly, pretty confusing to me. I'm not too familiar
    with interfaces and classes and seeing the paper compare and contrast with how they're used and
    misused was not too clear. I think after reading it a couple of times and researching online, I
    should be able to understand it far better.
  </>,
  <>
    The my_allocator() starter code was pretty straightforward. Some of the methods only had one or
    a few lines and it was moreso figuring out what exactly to do with said method. For the methods
    that we have to fill in, I think we'll be fine! DigitsIterator was really interesting to me and
    my partner since we first attempted solving it with something like references and/or pointer
    arithmetic but it turned out to be a lot simpler than that. After we figured it out, I felt as
    if I understood it pretty well.
  </>,
  <>
    I made it to the phone interview portion to one of the companies I applied to! I'm not even too
    sure what to expect moving on but that's a great confidence booster for myself. Additionally, I
    had the chance to hang out a lot with my officer board so that was great bonding with them.
  </>,
  <span>
    My tip is not super complex or “out there,” so to speak, and is more of a refresher of one of
    the topics that I'm sure most of us are very familiar with: Big O! This video by NeetCode is a
    good review video to have a better understanding of common Big Os like O(1) or O(n
    <sup style={{ lineHeight: 0 }}>2</sup>) while also giving us tips on commonly misunderstood
    complexities like O(n * m) or O(nlogn). Great watch!
    <YoutubeEmbed embedId={"BgLTDT03QtU"} />
  </span>,
];
