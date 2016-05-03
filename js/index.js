window.onload=function(){
	var oExp=document.getElementById('exp');
	var oBox=oExp.getElementsByTagName('div')[1];
		
	for(var i=0;i<Json.project.length;i++){
		var item=document.createElement('div');
		item.className='item';
		item.innerHTML='<div class="img"><div class="circle"></div><div class="photo"><img src='+Json.project[i].image[0]+'><div class="shadow"></div></div></div><div class="text"><h4>'+Json.project[i].name+'</h4><p>'+Json.project[i].date+'</p></div>'
		oBox.appendChild(item);	
	}

	var aItem=oBox.children;
	var backBg=document.getElementById('backBg');
	var photos=backBg.getElementsByClassName('photos')[0];
	var aLi2=backBg.getElementsByTagName('li');
	var oClose=backBg.getElementsByClassName('close')[0];

	for(var i=0;i<aItem.length;i++){
		aItem[i].index=i;
		aItem[i].onclick=function(){
			photos.innerHTML='';
			for(var i=1;i<Json.project[this.index].image.length;i++){
				var img=document.createElement('img');
				img.src=Json.project[this.index].image[i];
				photos.appendChild(img);
			}
			aLi2[0].getElementsByTagName('span')[0].innerHTML = Json.project[this.index].name;
            aLi2[1].getElementsByTagName('span')[0].innerHTML = Json.project[this.index].date;
            aLi2[2].getElementsByTagName('a')[0].innerHTML = Json.project[this.index].link;
            aLi2[2].getElementsByTagName('a')[0].href = 'http://' + Json.project[this.index].link;
            aLi2[3].getElementsByTagName('p')[0].innerHTML = Json.project[this.index].detail;
            backBg.style.display = 'block';
		}
	}
	oClose.onclick=function(){
		backBg.style.display='none';
	}
}