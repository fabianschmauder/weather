package com.codecentric.weather

data class WeatherDto(val id: Long, val location: Location, val degree: Double, val type: WeatherType)

data class Location(val name: String, val longitude: Double, val latitude: Double)

enum class WeatherType {
    SUNNY,
    CLOUDY,
    RAINY
}