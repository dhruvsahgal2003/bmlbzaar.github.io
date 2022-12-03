let foodContainer = document.querySelector('.item-container');

const fooditem = item.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
        </div>   
    </div>
</div>`;
    foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e => {
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if (e.target.innerHTML === 'All') {
                box.classList.remove('d-none')
            }
            else if (e.target.innerHTML === 'Breakfast') {
                if (box.classList.contains('Vegetables')) {
                    box.classList.remove('d-none')
                }
            }
            else if (e.target.innerHTML === 'Lunch') {
                if (box.classList.contains('Meat')) {
                    box.classList.remove('d-none')
                }
            }
            else if (e.target.innerHTML === 'Beverages') {
                if (box.classList.contains('Beverages')) {
                    box.classList.remove('d-none')
                }
            }
            else if (e.target.innerHTML === 'Dinner') {
                if (box.classList.contains('Dairy')) {
                    box.classList.remove('d-none')
                }
            }
            else if (e.target.innerHTML === 'Desserts') {
                if (box.classList.contains('Desserts')) {
                    box.classList.remove('d-none')
                }
            }
        })
    })
})

async function homepage() {
    let request = new Request("BuyingPane.json");
    let response = await fetch(request);
    let json_obj = await response.json();
  
    load(json_obj);
  }
  
  
  function load(a) {
      let title=document.createElement('h3')
      title.innerHTML=a['Vegetables']['Orange']['title']
      h2.append(title)
      let para=document.createElement('p')
      para.innerHTML=a['Vegetables']['Cabbage']['desc']
      h3.append(para)    
      let title2=document.createElement('h3')
      
      title2.innerHTML=a['Vegetables']['Onion']['title2']
      
      h4.append(title2)  
  
  
      for(i=0;i<6;i++){
          let img=document.createElement("img")
          let castname=document.createElement("p")
          img.src=a['Vegetables']['Onion']['name'][i]
          castname.innerHTML=a['Vegetables']['Orange']['price'][i]
          h[i].appendChild(img)
          h[i].appendChild(Quantity)
  
      }
  }
   
  homepage();