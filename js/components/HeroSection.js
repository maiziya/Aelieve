// Hero section with search bar
const QUICK_ACTIONS = ['Digital marketing services', 'Request a Free Marketing Plan'];

function renderQuickActions() {
  return QUICK_ACTIONS.map(
    (action) => `
      <button class="text-sm text-gray-700 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 transition-colors">
        ${action}
      </button>
    `
  ).join('');
}

export const HeroSection = {
  render() {
    return `
      <section class="bg-white pt-20 pb-16">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h1 class="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
            It all starts with <span class="text-gray-400">a vision</span>
          </h1>

          <div class="mt-10 max-w-2xl mx-auto">
            <div class="flex items-center gap-3 border border-gray-200 rounded-full shadow-sm px-5 py-3 search-input">
              <i data-lucide="search" class="w-5 h-5 text-gray-400 shrink-0"></i>
              <input
                type="text"
                value="I need a video"
                class="flex-1 outline-none text-base text-gray-700 bg-transparent"
                aria-label="Search"
              />
              <i data-lucide="mic" class="w-5 h-5 text-blue-500 shrink-0"></i>
            </div>
          </div>

          <div class="mt-6 flex flex-wrap items-center justify-center gap-4">
            ${renderQuickActions()}
          </div>
        </div>

        <div class="mt-24 flex justify-center">
          <button class="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors" aria-label="Play video">
            <i data-lucide="play" class="w-5 h-5 ml-0.5"></i>
          </button>
        </div>

        <div class="mt-16 max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-balance">Discover how we can evolve your vision.</h2>
          <p class="mt-4 text-lg text-gray-600">
            We've driven over <span class="font-semibold border-b-2 border-blue-400">194,047</span> leads for clients.
          </p>
        </div>
      </section>
    `;
  }
};
