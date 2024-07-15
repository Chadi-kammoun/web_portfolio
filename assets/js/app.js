const gallery = document.getElementById('dgallery');
const popup = document.getElementById('popup');
const selectedimage = document.getElementById('selectedimage');
const imageIndexes=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
const selectedindex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `https://ik.imagekit.io/o3k0d5prcw/tr:w-600/${i}.jpg`;
    image.alt = ' why is this not working';
    image.classList.add('galleryimg');
    image.addEventListener('click',() => {
        popup.style.transform = `translateY(0)`;
        selectedimage.src = `https://ik.imagekit.io/o3k0d5prcw/${i}.jpg`;
    })
    gallery.appendChild(image);


});

popup.addEventListener('click',()=>{
    popup.style.transform = `translateY(-100%)`;
    popup.src='';
    popup.alt='';
});