// Site footer
const SOCIALS = ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'];

const FOOTER_COLUMNS = [
  {
    title: 'Digital Marketing Agency',
    links: ['Creative Design', 'Web Design', 'Digital Advertisement', 'Reputation Management', 'Social Media & Content', 'Lead Nurturing', 'Strategy & Consulting']
  },
  {
    title: 'About Us',
    links: ['Our Process', 'Our Values', 'Our Team', 'Testimonials', 'Careers', 'Newsroom', 'Blog']
  },
  {
    title: 'We Help',
    links: ['B2B', 'B2C', 'eCommerce', 'Franchises', 'Non-Profits', 'Retail']
  },
  {
    title: 'Contact',
    links: ['Digital Analysis', 'Request A Quote', 'Call Us', 'Email Us', 'Locations', 'Plans & Pricing', 'Impersonation Notice']
  }
];

const INSIGHT_COLUMNS = [
  {
    title: 'Insights',
    links: ['Adult', 'Apparel', 'Automotive', 'Beauty', 'Career & Education', 'Electronics', 'Entertainment']
  },
  {
    title: '',
    links: ['Finance', 'Food & Beverage', 'Gambling', 'Gaming', 'Health & Fitness', 'Home & Garden', 'Industrial', 'Legal & Government']
  },
  {
    title: '',
    links: ['Leisure', 'Management', 'News Media', 'Occasions', 'Online Communities', 'Outdoors & Hunting', 'People & Society', 'Pets & Animals']
  },
  {
    title: '',
    links: ['Publishing', 'Reference', 'Retail', 'Science & Mathematics', 'Sports', 'Telecommunication', 'Travel', 'View All']
  }
];

function renderSocial(icon) {
  return `
    <a href="#" class="text-gray-700 hover:text-gray-900" aria-label="${icon}">
      <i data-lucide="${icon}" class="w-5 h-5"></i>
    </a>
  `;
}

function renderColumn(col) {
  const heading = col.title
    ? `<h4 class="text-sm font-semibold text-gray-900 mb-3">${col.title}</h4>`
    : `<div class="h-3 mb-3"></div>`;
  const links = col.links
    .map((l) => `<li><a href="#" class="text-sm text-gray-500 hover:text-gray-900">${l}</a></li>`)
    .join('');
  return `
    <div class="flex-1 min-w-[160px]">
      ${heading}
      <ul class="flex flex-col gap-2">${links}</ul>
    </div>
  `;
}

export const Footer = {
  render() {
    return `
      <footer class="bg-white border-t border-gray-100 pt-12">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-gray-100">
            <div class="flex items-center gap-4">
              <span class="text-sm font-medium text-gray-700">Follow us</span>
              <div class="flex items-center gap-4">
                ${SOCIALS.map(renderSocial).join('')}
              </div>
            </div>
            <nav class="flex items-center gap-6">
              <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-900">About Us</a>
              <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-900">Our Work</a>
              <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-900">Contact Us</a>
            </nav>
          </div>

          <div class="flex flex-wrap gap-8 py-12">
            ${FOOTER_COLUMNS.map(renderColumn).join('')}
          </div>

          <div class="flex flex-wrap gap-8 pb-12">
            ${INSIGHT_COLUMNS.map(renderColumn).join('')}
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-gray-100">
            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span class="font-medium text-gray-700">Aelieve Digital Marketing</span>
              <a href="#" class="hover:text-gray-900">Privacy Policy</a>
              <span class="text-gray-300">|</span>
              <a href="#" class="hover:text-gray-900">Legal</a>
              <span class="text-gray-300">|</span>
              <a href="#" class="hover:text-gray-900">Sitemap</a>
            </div>
            <p class="text-sm text-gray-400">Copyright &copy; 2026 Aelieve One, LLC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
};
