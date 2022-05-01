import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["header", "editHeaderBox", "subheader", "editSubheaderBox", "title", "editTitleBox"]

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
    }
  }
}