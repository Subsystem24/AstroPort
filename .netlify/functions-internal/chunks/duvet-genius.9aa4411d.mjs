import { k as createVNode, F as Fragment, s as spreadAttributes } from './astro.d38ce855.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h2 id=\"always-being-memorized\">Always being memorized</h2>\n<blockquote>\n<p>Sharing wonderful memories with <a href=\"https://subsystemsns.netlify.app/\">Subsystem24</a></p>\n</blockquote>\n<p><a href=\"https://subsystemsns.netlify.app/\">Subsystem24</a> is a revolutionary personal development platform designed to ignite your passion, inspire creativity, and foster personal growth. Built with ReactJS, Tailwind CSS, and powered by Sanity, <a href=\"https://subsystemsns.netlify.app/\">Subsystem24</a> offers a unique clone of Pinterest tailored exclusively for personal development enthusiasts like you.</p>\n<p>Discover a vast collection of curated content, ranging from insightful articles and motivational quotes to visually stunning images and immersive videos. With its intuitive user interface and seamless navigation, <a href=\"https://subsystemsns.netlify.app/\">Subsystem24</a> allows you to effortlessly explore a world of inspiration, motivation, and knowledge, all in one place.</p>\n<h4 id=\"implemented-skills\">Implemented skills</h4>\n<ul>\n<li>Backend development by Sanity</li>\n<li>Frontend development by ReactJS || TailWindCSS</li>\n<li>CRUD || Google Authorization</li>\n</ul>\n<h5 id=\"github\"><a href=\"https://github.com/Subsystem24/SNSPINterest\">GitHub</a></h5>");

				const frontmatter = {"title":"Subsystem24","publishDate":"2020-03-04T00:00:00.000Z","img":"/assets/ShareMe.png","img_alt":"Pearls of silky soft white cotton, bubble up under vibrant lighting","description":"A personal photo sharing platform by SANITY\n","tags":["Full-stack development","ReactJS","TailWindCSS"]};
				const file = "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/content/work/nested/duvet-genius.md";
				const url = undefined;
				function rawContent() {
					return "## Always being memorized\n\n> Sharing wonderful memories with <a href=\"https://subsystemsns.netlify.app/\">Subsystem24</a>\n\n<a href=\"https://subsystemsns.netlify.app/\">Subsystem24</a> is a revolutionary personal development platform designed to ignite your passion, inspire creativity, and foster personal growth. Built with ReactJS, Tailwind CSS, and powered by Sanity, <a href=\"https://subsystemsns.netlify.app/\">Subsystem24</a> offers a unique clone of Pinterest tailored exclusively for personal development enthusiasts like you.\n\nDiscover a vast collection of curated content, ranging from insightful articles and motivational quotes to visually stunning images and immersive videos. With its intuitive user interface and seamless navigation, <a href=\"https://subsystemsns.netlify.app/\">Subsystem24</a> allows you to effortlessly explore a world of inspiration, motivation, and knowledge, all in one place.\n\n#### Implemented skills\n\n- Backend development by Sanity\n- Frontend development by ReactJS || TailWindCSS\n- CRUD || Google Authorization\n\n##### <a href=\"https://github.com/Subsystem24/SNSPINterest\">GitHub</a>\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"always-being-memorized","text":"Always being memorized"},{"depth":4,"slug":"implemented-skills","text":"Implemented skills"},{"depth":5,"slug":"github","text":"GitHub"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
