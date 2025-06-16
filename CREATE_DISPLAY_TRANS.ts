export const CreateDisplayTrans = {
  navigationPage: {
    createDisplay: {
      message: {
        en: "Create new display...",
        de: "Neues Display erstellen...",
      },
    },
    maxDisplay: {
      message: {
        en: "You have reached the limit of draft displays. Please complete or delete an existing draft display to create a new one",
        de: "Sie haben die maximale Anzahl an Entwürfen erreicht. Bitte vervollständigen oder löschen Sie einen bestehenden Entwurf, um ein neues Display zu erstellen.",
      },
      goToDisplayOverview: {
        en: "Go to Display overview",
        de: "Zur Displayübersicht gehen",
      },
    },
    unexpectedError: {
      message: {
        en: "Something went wrong",
        de: "Etwas ist schiefgelaufen",
      },
      button: {
        en: "Try again",
        de: "Erneut versuchen",
      },
    },
  },

  progressSteps: {
    generalInformation: {
      en: "General information",
      de: "Allgemeine Informationen",
    },
    Specifications: {
      en: "Specifications",
      de: "Spezifikationen",
    },
    Location: {
      en: "Location",
      de: "Standort",
    },
    Valuation: {
      en: "Valuation",
      de: "Bewertung",
    },
    playerToken: {
      en: "Player / Token",
      de: "Player / Token",
    },
  },
  forms: {
    steps: {
      generalInformation: {
        digitalSignageInformation: {
          header: {
            title: {
              en: "Information about your digital signage device (your display)",
              de: "Informationen zu Ihrem Digital Signage Gerät (Ihr Display)",
            },
            subtitle: {
              en: "Your digital signage device can be an LCD screen, floor stand screen, tablet, LED video wall, LCD panel, smartphone, or any other digital display device. Select your device type on the next page.",
              de: "Ihr Digital Signage Gerät kann ein LCD Bildschirm, ein LCD Floorstand, ein Tablet, eine LED Video Wall, ein LCD-Panel, ein Smartphone oder jedes andere digitale Ausgabegerät sein. Ihr Digitales Signage Gerät (Display) wählen Sie auf der nächsten Seite.",
            },
          },
          items: {
            title: {
              label: {
                en: "Title",
                de: "Titel",
              },
              placeHolder: {
                en: "Enter a title for your digital signage device",
                de: "Geben Sie einen Titel für Ihr Digital Signage Gerät ein",
              },
              validationMsg: {
                required: {
                  en: "Title field is required",
                  de: "Feld Titel ist erforderlich",
                },
                invalid: {
                  en: "Title field is invalid",
                  de: "Feld Titel ist ungültig",
                },
              },
            },
            description: {
              label: {
                en: "Description",
                de: "Beschreibung",
              },
              placeHolder: {
                en: "Enter a description for your digital signage device",
                de: "Geben Sie eine Beschreibung für Ihr Digital Signage Gerät ein",
              },
              validationMsg: {
                required: {
                  en: "Description field is required",
                  de: "Feld Beschreibung ist erforderlich",
                },
                invalid: {
                  en: "Description field is invalid",
                  de: "Feld Beschreibung ist ungültig",
                },
              },
            },
            keywords: {
              label: {
                en: "Keywords",
                de: "Schlüsselwörter",
              },
              placeHolder: {
                en: "Here you can enter your keywords",
                de: "Hier können Sie Ihre Schlüsselwörter eingeben",
              },
              validationMsg: {
                required: {
                  en: "Keywords field is required",
                  de: "Feld Schlüsselwörter ist erforderlich",
                },
                invalid: {
                  en: "Keywords field is invalid",
                  de: "Feld Schlüsselwörter ist ungültig",
                },
              },
            },
          },
        },
        displaySignageCategory: {
          header: {
            title: {
              en: "Create / select category",
              de: "Kategorie anlegen / auswählen",
            },
            subtitle: {
              en: "Create a category. Assign a category to your digital signage device",
              de: "Legen Sie eine Kategorie an. Ordnen Sie Ihrem Digital Signage Gerät eine Kategorie zu",
            },
          },
          items: {
            category: {
              label: {
                en: "Choose category",
                de: "Kategorie wählen",
              },
              placeHolder: {
                en: "Choose a category",
                de: "Kategorie auswählen",
              },
              validationMsg: {
                required: {
                  en: "Category field is required",
                  de: "Feld Kategorie ist erforderlich",
                },
                invalid: {
                  en: "Category field is invalid",
                  de: "Feld Kategorie ist ungültig",
                },
              },
            },
          },
        },
        accessibilityInformation: {
          accessibility: {
            header: {
              title: {
                en: "Information: Public / Private",
                de: "Information: Öffentlich / Privat",
              },
              subtitle: {
                en: "Here you indicate who you want to make the information on your display accessible to.",
                de: "Hier geben Sie an, wem Sie die Informationen auf Ihrem Display zugänglich machen möchten.",
              },
            },
            items: {
              public: {
                label: {
                  en: "Public",
                  de: "Öffentlich",
                },
                description: {
                  en: "The information on the digital signage device (display) is public and is generally made available to everyone (e.g. advertising, daily menu, hygiene instructions, etc.).",
                  de: "Die Informationen auf dem Digital Signage-Gerät (Display) sind öffentlich und werden in der Regel allen zur Verfügung gestellt (z. B. Werbung, Tageskarte, Hygieneanweisungen usw.).",
                },
              },
              private: {
                label: {
                  en: "Private",
                  de: "Privat",
                },
                description: {
                  en: "The information on the digital signage device (display) is confidential and is only made available to certain people (e.g. employee information, shift schedules, quarterly reports, etc.).",
                  de: "Die Informationen auf dem Digital Signage-Gerät (Display) sind vertraulich und werden nur bestimmten Personen zugänglich gemacht (z. B. Mitarbeiterinformationen, Schichtpläne, Quartalsberichte usw.).",
                },
              },
            },
            validationMsg: {
              required: {
                en: "Accessibility Information is required",
                de: "Zugänglichkeitsinformationen erforderlich",
              },
              invalid: {
                en: "Accessibility Information is invalid",
                de: "Zugänglichkeitsinformationen ungültig",
              },
            },
          },
          location: {
            header: {
              title: {
                en: "Location: External / Internal",
                de: "Standort: Extern / Intern",
              },
              subtitle: {
                en: "Here you indicate where you want to place your display",
                de: "Hier geben Sie an, wo Sie Ihr Display platzieren möchten",
              },
            },
            items: {
              external: {
                label: {
                  en: "External",
                  de: "Extern",
                },
                description: {
                  en: "The display is placed in such a way that the information is also visible outside of your own premises (e.g. visible to passers-by in the shop window).",
                  de: "Das Display ist so platziert, dass die Informationen auch außerhalb Ihrer eigenen Räumlichkeiten sichtbar sind (z. B. für Passanten im Schaufenster sichtbar).",
                },
              },
              internal: {
                label: {
                  en: "Internal",
                  de: "Intern",
                },
                description: {
                  en: "The display is placed in such a way that the information is visible within the company's own premises (e.g. visible to employees and customers in the store).",
                  de: "Das Display ist so platziert, dass die Informationen innerhalb der firmeneigenen Räumlichkeiten sichtbar sind (z. B. für Mitarbeiter und Kunden im Geschäft sichtbar).",
                },
              },
            },
            validationMsg: {
              required: {
                en: "Location Information is required",
                de: "Standortinformationen erforderlich",
              },
              invalid: {
                en: "Location Information is invalid",
                de: "Standortinformationen ungültig",
              },
            },
          },
        },
        sharingDisplay: {
          header: {
            title: {
              en: "Sharing your digital signage device (display)",
              de: "Teilen Ihres Digital Signage Gerätes (Display)",
            },
            subtitle: {
              en: "Decide here whether you want to share your own digital signage device with other KiData users.",
              de: "Entscheiden Sie hier, ob Sie Ihr eigenes Digital Signage Gerät mit anderen KiData Nutzern teilen möchten.",
            },
            description: {
              text: {
                en: "External advertising offers you an additional earning opportunity.",
                de: "Externe Werbung bietet Ihnen eine zusätzliche Verdienstmöglichkeit.",
              },
              link: {
                en: "Click here to learn more about it!",
                de: "Klicken Sie hier, um mehr darüber zu erfahren!",
              },
            },
          },
          items: {
            share: {
              label: {
                en: "Yes, share the display",
                de: "Ja, Display teilen",
              },
              description: {
                en: "I would like to share my digital signage device with other KiData partners and take advantage of this additional earning opportunity!",
                de: "Ich möchte mein Digital Signage Gerät mit anderen KiData Partnern teilen und diese zusätzliche Verdienstmöglichkeit nutzen!",
              },
            },
            notShare: {
              label: {
                en: "No, do not share the display",
                de: "Nein, Display nicht teilen",
              },
              description: {
                en: "I only want to use this digital signage device for my own content at the moment and do not want this additional income opportunity. Maybe later!",
                de: "Ich möchte dieses Digital Signage Gerät im Moment nur für meine eigenen Inhalte verwenden und diese zusätzliche Verdienstmöglichkeit nicht nutzen. Vielleicht später!",
              },
            },
            restrictionsShare: {
              label: {
                en: "Share the display with restrictions",
                de: "Display mit Einschränkungen teilen",
              },
              description: {
                en: "I only want to share this digital signage device with selected KiData partners.",
                de: "Ich möchte dieses Digital Signage Gerät nur mit ausgewählten KiData Partnern teilen.",
              },
            },
          },
          validationMsg: {
            required: {
              en: "Sharing Information is required",
              de: "Teilen Informationen erforderlich",
            },
            invalid: {
              en: "Sharing Information is invalid",
              de: "Teilen Informationen ungültig",
            },
          },
        },
        industryFilter: {
          header: {
            title: {
              en: "Industry filter for this digital signage device",
              de: "Branchenfilter für dieses Digital Signage Gerät",
            },
            subtitle: {
              en: "Which industries are not allowed to advertise on this digital signage device?",
              de: "Welche Branchen dürfen auf diesem Digital Signage Gerät keine Werbung schalten?",
            },
            description: {
              en: "In this tariff you can choose up to 3 sectors that are not allowed to advertise on this digital signage device. This selection only applies to this device!",
              de: "In diesem Tarif können Sie bis zu 3 Branchen auswählen, die auf diesem Digital Signage Gerät keine Werbung schalten dürfen. Diese Auswahl gilt nur für dieses Gerät!",
            },
          },
          items: {
            industries: {
              label: {
                en: "Industries",
                de: "Branchen",
              },
              placeHolder: {
                en: "Select industries you want to filter",
                de: "Branchen auswählen, die Sie filtern möchten",
              },
              validationMsg: {
                invalid: {
                  en: "Industry filter is invalid",
                  de: "Branchenfilter ist ungültig",
                },
              },
            },
          },
        },
        predefinedFilters: {
          header: {
            title: {
              en: "Predefined Filters",
              de: "Vordefinierte Filter",
            },
            subtitle: {
              en: "Select the filters you want to apply to this digital signage device.",
              de: "Wählen Sie die Filter aus, die Sie auf dieses Digital Signage Gerät anwenden möchten.",
            },
          },
          items: {
            predefinedFilters: {
              validationMsg: {
                invalid: {
                  en: "Predefined filter selection is invalid",
                  de: "Auswahl der vordefinierten Filter ist ungültig",
                },
              },
            },
          },
        },
        service: {
          serverError: {
            en: "There was an error contacting the server.",
            de: "Es gab einen Fehler bei der Kontaktaufnahme mit dem Server.",
          },
          serverSuccess: {
            en: "General information Submited ",
            de: "Allgemeine Informationen erfolgreich übermittelt",
          },
          invalid: {
            en: "General information is Invalid",
            de: "Allgemeine Informationen sind ungültig",
          },
          unauthorized: {
            en: "Unauthorized",
            de: "Nicht autorisiert",
          },
        },
      },
      specifications: {
        displayType: {
          header: {
            title: {
              en: "Information about your digital signage device (your display)",
              de: "Informationen zu Ihrem Digital Signage Gerät (Display)",
            },
            subtitle: {
              en: "Select your digital signage device. In KiData we now call all digital signage devices Display!",
              de: "Wählen Sie Ihr Digital Signage Gerät aus. In KiData nennen wir jetzt alle Digital Signage Geräte Display!",
            },
          },
          footer: {
            description: {
              en: "is selected as the display. Choosing the right display is important for KiData to work properly!",
              de: "wurde als Display ausgewählt. Die Wahl des richtigen Displays ist wichtig für die korrekte Funktion von KiData!",
            },
          },
          displayType: {
            items: {
              LCDScreen: {
                label: {
                  en: "LCD Screen",
                  de: "LCD Bildschirm",
                },
              },
              floorStandScreen: {
                label: {
                  en: "Floor Stand Screen",
                  de: "Bodenständer Bildschirm",
                },
              },
              tablet: {
                label: {
                  en: "Tablet",
                  de: "Tablet",
                },
              },
              LEDVideoWall: {
                label: {
                  en: "LED Video Wall",
                  de: "LED Videowand",
                },
              },
              LCDVideoWall: {
                label: {
                  en: "LCD Video Wall",
                  de: "LCD Videowand",
                },
              },
              smartPhone: {
                label: {
                  en: "Smart Phone",
                  de: "Smartphone",
                },
              },
              customScreen: {
                label: {
                  en: "Special formats on request",
                  de: "Sonderformate auf Anfrage",
                },
              },
            },
            validationMsg: {
              required: {
                en: "Display type field is required",
                de: "Das Feld Displaytyp ist erforderlich",
              },
              invalid: {
                en: "Display type field is invalid",
                de: "Das Feld Displaytyp ist ungültig",
              },
            },
          },
        },
        technicalSpecifications: {
          header: {
            title: {
              en: "Information about your digital signage device (your display)",
              de: "Informationen zu Ihrem Digital Signage Gerät (Ihr Display)",
            },
            subtitle: {
              en: "Your digital signage device can be an LCD screen, floor stand screen, tablet, LED video wall, LCD panel, smartphone, or any other digital display device. Select your device type on the next page.",
              de: "Ihr Digital Signage Gerät kann ein LCD-Bildschirm, ein Bodenständerbildschirm, ein Tablet, eine LED-Videowand, ein LCD-Panel, ein Smartphone oder ein anderes digitales Ausgabegerät sein. Wählen Sie Ihren Digital Signage Gerätetyp auf der nächsten Seite aus.",
            },
          },
          items: {
            brand: {
              label: {
                en: "Brand",
                de: "Marke",
              },
              placeHolder: {
                en: "Enter a Brand for your digital signage device",
                de: "Geben Sie eine Marke für Ihr Digital Signage Gerät ein",
              },
              validationMsg: {
                required: {
                  en: "Brand field is required",
                  de: "Markenfeld ist erforderlich",
                },
                invalid: {
                  en: "Brand field is invalid",
                  de: "Das Markenfeld ist ungültig",
                },
              },
            },
            model: {
              label: {
                en: "Model",
                de: "Modell",
              },
              placeHolder: {
                en: "Enter a Model of your display here",
                de: "Geben Sie hier ein Modell Ihres Displays ein",
              },
              validationMsg: {
                required: {
                  en: "Model field is required",
                  de: "Modellfeld ist erforderlich",
                },
                invalid: {
                  en: "Model field is invalid",
                  de: "Das Modellfeld ist ungültig",
                },
              },
            },
            serialNumber: {
              label: {
                en: "Serial number (service relevant)",
                de: "Seriennummer (service relevant)",
              },
              placeHolder: {
                en: "Enter the Serial number of your display here",
                de: "Geben Sie hier die Seriennummer Ihres Displays ein",
              },
              validationMsg: {
                required: {
                  en: "Serial number field is required",
                  de: "Feld für die Seriennummer ist erforderlich",
                },
                invalid: {
                  en: "Serial number field is invalid",
                  de: "Das Feld für die Seriennummer ist ungültig",
                },
              },
            },
            sound: {
              label: {
                en: "Sound",
                de: "Ton",
              },
              placeHolder: {
                en: "Is sound on your device enabled?",
                de: "Ist der Ton auf Ihrem Gerät aktiviert?",
              },
              items: {
                on: {
                  en: "on",
                  de: "an",
                },
                off: {
                  en: "off",
                  de: "aus",
                },
              },
            },
          },
        },
        operatingSystem: {
          header: {
            title: {
              en: "Operating system",
              de: "Betriebssystem",
            },
            subtitle: {
              en: "Which operating system does your display use to display the KiData content?",
              de: "Welches Betriebssystem verwendet Ihr Display, um die KiData-Inhalte anzuzeigen?",
            },
          },
          items: {
            operatingSystem: {
              label: {
                en: "Operating system",
                de: "Betriebssystem",
              },
              placeHolder: {
                en: "Select Operating system",
                de: "Betriebssystem auswählen",
              },
              items: {
                microsoftWindows: {
                  label: {
                    en: "Microsoft Windows",
                    de: "Microsoft Windows",
                  },
                },
                googleAndroid: {
                  label: {
                    en: "Google Android",
                    de: "Google Android",
                  },
                },
                appleIos: {
                  label: {
                    en: "Apple iOS",
                    de: "Apple iOS",
                  },
                },
                linux: {
                  label: {
                    en: "Linux",
                    de: "Linux",
                  },
                },
                LGWebOS: {
                  label: {
                    en: "LG WebOS",
                    de: "LG WebOS",
                  },
                },
              },
            },
          },
          validationMsg: {
            required: {
              en: "Operating system field is required",
              de: "Betriebssystemfeld ist erforderlich",
            },
            invalid: {
              en: "Operating system field is invalid",
              de: "Betriebssystemfeld ist ungültig",
            },
          },
        },
        alignment: {
          header: {
            title: {
              en: "Alignment",
              de: "Ausrichtung",
            },
            subtitle: {
              en: "What alignment is your display?",
              de: "Wie ist Ihr Display ausgerichtet?",
            },
          },
          items: {
            horizontal: {
              label: {
                en: "Landscape Orientation",
                de: "Querformat",
              },
            },
            vertical: {
              label: {
                en: "Portrait Orientation",
                de: "Hochformat",
              },
            },
            other: {
              label: {
                en: "Different format",
                de: "Anderes Format",
              },
            },
          },
          validationMsg: {
            required: {
              en: "Alignment field is required",
              de: "Ausrichtungsfeld ist erforderlich",
            },
            invalid: {
              en: "Alignment field is invalid",
              de: "Ausrichtungsfeld ist ungültig",
            },
          },
        },
        floorStandNumberOfScreens: {
          header: {
            title: {
              en: "Number of screens",
              de: "Anzahl der Bildschirme",
            },
            subtitle: {
              en: "Specify whether there is only one display or two displays on the floor stand",
              de: "Geben Sie an, ob sich auf dem Bodenständer nur ein Display oder zwei Displays befinden",
            },
          },
          items: {
            one: {
              label: {
                en: "Front only display",
                de: "Nur Frontdisplay",
              },
            },
            two: {
              label: {
                en: "Front and back display",
                de: "Display vorne und hinten",
              },
            },
          },
          validationMsg: {
            required: {
              en: "Number of screens field is required",
              de: "Feld für die Anzahl der Bildschirme ist erforderlich",
            },
            invalid: {
              en: "Number of screens field is invalid",
              de: "Feld für die Anzahl der Bildschirme ist ungültig",
            },
          },
        },
        displayDisplaySizeTypeA: {
          header: {
            title: {
              en: "Display size",
              de: "Bildschirmgröße",
            },
            subtitle: {
              en: "What size is your display?",
              de: "Wie groß ist Ihr Display?",
            },
          },
          items: {
            displayDisplaySize: {
              suffix: {
                inches: { en: "inches", de: "Zoll" },
                centimeter: { en: "cm", de: "cm" },
              },
            },
          },
          validationMsg: {
            required: {
              en: "Display size field is required",
              de: "Feld für die Bildschirmgröße ist erforderlich",
            },
            invalid: {
              en: "Display size field is invalid",
              de: "Feld für die Bildschirmgröße ist ungültig",
            },
          },
        },
        displayDisplaySizeTypeB: {
          header: {
            title: {
              en: "Display size",
              de: "Bildschirmgröße",
            },
            subtitle: {
              en: "What is your custom screen size?",
              de: "Geben Sie hier Ihre benutzerdefinierte Bildschirmgröße ein",
            },
          },
          items: {
            displayDisplaySize: {
              width: {
                label: { en: "width", de: "Breite" },
                suffix: { en: "cm", de: "cm" },
              },
              height: {
                label: { en: "height", de: "Höhe" },
                suffix: { en: "cm", de: "cm" },
              },
            },
          },
          validationMsg: {
            required: {
              en: "Display size field is required",
              de: "Feld für die Bildschirmgröße ist erforderlich",
            },
            invalid: {
              en: "Display size field is invalid",
              de: "Feld für die Bildschirmgröße ist ungültig",
            },
          },
        },
        displayResolutionTypeA: {
          header: {
            title: {
              en: "Resolution",
              de: "Auflösung",
            },
            subtitle: {
              en: "What resolution is your display?",
              de: "Welche Auflösung hat Ihr Display?",
            },
          },
          items: {
            resolution: {
              label: {
                en: "Resolution",
                de: "Auflösung",
              },
              placeHolder: {
                en: "Select Resolution",
                de: "Auflösung auswählen",
              },
            },
          },
          validationMsg: {
            required: {
              en: "Resolution field is required",
              de: "Feld für die Auflösung ist erforderlich",
            },
            invalid: {
              en: "Resolution field is invalid",
              de: "Feld für die Auflösung ist ungültig",
            },
          },
        },
        displayResolutionTypeB: {
          header: {
            title: {
              en: "Resolution",
              de: "Auflösung",
            },
            subtitle: {
              en: "What resolution is your display?",
              de: "Welche Auflösung hat Ihr Display?",
            },
          },
          items: {
            resolution: {
              label: {
                en: "Resolution",
                de: "Auflösung",
              },
              placeHolder: {
                en: "Select Resolution",
                de: "Auflösung auswählen",
              },
              items: {
                low: {
                  label: {
                    en: "Low (HD)",
                    de: "Niedrig (HD)",
                  },
                },
                medium: {
                  label: {
                    en: "Medium (Full HD)",
                    de: "Mittel (Full HD)",
                  },
                },
                high: {
                  label: {
                    en: "High (> Full HD)",
                    de: "Hoch (> Full HD)",
                  },
                },
              },
            },
          },
          validationMsg: {
            required: {
              en: "Resolution field is required",
              de: "Feld für die Auflösung ist erforderlich",
            },
            invalid: {
              en: "Resolution field is invalid",
              de: "Feld für die Auflösung ist ungültig",
            },
          },
        },
        displayResolutionTypeC: {
          header: {
            title: {
              en: "Resolution",
              de: "Auflösung",
            },
            subtitle: {
              en: "What size is your custom screen resolution?",
              de: "Welche benutzerdefinierte Bildschirmauflösung hat Ihr Display?",
            },
          },
          items: {
            resolution: {
              label: {
                en: "Resolution",
                de: "Auflösung",
              },
              placeHolder: {
                width: {
                  label: {
                    en: "width",
                    de: "Breite",
                  },
                  suffix: {
                    en: "pixels",
                    de: "Pixel",
                  },
                },
                height: {
                  label: {
                    en: "height",
                    de: "Höhe",
                  },
                  suffix: {
                    en: "pixels",
                    de: "Pixel",
                  },
                },
              },
            },
          },
          validationMsg: {
            required: {
              en: "Resolution field is required",
              de: "Feld für die Auflösung ist erforderlich",
            },
            invalid: {
              en: "Resolution field is invalid",
              de: "Feld für die Auflösung ist ungültig",
            },
          },
        },
        availability: {
          header: {
            title: {
              en: "Availability of this digital signage device",
              de: "Verfügbarkeit dieses Digital Signage Gerätes",
            },
            subtitle: {
              en: "Here you can select the days and times when your digital signage device is available. Hold down the left mouse button to select multiple fields.",
              de: "Hier können Sie die Tage und Zeiten auswählen, zu denen Ihr Digital Signage Gerät verfügbar ist. Halten Sie die linke Maustaste gedrückt, um mehrere Felder auszuwählen.",
            },
          },
          validationMsg: {
            required: {
              en: "Availability field is required",
              de: "Feld für die Verfügbarkeit ist erforderlich",
            },
            invalid: {
              en: "Availability field is invalid",
              de: "Feld für die Verfügbarkeit ist ungültig",
            },
          },
        },
        service: {
          serverError: {
            en: "There was an error contacting the server.",
            de: "Es gab einen Fehler bei der Kontaktaufnahme mit dem Server.",
          },
          serverSuccess: {
            en: "Specifications Submitted",
            de: "Spezifikationen übermittelt",
          },
          invalid: {
            en: "Specifications is Invalid",
            de: "Spezifikationen sind ungültig",
          },
          unauthorized: {
            en: "Unauthorized",
            de: "Nicht autorisiert",
          },
        },
      },
      location: {
        position: {
          header: {
            title: {
              en: "Position",
              de: "Position",
            },
            subtitle: {
              en: "Enter all information about the position of the display here",
              de: "Geben Sie hier alle Informationen zur Position des Displays ein",
            },
          },
          items: {
            street: {
              label: {
                en: "Street",
                de: "Straße",
              },
              placeHolder: {
                en: "Enter the street where the display is located",
                de: "Geben Sie die Straße ein, in der sich das Display befindet",
              },
              validationMsg: {
                required: {
                  en: "Street field is required",
                  de: "Feld für Straße ist erforderlich",
                },
                invalid: {
                  en: "Street field is invalid",
                  de: "Feld für Straße ist ungültig",
                },
              },
            },
            number: {
              label: {
                en: "Number",
                de: "Hausnummer",
              },
              placeHolder: {
                en: "Street number",
                de: "Hausnummer",
              },
              validationMsg: {
                required: {
                  en: "Number field is required",
                  de: "Hausnummer-Feld ist erforderlich.",
                },
                invalid: {
                  en: "Number field is invalid",
                  de: "Feld für Hausnummer ist ungültig",
                },
              },
            },
            Zip: {
              label: {
                en: "Postcode",
                de: "PLZ",
              },
              placeHolder: {
                en: "Postcode",
                de: "PLZ",
              },
              validationMsg: {
                required: {
                  en: "Postcode field is required",
                  de: "PLZ-Feld ist erforderlich.",
                },
                invalid: {
                  en: "Postcode field is invalid",
                  de: "PLZ-Feld ist ungültig.",
                },
              },
            },
            city: {
              label: {
                en: "Town",
                de: "Ort",
              },
              placeHolder: {
                en: "Location",
                de: "Ort",
              },
              validationMsg: {
                required: {
                  en: "Town field is required",
                  de: "Ort-Feld ist erforderlich.",
                },
                invalid: {
                  en: "Town field is invalid",
                  de: "Ort-Feld ist ungültig.",
                },
              },
            },
            addressSupplement: {
              label: {
                en: "District",
                de: "Stadtbezirk",
              },
              placeHolder: {
                en: " Enter the district (if available)",
                de: "Geben Sie den Stadtbezirk (falls vorhanden) ein",
              },
              validationMsg: {
                required: {
                  en: "District field is required",
                  de: "Feld für Stadtbezirk ist erforderlich",
                },
                invalid: {
                  en: "District field is invalid",
                  de: "Feld für Stadtbezirk ist ungültig",
                },
              },
            },
            federalState: {
              label: {
                en: "Federal State",
                de: "Bundesland",
              },
              placeHolder: {
                en: "select Federal State",
                de: "Bundesland auswählen",
              },
              validationMsg: {
                required: {
                  en: "Federal State field is required",
                  de: "Feld für Bundesland ist erforderlich",
                },
                invalid: {
                  en: "Federal State field is invalid",
                  de: "Feld für Bundesland ist ungültig",
                },
              },
            },
            country: {
              label: {
                en: "Country",
                de: "Land",
              },
              placeHolder: {
                en: "select Country",
                de: "Land auswählen",
              },
              validationMsg: {
                required: {
                  en: "Country field is required",
                  de: "Feld für Land ist erforderlich",
                },
                invalid: {
                  en: "Country field is invalid",
                  de: "Feld für Land ist ungültig",
                },
              },
            },
          },
        },
        placement: {
          header: {
            title: {
              en: "Placement",
              de: "Platzierung",
            },
            subtitle: {
              en: "Where is your display placed?",
              de: "Wo ist Ihr Display platziert?",
            },
          },
          items: {
            placement: {
              label: {
                en: "Where is your display?",
                de: "Wo ist Ihr Display?",
              },
              placeHolder: {
                en: "In the shop window",
                de: "Im Schaufenster",
              },
              validationMsg: {
                required: {
                  en: "Placement field is required",
                  de: "Feld für Platzierung ist erforderlich",
                },
                invalid: {
                  en: "Placement field is invalid",
                  de: "Feld für Platzierung ist ungültig",
                },
              },
            },
            description: {
              label: {
                en: "Description of the location",
                de: "Standortbeschreibung",
              },
              placeHolder: {
                en: "Enter more information about your location (up to 256 characters)",
                de: "Geben Sie weitere Informationen zu Ihrem Standort ein (bis zu 256 Zeichen)",
              },
              validationMsg: {
                required: {
                  en: "Description of the location field is required",
                  de: "Feld für Standortbeschreibung ist erforderlich",
                },
                invalid: {
                  en: "Description of the location field is invalid",
                  de: "Feld für Standortbeschreibung ist ungültig",
                },
              },
            },
          },
        },
        mediasOfADisplay: {
          header: {
            title: {
              en: "Upload picture(s) / video of the location",
              de: "Bilder/Video des Standorts hochladen",
            },
            subtitle: {
              en: "You can upload 5 pictures or 4 pictures and a video (max. 10 sec.).",
              de: "Sie können 5 Bilder oder 4 Bilder und ein Video (max. 10 Sek.) hochladen.",
            },
          },
          items: {
            mediasOfADisplay: {
              actions: {
                uploadButton: {
                  label: {
                    en: "Upload Video/Image",
                    de: "Video/Bild hochladen",
                  },
                },
                uploadingButton: {
                  label: { en: "Uploading...", de: "Wird hochgeladen..." },
                },
                cancel: {
                  label: { en: "Cancel", de: "Abbrechen" },
                },
              },
              placeholder: {
                en: "Upload video/image",
                de: "Video/Bild hochladen",
              },
              validationMsg: {
                required: {
                  en: "Medias of a display field is required",
                  de: "Feld für Medien des Displays ist erforderlich",
                  invalid: {
                    en: "Medias of a display field is invalid",
                    de: "Feld für Medien des Displays ist ungültig",
                  },
                },
              },
            },
          },
        },
        onMapLocation: {
          header: {
            title: {
              en: "Location",
              de: "Standort",
            },
            subtitle: {
              en: "Select display Location on map",
              de: "Wählen Sie den anzuzeigenden Standort auf der Karte aus",
            },
          },
          items: {
            location: {
              label: {
                en: "Select location",
                de: "Standort auswählen",
              },
              validationMsg: {
                required: {
                  en: "Location On Map field is required",
                  de: "Standort auf Karte erforderlich",
                },
                invalid: {
                  en: "Location On Map field is invalid",
                  de: "Standort auf Karte ungültig",
                },
              },
            },
          },
        },
        service: {
          serverError: {
            en: "There was an error contacting the server.",
            de: "Es gab einen Fehler bei der Kontaktaufnahme mit dem Server.",
          },
          serverSuccess: {
            en: "Location Submited ",
            de: "Standort erfolgreich übermittelt.",
          },
          invalid: {
            en: "Location is Invalid",
            de: "Standort ist ungültig.",
          },
          unauthorized: {
            en: "Unauthorized",
            de: "Nicht autorisiert.",
          },
        },
      },
      valuation: {
        note: {
          title: {
            en: "Please rate your display as accurately as possible. This helps you and, if shared, also other KiData users to correctly assess the performance of this display. Your details are purely informative and have no other function.",
            de: "Bitte bewerten Sie Ihre Anzeige so genau wie möglich. Dies hilft Ihnen und, falls geteilt, auch anderen KiData-Benutzern, die Leistung dieser Anzeige korrekt zu beurteilen. Ihre Angaben dienen ausschließlich der Information und haben keine weitere Funktion.",
          },
        },
        visibilityRate: {
          header: {
            title: {
              en: "Visibility",
              de: "Sichtbarkeit",
            },
            subtitle: {
              en: "Depending on the placement of the display, the content is barely visible to very well",
              de: "Je nach Platzierung des Displays ist der Inhalt kaum bis sehr gut sichtbar",
            },
          },
          items: {
            1: {
              label: {
                en: "Barely",
                de: "Kaum",
              },
            },
            2: {
              label: {
                en: "Little",
                de: "Wenig",
              },
            },
            3: {
              label: {
                en: "Mediocre",
                de: "Mittelmäßig",
              },
            },
            4: {
              label: {
                en: "Good",
                de: "Gut",
              },
            },
            5: {
              label: {
                en: "Very good",
                de: "Sehr gut",
              },
            },
          },
          validationMsg: {
            required: {
              en: "Visibility field is required",
              de: "Sichtbarkeitsfeld erforderlich",
            },
            invalid: {
              en: "spacify peak rate for all hours",
              de: "Spitzenpreis für alle Stunden verteilen",
            },
          },
        },
        visitorCount: {
          header: {
            title: {
              en: "Visitor Count",
              de: "Besucherzahl",
            },
            subtitle: {
              en: "How many people view the content on this display each day?",
              de: "Wie viele Personen sehen sich die Inhalte auf diesem Display täglich an?",
            },
          },
          items: {
            1: {
              label: {
                en: "1-99",
                de: "1-99",
              },
            },
            2: {
              label: {
                en: "100-499",
                de: "100-499",
              },
            },
            3: {
              label: {
                en: "500-1000",
                de: "500-1000",
              },
            },
            4: {
              label: {
                en: "1000-2000",
                de: "1000-2000",
              },
            },
            5: {
              label: {
                en: "> 2000",
                de: "> 2000",
              },
            },
          },
          validationMsg: {
            required: {
              en: "Visitor Count field is required",
              de: "Besucherzahl erforderlich",
            },
            invalid: {
              en: "Visitor Count field is invalid",
              de: "Besucherzahl ungültig",
            },
          },
        },
        priceCredits: {
          header: {
            title: {
              en: "Price category",
              de: "Preiskategorie",
            },
            subtitle: {
              en: "Choose how many credits you charge when advertising is booked on your display",
              de: "Wählen Sie, wie viele Credits Sie berechnen, wenn Werbung auf Ihrem Display gebucht wird",
            },
          },
          items: {
            1: {
              label: {
                en: "1 credit",
                de: "1 Guthaben",
              },
            },
            2: {
              label: {
                en: "2 credits",
                de: "2 Guthaben",
              },
            },
            3: {
              label: {
                en: "3 credits",
                de: "3 Guthaben",
              },
            },
            4: {
              label: {
                en: "4 credits",
                de: "4 Guthaben",
              },
            },
            5: {
              label: {
                en: "5 credits",
                de: "5 Guthaben",
              },
            },
          },
          validationMsg: {
            required: {
              en: "Price category field is required",
              de: "Preiskategorie erforderlich",
            },
            invalid: {
              en: "Price category field is invalid",
              de: "Preiskategorie ungültig",
            },
          },
        },
        peak: {
          header: {
            title: {
              en: "What times do most people pass by this display?",
              de: "Wann gehen die meisten Menschen an diesem Display vorbei?",
            },
            subtitle: {
              en: "Here you can select the days and times when your digital signage device is available. Hold down the left mouse button to select multiple fields.",
              de: "Hier können Sie die Tage und Uhrzeiten auswählen, zu denen Ihr Digital Signage-Gerät verfügbar ist. Halten Sie die linke Maustaste gedrückt, um mehrere Felder auszuwählen.",
            },
          },
          items: {
            1: {
              label: {
                en: "> 10",
                de: "> 10",
              },
            },
            2: {
              label: {
                en: "10-50",
                de: "10-50",
              },
            },
            3: {
              label: {
                en: "50-200",
                de: "50-200",
              },
            },
            4: {
              label: {
                en: "< 200",
                de: "< 200",
              },
            },
          },
          validationMsg: {
            required: {
              en: "Peak field is required",
              de: "Hochzeit erforderlich",
            },
            invalid: {
              en: "Peak field is invalid",
              de: "Hochzeit ungültig",
            },
          },
        },
        service: {
          serverError: {
            en: "There was an error contacting the server.",
            de: "Es gab einen Fehler bei der Kontaktaufnahme mit dem Server.",
          },
          serverSuccess: {
            en: "Valuation Submitted",
            de: "Bewertung erfolgreich übermittelt",
          },
          invalid: {
            en: "Valuation is Invalid",
            de: "Bewertung ungültig",
          },
          unauthorized: {
            en: "Unauthorized",
            de: "Nicht autorisiert.",
          },
        },
      },
      playerToken: {
        placeholderImages: {
          header: {
            title: {
              en: "Upload placeholder images (max. 5)",
              de: "Platzhalterbilder hochladen (max. 5)",
            },
            subtitle: {
              en: "Upload 1 to 5 images that will be displayed by KiData on when there are no ads or other content.",
              de: "Laden Sie 1 bis 5 Bilder hoch, die von KiData angezeigt werden, wenn keine Werbung oder andere Inhalte vorhanden sind.",
            },
          },
          items: {
            placeholderImages: {
              actions: {
                uploadButton: {
                  label: {
                    en: "Upload Image",
                    de: "Bild hochladen",
                  },
                },
                uploadingButton: {
                  label: { en: "Uploading...", de: "Wird hochgeladen..." },
                },
                cancel: {
                  label: { en: "Cancel", de: "Abbrechen" },
                },
              },
              label: {
                en: "Upload image",
                de: "Bild hochladen",
              },
              validationMsg: {
                required: {
                  en: "Placeholder images field is required",
                  de: "Platzhalterbilder erforderlich",
                },
                invalid: {
                  en: "Placeholder images field is invalid",
                  de: "Platzhalterbilder ungültig",
                },
              },
            },
          },
        },
        isActive: {
          header: {
            title: {
              en: "Activate display",
              de: "Display aktivieren",
            },
            subtitle: {
              en: "You can also activate this display later! As long as this display is not activated, you cannot work with it!",
              de: "Sie können dieses Display auch später aktivieren! Solange dieses Display nicht aktiviert ist, können Sie nicht damit arbeiten!",
            },
          },
          items: {
            active: {
              en: "Display activated",
              de: "Anzeige aktiviert",
            },
            deactivate: {
              en: "Display deactivated",
              de: "Anzeige deaktiviert",
            },
            validationMsg: {
              required: {
                en: "Activation field is required",
                de: "Aktivierung erforderlich",
              },
              invalid: {
                en: "Activation field is invalid",
                de: "Aktivierung ungültig",
              },
            },
          },
        },
        tokenEmail: {
          header: {
            title: {
              en: "Send player / token",
              de: "Player / Token senden",
            },
            subtitle: {
              en: "Here you can have the player (for Windows computers) or the token (for tablet / smartphone) for this display sent to you. The player or token automatically connects to KiData over the internet and then displays the content",
              de: "Hier können Sie den Player (für Windows-Computer) oder den Token (für Tablet / Smartphone) für dieses Display anfordern. Der Player oder Token verbindet sich automatisch über das Internet mit KiData und zeigt dann die Inhalte an",
            },
            hoverMessage: {
              en: "to get a token you need to activate the display!",
              de: "Um einen Token zu erhalten, müssen Sie das Display aktivieren!",
            },
          },
          items: {
            email: {
              label: {
                en: "E-mail address",
                de: "E-Mail-Adresse",
              },
              placeHolder: {
                en: "Enter Email address",
                de: "E-Mail-Adresse eingeben",
              },
              validationMsg: {
                required: {
                  en: "E-mail address Field Is Required",
                  de: "Das Feld E-Mail-Adresse ist erforderlich",
                },
                invalid: {
                  en: "E-mail address Field Is Invalid",
                  de: "Das Feld E-Mail-Adresse ist ungültig",
                },
              },
            },
            confirmEmail: {
              label: {
                en: "Repeat email address",
                de: "E-Mail-Adresse wiederholen",
              },
              placeHolder: {
                en: "Confirm Email address",
                de: "E-Mail-Adresse bestätigen",
              },
              validationMsg: {
                required: {
                  en: "E-mail address Field Is Required",
                  de: "Das Feld E-Mail-Adresse ist erforderlich",
                },
                invalid: {
                  en: "Email addresses aren't the same",
                  de: "E-Mail-Adressen stimmen nicht überein",
                },
              },
            },
          },
          popupMessage: {
            title: { en: "Token will be sent", de: "Token wird gesendet" },
            subTitle: {
              en: "The token will be sent, if you save the display.",
              de: "Der Token wird gesendet, wenn Sie das Display speichern.",
            },
            actions: {
              ok: { label: { en: "ok", de: "ok" } },
            },
          },
          actions: {
            sendToken: {
              label: { en: "Send player / token", de: "Player / Token senden" },
            },
          },
        },
        service: {
          serverSuccess: {
            en: "Player / Token Submitted",
            de: "Player/Token übermittelt.",
          },
        },
      },
      finish: {
        header: {
          title: {
            en: "Your display was added under the ID: ",
            de: "Ihr Display wurde unter der ID hinzugefügt: ",
          },
          activeSubTitle: {
            en: "The display is activated and you can work with it.",
            de: "Das Display ist aktiviert und Sie können damit arbeiten.",
          },
          inactiveSubTitle: {
            en: "Your display is not activated. Please activate your display if you want to work with it.",
            de: "Ihr Display ist nicht aktiviert. Bitte aktivieren Sie Ihr Display, wenn Sie damit arbeiten möchten.",
          },
          inactiveDescription: {
            en: "You can activate the displays in Edit display",
            de: "Sie können die Displays im Bereich Display bearbeiten aktivieren",
          },
        },
        actions: {
          exit: { en: "Exit", de: "Beenden" },
          duplicate: { en: "Duplicate Display", de: "Display duplizieren" },
          createNewDisplay: {
            en: "Create New Display",
            de: "Neues Display erstellen",
          },
        },
      },
    },
    service: {
      serverError: {
        en: "There was an error contacting the server.",
        de: "Es gab einen Fehler bei der Kontaktaufnahme mit dem Server.",
      },
      serverSuccess: {
        en: "Create display successfully",
        de: "Display erfolgreich erstellt.",
      },
      invalid: {
        en: "There was an error in Create display ",
        de: "Fehler beim Erstellen des Displays.",
      },
      unauthorized: {
        en: "Unauthorized",
        de: "Nicht autorisiert.",
      },
    },
  },
};
