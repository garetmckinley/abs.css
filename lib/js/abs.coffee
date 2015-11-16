abs_screen_breaks = {
	mobile: 600
	tablet: 768
	laptop: 1024
	desktop: 1200
	default: 4000
}

handleScreenSpecificElements = () ->
	for screen,width of abs_screen_breaks
		$(screen).each (index, element) =>
			if $(window).width() < width
				$(element).show()
			else
				$(element).hide()
	$(".abs").each (index, element) =>
		for screen,width of abs_screen_breaks
			if typeof $(element).data('class-'+screen) != 'undefined'
				if $(window).width() < width
					$(element).removeClass()
					$(element).data('class-'+screen)
					$(element).addClass 'abs'
					$(element).addClass $(element).data('class-'+screen)
					return
				else
					$(element).removeClass()
		if typeof $(element).data('min-height') != 'undefined'
			rows = 8
			row_height = $(element).parent().height() / rows
			row = null
			min_height = parseInt($(element).data('min-height'))
			for i in [1..8]
				$(element).removeClass 'row-'+i
			for i in [1..8]
				if min_height > row_height * i
					$(element).removeClass 'row-'+i
				else
					$(element).addClass 'row-'+i
					break
handleScreenSpecificElements()


$(window).resize () =>
	handleScreenSpecificElements()
