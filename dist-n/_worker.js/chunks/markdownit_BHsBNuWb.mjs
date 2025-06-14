globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getDefaultExportFromCjs } from './astro/server_COiPld1w.mjs';
import { r as requireMarkdownit } from './index_BXzYFCyx.mjs';

function _mergeNamespaces(n, m) {
	for (var i = 0; i < m.length; i++) {
		const e = m[i];
		if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
			if (k !== 'default' && !(k in n)) {
				const d = Object.getOwnPropertyDescriptor(e, k);
				if (d) {
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: () => e[k]
					});
				}
			}
		} }
	}
	return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

var markdownitExports = requireMarkdownit();
const markdownit = /*@__PURE__*/getDefaultExportFromCjs(markdownitExports);

const markdownit$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: markdownit
}, [markdownitExports]);

export { markdownit$1 as m };
