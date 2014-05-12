# AngularJS - zadanie dla GUI

## Podsumowanie zadania

Zadanie wykonane:

1. W aplikacji można wybrać osoby (imię i nazwisko)
2. Aplikacja po wciśnięciu przycisku wysyła tablicę z osobami do API
3. API zwraca tablicę z osobami, z zamienionymi właściwościami fname i sname
4. Lista zostaje wyświetlona na ekranie
5. Aplikacja AngularJS posiada 7 testów jednostkowych

## Adnotacje

konieczne było wprowadzenie zmian w pliku NodeJS (załączony do repozytorium jako server.js)

* Zamiast odpowiadać na pojedyncze requesty z fname i sname, API przyjmuje teraz tablicę obiektów z fname i sname i przetwarza ją w ten sam sposób
* Dodano wsparcie dla CORS
* Dodano wsparcie dla requestów typu OPTIONS (AngularJS standardowo wysyła takie przez requestami typu POST)

odnośnie samej aplikacji:
* Aplikacja zbudowana przy wykorzystaniu Yeoman
* Aplikację można uruchomić w wersji deweloperskiej poprzez wpisanie komendy *grunt serve*
* Aplikację można zbudować do wersji produkcyjnej poprzez wpisanie komendy *grunt build* (zostanie utworzona w katalogu *dist*)
* Testy można uruchomić poprzez komendę *grunt test*
* Wersja produkcyjna nie jest zawarta w tym repozytorium. Zostanie ona przesłana na email
