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

				const html = updateImageReferences("<h2 id=\"daily-weather\">Daily Weather</h2>\n<blockquote>\n<p>Prepare yourself using real-time weather report service <a href=\"https://www.quizmate.tech/\">Weathering</a></p>\n</blockquote>\n<p>Weathering goes beyond just weather information by providing valuable pollution data. Stay informed about air quality levels, including pollutant concentrations and air pollution indexes. Understand the impact of pollution on your daily life and make informed decisions to protect your health and well-being.</p>\n<h4 id=\"team-contribution-skills-involve\">Team contribution skills involve</h4>\n<ul>\n<li>Javascript API fetching</li>\n<li>Stimulus</li>\n<li>CSS styled</li>\n</ul>\n<h5 id=\"github\"><a href=\"https://github.com/Subsystem24/weatheringapp\">GitHub</a></h5>");

				const frontmatter = {"title":"Weathering","publishDate":"2019-10-02T00:00:00.000Z","img":"/assets/weather.png","img_alt":"Soft pink and baby blue water ripples together in a subtle texture.","description":"We developed brand positioning and design assets for the launch\nof a new colored water product.\n","tags":["Design","Branding"]};
				const file = "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/content/work/h20.md";
				const url = undefined;
				function rawContent() {
					return "\n## Daily Weather\n\n> Prepare yourself using real-time weather report service <a href=\"https://www.quizmate.tech/\">Weathering</a>\n\nWeathering goes beyond just weather information by providing valuable pollution data. Stay informed about air quality levels, including pollutant concentrations and air pollution indexes. Understand the impact of pollution on your daily life and make informed decisions to protect your health and well-being.\n\n#### Team contribution skills involve\n\n- Javascript API fetching\n- Stimulus\n- CSS styled\n\n##### <a href=\"https://github.com/Subsystem24/weatheringapp\">GitHub</a>\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"daily-weather","text":"Daily Weather"},{"depth":4,"slug":"team-contribution-skills-involve","text":"Team contribution skills involve"},{"depth":5,"slug":"github","text":"GitHub"}];
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
