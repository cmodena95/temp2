import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["header", "editHeaderBox", "subheader", "editSubheaderBox", "title", "editTitleBox", "description", "editDescriptionBox", "phone", "editPhoneBox", "email", "editEmailBox", "location", "editLocationBox", "editButton"]

  edit(event) {
    event.currentTarget.classList.add("d-none")
    if (event.currentTarget.id == "header") {
      this.editHeaderBoxTarget.classList.remove("d-none")
      this.headerTarget.classList.add("d-none")
    } else if (event.currentTarget.id == "subheader") {
      this.editSubheaderBoxTarget.classList.remove("d-none")
      this.subheaderTarget.classList.add("d-none")
    } else if (event.currentTarget.id == "title") {
      this.editTitleBoxTarget.classList.remove("d-none")
      this.titleTarget.classList.add("d-none")
    } else if (event.currentTarget.id == "description-text") {
      this.editDescriptionBoxTarget.classList.remove("d-none")
      this.descriptionTarget.classList.add("d-none")
    } else if (event.currentTarget.id == "phone") {
      this.editPhoneBoxTarget.classList.remove("d-none")
      this.phoneTarget.classList.add("d-none")
    } else if (event.currentTarget.id == "email") {
      this.editEmailBoxTarget.classList.remove("d-none")
      this.emailTarget.classList.add("d-none")
    } else if (event.currentTarget.id == "location") {
      this.editLocationBoxTarget.classList.remove("d-none")
      this.locationTarget.classList.add("d-none")
    }
  }

  close(event) {
    if (event.currentTarget.id == "close-header") {
      this.editHeaderBoxTarget.classList.add("d-none")
      this.headerTarget.classList.remove("d-none")
    } else if (event.currentTarget.id == "close-subheader") {
      this.editSubheaderBoxTarget.classList.add("d-none")
      this.subheaderTarget.classList.remove("d-none")
    } else if (event.currentTarget.id == "close-title") {
      this.editTitleBoxTarget.classList.add("d-none")
      this.titleTarget.classList.remove("d-none")
    } else if (event.currentTarget.id == "close-description") {
      this.editDescriptionBoxTarget.classList.add("d-none")
      this.descriptionTarget.classList.remove("d-none")
    } else if (event.currentTarget.id == "close-phone") {
      this.editPhoneBoxTarget.classList.add("d-none")
      this.phoneTarget.classList.remove("d-none")
    } else if (event.currentTarget.id == "close-email") {
      this.editEmailBoxTarget.classList.add("d-none")
      this.emailTarget.classList.remove("d-none")
    } else if (event.currentTarget.id == "close-location") {
      this.editLocationBoxTarget.classList.add("d-none")
      this.locationTarget.classList.remove("d-none")
    }

    this.editButtonTargets.forEach((button) => {
      if (event.currentTarget.id == "close-header" && button.id == "header") {
        button.classList.remove("d-none")
      } else if (event.currentTarget.id == "close-subheader" && button.id == "subheader") {
        button.classList.remove("d-none")
      } else if (event.currentTarget.id == "close-title" && button.id == "title") {
        button.classList.remove("d-none")
      } else if (event.currentTarget.id == "close-description" && button.id == "description-text") {
        button.classList.remove("d-none")
      } else if (event.currentTarget.id == "close-phone" && button.id == "phone") {
        button.classList.remove("d-none")
      } else if (event.currentTarget.id == "close-email" && button.id == "email") {
        button.classList.remove("d-none")
      } else if (event.currentTarget.id == "close-location" && button.id == "location") {
        button.classList.remove("d-none")
      }
    })
  }
}