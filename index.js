const updateLSData = ()=>{
  const textAreaData=document.querySelectorAll('.textarea');
  const data=[];
  textAreaData.forEach((element)=>{
    return data.push(element.value);
  });
  localStorage.setItem('data',JSON.stringify(data));

};
const addButton = document.getElementById('add');
const addNewNotes =(text='')=>{
   const notes = document.createElement('div');
   notes.classList.add('notes');
   const htmlData =
   `<div class="operation">
    <button class="edit"><i class="fa fa-edit"></i></button>
    <button class="delete"><i class="fa fa-trash"></i></button>
    </div>
    <div class="main ${text?"":"hidden"}"></div>
    <textarea class="textarea ${text?"hidden":""}"></textarea>`
    notes.insertAdjacentHTML('afterbegin',htmlData);
    //getting refrences to delete and add elements 
    const editbutton=notes.querySelector('.edit');
    const delbutton =notes.querySelector('.delete');
    const maindiv   =notes.querySelector('.main');
    const textarea  =notes.querySelector('.textarea');
    
    delbutton.addEventListener('click',()=>{
        notes.remove();
        updateLSData();
    })
    editbutton.addEventListener('click',()=>{
        maindiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.value=text;
    maindiv.innerHTML=text;

    textarea.addEventListener('change',(event)=>{
        const value=event.target.value;
        maindiv.innerHTML=value;  

        updateLSData();
    })
    document.body.appendChild(notes);
}
const note=JSON.parse(localStorage.getItem('data'));
if(note){note.forEach((el)=>addNewNotes(el))};
addButton.addEventListener('click',() => addNewNotes());