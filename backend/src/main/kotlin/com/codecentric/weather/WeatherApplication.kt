package com.codecentric.weather

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class WeatherApplication

fun main(args: Array<String>) {
    SpringApplication.run(WeatherApplication::class.java, *args)
}
