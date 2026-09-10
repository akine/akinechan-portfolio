export interface Localized {
  ja: string;
  en: string;
}
export interface Work {
  title: Localized;
  category: string;
  role: Localized;
  description: Localized;
  url: string;
  youtube?: string;
}
export const works: Work[] = [
  {
    title: { ja: 'CUL DRAMA', en: 'CUL DRAMA' },
    category: 'SHORT DRAMA',
    youtube: 'StRwGB4z9tM',
    role: { ja: '企画・監督・編集', en: 'Planning / Direction / Editing' },
    description: {
      ja: 'ティーン向けの学園ショートドラマ。物語の企画から演出、最終編集までを担当。',
      en: 'Teen drama, from story planning and on-set direction through the final edit.',
    },
    url: 'https://www.youtube.com/watch?v=StRwGB4z9tM',
  },
  {
    title: { ja: 'めるぷち official', en: 'Merupuchi official' },
    category: 'MUSIC VIDEO',
    youtube: '3tHl6a6tjMY',
    role: { ja: '編集・2Dエフェクト・VFX', en: 'Editing / 2D Effects / VFX' },
    description: {
      ja: '楽曲のテンポに合わせた編集と、2Dエフェクト・VFXによる映像表現を担当。',
      en: 'Music-led editing with 2D effects and VFX, bringing rhythm and visual energy to the music video.',
    },
    url: 'https://youtu.be/3tHl6a6tjMY',
  },
  {
    title: { ja: 'ファントムシータ', en: 'Phantom Siita' },
    category: 'ENTERTAINMENT',
    youtube: 'xDXpPpCxRuA',
    role: { ja: '編集', en: 'Editing' },
    description: {
      ja: 'Adoプロデュースのアイドルグループ。誕生日企画動画の編集を担当し、3日で納品。',
      en: 'Birthday video editing for the idol group produced by Ado, delivered in three days.',
    },
    url: 'https://www.youtube.com/watch?v=xDXpPpCxRuA',
  },
  {
    title: { ja: 'VFX / Blender', en: 'VFX / Blender' },
    category: 'PERSONAL WORK',
    role: { ja: 'VFX制作', en: 'VFX Production' },
    description: {
      ja: 'Blenderを使った自主制作のVFX動画。TikTokで100万再生を突破。',
      en: 'An independent VFX video made with Blender, with over one million views on TikTok.',
    },
    url: 'https://www.tiktok.com/@akine1818/video/6833870784293801218',
  },
];
export const otherWorks = [
  {
    title: 'DMM TV「TTM（たったら負け）」',
    en: 'DMM TV — TTM',
    role: 'オフライン編集',
    roleEn: 'Offline editing',
    url: 'https://tv.dmm.com/shorts/detail/?season=gfkw9ar3v5stxz83bvabgjpbg',
  },
  {
    title: 'FUMAKILLA / TikTokシリーズ',
    en: 'FUMAKILLA / TikTok series',
    role: '編集・一部撮影',
    roleEn: 'Editing / Additional shooting',
    url: 'https://www.tiktok.com/@fumakilla_jp/video/7526839555647999240',
  },
  {
    title: 'ショートドラマ / 監督・編集',
    en: 'Short drama / Direction & editing',
    role: '監督・編集',
    roleEn: 'Direction / Editing',
    url: 'https://youtu.be/sdFzPconxMU',
  },
  {
    title: 'ショートドラマ / 企画・監督・編集',
    en: 'Short drama / Planning to final edit',
    role: '企画・監督・編集',
    roleEn: 'Planning / Direction / Editing',
    url: 'https://youtu.be/Yf-x1o9uxJE',
  },
];
export const services = [
  {
    number: '01',
    label: 'DIRECTION & EDITING',
    title: { ja: '映像を、完成まで。', en: 'From story to final cut.' },
    description: {
      ja: 'ショートドラマ、MV、YouTube、SNS動画。企画・演出から編集まで、必要な工程から参加します。',
      en: 'Short dramas, music videos, YouTube and social content. Bring me in for the whole production or the stage you need.',
    },
    items: {
      ja: '企画・構成 / 監督 / 編集 / VFX',
      en: 'Planning / Direction / Editing / VFX',
    },
  },
  {
    number: '02',
    label: 'CREATIVE DIRECTION',
    title: { ja: '演出を、体験に。', en: 'Turn a concept into an experience.' },
    description: {
      ja: 'ライブ・ステージ映像のコンセプト設計とクリエイティブディレクション。CG制作チームと連携して形にします。',
      en: 'Visual concepts and creative direction for live shows and stage screens, developed in collaboration with CG teams.',
    },
    items: {
      ja: 'コンセプト設計 / 映像演出 / 制作連携',
      en: 'Concept design / Screen visuals / Collaboration',
    },
  },
  {
    number: '03',
    label: 'AI & DEVELOPMENT',
    title: {
      ja: 'つくる仕組みも、つくる。',
      en: 'Build the tools behind the work.',
    },
    description: {
      ja: 'AIビジュアル生成、制作フローの自動化、Webアプリ開発。映像制作の現場で必要な仕組みを実装します。',
      en: 'AI visuals, workflow automation and web applications. Practical tools built with an understanding of creative production.',
    },
    items: {
      ja: 'ComfyUI / Webアプリ / Bot / 自動化',
      en: 'ComfyUI / Web apps / Bots / Automation',
    },
  },
];
export const email = 'kojo@akinechan.com';
export const mailto = `mailto:${email}?subject=${encodeURIComponent('制作・お仕事のご相談')}&body=${encodeURIComponent('ご依頼・募集内容：\n\n希望納期・開始時期：\n\nご予算（未定でも構いません）：\n\n参考リンク：\n\nお名前・会社名：\n')}`;
export const mailtoEn = `mailto:${email}?subject=${encodeURIComponent('Project / work inquiry')}&body=${encodeURIComponent('Project or role:\n\nDeadline / start date:\n\nBudget (if known):\n\nReference links:\n\nName / company:\n')}`;
