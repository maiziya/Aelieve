// News & Insights section
const IMG_API = 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image';

function insightImage(prompt) {
  return `${IMG_API}?prompt=${encodeURIComponent(prompt)}&size=1024x1024`;
}

const INSIGHTS = [
  {
    category: 'Social Media Marketing',
    title: 'How To Use Instagram Stories For Your Brand',
    prompt: 'abstract maroon and orange geometric gradient banner social media marketing'
  },
  {
    category: 'Awards',
    title: 'Aelieve | Ranked a Top Digital Marketing Company',
    prompt: 'dark blue banner with white award ribbon design rush style marketing'
  },
  {
    category: 'News, Public Relations',
    title: 'Aelieve Announces The Launch Of New Website And Re-Brand',
    prompt: 'gray modern abstract banner press release announcement'
  }
];

function renderInsightCard(item) {
  return `
    <div class="flex-1 min-w-[280px] max-w-[340px]">
      <div class="rounded-lg overflow-hidden">
        <img src="${insightImage(item.prompt)}" alt="${item.title}" class="w-full h-44 object-cover" crossorigin="anonymous" />
      </div>
      <p class="mt-4 text-sm text-gray-500">${item.category}</p>
      <h3 class="mt-1 text-lg font-semibold leading-snug">${item.title}</h3>
    </div>
  `;
}

export const InsightsSection = {
  render() {
    return `
      <section class="bg-white py-16">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <p class="text-sm text-gray-500 mb-3">News &amp; Insights</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-balance">
            We work hard every single day to grow as individuals and as a company.
          </h2>
          <button class="mt-6 text-sm border border-gray-300 rounded px-5 py-2 hover:bg-gray-50 transition-colors">
            View all insights
          </button>
        </div>

        <div class="max-w-6xl mx-auto px-4 mt-12">
          <div class="relative flex items-center gap-4 justify-center">
            <button class="hidden md:flex w-9 h-9 rounded-full border border-gray-300 items-center justify-center text-gray-500 hover:bg-gray-50 shrink-0" aria-label="Previous">
              <i data-lucide="chevron-left" class="w-5 h-5"></i>
            </button>
            <div class="flex flex-wrap justify-center gap-6 flex-1">
              ${INSIGHTS.map(renderInsightCard).join('')}
            </div>
            <button class="hidden md:flex w-9 h-9 rounded-full border border-gray-300 items-center justify-center text-gray-500 hover:bg-gray-50 shrink-0" aria-label="Next">
              <i data-lucide="chevron-right" class="w-5 h-5"></i>
            </button>
          </div>
        </div>
      </section>
    `;
  }
};
