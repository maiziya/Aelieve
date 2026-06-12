// Case studies / portfolio results section
const IMG_API = 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image';

function caseImage(prompt) {
  return `${IMG_API}?prompt=${encodeURIComponent(prompt)}&size=1024x1024`;
}

const TABS = ['All Projects', 'Web Design Projects', 'Creative Design Projects', 'Social Media Marketing'];

const CASES = [
  {
    name: 'Boom Boom Sportfishing',
    stat: '881.76%',
    metric: 'Increase conversion rate',
    prompt: 'hand holding smartphone showing sportfishing booking website blue, top view'
  },
  {
    name: '4Front Roofing',
    stat: '810.97%',
    metric: 'Increase conversion rate',
    prompt: 'hand holding smartphone showing roofing company website, top view'
  },
  {
    name: 'Indiana Regional Imaging Center',
    stat: '278%',
    metric: 'Appointment Requests',
    prompt: 'medical imaging center MRI room with monitors, healthcare facility'
  }
];

function renderTab(tab, index) {
  const active = index === 0 ? 'tab-active' : 'text-gray-600 border border-gray-300';
  return `<button class="case-tab text-sm rounded px-4 py-2 ${active}">${tab}</button>`;
}

function renderCaseCard(item) {
  return `
    <div class="flex-1 min-w-[280px] max-w-[320px]">
      <div class="rounded-lg overflow-hidden">
        <img src="${caseImage(item.prompt)}" alt="${item.name}" class="w-full h-72 object-cover" crossorigin="anonymous" />
      </div>
      <div class="flex items-end justify-between mt-4">
        <p class="text-sm font-medium text-gray-700 max-w-[140px] leading-snug">${item.name}</p>
        <div class="text-right">
          <p class="text-3xl font-bold text-gray-300 flex items-center justify-end gap-1">
            ${item.stat} <i data-lucide="arrow-up" class="w-5 h-5"></i>
          </p>
          <p class="text-xs text-gray-400">${item.metric}</p>
        </div>
      </div>
    </div>
  `;
}

export const CaseStudiesSection = {
  render() {
    return `
      <section class="bg-white py-16">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <p class="text-sm text-gray-500 mb-3">Our Leading Digital Marketing Work</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-balance">
            Check out our experience getting real results for real brands.
          </h2>
        </div>

        <div class="max-w-7xl mx-auto px-4 mt-10">
          <div class="flex flex-wrap items-center justify-center gap-3">
            ${TABS.map(renderTab).join('')}
          </div>

          <div class="relative mt-10 flex items-center gap-6 justify-center">
            <button class="hidden md:flex w-9 h-9 rounded-full border border-gray-300 items-center justify-center text-gray-500 hover:bg-gray-50 shrink-0" aria-label="Previous">
              <i data-lucide="chevron-left" class="w-5 h-5"></i>
            </button>
            <div class="flex flex-wrap justify-center gap-6 flex-1">
              ${CASES.map(renderCaseCard).join('')}
            </div>
            <button class="hidden md:flex w-9 h-9 rounded-full border border-gray-300 items-center justify-center text-gray-500 hover:bg-gray-50 shrink-0" aria-label="Next">
              <i data-lucide="chevron-right" class="w-5 h-5"></i>
            </button>
          </div>
        </div>
      </section>
    `;
  },

  init() {
    const tabs = document.querySelectorAll('.case-tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => {
          t.classList.remove('tab-active');
          t.classList.add('text-gray-600', 'border', 'border-gray-300');
        });
        tab.classList.add('tab-active');
        tab.classList.remove('text-gray-600', 'border', 'border-gray-300');
      });
    });
  }
};
