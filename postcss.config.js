'use strict'

module.exports = ({file}) => ({
	parser: file?.extname === '.sss' ? 'sugarss' : false,
	map: true,
	plugins: {
		'postcss-easy-import': {},
		'postcss-mixins': {},
		'postcss-for': {},
		'postcss-conditionals': {},
		'postcss-simple-vars': {},
		'postcss-functions': {
			functions: {
				em(px, base = 16) {
					const n = Number(px.replace(/\D/g, ''))
					return `${n / base}em`
				},
				encodeURI(svg) {
					return encodeURIComponent(svg)
				}
			}
		},
		'postcss-nested': {},
		autoprefixer: {},
		cssnano: {
			preset: ['default', {
				zindex: false
			}]
		}
	}
})
