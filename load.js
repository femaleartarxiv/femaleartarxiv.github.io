const table = document.querySelector('.artistTable');
const url = 'data.json';
window.addEventListener('DOMContentLoaded',()=>{
   loadData();
})
 
function loadData(){
   fetch(url).then(rep=>rep.json())
   .then((data)=>{
       //console.log(data);
       addtoPage(data);
   })
}
 
function addtoPage(arr){
   arr.forEach((el)=>{
       console.log(el);
       const tr = document.createElement('tr')
       table.append(tr);
       const td1 = document.createElement('td');
       td1.textContent = el.name1;
       tr.append(td1);
       const td2 = document.createElement('td');
       td2.textContent = el.name2;
       tr.append(td2);
       const tdImg = document.createElement('td');
       const img = document.createElement('img');
       img.src = el.img
       tdImg.append(img)

        tr.append(tdImg)
   });
}




