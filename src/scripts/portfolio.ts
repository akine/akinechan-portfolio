import { email } from '../data/portfolio';
type Language = 'ja' | 'en';
let language: Language = 'ja';
try {
  if (localStorage.getItem('portfolio-lang') === 'en') language = 'en';
} catch {
  /* Storage is optional. */
}
const languageButton =
  document.querySelector<HTMLButtonElement>('#lang-toggle');
const menuButton = document.querySelector<HTMLButtonElement>('#menu-toggle');
const menu = document.querySelector<HTMLElement>('#mobile-menu');
const setMenu = (open: boolean) => {
  if (!menu || !menuButton) return;
  menu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute(
    'aria-label',
    language === 'ja'
      ? open
        ? 'メニューを閉じる'
        : 'メニューを開く'
      : open
        ? 'Close menu'
        : 'Open menu',
  );
};
const applyLanguage = () => {
  document.documentElement.lang = language;
  document
    .querySelectorAll<HTMLElement>('[data-ja][data-en]')
    .forEach((element) => {
      element.textContent = element.dataset[language] || '';
    });
  document
    .querySelectorAll<HTMLAnchorElement>('[data-mail-ja]')
    .forEach((link) => {
      link.href =
        (language === 'ja' ? link.dataset.mailJa : link.dataset.mailEn) ||
        link.href;
    });
  if (languageButton)
    languageButton.textContent = language === 'ja' ? 'English' : '日本語';
  document.title =
    language === 'ja'
      ? '小城昭根 | 映像ディレクター・編集・AI開発 | Kojo Akine'
      : 'Kojo Akine | Director, Editor & Creative Developer';
  document
    .querySelector('#gallery-prev')
    ?.setAttribute(
      'aria-label',
      language === 'ja' ? '前の画像' : 'Previous image',
    );
  document
    .querySelector('#gallery-next')
    ?.setAttribute('aria-label', language === 'ja' ? '次の画像' : 'Next image');
  setMenu(false);
  const status = document.querySelector('#copy-status');
  if (status) status.textContent = '';
};
applyLanguage();
if (languageButton) languageButton.hidden = false;
languageButton?.addEventListener('click', () => {
  language = language === 'ja' ? 'en' : 'ja';
  applyLanguage();
  try {
    localStorage.setItem('portfolio-lang', language);
  } catch {
    /* Keep the current session usable. */
  }
});
if (menuButton) menuButton.hidden = false;
menuButton?.addEventListener('click', () =>
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true'),
);
menu
  ?.querySelectorAll('a')
  .forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu && !menu.hidden) {
    setMenu(false);
    menuButton?.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});
const track = document.querySelector<HTMLElement>('#gallery-track');
const gallery = document.querySelector<HTMLElement>('.gallery');
const slides = document.querySelectorAll<HTMLElement>('.gallery-slide');
const controls = document.querySelector<HTMLElement>('.gallery-controls');
let index = 0;
const showSlide = (next: number) => {
  index = (next + slides.length) % slides.length;
  if (track) track.style.transform = `translateX(-${index * 100}%)`;
  slides.forEach((slide, i) =>
    slide.setAttribute('aria-hidden', String(index !== i)),
  );
  const status = document.querySelector('#gallery-status');
  if (status)
    status.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
};
if (controls) controls.hidden = false;
document
  .querySelector('#gallery-prev')
  ?.addEventListener('click', () => showSlide(index - 1));
document
  .querySelector('#gallery-next')
  ?.addEventListener('click', () => showSlide(index + 1));
gallery?.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showSlide(index + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
let touchStart: { x: number; y: number } | null = null;
gallery?.addEventListener(
  'touchstart',
  (event) => {
    touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  },
  { passive: true },
);
gallery?.addEventListener(
  'touchend',
  (event) => {
    if (!touchStart) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy))
      showSlide(index + (dx < 0 ? 1 : -1));
    touchStart = null;
  },
  { passive: true },
);
const copyButton = document.querySelector<HTMLButtonElement>('#copy-email');
if (copyButton) copyButton.hidden = false;
copyButton?.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(email);
    if (status)
      status.textContent = language === 'ja' ? 'コピーしました' : 'Copied';
  } catch {
    if (status)
      status.textContent =
        language === 'ja'
          ? 'アドレスを選択してコピーしてください'
          : 'Select the address to copy it';
  }
});
document
  .querySelectorAll<HTMLDetailsElement>('.lab-details')
  .forEach((details) =>
    details.addEventListener('toggle', () => {
      if (!details.open)
        details.querySelectorAll('video').forEach((video) => video.pause());
    }),
  );
