import {Meteor} from 'meteor/meteor';

export default function () {

  Meteor.publish('questions.all', function () {
    // return Meteor.questions.find({});
    return {
      category: 'Flugpraxis',
      questions: [
        {
          number: 2,
          correct: 'B',
          title: "Wichtige Informationen, die der Pilot vor dem ersten Flug in einem ihm unbekannten Gelände einholen sollte sind u.a.",
          answers: [
            {
              pos: 'A', title: 'Name des Geländehalters und Luftraumstatus'
            },
            {
              pos: 'B', title: 'örtliche Flugregeln, Wetter- und Geländebesonderheiten'
            },
            {
              pos: 'C', title: 'besondere Vorflugregeln im Gelände'
            },
            {
              pos: 'D', title: 'Alle sind richtig'
            }
          ]
        },
        {
          number: 4,
          correct: 'B',
          title: "Der Pilot macht sich mit einem ihm unbekannten Gelände am besten vertraut indem er",
          answers: [
            {
              pos: 'A', title: 'zunächst einen Doppelsitzerflug mit einem Fluglehrer macht'
            },
            {
              pos: 'B', title: 'zunächst einige Flüge in den ruhigen Morgenstunden macht'
            },
            {
              pos: 'C',
              title: 'einen Flug bei starker Thermik macht um die Turbulenzbereiche des Geländes kennen zulernen'
            },
            {
              pos: 'D', title: 'eine topografische Karte des Gebietes gründlich studiert'
            }
          ]
        },
        {
          number: 5,
          correct: 'D',
          title: "Worauf ist bei der Beurteilung eines unbekannten Landeplatzes besonders zu achten?",
          answers: [
            {
              pos: 'A', title: 'Auf Stromleitungen, Zäune und die Position des Windsacks'
            },
            {
              pos: 'B', title: 'Auf Informationsschilder'
            },
            {
              pos: 'C',
              title: 'Auf die Hauptwindrichtung, Geländegefälle, Hindernisse, mögliche Leegebiete bei stärkerem Wind sowie die Möglichkeit der Landeeinteilung bei unterschiedlichen Windrichtungen'
            },
            {
              pos: 'D', title: 'Alle sind richtig'
            }
          ]
        },
        {
          number: 6,
          correct: 'D',
          title: "Abbildung 8: Die Abbildung zeigt einen Gleitschirmstartplatz. Startrichtung 180 Grad. Bei einem Südwind von 5-10 km/h",
          image: { title: 'image-8', url: '' },
          answers: [
            {
              pos: 'A', title: 'herrscht Rückenwind'
            },
            {
              pos: 'B', title: 'ist mit gefährlichen Turbulenzen über der Baumreihe zu rechnen'
            },
            {
              pos: 'C',
              title: 'ist der Aufwind zu schwach um sicher über die Baumreihe zu kommen'
            },
            {
              pos: 'D', title: 'herrschen ideale Startbedingungen'
            }
          ]
        }
      ]
    }
  });
}
