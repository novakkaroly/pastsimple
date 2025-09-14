
export interface PracticeLink {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  type: 'Reading' | 'Quiz' | 'Game' | 'Story';
}

export const PRACTICE_LINKS: PracticeLink[] = [
  {
    title: 'Reading: Ötzi the Iceman',
    description: 'Read a story about the famous Iceman and see the past tenses in action.',
    url: 'https://otzi-the-iceman-europes--87a4c0h.gamma.site/',
    imageUrl: 'https://picsum.photos/seed/iceman/400/200',
    type: 'Reading',
  },
  {
    title: 'Quiz: Past Simple or Continuous?',
    description: 'Choose the correct tense to complete the sentences in this fun quiz.',
    url: 'https://wordwall.net/play/97463/764/421',
    imageUrl: 'https://picsum.photos/seed/quiz1/400/200',
    type: 'Quiz',
  },
  {
    title: 'Game: Choose the Correct Tense',
    description: 'A fast-paced game to test your knowledge of the past simple and continuous.',
    url: 'https://wordwall.net/play/97465/812/835',
    imageUrl: 'https://picsum.photos/seed/game/400/200',
    type: 'Game',
  },
  {
    title: 'Interactive Story: A Mystery',
    description: 'Explore an interactive story and make choices. See how tenses create a narrative.',
    url: 'https://view.genially.com/68c6b7fa5f2f70576742949d',
    imageUrl: 'https://picsum.photos/seed/mystery/400/200',
    type: 'Story',
  },
];
