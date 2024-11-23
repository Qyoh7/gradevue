

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.sBr5StHU.js","_app/immutable/chunks/scheduler.BAVTa1Hq.js","_app/immutable/chunks/index.CW0Vd2qk.js"];
export const stylesheets = ["_app/immutable/assets/0.BXzfi0m2.css"];
export const fonts = [];
