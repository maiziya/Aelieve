// Top navigation bar
const NAV_LINKS = ['We Do', 'We Help', 'Work', 'We Are', 'Insights'];

function renderNavLinks() {
  return NAV_LINKS.map(
    (link) => `
      <a href="#" class="text-base text-gray-800 hover:text-gray-900 transition-colors font-medium">${link}</a>
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

function renderLogo() {
  return `
    <a href="#" class="flex items-center gap-3">
      <span class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
        <i data-lucide="navigation" class="w-5 h-5 text-white -rotate-12"></i>
      </span>
      <span class="text-2xl tracking-[0.45em] font-light text-gray-900">AELIEVE</span>
    </a>
  `;
}

export const Navbar = {
  render() {
    return `
      <header id="navbar" class="sticky top-0 z-40 bg-white border-b border-gray-100">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center h-20">
            ${renderLogo()}

            <div class="hidden md:flex items-center gap-10 ml-12">
              ${renderNavLinks()}
            </div>

            <div class="flex items-center gap-6 ml-auto">
              <button class="hidden sm:flex items-center justify-center text-gray-800 hover:text-gray-900" aria-label="Search">
                <i data-lucide="search" class="w-6 h-6"></i>
              </button>
              <button class="hidden sm:flex items-center justify-center text-gray-800 hover:text-gray-900" aria-label="Call us">
                <i data-lucide="phone" class="w-6 h-6"></i>
              </button>
              <a href="#" class="hidden sm:inline-flex items-center text-base font-medium border border-gray-300 rounded-md px-6 py-3 hover:bg-gray-50 transition-colors">
                Free Marketing Plan
              </a>
              <button id="mobile-menu-btn" class="md:hidden text-gray-800" aria-label="Open menu">
                <i data-lucide="menu" class="w-7 h-7"></i>
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
