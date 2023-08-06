export const INDEX = 14;

export const DATE = "2022-12-05";

export const QUESTIONS = [
  "Some of the long-term takeaways from this class:",
  "How well do you think the course conveyed those takeaways?",
  "Were there any other particular takeaways for you?",
  "How did you feel about cold calling?",
  "How did you feel about specifications grading?",
  "How did you feel about help sessions and office hours?",
  "How did you feel about the support from the TAs?",
  "You should have read five papers that describe SOLID design: Single Responsibility, Open-Closed Principle, Liskov Substitution, Interface Segregation, and Dependency Inversion. What insights have they given you?",
  "You should have read two papers that advised minimizing getters and setters. What insights have they given you?",
  "What required tool did you not know and now find very useful?",
  "In the end, how much did you learn relative to other UT CS classes?",
];

export const ANSWERS = [
  <ul>
    <li>test first, test during, test after; test, test, test</li>
    <li>
      when designing <b>algorithms</b>, demand the <b>weakest</b> iterators (e.g., bidirectional vs.
      random access)
    </li>
    <li>
      when designing <b>containers</b>, provide the <b>strongest</b> iterators (e.g., random access
      vs. bidirectional)
    </li>
    <li>
      build <b>adapters</b> on top of <b>containers</b> and <b>iterators</b>
    </li>
    <li>
      do <b>not</b> use <b>new</b> and <b>delete</b>; use <b>containers</b> or <b>allocators</b>{" "}
      instead
    </li>
    <li>
      always look for <b>reuse</b> and <b>symmetry</b> in your code
    </li>
    <li>
      collaboration is essential to the quality of your code and to your well-being in producing it
    </li>
    <li>refactor, refactor, refactor</li>
    <li>make your code beautiful</li>
  </ul>,
  <>
    I believe the course did a great job of conveying the above takeaways! I learned a lot through
    the numerous exercises, lectures, and projects that I completed.
  </>,
  <>
    Some of the other takeaways I found from this class were more centered around external factors
    like project cooperation and time management. Working with others throughout this class helped
    me learn a lot about the type of people that I feel I'll be potentially working with in the
    future (in both positive and negative ways).
  </>,
  <>
    Cold calling, in my opinion, can be pretty daunting at first but I think it's pretty helpful,
    only because Professor Downing is an incredibly patient person. If the cold callee forgot
    something on the spot or didn't know the answer, Professor Downing would help guide them through
    the problem every time.
  </>,
  <>
    Specifications grading definitely has upsides and downsides. The main thing that specification
    grading has against it is how frustrating it can be when you do well in every specification
    except one, and that would in turn bring the entire grade down. Professor Downing said he has a
    solution for that, but when he described it, it seemed pretty vague.
  </>,
  <>
    Help Sessions was also quite helpful, as Philo and Alex could be there in-person to basically
    help anyone with anything. I personally never had a problem with this but Help Sessions can
    definitely be not as helpful when there are a high amount of people going.
  </>,
  <>
    The TAs, Philo and Alex, were both incredibly helpful in their efforts to make sure that we do
    the best that we can!
  </>,
  <>
    In general, the principles I've learned from these papers were pretty familiar but understanding
    them at a deeper level was nonetheless fascinating.
  </>,
  <>
    Regarding the papers that discussed getters and setters, they were intriguing as well. I've been
    previously taught to avoid getters and setters but I'm glad to have gone far more in-depth on
    the reason “Why?” through these papers, learning specifically about how getters and setters can
    be extremely detrimental to object-oriented programming.
  </>,
  <>
    The most useful tool I've used so far is definitely GCov and ValGrind. Seeing the Unit Tests'
    coverage as well as the memory information from ValGrind seems like an essential tool now when
    coding larger projects.
  </>,
  <>
    After the end of this class, I can say I easily learned a lot in this class, more than in many
    of my other classes. The aspect of object-oriented programming and the structure of C++ seems
    especially important in computer science and my future career path. I am unquestionably
    satisfied with the knowledge that I exited the class with.
  </>,
];
