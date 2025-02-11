import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DrEoVyW4.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_B1LbsB_M.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.querySelector(\"[data-toggle-nav]\"),a=document.querySelector(\"[data-navbar]\"),o=document.querySelector(\"[data-nav-overlay]\");t&&(t.addEventListener(\"click\",e=>{e.preventDefault(),t.getAttribute(\"data-open-nav\")===\"false\"?(t.setAttribute(\"data-open-nav\",\"true\"),o.setAttribute(\"data-is-visible\",\"true\"),document.body.classList.add(\"!overflow-y-hidden\"),a.style.height=`${a.scrollHeight}px`):(t.setAttribute(\"data-open-nav\",\"false\"),o.setAttribute(\"data-is-visible\",\"false\"),document.body.classList.remove(\"!overflow-y-hidden\"),a.style.height=\"0px\")}),a.addEventListener(\"click\",()=>{t.setAttribute(\"data-open-nav\",\"false\"),o.setAttribute(\"data-is-visible\",\"false\"),document.body.classList.remove(\"!overflow-y-hidden\"),a.style.height=\"0px\"}),o.addEventListener(\"click\",()=>{t.setAttribute(\"data-open-nav\",\"false\"),o.setAttribute(\"data-is-visible\",\"false\"),document.body.classList.remove(\"!overflow-y-hidden\"),a.style.height=\"0px\"}));s();const l=document.querySelector(\"[data-switch-theme]\");l.addEventListener(\"click\",e=>{e.preventDefault(),i()});function i(){const e=localStorage.getItem(\"theme\");e===\"light\"&&n(),e===\"dark\"&&d(),e||(console.log(\"previously it was not set\"),s(!0))}function s(e=!1){localStorage.getItem(\"theme\")===\"dark\"||!(\"theme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?(document.documentElement.classList.add(\"dark\"),e&&localStorage.setItem(\"theme\",\"dark\")):(document.documentElement.classList.remove(\"dark\"),e&&localStorage.setItem(\"theme\",\"light\"))}function n(){localStorage.setItem(\"theme\",\"dark\"),document.documentElement.classList.add(\"dark\")}function d(){localStorage.setItem(\"theme\",\"light\"),document.documentElement.classList.remove(\"dark\")}\n"}],"styles":[{"type":"external","src":"/_astro/index.Cmdz-zQG.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-manifest":"manifest_CTgTNnSn.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BdsHUlAI.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/starwood._sMWtOy_.png","/_astro/camsan.HcGFGsi1.png","/_astro/Kronospan.BecoPEyd.png","/_astro/yildiz.CMSvbxAO.png","/_astro/kastamonu.l5kVleO2.png","/_astro/Al-Sindyan.BrOzitGp.png","/_astro/visibility-dilemma.BfDZhPGG.jpg","/_astro/hero3.BPBvvnrp.jpg","/_astro/results-in-hibernation.DsTbz28B.jpg","/_astro/engagement-gap.qzeFcgei.jpg","/_astro/index.Cmdz-zQG.css","/favicon.svg","/style/custom.css"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"voejLVJqe93ZivlaknPmB6YW3uX5ev0/Ckve/wnaHo0=","experimentalEnvGetSecretEnabled":false});

export { manifest };
