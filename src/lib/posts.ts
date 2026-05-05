export interface Post {
  slug: string;
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "what-to-expect-in-early-labor",
    date: "April 2025",
    tag: "Birth",
    title: "What to Actually Expect in Early Labor",
    excerpt:
      "Early labor looks different for everyone — but knowing what's normal can help you stay calm and trust your body before active labor begins.",
    content: `
Early labor is often the longest and least predictable phase of birth. Contractions may start irregular, ranging from 5 to 20 minutes apart, and can feel like strong period cramps or lower back pressure. This is your body doing exactly what it was designed to do.

**What's normal in early labor:**

Contractions that come and go without a clear pattern are completely expected. You might feel them for a few hours, then they taper off — only to return stronger later. This is called prodromal labor, and it doesn't mean anything is wrong.

Rest as much as you can. Early labor is not the time to rush to the hospital. Use this time to eat a light meal, take a warm shower, distract yourself with a show you love, or call your doula.

**Signs that active labor is beginning:**

When contractions become longer (60–90 seconds), stronger, and closer together (every 4–5 minutes for at least an hour), your body is shifting into active labor. This is typically when you'll want to head to your birth location.

**How I can help:**

As your doula, I'm available by phone or text the moment you think labor might be starting. We'll talk through what you're feeling, decide together when to act, and I'll come to you when the time is right. You don't have to navigate this alone.

Trust your body. It knows the way.
    `.trim(),
  },
  {
    slug: "the-fourth-trimester",
    date: "March 2025",
    tag: "Postpartum",
    title: "The Fourth Trimester: You Need Support Too",
    excerpt:
      "Society celebrates the baby's arrival — but your healing, your emotions, and your needs matter just as much in those first weeks home.",
    content: `
The moment your baby is born, the world's attention shifts — to the baby. You might feel this immediately: the nurses checking the baby's vitals, the family calling to ask how he or she is doing, the Instagram posts that lead with the newborn's face.

But you just did something extraordinary. And you need support too.

**What the fourth trimester actually looks like:**

The first 12 weeks postpartum are a time of profound physical and emotional change. Your body is healing from birth — whether vaginal or cesarean. Your hormones are shifting dramatically. You're sleep-deprived, potentially breastfeeding, and trying to figure out this new human while also figuring out your new self.

This is not the time to "bounce back." This is the time to be held.

**What you might be feeling:**

Baby blues — tearfulness, mood swings, and anxiety — are common in the first two weeks and are driven by hormonal shifts. If those feelings persist or intensify beyond two weeks, that's worth talking to your provider about. Postpartum depression and anxiety are real, common, and treatable.

**Practical ways to protect yourself:**

Accept help when it's offered — and ask for it when it's not. Let someone else make dinner. Sleep when you can, not when "everything is done" (it never is). Lower the bar for what counts as a good day. A good day is one where you and the baby are fed and breathing. Everything else is a bonus.

**How I support you postpartum:**

My postpartum support is about you — not just the baby. We'll talk through feeding challenges, sleep strategies, emotional transitions, and what healing actually looks like. I'll help you figure out what you need and advocate for yourself when you're too exhausted to find the words.

You deserve to be cared for.
    `.trim(),
  },
  {
    slug: "how-to-build-a-birth-team",
    date: "February 2025",
    tag: "Preparation",
    title: "How to Build a Birth Team That Actually Supports You",
    excerpt:
      "Your OB, midwife, and doula each play a different role. Here's how to think about who belongs in your corner — and why.",
    content: `
One of the most empowering things you can do during pregnancy is be intentional about who is in the room when you give birth.

Your birth team shapes your experience. Not just medically — but emotionally, relationally, and energetically. The people around you during labor matter.

**Your medical provider (OB or midwife):**

Your OB or midwife is responsible for your clinical care — monitoring your health and your baby's health, making medical decisions, and managing any complications. They are skilled, essential, and focused on safety.

What they are often not able to provide: continuous one-on-one emotional support. They are managing multiple patients, documentation, and clinical priorities. That's not a criticism — it's the reality of the healthcare system.

**Your partner or support person:**

Your partner or chosen support person is there because they love you. They want to help — but they may also be scared, overwhelmed, and unsure of what to do. Supporting someone through labor is a skill, and most partners have never done it before.

A doula can help bridge that gap — coaching your partner on how to support you, so they feel useful and confident rather than helpless.

**Your doula:**

A doula's sole job is to support you — continuously, calmly, and without any other agenda. I'm not watching a monitor or charting. I'm watching you. I'm listening to what you need, helping you process decisions in real time, and keeping the energy in the room steady when things feel uncertain.

Research consistently shows that continuous doula support leads to shorter labors, fewer interventions, higher satisfaction with the birth experience, and lower rates of postpartum depression.

**How to find the right fit:**

Interview at least two or three doulas. Ask how they approach birth, what their philosophy is, and how they handle situations where your preferences and the medical team's recommendations differ. You should feel at ease, heard, and respected — not pressured.

If you'd like to talk through whether we're a good fit, I offer free 30-minute consultations. No pressure, no commitment — just a conversation.
    `.trim(),
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
