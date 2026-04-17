let url = "https://api.weather.gov/gridpoints/OKX/41,52/forecast";

function grabMyData(data) {

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let currentForecast = data.properties.periods[0].shortForecast
  let currentTemp = data.properties.periods[0].temperature
  let isDaytime = data.properties.periods[0].isDaytime

  // let currentForecast = "Snow"
  // let isDaytime = false

  console.log("Short forecast: " + currentForecast)

  let forecastArray = currentForecast.split(" ")

  console.log("isDaytime = " + isDaytime)

  for (let i = 0; i < forecastArray.length; i++) {
    let random = getRandomNumber(1, 3)
    if (forecastArray[i] == "Snow") {
      if (isDaytime == true) {
        $("body").css("background-image", "url(./assets/snow-daytime" + random + ".jpg)")
        if (random == 1) {
          $("h4").text("I'm Thinking of Ending Things (2020)")
          $("a").attr("href", "https://www.themoviedb.org/movie/500840-i-m-thinking-of-ending-things")

        } else if (random == 2) {
          $("h4").text("Star Wars: Episode V - The Empire Strikes Back (1980)")
          $("a").attr("href", "https://www.themoviedb.org/movie/1891-the-empire-strikes-back")

        } else if (random == 3) {
          $("h4").text("Blade Runner 2049 (2017)")
          $("a").attr("href", "https://www.themoviedb.org/movie/335984-blade-runner-2049")

        }

      } else if (isDaytime == false) {
        $("body").css("background-image", "url(./assets/snow-nighttime" + random + ".jpg)")
        if (random == 1) {
          $("h4").text("Prisoners (2013)")
          $("a").attr("href", "https://www.themoviedb.org/movie/146233-prisoners")

        } else if (random == 2) {
          $("h4").text("Game of Thrones (2011-2019)")
          $("a").attr("href", "https://www.themoviedb.org/tv/1399-game-of-thrones")

        } else if (random == 3) {
          $("h4").text("The Grand Budapest Hotel (2014)")
          $("a").attr("href", "https://www.themoviedb.org/movie/120467-the-grand-budapest-hotel")

        }
      }
      break

    } else if (forecastArray[i] == "Thunderstorms") {
      if (isDaytime == true) {
        $("body").css("background-image", "url(./assets/thunderstorms-daytime" + random + ".jpg)")
        if (random == 1) {
          $("h4").text("Mad Max: Fury Road (2015)")
          $("a").attr("href", "https://www.themoviedb.org/movie/76341-mad-max-fury-road")

        } else if (random == 2) {
          $("h4").text("The Avengers (2012)")
          $("a").attr("href", "https://www.themoviedb.org/movie/24428-the-avengers")

        } else if (random == 3) {
          $("h4").text("Take Shelter (2011)")
          $("a").attr("href", "https://www.themoviedb.org/movie/64720-take-shelter")

        }

      } else if (isDaytime == false) {
        $("body").css("background-image", "url(./assets/thunderstorms-nighttime" + random + ".jpg)")
        if (random == 1) {
          $("h4").text("Spider-Man 3 (2007)")
          $("a").attr("href", "https://www.themoviedb.org/movie/559-spider-man-3")

        } else if (random == 2) {
          $("h4").text("Stranger Things (2016-2025)")
          $("a").attr("href", "https://www.themoviedb.org/tv/66732-stranger-things")

        } else if (random == 3) {
          $("h4").text("The Shawshank Redemption (1994)")
          $("a").attr("href", "https://www.themoviedb.org/movie/278-the-shawshank-redemption")

        }
      }
      break

    } else if (forecastArray[i] == "Rain" || forecastArray[i] == "Showers" || forecastArray[i] == "Drizzle") {
      if (isDaytime == true) {
        $("body").css("background-image", "url(./assets/rain-daytime" + random + ".jpg)")
        if (random == 1) {
          $("h4").text("Se7en (1995)")
          $("a").attr("href", "https://www.themoviedb.org/movie/807-se7en")

        } else if (random == 2) {
          $("h4").text("A Big Bold Beautiful Journey (2025)")
          $("a").attr("href", "https://www.themoviedb.org/movie/1241921-a-big-bold-beautiful-journey")

        } else if (random == 3) {
          $("h4").text("Prisoners (2013)")
          $("a").attr("href", "https://www.themoviedb.org/movie/146233-prisoners")

        }

      } else if (isDaytime == false) {
        $("body").css("background-image", "url(./assets/rain-nighttime" + random + ".jpg)")
        if (random == 1) {
          $("h4").text("Star Wars: Episode II - Attack of the Clones (2002)")
          $("a").attr("href", "https://www.themoviedb.org/movie/1894-star-wars-episode-ii-attack-of-the-clones")

        } else if (random == 2) {
          $("h4").text("Spider-Man: No Way Home (2021)")
          $("a").attr("href", "https://www.themoviedb.org/movie/634649-spider-man-no-way-home")

        } else if (random == 3) {
          $("h4").text("The Social Network (2010)")
          $("a").attr("href", "https://www.themoviedb.org/movie/37799-the-social-network")

        }
      }

    } else if (forecastArray[i] == "Overcast") {
      random = getRandomNumber(1, 4)
      if (isDaytime == true) {
        $("body").css("background-image", "url(./assets/overcast-daytime" + random + ".jpg)")
        if (random == 1) {
          $("h4").text("Blade Runner 2049 (2017)")
          $("a").attr("href", "https://www.themoviedb.org/movie/335984-blade-runner-2049")

        } else if (random == 2) {
          $("h4").text("Prisoners (2013)")
          $("a").attr("href", "https://www.themoviedb.org/movie/146233-prisoners")

        } else if (random == 3) {
          $("h4").text("The Batman (2022)")
          $("a").attr("href", "https://www.themoviedb.org/movie/414906-the-batman")

        } else if (random == 4) {
          $("h4").text("The Banshees of Inisherin (2022)")
          $("a").attr("href", "https://www.themoviedb.org/movie/674324-the-banshees-of-inisherin")

        }

      } else if (isDaytime == false) {
        $("body").css("background-image", "url(./assets/overcast-nighttime" + random + ".jpg)")
        if (random == 1) {
          $("h4").text("Marvel's Daredevil (2015-2018)")
          $("a").attr("href", "https://www.themoviedb.org/tv/61889-marvel-s-daredevil")

        } else if (random == 2) {
          $("h4").text("The Dark Knight (2008)")
          $("a").attr("href", "https://www.themoviedb.org/movie/155-the-dark-knight")

        } else if (random == 3) {
          $("h4").text("One Battle After Another (2025)")
          $("a").attr("href", "https://www.themoviedb.org/movie/1054867-one-battle-after-another")

        } else if (random == 4) {
          $("h4").text("Wake Up Dead Man: A Knives Out Mystery (2025)")
          $("a").attr("href", "https://www.themoviedb.org/movie/812583-wake-up-dead-man-a-knives-out-mystery")

        }
      }
    } else if (forecastArray[i] == "Cloudy") {
      random = getRandomNumber(1, 4)
      if (isDaytime == true) {
        $("body").css("background-image", "url(./assets/cloudy-daytime" + random + ".jpg)")
        if (random == 1) {
          $("h4").text("Arrival (2016)")
          $("a").attr("href", "https://www.themoviedb.org/movie/329865-arrival")

        } else if (random == 2) {
          $("h4").text("Dune (2021)")
          $("a").attr("href", "https://www.themoviedb.org/movie/438631-dune")

        } else if (random == 3) {
          $("h4").text("Thunderbolts* (2025)")
          $("a").attr("href", "https://www.themoviedb.org/movie/986056-thunderbolts")

        } else if (random == 4) {
          $("h4").text("Better Call Saul (2015-2022)")
          $("a").attr("href", "https://www.themoviedb.org/tv/60059-better-call-saul")

        }
      } else if (isDaytime == false) {
        $("body").css("background-image", "url(./assets/cloudy-nighttime" + random + ".jpg)")
        if (random == 1) {
          $("h4").text("The Life of Chuck (2024)")
          $("a").attr("href", "https://www.themoviedb.org/movie/842924-the-life-of-chuck")

        } else if (random == 2) {
          $("h4").text("Andor (2022-2025)")
          $("a").attr("href", "https://www.themoviedb.org/tv/83867-andor")

        } else if (random == 3) {
          $("h4").text("The Fantastic 4: First Steps (2025)")
          $("a").attr("href", "https://www.themoviedb.org/movie/617126-the-fantastic-4-first-steps")

        } else if (random == 4) {
          $("h4").text("The White Lotus (2021-)")
          $("a").attr("href", "https://www.themoviedb.org/tv/111803-the-white-lotus")

        }
      }
    } else if (forecastArray[i] == "Sunny") {
      random = getRandomNumber(1, 5)
      $("body").css("background-image", "url(./assets/sunny" + random + ".jpg)")
      if (random == 1) {
        $("h4").text("Interstellar (2014)")
        $("a").attr("href", "https://www.themoviedb.org/movie/157336-interstellar")

      } else if (random == 2) {
        $("h4").text("Nightcrawler (2014)")
        $("a").attr("href", "https://www.themoviedb.org/movie/242582-nightcrawler")

      } else if (random == 3) {
        $("h4").text("Better Call Saul (2015-2022)")
        $("a").attr("href", "https://www.themoviedb.org/tv/60059-better-call-saul")

      } else if (random == 4) {
        $("h4").text("Sorry, Baby (2025)")
        $("a").attr("href", "https://www.themoviedb.org/movie/1205515-sorry-baby")

      } else if (random == 5) {
        $("h4").text("Ex Machina (2015)")
        $("a").attr("href", "https://www.themoviedb.org/movie/264660-ex-machina")

      }
    } else if (forecastArray[i] == "Clear") {
      if (isDaytime == true) {
        random = getRandomNumber(1, 4)
        $("body").css("background-image", "url(./assets/clear-daytime" + random + ".jpg)")
        if (random == 1) {
          $("h4").text("Edward Scissorhands (1990)")
          $("a").attr("href", "https://www.themoviedb.org/movie/162-edward-scissorhands")

        } else if (random == 2) {
          $("h4").text("Interstellar (2014)")
          $("a").attr("href", "https://www.themoviedb.org/movie/157336-interstellar")

        } else if (random == 3) {
          $("h4").text("Better Call Saul (2015-2022)")
          $("a").attr("href", "https://www.themoviedb.org/tv/60059-better-call-saul")

        } else if (random == 4) {
          $("h4").text("Columbus (2017)")
          $("a").attr("href", "https://www.themoviedb.org/movie/414453-columbus")

        }
      } else if (isDaytime == false) {
        $("body").css("background-image", "url(./assets/clear-nighttime" + random + ".jpg)")

        if (random == 1) {
          $("h4").text("La La Land (2016)")
          $("a").attr("href", "https://www.themoviedb.org/movie/313369-la-la-land")

        } else if (random == 2) {
          $("h4").text("Nightcrawler (2014)")
          $("a").attr("href", "https://www.themoviedb.org/movie/242582-nightcrawler")

        } else if (random == 3) {
          $("h4").text("Pluribus (2025-)")
          $("a").attr("href", "https://www.themoviedb.org/tv/225171-pluribus")

        }
      }
    }
  }

  $("#temperature").text(currentTemp + "°F");
  $("#forecast").text(currentForecast)

}
$.getJSON(url, grabMyData);
