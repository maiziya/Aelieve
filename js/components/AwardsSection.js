// Awards & recognitions section
const IMG_API = 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image';

function awardImage(prompt) {
  return `${IMG_API}?prompt=${encodeURIComponent(prompt)}&size=1024x1024`;
}

const AWARDS = [
  {
    title: 'Named A Top 2020 Web Design Agency',
    source: 'designrush.com',
    prompt: 'minimalist award badge icon laurel wreath top web design agency 2020, grayscale'
  },
  {
    title: 'Top Rated Digital Agency',
    source: 'digitalexcellenceawards.com',
    prompt: 'minimalist digital excellence award trophy icon, grayscale flat'
  },
  {
    title: 'Platinum Winner 2021 Web Design',
    source: 'thompsoncosalon.com',
    prompt: 'hermes creative awards platinum badge emblem, grayscale flat'
  },
  {
    title: 'Gold Winner 2021 Non-Profit Web Design',
    source: 'hawkeyewrestlingclub.com',
    prompt: 'hermes creative awards gold badge emblem, grayscale flat'
  },
  {
    title: 'American Advertising Award Gold 2022',
    source: 'hawkeyewrestlingclub.com',
    prompt: 'american advertising addy award gold star statue icon, grayscale'
  }
];

function renderAward(award) {
  return `
    <div class="award-badge flex flex-col items-center text-center px-4">
      <img src="${awardImage(award.prompt)}" alt="${award.title}" class="w-20 h-20 object-contain mb-3 grayscale opacity-70" crossorigin="anonymous" />
      <p class="text-sm text-gray-500 font-medium leading-snug max-w-[160px]">${award.title}</p>
      <p class="text-xs text-gray-400 mt-1">${award.source}</p>
    </div>
  `;
}

export const AwardsSection = {
  render() {
    return `
      <section class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-wrap items-start justify-center gap-8">
            ${AWARDS.map(renderAward).join('')}
          </div>
        </div>
      </section>
    `;
  }
};
