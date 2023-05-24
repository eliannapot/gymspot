container=document.createElement('div')
container.className = 'container p-4'
    row1=document.createElement('div')
    row1.className = 'row mt-4'
container.appendChild(row1)
        col1=document.createElement('div')
        col1.className = 'col-lg-4 col-md-12 mb-4 mb-md-0'
    row1.appendChild(col1)
            title1=document.createElement('h5')
            title1.className = 'text-uppercase mb-4'
            title1.textContent='Gymspot'
        col1.appendChild(title1)
        col2=document.createElement('div')
        col2.className = 'col-lg-4 col-md-6 mb-4 mb-md-0'
    row1.appendChild(col2)
            title2=document.createElement('h5')
            title2.className = 'text-uppercase mb-4 pd-1'
            title2.textContent='FIND US'
        col2.appendChild(title2)
            list1=document.createElement('ul')
            list1.className = 'fa-ul'
                li1=document.createElement('li')
                li1.className = 'mb-3'
                    span1=document.createElement('span')
                    span1.className = 'ms-2'
                    span1.textContent="You Can't"
                li1.appendChild(span1)
            list1.appendChild(li1)
                li2=document.createElement('li')
                li2.className = 'mb-3'
                    span2=document.createElement('span')
                    span2.className = 'ms-2'
                    span2.textContent="info@Gymspot.com"
                li2.appendChild(span2)
            list1.appendChild(li2)
                li3=document.createElement('li')
                li3.className = 'mb-3'
                    span3=document.createElement('span')
                    span3.className = 'ms-2'
                    span3.textContent="+30 26109942275"
                li3.appendChild(span3)
            list1.appendChild(li3)
        col2.appendChild(list1)
        col3=document.createElement('div')
        col3.className = 'col-lg-4 col-md-6 mb-4 mb-md-0'
    row1.appendChild(col3)
            title3=document.createElement('h5')
            title3.className = 'text-uppercase mb-4'
            title3.textContent='Opening Hours'
        col3.appendChild(title3)
            p1=document.createElement('p')
            p1.textContent="Weekdays: I don't know man I am stressed"
        col3.appendChild(p1)
            p2=document.createElement('p')
            p2.textContent="Weekends: 22:00-6:00 after a bottle of wine or two"
        col3.appendChild(p2)
    copyright=document.createElement('div')
    copyright.className = 'text-center p-3 copyright-class'
container.appendChild(copyright)
        p3=document.createElement('p')
        p3.textContent='© 2023 Gymspot. All rights reserved.'
    copyright.appendChild(p3)





footer=document.querySelector('footer')
footer.appendChild(container)