// Top navigation bar
const NAV_LINKS = ['We Do', 'We Help', 'Work', 'We Are', 'Insights'];

function renderNavLinks() {
  return NAV_LINKS.map(
    (link) => `
      <a href="#" class="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium">${link}</a>
    `
  ).join('');
}

function renderMobileLinks() {
  return NAV_LINKS.map(
    (link) => `
      <a href="#" class="block py-3 text-base text-gray-700 hover:text-gray-900 border-b border-gray-100">${link}</a>
    `
  ).join('');
}

export const Navbar = {
  render() {
    return `
      <header id="navbar" class="sticky top-0 z-40 bg-white border-b border-gray-100">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <a href="#" class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                <i data-lucide="triangle" class="w-4 h-4 text-white"></i>
              </span>
              <span class="text-lg tracking-[0.3em] font-light text-gray-900">AELIEVE</span>
            </a>

            <div class="hidden md:flex items-center gap-8">
              ${renderNavLinks()}
            </div>

            <div class="flex items-center gap-4">
              <button class="hidden sm:flex items-center justify-center text-gray-700 hover:text-gray-900" aria-label="Search">
                <i data-lucide="search" class="w-5 h-5"></i>
              </button>
              <button class="hidden sm:flex items-center justify-center text-gray-700 hover:text-gray-900" aria-label="Call us">
                <i data-lucide="phone" class="w-5 h-5"></i>
              </button>
              <a href="#" class="hidden sm:inline-flex text-sm font-medium border border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition-colors">
                Free Marketing Plan
              </a>
              <button id="mobile-menu-btn" class="md:hidden text-gray-700" aria-label="Open menu">
                <i data-lucide="menu" class="w-6 h-6"></i>
              </button>
            </div>
          </div>
        </nav>

        <div id="mobile-menu" class="md:hidden fixed inset-y-0 right-0 w-72 bg-white shadow-2xl z-50 mobile-menu p-6">
          <div class="flex justify-end mb-6">
            <button id="mobile-menu-close" class="text-gray-700" aria-label="Close menu">
              <i data-lucide="x" class="w-6 h-6"></i>
            </button>
          </div>
          ${renderMobileLinks()}
          <a href="#" class="mt-6 block text-center text-sm font-medium border border-gray-300 rounded px-4 py-3 hover:bg-gray-50">
            Free Marketing Plan
          </a>
        </div>
      </header>
    `;
  },

  init() {
    const btn = document.getElementById('mobile-menu-btn');
    const close = document.getElementById('mobile-menu-close');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => menu.classList.add('open'));
    }
    if (close && menu) {
      close.addEventListener('click', () => menu.classList.remove('open'));
    }
  }
};
