/** Variables **/
let citationsArray = ['-- Never hold yourself back --', '-- Imagination is more important than the acknowledges --', '-- More debug less bugs --']
let citationIndicatorItems = document.querySelectorAll('#citation_text li')
let citationText = document.querySelector('#citation_text p')
let currentCitationIndicatorItem = citationIndicatorItems[0]

/** Default state **/
citationIndicatorItems.forEach(item => {
    item.classList.add('citation_indicator_item_not')
})

citationText.textContent = citationsArray[0]
currentCitationIndicatorItem.classList.add('citation_indicator_item_yes')

/** Event click actions **/
function changeCitation (event, index) {
    citationText.textContent = citationsArray[index]
    currentCitationIndicatorItem.classList.remove('citation_indicator_item_yes')

    citationIndicatorItems[index].classList.add('citation_indicator_item_yes');
    currentCitationIndicatorItem = citationIndicatorItems[index]

}

citationIndicatorItems.forEach((item, index) => {
    item.addEventListener('click', (ev) => {
        changeCitation(ev, index)
    })
})