import Image from "next/image";
import Link from "next/link";

export const INDEX = 1;

export const DATE = "2022-08-28";

export const QUESTIONS = [
  "Where did you grow up?",
  "What high school did you attend?",
  "What was your favorite extracurricular activity in high school?",
  "Why did you come to UT?",
  "Why are you majoring in CS?",
  "Why are you in this class?",
  "What are your expectations of this class?",
  "How much C/C++ do you already know?",
  "How did you like the first lectures?",
  "How did you feel about the cold calling?",
  "How do you feel about specifications grading?",
  "What made you happy this week?",
  "What's your pick-of-the-week or tip-of-the-week?",
];

export const ANSWERS = [
  <>
    Hi, my name is Forrest Sun and I'm a junior! I grew up in Spring, Texas, part of the Greater
    Houston Area. It's around 30-40 minutes away from “Houston” Houston (A.K.A. downtown Houston).
  </>,
  <>
    I attended Klein High School in Spring, Texas. With a graduating class of around 700 people
    (peaked at 1,100 my freshman year), you could say I was accustomed to being around a lot of
    people.
  </>,
  <>
    My favorite extracurricular activity in high school was being part of the school's student
    television club. I had the chance to go around the school talking to students, getting their
    opinions on topics, as well as go to our sports games and make highlights on those!
  </>,
  <>
    UT seemed like such a lively, upbeat school that I thought it would be perfect for an
    undergraduate college experience! With a prestigious computer science program as well, it seemed
    to be a no-brainer at that point.
  </>,
  <>
    Ever since I was a little kid, I knew I wanted to do something with computers when I grew up. My
    first goal was to be a computer engineer, but I quickly found that hardware was… not my cup of
    tea. After studying four years of computer science in high school, that solidified my opinion in
    moving away from hardware and moving deeper into software. Three years later, I have no regrets!
    Although, If I wasn't accepted into UTCS, I would likely be doing RTF / digital media or
    something like psychology. This ties back into my favorite extracurricular activity in high
    school!
  </>,
  <>
    I am taking object-oriented programming to achieve a better understanding of how… well,
    object-oriented programming works. Additionally, after learning C for the past two years, it's
    about time for me to learn C++, as well. (I'm also here to get my upper division CS credit, of
    course :D)
  </>,
  <>
    My main expectation for this class is to come out the other end with a fluent grasp of C++ and,
    certainly, object-oriented programming in general.
  </>,
  <>
    I've taken three classes with the main language being C, including computational architecture,
    operating systems, and compilers. As for C++, I have low to zero understanding of anything
    outside of the similarity with C.
  </>,
  <>
    Surprisingly (should it be surprising?), I thoroughly enjoyed the first couple of lectures.
    Professor Downing has this particular teaching style which I, personally speaking, very much
    enjoy.
  </>,
  <>
    In my past academic experience, I never really had an issue with cold calling, especially when
    nothing is on the line. Either you know it, or you don't, and whatever happens, happens (wow,
    this is a very nonchalant sentence). As for Professor Downing's response to many of the answers
    he received, I think it's safe to say that he has no issue with people not knowing specific
    things (especially when they're really niche!).
  </>,
  <>
    If I had to be completely honest, I wasn't really a fan of this system (or a similar system) in
    one of my previous classes, and I don't think I will approve of this one either. I really do
    understand the thought process behind the grading style--basically, you have to be proficient in
    everything in order to be proficient in the class. The thing is (depending on how hard the
    projects are), it may be very damaging to be slacking in any of the five categories. The four
    non-project gradings seem fairly lenient, as you're allowed to miss a good number of each of
    them. The project specification, though? It's either boom or bust. That's what makes me nervous.
  </>,
  <>
    My team and I hosted a 200-person event just today which I'm happy went very well. The days and
    hours leading up to the event was pretty hectic and somewhat chaotic, but we made it! I had a
    great time, and I think the attendees had a great time, as well, so that was quite the success!
  </>,
  <>
    One very cool feature on VSCode that I came across on TikTok was this experimental “Sticky
    Scroll” feature. It would keep the name of the top-level function at the top of your screen,
    similar to how you can “freeze” rows and columns in Google Sheets and Excel. Pretty neat!
    <span style={{ marginTop: "0.5em", textAlign: "center" }}>
      Credit:{" "}
      <Link href="https://www.tiktok.com/t/ZTRPJqe9q/">https://www.tiktok.com/t/ZTRPJqe9q/</Link>
    </span>
    <Image
      alt="Experimental Sticky Scroll feature"
      src={"/sticky-scroll.png"}
      width={974}
      height={302}
      layout="responsive"
      style={{ margin: "1em 0 0.5em" }}
    />
    <div style={{ fontSize: "0.75em", textAlign: "center" }}>
      Experimental “Sticky Scroll” feature on VSCode (1.70.1)
    </div>
  </>,
];
