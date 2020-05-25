class Popup {

    constructor(header, text){
        this.header = header
        this.text = text
    }

    create(){
        const root= document.querySelector('.root')

        const mainDiv = document.createElement('div')
        mainDiv.classList.add('modal', "fade")
        mainDiv.setAttribute("id", "myModal");
        root.appendChild(mainDiv)

        const contentDiv = document.createElement('div')
        contentDiv.classList.add('modal-dialog', "modal-content")
        mainDiv.appendChild(contentDiv)

        const modalHeader = document.createElement('div')
        modalHeader.classList.add("modal-header")
        contentDiv.appendChild(modalHeader)

        const buttonClose = document.createElement('button')
        buttonClose.setAttribute("type", "button");
        buttonClose.setAttribute("data-dismiss", "modal");
        buttonClose.innerHTML="&times;"
        buttonClose.classList.add('close')
        modalHeader.appendChild(buttonClose)

        const modalTitle = document.createElement('h4')
        modalTitle.classList.add("modal-title")
        modalTitle.innerText= this.header
        modalHeader.appendChild(modalTitle)

        const modalBody = document.createElement("div")
        modalBody.classList.add("modal-body")
        contentDiv.appendChild(modalBody)

        const modalBodyText = document.createElement('p')
        modalBodyText.innerText = this.text
        modalBody.appendChild(modalBodyText)


    }



    run(){
        $("#myModal").modal('show');
    }
}








// let popup = new Popup(); 
// popup.run()