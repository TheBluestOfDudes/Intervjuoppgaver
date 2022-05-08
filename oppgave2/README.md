# Oppgave 2

## **Oppstart**

### **Docker Compose**

Dockerfiler vil bygge bilder for både API og database men har problemer med å koble til databasen når HOST miljøvariablet er satt til localhost. Fungerer hvis gjort om til IPv4 adressen istedet.

### **Node**

Kan kjære `node script.js` for å starte API serveren i terminalen, må da manuelt kjøre database konteineren.

## **API Bruk**

Følgende enderpukter finnes

- `'/'` og `'/all/` : Returnerer all produksjonplassers data sortert etter id. `'/'` automatiks router til `'/all/'`
- `'/id/:id/'` : Henter alle data til en produksjonsplass med en gitt id
- `'/coordinates/'` : Henter alle koordinatdata av alle produksjonsplasser, sortert etter id
- `'/coordinates/id/:id'` : Henter koordinatdata av en produksjonplass med en gitt id
