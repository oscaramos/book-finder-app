let timeout

function debounce(func, wait, immediate) {
	return function () {
		let context = this, args = arguments
		clearTimeout(timeout)
		timeout = setTimeout(function () {
			timeout = null
			if (!immediate) func.apply(context, args)
		}, wait)
		if (immediate && !timeout) func.apply(context, args)
	}
}

function onStopTyping(time, fn) {
	return debounce(fn, time)()
}

export default onStopTyping
