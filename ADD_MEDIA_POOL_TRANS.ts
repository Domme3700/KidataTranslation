export const AddMediaPoolTrans = {
  progressStep: {
    generalInformation: {
      en: "General Information",
      de: "Allgemeine Informationen",
    },
    UploadFile: {
      en: "Upload files(s)",
      de: "Datei(en) hochladen",
    },
  },
  steps: {
    generalInformation: {
      generalInformation: {
        header: {
          title: {
            en: "Genreal information",
            de: "Allgemeine Informationen",
          },
          subtitle: {
            en: "Here you can give your file (s) a title, description and keywords",
            de: "Hier können Sie Ihrer Datei(en) einen Titel, eine Beschreibung und Schlüsselwörter geben",
          },
        },
        items: {
          title: {
            label: {
              en: "Title",
              de: "Titel",
            },
            placeHolder: {
              en: "Enter a title for your file(s) here",
              de: "Geben Sie einen Titel für Ihre Datei(en) ein",
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
              en: "Enter a description for your file(s) here",
              de: "Geben Sie eine Beschreibung für Ihre Datei(en) ein.",
            },
            validationMsg: {
              required: {
                en: "Description field is required",
                de: "Das Beschreibungsfeld ist erforderlich",
              },
              invalid: {
                en: "Description field is invalid",
                de: "Das Beschreibungsfeld ist ungültig",
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
              de: "Geben Sie hier Ihre Schlüsselwörter ein",
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
      accessibility: {
        header: {
          title: {
            en: "File Access Permissions",
            de: "Datei Zugriffsberechtigungen",
          },
          subtitle: {
            en: "Set who can view this media. Choose 'Private' to restrict access to authorized users only, or 'Public' for unrestricted access.",
            de: "Legen Sie fest, wer diese Medien einsehen kann. Wählen Sie 'Privat', um den Zugriff auf autorisierte Benutzer zu beschränken, oder 'Öffentlich' für uneingeschränkten Zugriff.",
          },
        },
        items: {
          label: {
            en: "Access Level",
            de: "Zugriffsebene",
          },
          placeHolder: {
            en: "Choose Access Level",
            de: "Zugriffsebene wählen",
          },
          options: {
            public: {
              label: {
                en: "Public (Accessible to all company members)",
                de: "Öffentlich (Zugänglich für alle Unternehmensmitglieder)",
              },
            },
            private: {
              label: {
                en: "Private (Restricted to authorized members only)",
                de: "Privat (Nur für autorisierte Mitglieder zugänglich)",
              },
            },
          },
          validationMsg: {
            required: {
              en: "Please select an access level",
              de: "Bitte wählen Sie eine Zugriffsebene",
            },
            invalid: {
              en: "Access field is invalid",
              de: "Das Zugriffs-Feld ist ungültig",
            },
          },
        },
      },
      category: {
        header: {
          title: {
            en: "Choose category",
            de: "Kategorie auswählen",
          },
          subtitle: {
            en: "Here you can assign your file(s) to a category",
            de: "Hier können Sie Ihrer Datei eine Kategorie zuordnen",
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
              de: "Wählen Sie eine Kategorie",
            },
            validationMsg: {
              required: {
                en: "category field is required",
                de: "Das Feld Kategorie ist erforderlich",
              },
              invalid: {
                en: "category field is invalid",
                de: "Das Feld Kategorie ist ungültig",
              },
            },
          },
        },
      },
    },
    uploadFile: {
      main: {
        header: {
          title: {
            en: "Upload files(s)",
            de: "Datei(en) hochladen",
          },
          subtitle: {
            en: "Save all the files you upload here. If you want to save a file as a spot or background, select the respective button beforehand. Files that should be saved as spots are marked green, those that should be saved as backgrounds are marked orange. Uploaded files that should not be saved can be deleted beforehand.",
            de: "Speichern Sie hier alle Dateien, die Sie hochladen. Wenn Sie eine Datei als Spot oder Hintergrund speichern möchten, wählen Sie vorher die entsprechende Schaltfläche aus. Dateien, die als Spots gespeichert werden sollen, sind grün markiert, solche, die als Hintergründe gespeichert werden sollen, sind orange markiert. Hochgeladene Dateien, die nicht gespeichert werden sollen, können vorher gelöscht werden.",
          },
        },
        headerActions: {
          selectAll: { en: "Select all medias", de: "Alle Medien auswählen" },
          deleteSelected: {
            label: {
              en: "Delete Selected Medias",
              de: "Ausgewählte Medien löschen",
            },
            popConfirm: {
              title: { en: "Delete medias", de: "Medien löschen" },
              subtitle: {
                en: "Are you sure you want to delete selected files?",
                de: "Sind Sie sicher, dass Sie die ausgewählten Dateien löschen möchten?",
              },
              actions: {
                delete: {
                  label: { en: "Delete Selected", de: "Ausgewählte löschen" },
                },
                cancel: { label: { en: "Cancel", de: "Abbrechen" } },
              },
            },
          },
        },
        actions: {
          uploadButton: {
            label: { en: "Upload Video/Image", de: "Video/Bild hochladen" },
          },
          uploadingButton: {
            label: { en: "Uploading...", de: "Wird hochgeladen..." },
          },
          cancel: {
            label: { en: "Cancel", de: "Abbrechen" },
          },
        },
        mediaItems: {
          actions: {
            mediaType: {
              general: { label: { en: "General", de: "Allgemein" } },
              commercial: {
                label: { en: "Commercial", de: "Werbung" },
                tooltipMessage: {
                  en: "Only HD, FullHD, 4KUHD, 8KUHD medias can set as commercial!",
                  de: "Nur HD-, FullHD-, 4KUHD-, 8KUHD-Medien können als Werbung festgelegt werden!",
                },
              },
              background: {
                label: { en: "Background", de: "Hintergrund" },
                tooltipResolutionMessage: {
                  en: "Only HD, FullHD, 4KUHD, 8KUHD medias can set as background!",
                  de: "Nur HD-, FullHD-, 4KUHD-, 8KUHD-Medien können als Hintergrund festgelegt werden!",
                },
                tooltipFileTypeMessage: {
                  en: "only images can be set as background!",
                  de: "Nur Bilder können als Hintergrund festgelegt werden!",
                },
              },
            },
            delete: {
              title: { en: "Delete media", de: "Medien löschen" },
              subtitle: {
                en: "Are you sure you want to delete?",
                de: "Sind Sie sicher, dass Sie löschen möchten?",
              },
              actions: {
                delete: { label: { en: "Delete", de: "Löschen" } },
                cancel: { label: { en: "Cancel", de: "Abbrechen" } },
              },
            },
          },
        },
      },
      sideMenu: {
        mediaMetadata: {
          title: { en: "Media Metadata", de: "Mediendaten" },
          items: {
            id: { label: { en: "ID No.", de: "ID-Nr." } },
            uploadedOn: {
              label: { en: "Uploaded on", de: "Hochgeladen am" },
            },
            fileType: { label: { en: "File type", de: "Dateityp" } },
            fileSize: { label: { en: "File size", de: "Dateigröße" } },
            resolution: { label: { en: "Resolution", de: "Auflösung" } },
          },
        },
        editMediaInformation: {
          title: {
            en: "Edit Media Information",
            de: "Medieninformationen bearbeiten",
          },

          form: {
            items: {
              title: {
                label: {
                  en: "Title",
                  de: "Titel",
                },
                placeHolder: {
                  en: "Type a title for your file(s)",
                  de: "Geben Sie einen Titel für Ihre Datei(en) ein",
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
                  en: "Type a description for your file(s)",
                  de: "Geben Sie eine Beschreibung für Ihre Datei(en) ein.",
                },
                validationMsg: {
                  required: {
                    en: "Description field is required",
                    de: "Das Beschreibungsfeld ist erforderlich",
                  },
                  invalid: {
                    en: "Description field is invalid",
                    de: "Das Beschreibungsfeld ist ungültig",
                  },
                },
              },
              keywords: {
                label: {
                  en: "Keywords",
                  de: "Schlüsselwörter",
                },
                placeHolder: {
                  en: "Enter your keywords here, separated by commas (,).",
                  de: "Geben Sie hier Ihre Schlüsselwörter ein, getrennt durch Kommas (,).",
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
              accessibility: {
                label: {
                  en: "Access Level",
                  de: "Zugriffsebene",
                },
                placeHolder: {
                  en: "Choose Access Level",
                  de: "Zugriffsebene wählen",
                },
                options: {
                  public: {
                    label: {
                      en: "Public",
                      de: "Öffentlich",
                    },
                  },
                  private: {
                    label: {
                      en: "Private",
                      de: "Privat",
                    },
                  },
                },
                validationMsg: {
                  required: {
                    en: "Please select an access level",
                    de: "Bitte wählen Sie eine Zugriffsebene",
                  },
                  invalid: {
                    en: "Access field is invalid",
                    de: "Das Zugriffs-Feld ist ungültig",
                  },
                },
              },
              category: {
                label: {
                  en: "Choose category",
                  de: "Kategorie wählen",
                },
                placeHolder: {
                  en: "Choose category",
                  de: "Kategorie wählen",
                },
                validationMsg: {
                  required: {
                    en: "Category field is required",
                    de: "Das Feld Kategorie ist erforderlich",
                  },
                  invalid: {
                    en: "category field is invalid",
                    de: "Das Feld Kategorie ist ungültig",
                  },
                },
              },
              hasSound: {
                label: {
                  en: "Video has Sound",
                  de: "Video hat Ton",
                },
                items: {
                  on: {
                    en: "on",
                    de: "ein",
                  },
                  off: {
                    en: "off",
                    de: "aus",
                  },
                },
                validationMsg: {
                  required: {
                    en: "has Sound field is required",
                    de: "Das Feld 'Ton' ist erforderlich",
                  },
                  invalid: {
                    en: "has Sound field is invalid",
                    de: "Das Feld 'Ton' ist ungültig",
                  },
                },
              },
            },
            action: {
              save: {
                label: {
                  en: "Save",
                  de: "Speichern",
                },
              },
            },
          },
        },
      },
      actions: {
        saveAndFinish: {
          en: "Save all and finish",
          de: "Speichern und beenden",
        },
        cancel: {
          label: {
            en: "Cancel Adding Media",
            de: "Hinzufügen von Medien abbrechen",
          },
          popConfirm: {
            title: {
              en: "Cancel Adding Media",
              de: "Hinzufügen von Medien abbrechen",
            },
            subtitle: {
              en: "All media uploaded in this section will be permanently deleted. Are you sure you want to proceed?",
              de: "Alle in diesem Abschnitt hochgeladenen Medien werden dauerhaft gelöscht. Sind Sie sicher, dass Sie fortfahren möchten?",
            },
            actions: {
              cancelAddMedia: {
                label: {
                  en: "Cancel Adding Media",
                  de: "Hinzufügen von Medien abbrechen",
                },
              },
              cancel: {
                label: {
                  en: "Close",
                  de: "Schließen",
                },
              },
            },
          },
        },
        back: { en: "Back", de: "Zurück" },
        saveSelected: { en: "Save Selected", de: "Ausgewählte speichern" },
      },
      service: {
        uploadMedia: {
          success: {
            en: "File uploaded successfully",
            de: "Datei erfolgreich hochgeladen",
          },
          cancelInfo: {
            en: "Upload canceled",
            de: "Upload abgebrochen",
          },
          cancelMessage: {
            en: "Upload canceled by the user",
            de: "Upload vom Benutzer abgebrochen",
          },
          errorFailedUpload: {
            en: "Failed to upload file. Please try again.",
            de: "Datei-Upload fehlgeschlagen. Bitte versuchen Sie es erneut.",
          },
          errorType: {
            en: "You can only upload JPG/PNG/AVIF images or MP4/AVI videos!",
            de: "Sie können nur JPG/PNG/AVIF-Bilder oder MP4/AVI-Videos hochladen!",
          },
          errorSize: (MAX_FILE_SIZE_MB: number) => {
            return {
              en: `File must be smaller than ${MAX_FILE_SIZE_MB}MB!`,
              de: `Datei muss kleiner als ${MAX_FILE_SIZE_MB}MB sein!`,
            };
          },
        },

        editMetadataMedia: {
          success: {
            en: "File Metadata Edited successfully",
            de: "Datei-Metadaten erfolgreich bearbeitet",
          },
        },
      },
    },
  },
};
