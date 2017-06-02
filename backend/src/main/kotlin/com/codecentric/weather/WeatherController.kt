package com.codecentric.weather

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/resource/weather")
class WeatherController {

    @GetMapping
    fun list() = listOf(
            WeatherDto(0, Location("Solingen",51.1620143,7.007027), 25.0, WeatherType.SUNNY),
            WeatherDto(1, Location("München",48.1368582,11.5216738), 17.0, WeatherType.CLOUDY),
            WeatherDto(2, Location("Berlin",52.5060352,13.3829538), 12.0, WeatherType.RAINY))
}