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

				const html = updateImageReferences("<h2 id=\"always-be-ready\">Always be Ready</h2>\n<blockquote>\n<p>Simplifying Operation Room Booking for Doctors and Hospitals with <a href=\"https://medease.herokuapp.com/\">MedEase</a></p>\n</blockquote>\n<p><a href=\"https://medease.herokuapp.com/\">MedEase</a> is a groundbreaking platform designed to streamline the process of finding and booking operation rooms for medical procedures. Built using Ruby on Rails, JavaScript, and Tailwind CSS,  <a href=\"https://medease.herokuapp.com/\">MedEase</a> empowers doctors to effortlessly discover available operation rooms, while hospitals and organizations can efficiently rent out their facilities. With comprehensive CRUD functionality, user authorization, and a seamless booking system,  <a href=\"https://medease.herokuapp.com/\">MedEase</a> revolutionizes the way medical professionals access essential resources.</p>\n<p>For doctors,  <a href=\"https://medease.herokuapp.com/\">MedEase</a> provides a user-friendly interface that allows easy navigation through a comprehensive database of operation rooms. With just a few clicks, doctors can search for available rooms based on their preferred location, date, and specific requirements.  <a href=\"https://medease.herokuapp.com/\">MedEase</a> ensures that doctors have quick and convenient access to the resources they need, enabling them to focus on delivering optimal patient care.</p>\n<h4 id=\"implemented-skills\">Implemented skills</h4>\n<ul>\n<li>Backend development by Rails</li>\n<li>Frontend development by Rails || JavaScript || TailWindCSS</li>\n<li>CRUD || User Gem Authorization || Booking system</li>\n</ul>\n<h5 id=\"github\"><a href=\"https://github.com/dmalmq/medease\">GitHub</a></h5>");

				const frontmatter = {"title":"MedEase","publishDate":"2019-12-01T00:00:00.000Z","img":"/assets/medese_index.png","img_alt":"medese index page","description":"Serves as a platform where doctors can easily find and book operation rooms for medical procedures, while hospitals or organizations can efficiently rent out their available rooms.\n","tags":["Dev","User Authorization","Backend"]};
				const file = "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/content/work/bloom-box.md";
				const url = undefined;
				function rawContent() {
					return "\n## Always be Ready\n\n> Simplifying Operation Room Booking for Doctors and Hospitals with <a href=\"https://medease.herokuapp.com/\">MedEase</a>\n\n <a href=\"https://medease.herokuapp.com/\">MedEase</a> is a groundbreaking platform designed to streamline the process of finding and booking operation rooms for medical procedures. Built using Ruby on Rails, JavaScript, and Tailwind CSS,  <a href=\"https://medease.herokuapp.com/\">MedEase</a> empowers doctors to effortlessly discover available operation rooms, while hospitals and organizations can efficiently rent out their facilities. With comprehensive CRUD functionality, user authorization, and a seamless booking system,  <a href=\"https://medease.herokuapp.com/\">MedEase</a> revolutionizes the way medical professionals access essential resources.\n\nFor doctors,  <a href=\"https://medease.herokuapp.com/\">MedEase</a> provides a user-friendly interface that allows easy navigation through a comprehensive database of operation rooms. With just a few clicks, doctors can search for available rooms based on their preferred location, date, and specific requirements.  <a href=\"https://medease.herokuapp.com/\">MedEase</a> ensures that doctors have quick and convenient access to the resources they need, enabling them to focus on delivering optimal patient care.\n\n#### Implemented skills\n\n- Backend development by Rails\n- Frontend development by Rails || JavaScript || TailWindCSS\n- CRUD || User Gem Authorization || Booking system\n\n##### <a href=\"https://github.com/dmalmq/medease\">GitHub</a>\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"always-be-ready","text":"Always be Ready"},{"depth":4,"slug":"implemented-skills","text":"Implemented skills"},{"depth":5,"slug":"github","text":"GitHub"}];
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
