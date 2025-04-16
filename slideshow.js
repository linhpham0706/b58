const images = [
   
    "https://img6.thuthuatphanmem.vn/uploads/2022/04/16/anh-rose-blackpink-dep-nhat_042755838.png",
    "https://kpopping.com/documents/58/1/1500/221015-BLACKPINK-Rose-BORN-PINK-In-Seoul-documents-8(4).jpeg?v=14997",
   
  ];
  
  let currentIndex = 0;
  
  function updateImage() {
    document.getElementById("slide").src = images[currentIndex];
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }
  
  // Hiển thị ảnh đầu tiên khi trang load
  window.onload = updateImage;
  