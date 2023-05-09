def on_forever():
    led.plot_bar_graph(input.acceleration(Dimension.X), 1000)
basic.forever(on_forever)
