import ucfirst from '../helpers/ucfirst'

module.exports = function(value, h) {

	if (typeof value!=='string') return '';

	if (typeof this.$slots[`h__${value}`]!=='undefined') {
		return this.$slots[`h__${value}`];
	}

	var derivedHeading = ucfirst(value.split("_").join(" "));

	if (!this.opts.headings.hasOwnProperty(value))
		return derivedHeading;

	if (typeof this.opts.headings[value]==='function') {
		if (h)
			return this.opts.headings[value].call(this.$parent, h);

		return derivedHeading;

	}

	return this.opts.headings[value];
}
