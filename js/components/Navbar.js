// Top navigation bar with hover dropdown submenus
const NAV_ITEMS = [
  {
    label: 'We Do',
    columns: [
      {
        title: 'Marketing',
        links: ['Search Engine Optimization', 'Paid Advertising (PPC)', 'Social Media Marketing', 'Email Marketing'],
      },
      {
        title: 'Creative',
        links: ['Web Design', 'Brand Identity', 'Video Production', 'Graphic Design'],
      },
      {
        title: 'Development',
        links: ['Web Development', 'App Development', 'eCommerce', 'Custom Software'],
      },
    ],
  },
  {
    label: 'We Help',
    columns: [
      {
        title: 'Industries',
        links: ['Healthcare', 'Real Estate', 'Legal', 'Home Services'],
      },
      {
        title: 'Business Size',
        links: ['Startups', 'Small Business', 'Enterprise', 'Franchises'],
      },
    ],
  },
  {
    label: 'Work',
    columns: [
      {
        title: 'Portfolio',
        links: ['Case Studies', 'Client Results', 'Featured Projects', 'Testimonials'],
      },
    ],
  },
  {
    label: 'We Are',
    columns: [
      {
        title: 'Company',
        links: ['About Us', 'Our Team', 'Careers', 'Culture'],
      },
      {
        title: 'Contact',
        links: ['Get in Touch', 'Locations', 'Partnerships'],
      },
    ],
  },
  {
    label: 'Insights',
    columns: [
      {
        title: 'Resources',
        links: ['Blog', 'Guides', 'Webinars', 'News'],
      },
    ],
  },
];

function renderDropdownColumns(columns) {
  return columns
    .map(
      (col) => `
        <div class="min-w-[180px]">
          <p class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">${col.title}</p>
          <ul class="flex flex-col gap-2">
            ${col.links
              .map(
                (link) => `
                  <li>
                    <a href="#" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">${link}</a>
                  </li>
                `
              )
              .join('')}
          </ul>
        </div>
      `
    )
    .join('');
}

function renderNavItem(item) {
  return `
    <div class="nav-item relative flex items-center h-20">
      <button class="nav-trigger flex items-center gap-1 text-base text-gray-800 hover:text-gray-900 transition-colors font-medium">
        ${item.label}
        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-400 transition-transform"></i>
      </button>
      <div class="nav-dropdown absolute left-0 top-full bg-white border border-gray-100 rounded-xl shadow-xl p-6 flex gap-10">
        ${renderDropdownColumns(item.columns)}
      </div>
    </div>
  `;
}

function renderNavLinks() {
  return NAV_ITEMS.map(renderNavItem).join('');
}

function renderMobileItem(item) {
  return `
    <div class="border-b border-gray-100">
      <button class="mobile-accordion-trigger w-full flex items-center justify-between py-3 text-base text-gray-800 font-medium">
        ${item.label}
        <i data-lucide="chevron-down" class="w-5 h-5 text-gray-400 transition-transform"></i>
      </button>
      <div class="mobile-accordion-panel hidden pb-3 pl-3">
        ${item.columns
          .map(
            (col) => `
              <p class="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-2 mb-1">${col.title}</p>
              ${col.links
                .map((link) => `<a href="#" class="block py-1.5 text-sm text-gray-600 hover:text-gray-900">${link}</a>`)
                .join('')}
            `
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderMobileLinks() {
  return NAV_ITEMS.map(renderMobileItem).join('');
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

            <div class="hidden md:flex items-center gap-8 ml-12">
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

        <div id="mobile-menu" class="md:hidden fixed inset-y-0 right-0 w-72 bg-white shadow-2xl z-50 mobile-menu p-6 overflow-y-auto">
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
    this.initMobileMenu();
    this.initMobileAccordions();
  },

  initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const close = document.getElementById('mobile-menu-close');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => menu.classList.add('open'));
    }
    if (close && menu) {
      close.addEventListener('click', () => menu.classList.remove('open'));
    }
  },

  initMobileAccordions() {
    const triggers = document.querySelectorAll('.mobile-accordion-trigger');
    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const panel = trigger.nextElementSibling;
        const icon = trigger.querySelector('[data-lucide="chevron-down"]');
        if (panel) panel.classList.toggle('hidden');
        if (icon) icon.classList.toggle('rotate-180');
      });
    });
  }
};
