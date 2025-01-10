export const isLocalHost = (): boolean => {
  return globalThis.window.location.hostname.includes("localhost");
};
